"use client";

import Image from "next/image";
import { useCallback, useState } from "react";

interface ProjectDetailCarouselProps {
  images: string[];
  alt: string;
}

/** Each slide occupies this share of the viewport; remainder shows the next image peeking. */
const SLIDE_WIDTH = "74.5%";

export function ProjectDetailCarousel({
  images,
  alt,
}: ProjectDetailCarouselProps) {
  const [index, setIndex] = useState(0);
  const total = images.length;
  const showPeek = total > 1;

  const goPrev = useCallback(() => {
    setIndex((current) => (current === 0 ? total - 1 : current - 1));
  }, [total]);

  const goNext = useCallback(() => {
    setIndex((current) => (current === total - 1 ? 0 : current + 1));
  }, [total]);

  if (total === 0) return null;

  return (
    <section className="w-full" aria-label="Project gallery">
      <div className="w-full overflow-hidden bg-home-surface">
        <div
          className="flex gap-0.5 transition-transform duration-700 ease-in-out motion-reduce:transition-none"
          style={{
            transform: showPeek
              ? `translateX(calc(-1 * ${index} * (${SLIDE_WIDTH} + 2px)))`
              : undefined,
          }}
        >
          {images.map((src, imageIndex) => (
            <div
              key={`${src}-${imageIndex}`}
              className={`relative aspect-[16/10] min-h-[280px] shrink-0 flex-none bg-neutral-200/80 md:min-h-[380px] lg:min-h-[440px] ${
                showPeek ? "" : "w-full"
              }`}
              style={showPeek ? { width: SLIDE_WIDTH } : undefined}
            >
              <Image
                src={src}
                alt={
                  imageIndex === index
                    ? `${alt} — image ${imageIndex + 1} of ${total}`
                    : ""
                }
                fill
                className="object-cover"
                sizes="100vw"
                priority={imageIndex === 0}
                aria-hidden={imageIndex !== index}
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>

      {showPeek ? (
        <div
          className="mt-3 flex justify-end gap-5 md:mt-4 md:gap-6"
          style={{ width: SLIDE_WIDTH }}
        >
          <button
            type="button"
            onClick={goPrev}
            className="font-[family-name:var(--font-montserrat)] text-[22px] font-light leading-none text-neutral-900 transition-opacity hover:opacity-50"
            aria-label="Previous image"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={goNext}
            className="font-[family-name:var(--font-montserrat)] text-[22px] font-light leading-none text-neutral-900 transition-opacity hover:opacity-50"
            aria-label="Next image"
          >
            ›
          </button>
        </div>
      ) : null}
    </section>
  );
}
