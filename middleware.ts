import { NextRequest, NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";
import { routing } from "./src/i18n/routing";

const intlMiddleware = createMiddleware(routing);

export default function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // ВАЖНО: отдаем sitemap.xml и robots.txt напрямую
  if (pathname === "/sitemap.xml" || pathname === "/robots.txt") {
    return NextResponse.next();
  }

  // Пропускаем:
  // - API
  // - служебные папки
  // - любые файлы с точкой (статические ресурсы)
  if (
    pathname.startsWith("/api") ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/_vercel") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  // ❗ Корень сайта: НЕ редиректим, а делаем rewrite на /ru
  if (pathname === "/") {
    return NextResponse.rewrite(new URL("/ru", req.url));
  }

  return intlMiddleware(req);
}

export const config = {
  matcher: [
    "/((?!api|_next|_vercel|.*\\..*).*)",
  ],
};
