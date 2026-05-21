import Image from "next/image";
import { assetPath } from "@/lib/asset";
import type { HomeAboutParagraph } from "@/lib/types";

interface AboutIntroProps {
  paragraphs: HomeAboutParagraph[];
  portraitImage: string;
  portraitAlt: string;
}

export function AboutIntro({
  paragraphs,
  portraitImage,
  portraitAlt,
}: AboutIntroProps) {
  return (
    <div className="mx-auto grid w-full max-w-[1100px] grid-cols-1 items-start gap-8 md:grid-cols-[1fr_200px] md:gap-10 lg:grid-cols-[1fr_240px] lg:gap-12">
      <div className="space-y-4 font-[family-name:var(--font-montserrat)] text-[13px] leading-[1.65] text-neutral-900 md:text-[14px] md:leading-[1.7]">
        {paragraphs.map((paragraph, index) => (
          <p
            key={index}
            className={paragraph.bold ? "font-bold" : "font-normal"}
          >
            {paragraph.text}
          </p>
        ))}
      </div>
      <div className="relative mx-auto aspect-[5/6.5] w-full max-w-[240px] overflow-hidden bg-neutral-100 lg:mx-0 lg:max-w-none">
        <Image
          src={assetPath(portraitImage)}
          alt={portraitAlt}
          fill
          className="object-cover"
          sizes="240px"
          unoptimized
        />
      </div>
    </div>
  );
}
