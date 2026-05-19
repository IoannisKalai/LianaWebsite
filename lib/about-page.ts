import aboutPageData from "@/content/about-page.json";
import type { AboutPageConfig } from "@/lib/types";

export function getAboutPageConfig(): AboutPageConfig {
  return aboutPageData as AboutPageConfig;
}
