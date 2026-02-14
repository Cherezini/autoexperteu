import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function GET() {
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

  const lastmod = new Date().toISOString();

  const xml =
    `<?xml version="1.0" encoding="UTF-8"?>` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">` +
    routes
      .map(
        (path) =>
          `<url><loc>${baseUrl}${path}</loc><lastmod>${lastmod}</lastmod></url>`
      )
      .join("") +
    `</urlset>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
