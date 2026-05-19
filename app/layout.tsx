import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SiteHeader } from "@/components/SiteHeader";
import { getSiteConfig } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const site = getSiteConfig();

export const metadata: Metadata = {
  title: {
    default: site.name,
    template: `%s · ${site.name}`,
  },
  description:
    "Portfolio of architect Liana Kalaitzoglou — residential, cultural, and interior projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="min-h-full bg-white text-neutral-900 antialiased">
        <SiteHeader />
        <main className="mx-auto w-full max-w-[1800px] px-5 pb-16 pt-14 md:px-8 md:pt-16 md:pb-24">
          {children}
        </main>
      </body>
    </html>
  );
}
