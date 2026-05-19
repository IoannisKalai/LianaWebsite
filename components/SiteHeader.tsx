import Link from "next/link";
import { getSiteConfig } from "@/lib/site";

const navItems = [
  { href: "/about/", label: "About", align: "start" as const },
  { href: "/#projects", label: "Projects", align: "center" as const },
  { href: "/about/#contact", label: "Contact", align: "end" as const },
];

export function SiteHeader() {
  const site = getSiteConfig();
  const parts = site.name.trim().split(/\s+/);
  const firstName = parts[0]?.toUpperCase() ?? "";
  const lastName = parts.slice(1).join(" ").toUpperCase();

  return (
    <header id="top" className="bg-home-surface text-center text-neutral-900">
      <div className="px-6 pb-14 pt-10 md:px-12 md:pb-16 md:pt-12 lg:pb-20">
        <Link
          href="/"
          className="inline-flex flex-wrap items-center justify-center gap-x-[0.65em] font-[family-name:var(--font-montserrat)] text-[clamp(20px,2.2vw,30px)] font-semibold uppercase leading-none tracking-[0.4em] transition-opacity hover:opacity-60 md:tracking-[0.42em]"
        >
          <span>{firstName}</span>
          <span>{lastName}</span>
        </Link>
        <nav
          className="mx-auto mt-7 grid w-full max-w-[min(100%,1000px)] grid-cols-3 items-center px-4 md:mt-8 md:px-8"
          aria-label="Main"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`font-[family-name:var(--font-montserrat)] text-[clamp(11px,0.95vw,13px)] font-bold uppercase tracking-[0.2em] transition-opacity hover:opacity-60 ${
                item.align === "start"
                  ? "justify-self-start text-left"
                  : item.align === "end"
                    ? "justify-self-end text-right"
                    : "justify-self-center text-center"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
