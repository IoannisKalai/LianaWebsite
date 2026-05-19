"use client";

import Image from "next/image";
import { useCallback, useState } from "react";

interface HomeCarouselProps {
  images: string[];
  alt?: string;
  /** Tailwind classes for the slide frame (default: wide hero). */
  frameClassName?: string;
  imageSizes?: string;
}

function ChevronLeft({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M15 18l-6-6 6-6" />
    </svg>
  );
}

function ChevronRight({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M9 18l6-6-6-6" />
    </svg>
  );
}

export function HomeCarousel({
  images,
  alt = "Featured project",
  frameClassName = "aspect-[16/7] min-h-[300px] lg:min-h-[400px]",
  imageSizes = "100vw",
}: HomeCarouselProps) {
  const [index, setIndex] = useState(0);
  const total = images.length;

  const goPrev = useCallback(() => {
    setIndex((current) => (current === 0 ? total - 1 : current - 1));
  }, [total]);

  const goNext = useCallback(() => {
    setIndex((current) => (current === total - 1 ? 0 : current + 1));
  }, [total]);

  if (total === 0) return null;

  return (
    <section className="relative w-full bg-neutral-200" aria-label="Featured images">
      <div className={`relative w-full ${frameClassName}`}>
        <Image
          key={images[index]}
          src={images[index]}
          alt={`${alt} — slide ${index + 1} of ${total}`}
          fill
          className="object-cover"
          sizes={imageSizes}
          priority={index === 0}
          unoptimized
        />

        {total > 1 ? (
          <>
            <button
              type="button"
              onClick={goPrev}
              className="absolute left-4 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border-0 bg-black/15 text-white/95 backdrop-blur-sm transition duration-200 hover:bg-black/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/80 md:left-8 md:h-12 md:w-12"
              aria-label="Previous image"
            >
              <ChevronLeft />
            </button>
            <button
              type="button"
              onClick={goNext}
              className="absolute right-4 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border-0 bg-black/15 text-white/95 backdrop-blur-sm transition duration-200 hover:bg-black/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/80 md:right-8 md:h-12 md:w-12"
              aria-label="Next image"
            >
              <ChevronRight />
            </button>
          </>
        ) : null}
      </div>
    </section>
  );
}
