import Image from "next/image";
import Link from "next/link";
import { AboutIntro } from "@/components/AboutIntro";
import { HomeCarousel } from "@/components/HomeCarousel";
import { SiteFooter } from "@/components/SiteFooter";
import { assetPath } from "@/lib/asset";
import { getHomeConfig } from "@/lib/home";
import { getSiteConfig } from "@/lib/site";
import type { HomeCategory } from "@/lib/types";

function CategoryBlock({ category }: { category: HomeCategory }) {
  return (
    <Link
      href={`/projects/${category.slug}/`}
      className="group flex w-full max-w-md flex-col items-center text-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-900 sm:max-w-none lg:max-w-[280px] lg:items-start lg:text-left"
    >
      <div
        className={`relative w-full overflow-hidden bg-neutral-100/60 ${category.imageClass}`}
      >
        <Image
          src={assetPath(category.image)}
          alt={category.title}
          fill
          className="object-cover transition-opacity duration-300 group-hover:opacity-90"
          sizes="(max-width: 1024px) 90vw, 320px"
          unoptimized
        />
      </div>
      <h2 className="mt-3 w-full font-[family-name:var(--font-montserrat)] text-[15px] font-bold leading-snug text-neutral-900 md:text-[16px]">
        {category.title}
      </h2>
      <p className="mt-2 w-full font-[family-name:var(--font-montserrat)] text-[11px] leading-relaxed text-neutral-800 md:text-[12px]">
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
    <div className="flex flex-1 flex-col bg-home-surface">
      <section
        id="projects"
        className="relative bg-home-surface px-4 pb-16 pt-6 sm:px-6 md:px-8 md:pb-20 md:pt-8 lg:px-12 lg:pb-24"
      >
        <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-12 lg:grid lg:grid-cols-[minmax(0,0.82fr)_minmax(300px,1.55fr)_minmax(0,0.82fr)] lg:items-start lg:gap-x-8 lg:gap-y-10">
          <div className="w-full lg:col-start-1 lg:row-start-1 lg:justify-self-start lg:pt-[5.5rem]">
            <CategoryBlock category={architecture} />
          </div>

          <div className="flex w-full flex-col items-center lg:col-start-2 lg:row-span-2 lg:row-start-1">
            <div className="relative aspect-square w-full max-w-md overflow-hidden bg-neutral-100/50 sm:max-w-lg lg:max-w-[min(100%,520px)]">
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
            <div className="mt-10 w-full lg:mt-12">
              <CategoryBlock category={otherStories} />
            </div>
          </div>

          <div className="w-full lg:col-start-3 lg:row-start-1 lg:-mt-6 lg:justify-self-end">
            <CategoryBlock category={ephemeral} />
          </div>
        </div>

        <Link
          href={home.paintingPortfolio.href}
          className="mt-8 block w-full text-right font-[family-name:var(--font-montserrat)] text-[12px] font-bold text-neutral-900 hover:opacity-60 lg:absolute lg:bottom-8 lg:right-12 lg:mt-0"
        >
          {home.paintingPortfolio.label}
        </Link>
      </section>

      <HomeCarousel images={home.carouselImages.map(assetPath)} />

      <section className="bg-home-surface px-4 py-10 sm:px-6 md:px-8 md:py-14 lg:px-12">
        <AboutIntro
          paragraphs={home.aboutPreview.paragraphs}
          portraitImage={home.aboutPreview.portraitImage}
          portraitAlt={site.name}
        />
        <div className="mx-auto mt-6 flex w-full max-w-[1100px] justify-end md:mt-8">
          <Link
            href={home.aboutPreview.readMoreHref}
            className="font-[family-name:var(--font-montserrat)] text-[11px] font-bold uppercase tracking-[0.15em] text-neutral-900 hover:opacity-60"
          >
            READ MORE
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
