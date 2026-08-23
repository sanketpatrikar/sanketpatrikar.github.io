export const siteUrl = "https://sanketpatrikar.com";
export const siteTitle = "Sanket Patrikar - Software Engineer";
export const siteDescription =
  "Software engineer based in Nagpur, India, focused on clear interfaces, fast feedback loops, and maintainable web systems.";

const socialImage = `${siteUrl}/og-image.png`;

export function getCanonicalLink(path = "") {
  return {
    rel: "canonical",
    href: `${siteUrl}${path}`,
  };
}

export function getSeoMeta({
  title = siteTitle,
  description = siteDescription,
  path = "",
  type = "website",
} = {}) {
  const url = `${siteUrl}${path}`;

  return [
    { title },
    { name: "description", content: description },
    { property: "og:type", content: type },
    { property: "og:site_name", content: "Sanket Patrikar" },
    { property: "og:locale", content: "en_IN" },
    { property: "og:url", content: url },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:image", content: socialImage },
    { property: "og:image:secure_url", content: socialImage },
    { property: "og:image:type", content: "image/png" },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { property: "og:image:alt", content: "Sanket Patrikar, Software Engineer" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:creator", content: "@patrikarsanket" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: socialImage },
    { name: "twitter:image:alt", content: "Sanket Patrikar, Software Engineer" },
  ];
}
