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
      className={`group block overflow-hidden bg-neutral-200/80 ${sizeClass} focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900`}
    >
      <Image
        src={assetPath(project.coverImage)}
        alt={project.title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        unoptimized
      />

      <div
        className="pointer-events-none absolute inset-0 bg-[#e85d4a]/0 opacity-0 transition-all duration-300 group-hover:bg-[#e85d4a]/82 group-hover:opacity-100 group-focus-visible:bg-[#e85d4a]/82 group-focus-visible:opacity-100"
        aria-hidden
      >
        <div className="relative h-full w-full p-4 text-neutral-900 sm:p-5">
          <p className="absolute left-4 top-4 max-w-[55%] font-[family-name:var(--font-montserrat)] text-[15px] font-bold leading-tight sm:left-5 sm:top-5 sm:text-[17px]">
            {project.title}
          </p>

          <p className="absolute bottom-4 left-4 max-w-[50%] font-[family-name:var(--font-montserrat)] text-[10px] font-medium leading-snug sm:bottom-5 sm:left-5 sm:text-[11px]">
            {project.hoverDescription}
          </p>

          <p className="absolute right-4 top-1/2 -translate-y-1/2 rotate-90 whitespace-nowrap font-[family-name:var(--font-montserrat)] text-[10px] font-medium tracking-wide sm:right-5 sm:text-[11px]">
            {project.location}
          </p>
        </div>
      </div>
    </Link>
  );
}
