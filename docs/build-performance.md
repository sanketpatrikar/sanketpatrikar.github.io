# Build performance

Measured on 2026-09-04 with Node 24.19.0, pnpm 12.3.4, Vite 8.2.1 and Rolldown 1.2.4 on a shared Linux development host.

## Results

| Full production build | Five measured runs (seconds) | Median |
| --- | --- | --- |
| Original build configuration and command | 3.318, 3.015, 2.657, 2.542, 3.134 | 3.015s |
| Optimized configuration and command | 2.231, 2.041, 2.144, 1.700, 2.197 | 2.144s |

The median decreased by 28.9% (0.871s). Both variants used pnpm 12.3.4 and the same installed dependency tree, with unused Nitro and TypeScript preview dependencies removed. Only the Vite configuration and build script changed between variants. Each invocation rebuilt client, server, prerendered pages and RSS. One warmup per variant was excluded (2.954s original, 2.200s optimized); five measured pairs alternated execution order. Dependency and OS caches were warm. No other task-owned benchmarks or checks ran concurrently.

These are local timings, not GitHub Actions timings or clean-machine install benchmarks. The repository currently has no MDX posts. Package-manager installation, dependency resolution and CI setup are excluded from the build comparison. An earlier comparison accidentally triggered pnpm's automatic install while swapping manifests; those measurements were discarded. Earlier pnpm 11 measurements are also excluded.

## Changes

- Enable Rolldown's experimental lazy barrel optimization. Client transforms decrease from 1,897 to 141 modules; server transforms decrease from 121 to 95. Normal named imports and package side-effect declarations are preserved. Recheck this experimental option when upgrading Rolldown.
- Enumerate MDX post routes and retain TanStack's automatic static-route discovery. Disable link crawling, which was requesting the not-yet-generated RSS feed, waiting for a retry, and treating the PDF as a text page. The redundant postbuild PDF copy is removed. New dynamic route families will need explicit prerender paths, just as posts now have.
- Load devtools only for development. Load MDX tooling in production only when MDX exists; always enable it in development so adding the first post works without restarting.
- Load Shiki grammars on demand, preserve the existing theme, and reuse its transformation cache within a production build. Unknown languages fall back to plain text. The cache is not persisted between builds.
- Pin stable pnpm 12.3.4, replacing 12.0.0-rc.7, and regenerate its package-manager lockfile entries.
- Remove unused Nitro and the separate TypeScript native preview package. The existing TypeScript 7 compiler remains. This prunes 20 package entries from the application lockfile (752 to 732), without adding new application packages.
- Use `pnpm/setup@v2` for native pnpm and Node 26 setup in CI. Keep store caching and an explicit frozen install; disable the action's automatic install to avoid running it twice.
- Cache pnpm's separate lockfile verification record on the Ubuntu runner. Cache keys include the lockfile, manifest and pnpm configuration. A new entry per run lets refreshed verification records replace old ones; pnpm still checks record validity and enforces its policies. No install or verification checks are disabled.
- Cancel superseded verification workflows for the same ref. Keep the existing job name and all validation gates.

The initial pnpm 12.3.4 frozen install spent 98 seconds checking 752 entries against registry policies in this environment. A subsequent fully warm no-op frozen install took 28ms. Those runs have different cache conditions and are not a claimed install speedup; they explain why retaining the verification cache can matter. CI cache benefit needs confirmation on GitHub's runners.

## Verification and reproduction

`pnpm check` runs type checking, lint, all nine tests, the production build and output checks. Output checks now compare the complete PDF bytes against the public source and reject feed/PDF sitemap entries.

A temporary MDX post also verified prerendered article content, TypeScript and Python syntax highlighting, unknown-language fallback, post listing, RSS and sitemap inclusion. It was removed after verification. Development-mode HTTP smoke checks returned rendered home and resume content. The standalone benchmark runner also completed successfully with the expected pnpm version.

With the pinned pnpm on PATH, run:

```sh
pnpm install --frozen-lockfile
node scripts/benchmark-build.mjs 5
```

The benchmark rejects a package-manager version mismatch, clears `dist` before each build, discards one warmup and prints every sample plus the median. Compare revisions using identical Node/pnpm versions and installed dependencies; do not run checks or installation alongside measurements.

## Experiments not retained

Disabling gzip size reporting, the native config loader, a custom programmatic build launcher and an extra import-rewriting plugin did not show a convincing improvement worth their tradeoffs. Gzip reporting, minification and validation remain enabled. TypeScript and the Vite React plugin already use native tooling, so adding a second compiler was unnecessary.

## References

- [Vite performance guidance](https://vite.dev/guide/performance)
- [Rolldown lazy barrel optimization](https://rolldown.rs/in-depth/lazy-barrel-optimization)
- [Shiki rehype integration](https://shiki.style/packages/rehype)
- [pnpm setup action](https://github.com/pnpm/setup)
- [GitHub workflow concurrency](https://docs.github.com/en/actions/how-tos/write-workflows/choose-when-workflows-run/control-workflow-concurrency)

## Node runtime comparison

A follow-up comparison used the optimized configuration, the same pnpm 12.3.4 and unchanged dependencies. One warmup per variant was excluded; five measured rounds rotated through all four variants. The compile cache was warmed separately for each Node version.

| Runtime | Compile cache | Five measured runs (seconds) | Median |
| --- | --- | --- | --- |
| Node 24.20.0 (latest LTS) | Off | 1.974, 2.485, 2.473, 2.083, 2.181 | 2.181s |
| Node 26.8.1 (Current) | Off | 1.699, 2.119, 1.861, 1.689, 2.095 | 1.861s |
| Node 24.20.0 | Warm | 2.194, 1.799, 2.496, 2.191, 2.198 | 2.194s |
| Node 26.8.1 | Warm | 1.993, 2.131, 1.777, 2.101, 2.015 | 2.015s |

Node 26 reduced the uncached median by 14.7% against the latest Node 24 patch in this comparison. The workflow now tracks Node 26, currently 26.8.1. This is the Current release line, not yet LTS. All nine tests, type checking, lint and production output checks passed on Node 26.8.1. The module compile cache did not help and is not enabled. No speculative V8 or heap flags were added.

The earlier 28.9% configuration result and this runtime comparison are separate experiments; their percentages should not be added or treated as one measured end-to-end CI improvement.

- [Node 26.8.1 release](https://nodejs.org/en/blog/release/v26.8.1)
- [Node module compile cache](https://nodejs.org/api/module.html#module-compile-cache)
