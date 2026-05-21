import Link from "next/link";
import { getSiteConfig } from "@/lib/site";

export function SiteFooter() {
  const site = getSiteConfig();

  return (
    <footer
      id="contact"
      className="bg-home-surface px-4 py-5 text-center text-[12px] text-neutral-900 sm:px-6 md:px-12 md:py-6"
    >
      <h2 className="font-[family-name:var(--font-montserrat)] text-[12px] font-bold uppercase tracking-[0.2em]">
        Contact
      </h2>
      <div className="mx-auto mt-4 flex w-full max-w-[900px] flex-col gap-3 text-left sm:flex-row sm:justify-between sm:gap-8">
        <p className="min-w-0 break-words">
          <span className="font-bold">Email address: </span>
          <a
            href={`mailto:${site.contact.email}`}
            className="hover:opacity-60"
          >
            {site.contact.email}
          </a>
        </p>
        {site.contact.phone ? (
          <p className="sm:text-right">
            <span className="font-bold">Phone number: </span>
            <a
              href={`tel:${site.contact.phone.replace(/\s/g, "")}`}
              className="hover:opacity-60"
            >
              {site.contact.phone}
            </a>
          </p>
        ) : null}
      </div>
      <Link
        href="#top"
        className="mt-5 inline-block font-[family-name:var(--font-montserrat)] text-[10px] font-bold uppercase tracking-[0.2em] hover:opacity-60"
      >
        Top
      </Link>
    </footer>
  );
}
