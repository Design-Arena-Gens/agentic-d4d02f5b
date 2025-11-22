import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://agentic-d4d02f5b.vercel.app"),
  title: "دليل المسافر - Traveler Guide FIFA 2026",
  description:
    "دليل رقمي ثنائي اللغة للمسافرين إلى نهائيات كأس العالم فيفا 2026 في الولايات المتحدة الأمريكية، كندا، والمكسيك.",
  keywords: [
    "FIFA 2026",
    "World Cup Travel Guide",
    "دليل السفر",
    "United States",
    "Mexico",
    "Canada",
    "digital product"
  ],
  openGraph: {
    title: "دليل المسافر لنهائيات كأس العالم 2026",
    description:
      "كل ما يحتاجه المشجعون للتخطيط لرحلتهم إلى الولايات المتحدة، كندا، والمكسيك.",
    url: "https://agentic-d4d02f5b.vercel.app",
    siteName: "DP2030 Traveler Guide",
    locale: "ar",
    type: "website"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
