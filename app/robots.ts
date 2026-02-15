import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: "*",
        disallow: [
          "/ru/fao",
          "/en/fao",
          "/es/fao",
        ],
      },
    ],
    sitemap: "https://www.autoexperteu.com/sitemap.xml",
  };
}
