import "./globals.css";
import type { Metadata } from "next";
import { cookies } from "next/headers";
import { defaultLocale, getSiteContent } from "@/site/content";

export async function generateMetadata(): Promise<Metadata> {
  const cookieStore = await cookies();
  const locale = cookieStore.get("MARKO_LOCALE")?.value === "en" ? "en" : defaultLocale;
  const content = getSiteContent(locale);

  return {
    title: content.seo.title,
    description: content.seo.description,
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const locale = cookieStore.get("MARKO_LOCALE")?.value === "en" ? "en" : defaultLocale;

  return (
    <html lang={locale}>
      <body>{children}</body>
    </html>
  );
}
