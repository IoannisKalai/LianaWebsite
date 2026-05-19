import { getAllProjects } from "@/lib/projects";
import { ProjectCard } from "@/components/ProjectCard";

export function ProjectGrid() {
  const projects = getAllProjects();

  return (
    <section
      aria-label="Projects"
      className="columns-1 gap-5 sm:columns-2 lg:columns-3 xl:columns-4"
    >
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </section>
  );
}
