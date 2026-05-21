import Link from "next/link";
import { getAllCategories } from "@/lib/categories";

/** Same 3-column grid as SiteHeader — Ephemeral Spaces sits in column 2 under Projects. */
const columnPlacement: Record<
  string,
  {
    column: string;
    align: string;
  }
> = {
  "architecture-interior-design": {
    column: "col-start-1",
    align: "justify-self-end text-right",
  },
  "ephemeral-spaces": {
    column: "col-start-2",
    align: "justify-self-center text-center",
  },
  "other-stories": {
    column: "col-start-3",
    align: "justify-self-start text-left",
  },
};

interface ProjectCategoryNavProps {
  activeSlug: string | null;
}

export function ProjectCategoryNav({ activeSlug }: ProjectCategoryNavProps) {
  const categories = getAllCategories();

  return (
    <nav
      className="relative z-20 mx-auto grid w-full max-w-[min(100%,1000px)] grid-cols-3 items-end px-4 md:px-8"
      aria-label="Project categories"
    >
      {categories.map((category) => {
        const isActive = activeSlug === category.slug;
        const place =
          columnPlacement[category.slug] ?? {
            column: "col-start-2",
            align: "justify-self-center text-center",
          };

        return (
          <Link
            key={category.slug}
            href={`/projects/${category.slug}/`}
            className={`whitespace-nowrap font-[family-name:var(--font-montserrat)] text-[11px] font-bold uppercase leading-snug tracking-[0.08em] transition-opacity hover:opacity-60 sm:text-[12px] ${place.column} ${place.align} ${
              isActive
                ? "text-neutral-900 underline decoration-1 underline-offset-4"
                : "text-neutral-800"
            }`}
          >
            {category.navLabel}
          </Link>
        );
      })}
    </nav>
  );
}
