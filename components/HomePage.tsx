import Image from "next/image";
import Link from "next/link";
import { AboutIntro } from "@/components/AboutIntro";
import { HomeCarousel } from "@/components/HomeCarousel";
import { SiteFooter } from "@/components/SiteFooter";
import { assetPath } from "@/lib/asset";
import { getHomeConfig } from "@/lib/home";
import { getSiteConfig } from "@/lib/site";
import type { HomeCategory } from "@/lib/types";

function CategoryBlock({
  category,
  compact = false,
}: {
  category: HomeCategory;
  compact?: boolean;
}) {
  return (
    <Link
      href={`/projects/${category.slug}/`}
      className="group flex flex-col items-center text-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-900"
    >
      <div
        className={`relative overflow-hidden bg-neutral-100/60 ${category.imageClass}`}
      >
        <Image
          src={assetPath(category.image)}
          alt={category.title}
          fill
          className="object-cover transition-opacity duration-300 group-hover:opacity-90"
          sizes="200px"
          unoptimized
        />
      </div>
      <h2
        className={`mt-3 font-[family-name:var(--font-montserrat)] font-bold leading-snug text-neutral-900 ${
          compact ? "max-w-[170px] text-[14px]" : "max-w-[220px] text-[15px] md:text-[16px]"
        }`}
      >
        {category.title}
      </h2>
      <p
        className={`mt-2 font-[family-name:var(--font-montserrat)] font-normal leading-relaxed text-neutral-800 ${
          compact ? "max-w-[175px] text-[10px]" : "max-w-[210px] text-[11px]"
        }`}
      >
        {category.description}
      </p>
    </Link>
  );
}

export function HomePage() {
  const home = getHomeConfig();
  const site = getSiteConfig();
  const [architecture, ephemeral, otherStories] = home.categories;

  return (
    <>
      <section
        id="projects"
        className="relative bg-home-surface px-6 pb-20 pt-6 md:px-12 md:pt-8 lg:px-16 lg:pb-24"
      >
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-start gap-14 lg:grid-cols-[minmax(0,0.82fr)_minmax(300px,1.55fr)_minmax(0,0.82fr)] lg:gap-x-8 lg:gap-y-10">
          <div className="flex justify-center lg:col-start-1 lg:row-start-1 lg:justify-start lg:pt-[5.5rem]">
            <CategoryBlock category={architecture} compact />
          </div>

          <div className="flex flex-col items-center lg:col-start-2 lg:row-span-2 lg:row-start-1">
            <div className="relative aspect-square w-full max-w-[min(100%,520px)] overflow-hidden bg-neutral-100/50">
              <Image
                src={assetPath(home.vibeImage)}
                alt={home.vibeImageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 90vw, 520px"
                priority
                unoptimized
              />
            </div>
            <div className="mt-10 flex w-full justify-center lg:mt-12">
              <CategoryBlock category={otherStories} />
            </div>
          </div>

          <div className="flex justify-center lg:col-start-3 lg:row-start-1 lg:-mt-6 lg:justify-end lg:pt-0">
            <CategoryBlock category={ephemeral} compact />
          </div>
        </div>

        <Link
          href={home.paintingPortfolio.href}
          className="mt-8 block text-right font-[family-name:var(--font-montserrat)] text-[12px] font-bold text-neutral-900 hover:opacity-60 lg:absolute lg:bottom-8 lg:right-12 lg:mt-0"
        >
          {home.paintingPortfolio.label}
        </Link>
      </section>

      <HomeCarousel images={home.carouselImages.map(assetPath)} />

      <section className="bg-home-surface px-6 py-12 md:px-12 md:py-14 lg:px-16">
        <AboutIntro
          paragraphs={home.aboutPreview.paragraphs}
          portraitImage={home.aboutPreview.portraitImage}
          portraitAlt={site.name}
        />
        <div className="mx-auto mt-6 flex max-w-[1100px] justify-end md:mt-8">
          <Link
            href={home.aboutPreview.readMoreHref}
            className="font-[family-name:var(--font-montserrat)] text-[11px] font-bold uppercase tracking-[0.15em] text-neutral-900 hover:opacity-60"
          >
            READ MORE
          </Link>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
