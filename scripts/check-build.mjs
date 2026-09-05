import { readFileSync } from "node:fs";
import { strict as assert } from "node:assert";

const read = (path) => readFileSync(`dist/client/${path}`, "utf8");
assert.match(read("index.html"), /View resume/, "home must prerender the resume link");
assert.match(read("resume/index.html"), /Kizora Software/, "resume must prerender experience");
assert.match(read("resume/index.html"), /resume-sanket-patrikar\.pdf/, "resume must link its PDF");
assert.deepEqual(
  readFileSync("dist/client/resume-sanket-patrikar.pdf"),
  readFileSync("public/resume-sanket-patrikar.pdf"),
  "prerender must preserve the PDF bytes",
);
assert.match(read("feed.xml"), /<rss[\s>]/, "RSS must be generated");
assert.match(read("sitemap.xml"), /sanketpatrikar\.com/, "sitemap must use the production host");
assert.doesNotMatch(
  read("sitemap.xml"),
  /<loc>[^<]*(?:feed\.xml|\.pdf)<\/loc>/,
  "sitemap must contain pages only",
);
assert.match(read("404.html"), /Page not found/, "static 404 must be shipped");
console.log("built home, resume, PDF, feed, sitemap, and 404 checks passed");
