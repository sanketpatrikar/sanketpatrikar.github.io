import { spawnSync } from "node:child_process";
import { readFileSync, rmSync } from "node:fs";
import { performance } from "node:perf_hooks";

const runs = Number(process.argv[2] ?? 5);
if (!Number.isInteger(runs) || runs < 1) throw new Error("runs must be a positive integer");
const command = process.platform === "win32" ? "pnpm.cmd" : "pnpm";
const execute = (args) => {
  const result = spawnSync(command, args, {
    encoding: "utf8",
    shell: process.platform === "win32",
  });
  if (result.error || result.status !== 0) {
    throw result.error ?? new Error(result.stderr || result.stdout);
  }
  return result.stdout.trim();
};
const pnpm = execute(["--version"]);
const expected = JSON.parse(readFileSync("package.json", "utf8")).packageManager.split("@")[1];
if (pnpm !== expected)
  throw new Error(`expected pnpm ${expected}, found ${pnpm}; fix PATH before benchmarking`);
const samples = [];
for (let run = 0; run <= runs; run++) {
  rmSync("dist", { recursive: true, force: true });
  const start = performance.now();
  execute(["build"]);
  const seconds = Number(((performance.now() - start) / 1000).toFixed(3));
  console.log(`${run === 0 ? "warmup" : `run ${run}`}: ${seconds}s`);
  if (run > 0) samples.push(seconds);
}
const sorted = [...samples].sort((a, b) => a - b);
const middle = Math.floor(sorted.length / 2);
const median = sorted.length % 2 ? sorted[middle] : (sorted[middle - 1] + sorted[middle]) / 2;
console.log(JSON.stringify({ node: process.version, pnpm, samples, median }, null, 2));
