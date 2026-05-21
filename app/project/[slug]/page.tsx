import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectDetailPage } from "@/components/ProjectDetailPage";
import { getPortfolioProjectBySlug } from "@/lib/portfolio";
import { getAllProjectSlugs, getProjectBySlug } from "@/lib/projects";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project" };

  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const portfolio = getPortfolioProjectBySlug(slug);

  if (!portfolio) notFound();

  const fallbackHref = `/projects/${portfolio.category}/`;

  return (
    <ProjectDetailPage project={portfolio} fallbackHref={fallbackHref} />
  );
}
