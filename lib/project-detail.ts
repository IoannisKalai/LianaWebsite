import type { PortfolioProject, ProjectContentBlock } from "@/lib/types";

const defaultTeamParagraph =
  "Our team of architects, designers, and creative thinkers brings a wealth of experience and fresh perspectives to every project we undertake.";

export function getProjectGalleryImages(project: PortfolioProject): string[] {
  const images =
    project.gallery.length > 0 ? project.gallery : [project.coverImage];
  if (images.length >= 2) return images;
  return [images[0], images[0]];
}

export function getProjectContentBlocks(
  project: PortfolioProject,
): ProjectContentBlock[] {
  if (project.content && project.content.length > 0) {
    return project.content;
  }

  return [
    {
      type: "paragraph",
      text: `${project.description} The design explores material honesty, spatial clarity, and the relationship between built form and everyday life.`,
    },
    { type: "heading", text: "Our Team" },
    { type: "paragraph", text: defaultTeamParagraph },
  ];
}

export function getProjectPeriod(project: PortfolioProject): string {
  return project.period ?? String(project.year);
}

export function getProjectStatus(project: PortfolioProject): string {
  return project.status ?? "Completed";
}
