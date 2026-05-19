import { getSiteConfig } from "@/lib/site";

export function ContactBlock() {
  const site = getSiteConfig();
  const { contact, social } = site;

  return (
    <address className="not-italic border-t border-neutral-200 pt-8 text-[13px] leading-relaxed text-neutral-700">
      <p className="text-neutral-900">{site.name}</p>
      <p className="mt-1">{contact.location}</p>
      <p className="mt-3">
        <a
          href={`mailto:${contact.email}`}
          className="text-neutral-900 underline-offset-4 hover:underline"
        >
          {contact.email}
        </a>
      </p>
      {contact.phone ? (
        <p className="mt-1">
          <a
            href={`tel:${contact.phone.replace(/\s/g, "")}`}
            className="hover:underline underline-offset-4"
          >
            {contact.phone}
          </a>
        </p>
      ) : null}
      {social && (social.instagram || social.linkedin) ? (
        <p className="mt-4 flex flex-wrap gap-4">
          {social.instagram ? (
            <a
              href={social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-900 underline-offset-4 hover:underline"
            >
              Instagram
            </a>
          ) : null}
          {social.linkedin ? (
            <a
              href={social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-900 underline-offset-4 hover:underline"
            >
              LinkedIn
            </a>
          ) : null}
        </p>
      ) : null}
    </address>
  );
}
