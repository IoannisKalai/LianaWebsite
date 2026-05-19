import Link from "next/link";
import { getSiteConfig } from "@/lib/site";

export function SiteHeader() {
  const site = getSiteConfig();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-neutral-200/80 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-[1800px] items-center justify-between px-5 md:px-8">
        <Link
          href="/"
          className="text-[13px] font-normal tracking-[0.02em] text-neutral-900 hover:opacity-60 transition-opacity"
        >
          {site.name}
        </Link>
        <nav className="flex items-center gap-6 text-[13px] tracking-[0.02em] text-neutral-900">
          <Link href="/" className="hover:opacity-60 transition-opacity">
            Projects
          </Link>
          <Link href="/about" className="hover:opacity-60 transition-opacity">
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}
