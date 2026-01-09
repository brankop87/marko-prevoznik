import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marko Prevoznik | Šlep služba 0-24 | Cerovac, Smederevska Palanka",
  description:
    "Šlep služba i prevoz vozila 0-24. Cerovac, Smederevska Palanka i okolina (šire po dogovoru). Pozovi 066006299.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr">
      <body>{children}</body>
    </html>
  );
}
