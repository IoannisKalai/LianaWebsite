import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import { SiteHeader } from "@/components/SiteHeader";
import { getSiteConfig } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
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
    <html
      lang="en"
      className={`${inter.variable} ${montserrat.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full bg-white font-[family-name:var(--font-inter)] text-neutral-900 antialiased">
        <SiteHeader />
        <main>{children}</main>
      </body>
    </html>
  );
}
