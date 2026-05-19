import projectsData from "@/content/projects.json";
import type { Project } from "@/lib/types";

const projects = projectsData as Project[];

export function getAllProjects(): Project[] {
  return [...projects].sort((a, b) => b.year - a.year);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}
