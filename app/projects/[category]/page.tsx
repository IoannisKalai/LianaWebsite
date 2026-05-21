import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CategoryProjectsPage } from "@/components/CategoryProjectsPage";
import { getAllCategorySlugs, getCategoryBySlug } from "@/lib/categories";

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return getAllCategorySlugs().map((category) => ({ category }));
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { category: categorySlug } = await params;
  const category = getCategoryBySlug(categorySlug);
  if (!category) return { title: "Projects" };

  return {
    title: category.title,
    description: category.description,
  };
}

export default async function ProjectCategoryPage({ params }: CategoryPageProps) {
  const { category: categorySlug } = await params;
  const category = getCategoryBySlug(categorySlug);
  if (!category) notFound();

  return <CategoryProjectsPage categorySlug={categorySlug} />;
}
