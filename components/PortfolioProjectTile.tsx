"use client";

import Image from "next/image";
import Link from "next/link";
import { assetPath } from "@/lib/asset";
import { sizeClasses } from "@/lib/portfolio-layout";
import type { PortfolioProject } from "@/lib/types";

interface PortfolioProjectTileProps {
  project: PortfolioProject;
}

export function PortfolioProjectTile({ project }: PortfolioProjectTileProps) {
  const sizeClass = sizeClasses[project.size];

  return (
    <Link
      href={`/project/${project.slug}/`}
      className={`group relative block w-full overflow-hidden bg-neutral-200/80 ${sizeClass} focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900`}
    >
      <Image
        src={assetPath(project.coverImage)}
        alt={project.title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
        unoptimized
      />

      <div
        className="pointer-events-none absolute inset-0 bg-[#e85d4a]/0 opacity-0 transition-all duration-300 group-hover:bg-[#e85d4a]/82 group-hover:opacity-100 group-focus-visible:bg-[#e85d4a]/82 group-focus-visible:opacity-100 max-sm:group-active:bg-[#e85d4a]/82 max-sm:group-active:opacity-100"
        aria-hidden
      >
        <div className="relative h-full w-full p-3 text-neutral-900 sm:p-4 md:p-5">
          <p className="absolute left-3 top-3 max-w-[58%] font-[family-name:var(--font-montserrat)] text-[13px] font-bold leading-tight sm:left-4 sm:top-4 sm:max-w-[55%] sm:text-[15px] md:text-[17px]">
            {project.title}
          </p>

          <p className="absolute bottom-3 left-3 max-w-[52%] font-[family-name:var(--font-montserrat)] text-[9px] font-medium leading-snug sm:bottom-4 sm:left-4 sm:max-w-[50%] sm:text-[10px] md:text-[11px]">
            {project.hoverDescription}
          </p>

          <p className="absolute right-3 top-1/2 hidden -translate-y-1/2 rotate-90 whitespace-nowrap font-[family-name:var(--font-montserrat)] text-[9px] font-medium tracking-wide sm:right-4 sm:block sm:text-[10px] md:text-[11px]">
            {project.location}
          </p>
        </div>
      </div>
    </Link>
  );
}
