import categoriesData from "@/content/categories.json";
import type { CategoriesConfig, ProjectCategory } from "@/lib/types";

const config = categoriesData as CategoriesConfig;

export function getCategoriesConfig(): CategoriesConfig {
  return config;
}

export function getAllCategories(): ProjectCategory[] {
  return config.categories;
}

export function getCategoryBySlug(slug: string): ProjectCategory | undefined {
  return config.categories.find((c) => c.slug === slug);
}

export function getAllCategorySlugs(): string[] {
  return config.categories.map((c) => c.slug);
}
