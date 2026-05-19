import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { assetPath } from "@/lib/asset";
import {
  getAllProjectSlugs,
  getProjectBySlug,
} from "@/lib/projects";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project" };

  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  const galleryImages = project.gallery.length > 0 ? project.gallery : [project.coverImage];

  return (
    <article className="px-5 py-14 md:px-8 md:py-16">
      <Link
        href="/"
        className="mb-8 inline-block text-[13px] text-neutral-500 transition-opacity hover:opacity-60"
      >
        ← Projects
      </Link>

      <header className="mb-10 max-w-2xl">
        <h1 className="text-[15px] font-normal leading-snug text-neutral-900">
          {project.title}
        </h1>
        <p className="mt-1 text-[13px] text-neutral-500">
          {project.subtitle} · {project.year}
        </p>
        <p className="mt-6 text-[15px] leading-relaxed text-neutral-800">
          {project.description}
        </p>
      </header>

      <div className="space-y-5">
        {galleryImages.map((src, index) => {
          const isVertical = project.orientation === "vertical" && index === 0;
          return (
            <figure
              key={`${src}-${index}`}
              className={`relative w-full overflow-hidden bg-neutral-100 ${
                isVertical ? "aspect-[3/4] max-w-xl" : "aspect-[3/2]"
              }`}
            >
              <Image
                src={assetPath(src)}
                alt={`${project.title} — image ${index + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 900px"
                priority={index === 0}
                unoptimized
              />
            </figure>
          );
        })}
      </div>
    </article>
  );
}
