"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

interface ProjectDetailCarouselProps {
  images: string[];
  alt: string;
}

const DESKTOP_SLIDE_WIDTH = "74.5%";
const MOBILE_SLIDE_WIDTH = "100%";

export function ProjectDetailCarousel({
  images,
  alt,
}: ProjectDetailCarouselProps) {
  const [index, setIndex] = useState(0);
  const [slideWidth, setSlideWidth] = useState(DESKTOP_SLIDE_WIDTH);
  const total = images.length;
  const showPeek = total > 1 && slideWidth !== MOBILE_SLIDE_WIDTH;

  useEffect(() => {
    const media = window.matchMedia("(min-width: 768px)");
    const update = () => {
      setSlideWidth(media.matches ? DESKTOP_SLIDE_WIDTH : MOBILE_SLIDE_WIDTH);
    };
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  const goPrev = useCallback(() => {
    setIndex((current) => (current === 0 ? total - 1 : current - 1));
  }, [total]);

  const goNext = useCallback(() => {
    setIndex((current) => (current === total - 1 ? 0 : current + 1));
  }, [total]);

  if (total === 0) return null;

  const slideGap = showPeek ? "2px" : "0px";

  return (
    <section className="w-full" aria-label="Project gallery">
      <div className="w-full overflow-hidden bg-home-surface">
        <div
          className="flex transition-transform duration-700 ease-in-out motion-reduce:transition-none"
          style={{
            gap: slideGap,
            transform: `translateX(calc(-1 * ${index} * (${slideWidth} + ${slideGap})))`,
          }}
        >
          {images.map((src, imageIndex) => (
            <div
              key={`${src}-${imageIndex}`}
              className="relative aspect-[16/10] min-h-[220px] shrink-0 flex-none bg-neutral-200/80 sm:min-h-[300px] md:min-h-[380px] lg:min-h-[440px]"
              style={{ width: slideWidth }}
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

      {total > 1 ? (
        <div
          className="mt-3 flex justify-end gap-5 px-4 sm:px-6 md:mt-4 md:gap-6 md:px-8 lg:px-12"
          style={{ width: showPeek ? slideWidth : "100%" }}
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
