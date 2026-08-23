export const siteUrl = "https://sanketpatrikar.com";
export const siteTitle = "Sanket Patrikar | Software Engineer";
export const siteDescription =
  "Software engineer based in Nagpur, India, focused on clear interfaces, fast feedback loops, and maintainable web systems.";

const socialImage = `${siteUrl}/og-image-6cda5e9c.jpg`;

export const homeStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Sanket Patrikar",
      description: siteDescription,
      inLanguage: "en-IN",
      publisher: { "@id": `${siteUrl}/#person` },
    },
    {
      "@type": "ProfilePage",
      "@id": `${siteUrl}/#profile`,
      url: siteUrl,
      name: siteTitle,
      description: siteDescription,
      inLanguage: "en-IN",
      isPartOf: { "@id": `${siteUrl}/#website` },
      mainEntity: { "@id": `${siteUrl}/#person` },
    },
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Sanket Patrikar",
      url: siteUrl,
      image: `${siteUrl}/sanket-patrikar.webp`,
      jobTitle: "Software Engineer",
      description: siteDescription,
      homeLocation: {
        "@type": "Place",
        name: "Nagpur, Maharashtra, India",
      },
      sameAs: [
        "https://github.com/sanketpatrikar",
        "https://linkedin.com/in/sanketpatrikar",
        "https://x.com/patrikarsanket",
      ],
    },
  ],
};

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
  const url = path ? `${siteUrl}${path}` : `${siteUrl}/?og=6cda5e9c`;

  return [
    { title },
    { name: "description", content: description },
    { name: "author", content: "Sanket Patrikar" },
    { name: "robots", content: "index, follow, max-image-preview:large" },
    { property: "og:type", content: type },
    { property: "og:site_name", content: "Sanket Patrikar" },
    { property: "og:locale", content: "en_IN" },
    { property: "og:url", content: url },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:image", content: socialImage },
    { property: "og:image:secure_url", content: socialImage },
    { property: "og:image:type", content: "image/jpeg" },
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
