import Image from "next/image";
import { AboutIntro } from "@/components/AboutIntro";
import { HomeCarousel } from "@/components/HomeCarousel";
import { assetPath } from "@/lib/asset";
import { getAboutPageConfig } from "@/lib/about-page";
import { getSiteConfig } from "@/lib/site";
import type { AboutCvEntry } from "@/lib/types";

function CvColumn({
  title,
  entries,
}: {
  title: string;
  entries: AboutCvEntry[];
}) {
  return (
    <div>
      <h2 className="font-[family-name:var(--font-montserrat)] text-[13px] font-bold uppercase tracking-[0.12em] text-neutral-900 md:text-[14px]">
        {title}
      </h2>
      <ul className="mt-8 space-y-10">
        {entries.map((entry, index) => (
          <li
            key={`${entry.primary}-${index}`}
            className="font-[family-name:var(--font-montserrat)] text-[13px] leading-snug text-neutral-900 md:text-[14px]"
          >
            <p className="font-bold">{entry.primary}</p>
            {entry.lines.length > 0 ? (
              <div className="mt-1 space-y-0.5 font-normal">
                {entry.lines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function AboutPageContent() {
  const about = getAboutPageConfig();
  const site = getSiteConfig();

  return (
    <>
      <section className="w-full bg-home-surface pt-4 md:pt-6">
        <div className="relative aspect-[16/7] w-full min-h-[280px] bg-neutral-300 md:min-h-[360px] lg:min-h-[420px]">
          <Image
            src={assetPath(about.heroImage)}
            alt={about.heroAlt}
            fill
            className="object-cover grayscale"
            sizes="100vw"
            priority
            unoptimized
          />
        </div>
      </section>

      <section className="bg-home-surface px-4 py-10 sm:px-6 md:px-12 md:py-16 lg:px-16">
        <AboutIntro
          paragraphs={about.introduction.paragraphs}
          portraitImage={about.introduction.portraitImage}
          portraitAlt={site.name}
        />
      </section>

      <section className="bg-home-surface px-4 pb-14 sm:px-6 md:px-12 md:pb-20 lg:px-16 lg:pb-24">
        <div className="mx-auto grid w-full max-w-[1100px] grid-cols-1 gap-14 md:grid-cols-2 md:gap-16 lg:gap-20">
          <CvColumn
            title={about.education.title}
            entries={about.education.entries}
          />
          <CvColumn
            title={about.workExperience.title}
            entries={about.workExperience.entries}
          />
        </div>
      </section>

      <section
        id="contact"
        className="scroll-mt-28 bg-home-surface px-4 pb-14 sm:px-6 md:scroll-mt-32 md:px-12 md:pb-20 lg:px-16 lg:pb-24"
      >
        <div className="mx-auto grid w-full max-w-[1100px] grid-cols-1 items-start gap-10 md:grid-cols-[1fr_240px] md:gap-12 lg:grid-cols-[1fr_280px] lg:gap-14">
          <div>
            <h2 className="font-[family-name:var(--font-montserrat)] text-[13px] font-bold uppercase tracking-[0.12em] text-neutral-900 md:text-[14px]">
              {about.contact.title}
            </h2>
            <div className="mt-8 space-y-5 font-[family-name:var(--font-montserrat)] text-[13px] leading-relaxed text-neutral-900 md:text-[14px]">
              <p>
                <span className="font-bold">Email address: </span>
                <a
                  href={`mailto:${about.contact.email}`}
                  className="hover:opacity-60"
                >
                  {about.contact.email}
                </a>
              </p>
              <p>
                <span className="font-bold">Phone number: </span>
                <a
                  href={`tel:${about.contact.phone.replace(/\s/g, "")}`}
                  className="hover:opacity-60"
                >
                  {about.contact.phone}
                </a>
              </p>
              <div>
                {about.contact.addressLines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </div>
          </div>
          <div className="mx-auto w-full max-w-[min(100%,280px)] md:mx-0 md:max-w-none">
            <HomeCarousel
              images={about.contact.carouselImages.map(assetPath)}
              alt="Contact"
              frameClassName="aspect-square"
              imageSizes="280px"
            />
          </div>
        </div>
      </section>
    </>
  );
}
