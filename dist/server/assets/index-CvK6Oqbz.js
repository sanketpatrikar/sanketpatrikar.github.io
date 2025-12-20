import { jsxs, jsx } from "react/jsx-runtime";
import { Mail, Github, Twitter, Linkedin } from "lucide-react";
function App() {
  const contactLinks = [{
    href: "mailto:sanketspatrikar@gmail.com",
    label: "sanketspatrikar@gmail.com",
    icon: Mail
  }, {
    href: "https://github.com/sanketpatrikar",
    label: "github.com/sanketpatrikar",
    icon: Github
  }, {
    href: "https://x.com/patrikarsanket",
    label: "x.com/patrikarsanket",
    icon: Twitter
  }, {
    href: "https://linkedin.com/in/sanketpatrikar",
    label: "linkedin.com/in/sanketpatrikar",
    icon: Linkedin
  }];
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-between min-h-screen relative pt-20 px-6 overflow-hidden", children: [
    /* @__PURE__ */ jsxs("div", { id: "hero", className: "", children: [
      /* @__PURE__ */ jsx("div", { className: "flex gap-6 mb-6", children: /* @__PURE__ */ jsx("h1", { className: "text-6xl md:text-7xl [letter-spacing:-0.052em]", children: /* @__PURE__ */ jsx("span", { className: "", children: "Sanket Patrikar" }) }) }),
      /* @__PURE__ */ jsx("p", { className: "text-lg max-w-3xl mb-8", children: "Full-stack developer focused on building simple, scalable products. Working primarily with React, TypeScript, and Postgres." })
    ] }),
    /* @__PURE__ */ jsxs("div", { id: "contact-section", className: "mb-8", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl pt-8 mb-5", children: "Contact" }),
      /* @__PURE__ */ jsx("div", { className: "space-y-2", children: contactLinks.map((link) => /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsxs("a", { href: link.href, className: "inline-flex gap-2 items-center", children: [
        /* @__PURE__ */ jsx(link.icon, {}),
        link.label
      ] }) }, link.href)) })
    ] })
  ] });
}
export {
  App as component
};
