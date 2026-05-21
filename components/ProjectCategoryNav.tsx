import Link from "next/link";
import { getAllCategories } from "@/lib/categories";

const columnPlacement: Record<
  string,
  {
    mobile: string;
    desktop: string;
  }
> = {
  "architecture-interior-design": {
    mobile: "justify-self-center text-center",
    desktop: "sm:justify-self-end sm:text-right",
  },
  "ephemeral-spaces": {
    mobile: "justify-self-center text-center",
    desktop: "sm:justify-self-center sm:text-center",
  },
  "other-stories": {
    mobile: "justify-self-center text-center",
    desktop: "sm:justify-self-start sm:text-left",
  },
};

interface ProjectCategoryNavProps {
  activeSlug: string | null;
}

export function ProjectCategoryNav({ activeSlug }: ProjectCategoryNavProps) {
  const categories = getAllCategories();

  return (
    <nav
      className="relative z-20 mx-auto grid w-full max-w-[min(100%,1000px)] grid-cols-1 gap-3 px-4 sm:grid-cols-3 sm:items-end sm:gap-0 sm:px-8"
      aria-label="Project categories"
    >
      {categories.map((category) => {
        const isActive = activeSlug === category.slug;
        const place =
          columnPlacement[category.slug] ?? {
            mobile: "justify-self-center text-center",
            desktop: "sm:justify-self-center sm:text-center",
          };

        return (
          <Link
            key={category.slug}
            href={`/projects/${category.slug}/`}
            className={`font-[family-name:var(--font-montserrat)] text-[11px] font-bold uppercase leading-snug tracking-[0.06em] transition-opacity hover:opacity-60 sm:text-[12px] sm:tracking-[0.08em] ${place.mobile} ${place.desktop} ${
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
