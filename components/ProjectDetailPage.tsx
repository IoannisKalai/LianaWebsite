import { ProjectCloseNav } from "@/components/ProjectCloseNav";
import { ProjectDetailCarousel } from "@/components/ProjectDetailCarousel";
import { SiteFooter } from "@/components/SiteFooter";
import { assetPath } from "@/lib/asset";
import {
  getProjectContentBlocks,
  getProjectGalleryImages,
  getProjectPeriod,
  getProjectStatus,
} from "@/lib/project-detail";
import type { PortfolioProject } from "@/lib/types";

interface ProjectDetailPageProps {
  project: PortfolioProject;
  fallbackHref: string;
}

export function ProjectDetailPage({
  project,
  fallbackHref,
}: ProjectDetailPageProps) {
  const gallery = getProjectGalleryImages(project).map(assetPath);
  const contentBlocks = getProjectContentBlocks(project);
  const period = getProjectPeriod(project);
  const status = getProjectStatus(project);

  return (
    <div className="bg-home-surface">
      <section className="px-4 pb-5 pt-2 sm:px-6 md:px-12 md:pb-8 md:pt-3">
        <ProjectCloseNav fallbackHref={fallbackHref} />
      </section>

      <ProjectDetailCarousel images={gallery} alt={project.title} />

      <article className="px-4 pb-8 sm:px-6 md:px-12 lg:px-16">
        <div className="mx-auto max-w-[1100px]">
          <div className="mt-12 grid grid-cols-1 gap-10 md:mt-16 md:grid-cols-[minmax(0,200px)_1fr] md:gap-x-16 lg:gap-x-24">
            <header className="font-[family-name:var(--font-montserrat)] text-neutral-900">
              <h1 className="text-[15px] font-bold uppercase leading-snug tracking-[0.06em] md:text-[16px]">
                {project.title}
              </h1>

              <dl className="mt-10 space-y-8">
                <div>
                  <dt className="text-[13px] font-bold md:text-[14px]">Location</dt>
                  <dd className="mt-1 text-[13px] font-normal md:text-[14px]">
                    {project.location}
                  </dd>
                </div>
                <div>
                  <dt className="text-[13px] font-bold md:text-[14px]">Period</dt>
                  <dd className="mt-1 text-[13px] font-normal md:text-[14px]">
                    {period}
                  </dd>
                </div>
                <div>
                  <dt className="text-[13px] font-bold md:text-[14px]">Status</dt>
                  <dd className="mt-1 text-[13px] font-normal md:text-[14px]">
                    {status}
                  </dd>
                </div>
              </dl>
            </header>

            <div className="space-y-5 font-[family-name:var(--font-montserrat)] text-[13px] leading-[1.7] text-neutral-900 md:text-[14px] md:leading-[1.75]">
              {contentBlocks.map((block, index) =>
                block.type === "heading" ? (
                  <h2
                    key={`${block.type}-${index}`}
                    className="pt-2 text-[13px] font-bold md:text-[14px]"
                  >
                    {block.text}
                  </h2>
                ) : (
                  <p key={`${block.type}-${index}`} className="font-normal">
                    {block.text}
                  </p>
                ),
              )}
            </div>
          </div>
        </div>
      </article>

      <SiteFooter />
    </div>
  );
}
