import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "@/components/SiteFooter";
import { assetPath } from "@/lib/asset";
import { getAllCategories } from "@/lib/categories";

export function ProjectsLanding() {
  const categories = getAllCategories();

  return (
    <div className="flex flex-1 flex-col bg-home-surface">
      <section className="flex-1 px-6 pb-16 pt-6 md:px-12 md:pb-20 md:pt-8 lg:px-16">
        <div className="mx-auto max-w-[1100px]">
          <p className="text-center font-[family-name:var(--font-montserrat)] text-[13px] font-bold uppercase tracking-[0.2em] text-neutral-900 md:text-[14px]">
            Projects
          </p>
          <p className="mx-auto mt-4 max-w-xl text-center font-[family-name:var(--font-montserrat)] text-[13px] leading-relaxed text-neutral-800 md:text-[14px]">
            Select a category to explore work across architecture, ephemeral
            spaces, and parallel stories.
          </p>

          <ul className="mt-14 grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8 lg:gap-10">
            {categories.map((category) => (
              <li key={category.slug}>
                <Link
                  href={`/projects/${category.slug}/`}
                  className="group flex flex-col items-center text-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-900"
                >
                  <div className="relative aspect-[4/5] w-full max-w-[280px] overflow-hidden bg-neutral-100/70">
                    <Image
                      src={assetPath(category.image)}
                      alt={category.title}
                      fill
                      className="object-cover transition-opacity duration-300 group-hover:opacity-90"
                      sizes="280px"
                      unoptimized
                    />
                  </div>
                  <h2 className="mt-5 font-[family-name:var(--font-montserrat)] text-[15px] font-bold leading-snug text-neutral-900 md:text-[16px]">
                    {category.title}
                  </h2>
                  <p className="mt-3 max-w-[260px] font-[family-name:var(--font-montserrat)] text-[11px] leading-relaxed text-neutral-800">
                    {category.description}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
