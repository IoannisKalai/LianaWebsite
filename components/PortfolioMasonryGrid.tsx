import { PortfolioProjectTile } from "@/components/PortfolioProjectTile";
import type { PortfolioProject } from "@/lib/types";

interface PortfolioMasonryGridProps {
  projects: PortfolioProject[];
}

export function PortfolioMasonryGrid({ projects }: PortfolioMasonryGridProps) {
  return (
    <div className="grid w-full grid-cols-1 items-center gap-4 sm:grid-cols-2 sm:gap-5 md:gap-6 lg:grid-cols-3 lg:gap-8 xl:grid-cols-4 xl:gap-10">
      {projects.map((project) => (
        <PortfolioProjectTile key={project.slug} project={project} />
      ))}
    </div>
  );
}
