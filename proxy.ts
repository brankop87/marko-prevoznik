import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const LOCAL_COUNTRIES = new Set(["RS", "BA", "ME", "HR", "MK"]);

function resolvePreferredLocale(request: NextRequest): "sr" | "en" {
  const country = request.headers.get("x-vercel-ip-country")?.toUpperCase();

  if (country) {
    return LOCAL_COUNTRIES.has(country) ? "sr" : "en";
  }

  const acceptLanguage = request.headers.get("accept-language")?.toLowerCase() ?? "";

  if (
    acceptLanguage.includes("sr") ||
    acceptLanguage.includes("hr") ||
    acceptLanguage.includes("bs")
  ) {
    return "sr";
  }

  return "en";
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === "/") {
    const locale = resolvePreferredLocale(request);

    if (locale === "en") {
      const redirectUrl = request.nextUrl.clone();
      redirectUrl.pathname = "/en";
      const response = NextResponse.redirect(redirectUrl);
      response.cookies.set("MARKO_LOCALE", "en", { path: "/" });
      return response;
    }

    const response = NextResponse.next();
    response.cookies.set("MARKO_LOCALE", "sr", { path: "/" });
    return response;
  }

  if (pathname === "/en") {
    const response = NextResponse.next();
    response.cookies.set("MARKO_LOCALE", "en", { path: "/" });
    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/en"],
};
