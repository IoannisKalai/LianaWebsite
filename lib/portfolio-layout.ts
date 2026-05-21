import type { PortfolioSize } from "@/lib/types";

/** Aspect ratio per tile — grid order is left-to-right; no offsets. */
export const sizeClasses: Record<PortfolioSize, string> = {
  square: "relative aspect-square w-full",
  portrait: "relative aspect-[4/5] w-full",
  "portrait-tall": "relative aspect-[3/4] w-full",
  landscape: "relative aspect-[3/2] w-full",
  "landscape-wide": "relative aspect-[16/10] w-full",
};
