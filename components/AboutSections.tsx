import { getAboutSections } from "@/lib/about";
import { MarkdownContent } from "@/lib/markdown";

export function AboutSections() {
  const sections = getAboutSections();

  return (
    <div className="space-y-12">
      {sections.map((section) => (
        <section key={section.id} id={section.id}>
          <h2 className="mb-4 text-[13px] font-normal uppercase tracking-[0.12em] text-neutral-500">
            {section.title}
          </h2>
          <MarkdownContent content={section.content} />
        </section>
      ))}
    </div>
  );
}
