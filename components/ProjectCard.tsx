import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/types";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const aspectClass =
    project.orientation === "vertical" ? "aspect-[3/4]" : "aspect-[3/2]";

  return (
    <article className="mb-5 break-inside-avoid">
      <Link
        href={`/project/${project.slug}`}
        className="group block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
      >
        <div
          className={`relative w-full overflow-hidden bg-neutral-100 ${aspectClass}`}
        >
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            className="object-cover transition-opacity duration-300 group-hover:opacity-90"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            unoptimized
          />
        </div>
        <h2 className="mt-2 text-[13px] leading-snug text-neutral-900">
          <span className="font-normal">{project.title}</span>
          <span className="text-neutral-500"> {project.subtitle}</span>
        </h2>
      </Link>
    </article>
  );
}
