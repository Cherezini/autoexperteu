import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.autoexperteu.com";

  const routes = [
    "/es",
    "/en",
    "/ru",

    "/es/avtopodbor",
    "/en/avtopodbor",
    "/ru/avtopodbor",

    "/es/registro",
    "/en/registro",
    "/ru/registro",

    "/es/contacto",
    "/en/contacto",
    "/ru/contacto",

    "/es/request",
    "/en/request",
    "/ru/request",

    "/es/faq",
    "/en/faq",
    "/ru/faq",
  ];

  const now = new Date();

  return routes.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
  }));
}
