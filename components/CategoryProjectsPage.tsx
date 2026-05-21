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
    <div className="flex flex-1 flex-col bg-home-surface">
      <section className="relative z-10 px-4 pb-5 pt-2 sm:px-6 md:px-8 md:pb-6 md:pt-3 lg:px-12">
        <ProjectCategoryNav activeSlug={categorySlug} />
      </section>

      <section className="relative z-0 w-full flex-1 px-4 pb-16 pt-2 sm:px-6 sm:pb-20 md:px-8 md:pb-24 lg:px-12 lg:pb-28">
        <PortfolioMasonryGrid projects={projects} />
      </section>

      <SiteFooter />
    </div>
  );
}
