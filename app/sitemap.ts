import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://autoexperteu.com";

  const routes = [
    "/es",
    "/en",
    "/ru",

    "/es/avtopodbor",
    "/en/avtopodbor",
    "/ru/avtopodbor",

    "/es/avto-iz-germanii",
    "/en/avto-iz-germanii",
    "/ru/avto-iz-germanii",

    "/es/avto-iz-germanii/nalogi-i-dokumenty",
    "/en/avto-iz-germanii/nalogi-i-dokumenty",
    "/ru/avto-iz-germanii/nalogi-i-dokumenty",

    "/es/avto-iz-germanii/registraciya-dgt",
    "/en/avto-iz-germanii/registraciya-dgt",
    "/ru/avto-iz-germanii/registraciya-dgt",

    "/es/avto-iz-germanii/skolko-stoit",
    "/en/avto-iz-germanii/skolko-stoit",
    "/ru/avto-iz-germanii/skolko-stoit",

    "/es/avto-iz-germanii/alicante",
    "/en/avto-iz-germanii/alicante",
    "/ru/avto-iz-germanii/alicante",

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
