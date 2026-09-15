import { site } from "@/content/site";
import { t, type Locale } from "@/lib/i18n";

export function Contact({ locale }: { locale: Locale }) {
  const links = [
    { label: "LinkedIn", href: site.links.linkedin },
    { label: "GitHub", href: site.links.github },
    { label: "E-mail", href: `mailto:${site.links.email}` },
  ];
  return (
    <div>
      <h3 className="font-serif text-3xl tracking-tight">{t("contact_title", locale)}</h3>
      <p className="mt-4 max-w-[36rem] leading-relaxed text-ink-2">{t("contact_body", locale)}</p>
      <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
        {links.map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className="link-ul inline-flex min-h-10 items-center active:scale-95"
            >
              {l.label} ↗
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
