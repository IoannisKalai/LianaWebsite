import siteData from "@/content/site.json";
import type { SiteConfig } from "@/lib/types";

export function getSiteConfig(): SiteConfig {
  return siteData as SiteConfig;
}
