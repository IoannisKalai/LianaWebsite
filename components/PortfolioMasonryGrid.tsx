import { PortfolioProjectTile } from "@/components/PortfolioProjectTile";
import type { PortfolioProject } from "@/lib/types";

interface PortfolioMasonryGridProps {
  projects: PortfolioProject[];
}

export function PortfolioMasonryGrid({ projects }: PortfolioMasonryGridProps) {
  return (
    <div className="mx-auto grid max-w-[1200px] grid-cols-2 items-center gap-5 px-2 sm:gap-6 md:grid-cols-4 md:gap-8 lg:gap-10">
      {projects.map((project) => (
        <PortfolioProjectTile key={project.slug} project={project} />
      ))}
    </div>
  );
}
