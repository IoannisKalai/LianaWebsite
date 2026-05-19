import homeData from "@/content/home.json";
import type { HomeConfig } from "@/lib/types";

export function getHomeConfig(): HomeConfig {
  return homeData as HomeConfig;
}
