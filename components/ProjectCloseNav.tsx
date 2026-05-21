"use client";

import { useRouter } from "next/navigation";

interface ProjectCloseNavProps {
  fallbackHref: string;
}

export function ProjectCloseNav({ fallbackHref }: ProjectCloseNavProps) {
  const router = useRouter();

  const handleClose = () => {
    if (typeof window !== "undefined" && window.history.length > 1) {
      router.back();
      return;
    }
    router.push(fallbackHref);
  };

  return (
    <nav
      className="relative z-20 mx-auto w-full max-w-[min(100%,1000px)] px-4 md:px-8"
      aria-label="Project navigation"
    >
      <div className="flex justify-center pb-1 pt-0">
        <button
          type="button"
          onClick={handleClose}
          className="font-[family-name:var(--font-montserrat)] text-[11px] font-bold uppercase tracking-[0.2em] text-neutral-900 transition-opacity hover:opacity-60 sm:text-[12px]"
        >
          Close
        </button>
      </div>
    </nav>
  );
}
