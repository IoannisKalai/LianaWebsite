import type { Metadata } from "next";
import { AboutSections } from "@/components/AboutSections";
import { ContactBlock } from "@/components/ContactBlock";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-2xl">
      <AboutSections />
      <section className="mt-16">
        <h2 className="mb-4 text-[13px] font-normal uppercase tracking-[0.12em] text-neutral-500">
          Contact
        </h2>
        <ContactBlock />
      </section>
    </div>
  );
}
