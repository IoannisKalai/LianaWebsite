import {
  getAllPortfolioProjects,
  getAllPortfolioSlugs,
  getPortfolioProjectBySlug,
} from "@/lib/portfolio";
import type { ImageOrientation, Project } from "@/lib/types";

function toLegacyProject(p: ReturnType<typeof getPortfolioProjectBySlug>): Project {
  if (!p) throw new Error("Project not found");
  const isVertical =
    p.size === "portrait" || p.size === "portrait-tall";
  return {
    slug: p.slug,
    title: p.title,
    subtitle: `${p.location}`,
    year: p.year,
    coverImage: p.coverImage,
    orientation: isVertical ? "vertical" : "horizontal",
    description: p.description,
    gallery: p.gallery,
  };
}

export function getAllProjects(): Project[] {
  return getAllPortfolioProjects().map((p) => toLegacyProject(p));
}

export function getProjectBySlug(slug: string): Project | undefined {
  const p = getPortfolioProjectBySlug(slug);
  return p ? toLegacyProject(p) : undefined;
}

export function getAllProjectSlugs(): string[] {
  return getAllPortfolioSlugs();
}

export type { ImageOrientation };
