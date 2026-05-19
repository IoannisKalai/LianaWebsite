import { readFileSync } from "fs";
import { join } from "path";
import type { AboutSection } from "@/lib/types";

function slugify(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function getAboutSections(): AboutSection[] {
  const filePath = join(process.cwd(), "content", "about.md");
  const raw = readFileSync(filePath, "utf-8");
  const sections: AboutSection[] = [];
  const parts = raw.split(/^## /m).filter(Boolean);

  for (const part of parts) {
    const newline = part.indexOf("\n");
    const title = part.slice(0, newline).trim();
    const content = part.slice(newline + 1).trim();
    sections.push({
      id: slugify(title),
      title,
      content,
    });
  }

  return sections;
}
