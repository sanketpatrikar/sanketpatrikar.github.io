import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { expect, test } from "vitest";
import { Route } from "../src/routes/resume";

test("resume serves experience and a PDF link without client JavaScript", () => {
  const Resume = Route.options.component!;
  const html = renderToStaticMarkup(createElement(Resume));
  expect(html).toContain("Kizora Software");
  expect(html).toContain('href="/resume-sanket-patrikar.pdf"');
  expect(html).toContain("Education");
});
