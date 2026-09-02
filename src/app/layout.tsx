import type { Metadata } from "next";
import { Manrope, Fraunces, Allura } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SITE } from "@/content/site";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz", "SOFT"],
});

const allura = Allura({
  variable: "--font-allura",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://smilelab-dental.example.com"),
  title: {
    default: `${SITE.name} — Dental Clinic in ${SITE.location}`,
    template: `%s — ${SITE.name}`,
  },
  description: SITE.metaDescription,
  openGraph: {
    title: `${SITE.name} — Dental Clinic in ${SITE.location}`,
    description: SITE.metaDescription,
    siteName: SITE.name,
    locale: "en_PH",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${manrope.variable} ${fraunces.variable} ${allura.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-cream-50 text-navy-900">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-[var(--radius-sm)] focus:bg-cream-50 focus:px-4 focus:py-2 focus:text-navy-900 focus:shadow-[var(--shadow-soft)]"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
