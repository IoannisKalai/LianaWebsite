import portfolioData from "@/content/portfolio.json";
import type { PortfolioProject } from "@/lib/types";

const projects = portfolioData as PortfolioProject[];

export function getAllPortfolioProjects(): PortfolioProject[] {
  return [...projects].sort((a, b) => b.year - a.year);
}

export function getPortfolioProjectsByCategory(
  categorySlug: string,
): PortfolioProject[] {
  return getAllPortfolioProjects().filter((p) => p.category === categorySlug);
}

export function getPortfolioProjectBySlug(
  slug: string,
): PortfolioProject | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllPortfolioSlugs(): string[] {
  return projects.map((p) => p.slug);
}
