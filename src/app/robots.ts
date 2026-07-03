import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/upload-one-thing/"],
    },
    sitemap: "https://www.woodriverbc.org/sitemap.xml",
    host: "https://www.woodriverbc.org",
  };
}
