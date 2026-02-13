import type { MetadataRoute } from "next";

function getBaseUrl() {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/+$/, "");

  const vercel = process.env.VERCEL_URL;
  if (vercel) return `https://${vercel}`.replace(/\/+$/, "");

  return "https://autoexpert-six.vercel.app";
}

export default function robots(): MetadataRoute.Robots {
  const baseUrl = getBaseUrl();

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/fao"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
