import { notFound } from "next/navigation";
import { PortfolioMasonryGrid } from "@/components/PortfolioMasonryGrid";
import { ProjectCategoryNav } from "@/components/ProjectCategoryNav";
import { SiteFooter } from "@/components/SiteFooter";
import { getCategoryBySlug } from "@/lib/categories";
import { getPortfolioProjectsByCategory } from "@/lib/portfolio";

interface CategoryProjectsPageProps {
  categorySlug: string;
}

export function CategoryProjectsPage({ categorySlug }: CategoryProjectsPageProps) {
  const category = getCategoryBySlug(categorySlug);
  if (!category) notFound();

  const projects = getPortfolioProjectsByCategory(categorySlug);

  return (
    <>
      <section className="relative z-10 bg-home-surface px-6 pb-6 pt-2 md:px-12 md:pb-8 md:pt-3">
        <ProjectCategoryNav activeSlug={categorySlug} />
      </section>

      <section className="relative z-0 bg-home-surface px-4 pb-20 pt-2 md:px-8 md:pb-28 lg:px-12 lg:pb-32">
        <PortfolioMasonryGrid projects={projects} />
      </section>

      <SiteFooter />
    </>
  );
}
