function renderInline(text: string): React.ReactNode[] {
  const parts = text.split(/(\*[^*]+\*|_[^_]+_)/g);
  return parts.map((part, i) => {
    if (
      (part.startsWith("*") && part.endsWith("*")) ||
      (part.startsWith("_") && part.endsWith("_"))
    ) {
      return <em key={i}>{part.slice(1, -1)}</em>;
    }
    return part;
  });
}

export function MarkdownContent({ content }: { content: string }) {
  const blocks = content.split(/\n\n+/);

  return (
    <div className="space-y-4">
      {blocks.map((block, i) => {
        const trimmed = block.trim();
        if (!trimmed) return null;

        if (trimmed.startsWith("- ")) {
          const items = trimmed.split("\n").filter((line) => line.startsWith("- "));
          return (
            <ul key={i} className="list-none space-y-2 pl-0">
              {items.map((item, j) => (
                <li key={j} className="text-[15px] leading-relaxed">
                  {renderInline(item.replace(/^- /, ""))}
                </li>
              ))}
            </ul>
          );
        }

        return (
          <p key={i} className="text-[15px] leading-relaxed">
            {renderInline(trimmed)}
          </p>
        );
      })}
    </div>
  );
}