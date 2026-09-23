import { site } from "@/content/site";
import { t, type Locale } from "@/lib/i18n";
import { Eyebrow } from "./SectionHeader";
import { TechIcon } from "./Icon";
import { withBase } from "@/lib/paths";

export function Contact({ locale }: { locale: Locale }) {
  const redes = [
    { href: site.links.linkedin, label: "LinkedIn", icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45Z" /></svg> },
    { href: site.links.github, label: "GitHub", icon: <TechIcon nome="GitHub" size={18} /> },
    ...(site.links.email ? [{ href: `mailto:${site.links.email}`, label: site.links.email, icon: <span aria-hidden="true">✉</span> }] : []),
    { href: withBase(site.links.cv[locale]), label: t("cta_cv", locale), icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 4v11M7 10l5 5 5-5M5 20h14" /></svg> },
  ];
  return (
    <section id="contato" className="border-t border-rule/60">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <div className="grid gap-6 rounded-3xl bg-surface-2 p-8 md:grid-cols-[1.2fr_1fr_0.8fr] md:p-10">
          <div>
            <Eyebrow>{t("contact_eyebrow", locale)}</Eyebrow>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">{t("contact_title", locale)}</h2>
            <p className="mt-3 text-sm leading-relaxed">{t("contact_body", locale)}</p>
            <a href={site.links.linkedin} target="_blank" rel="noreferrer noopener" className="mt-6 inline-flex h-11 items-center gap-2 rounded-lg bg-accent px-5 text-sm font-semibold text-white transition-colors hover:bg-accent-2 active:scale-95">
              {t("cta_linkedin", locale)} <span aria-hidden="true">↗</span>
            </a>
          </div>
          <figure className="rounded-2xl bg-surface p-6 shadow-[0_8px_24px_-16px_rgba(23,18,14,0.3)]">
            <span aria-hidden="true" className="text-4xl leading-none text-accent">&ldquo;</span>
            <blockquote className="mt-1 text-lg font-semibold leading-snug text-ink">{t("quote", locale)}</blockquote>
            <figcaption className="mt-4 flex items-center gap-3 text-sm">
              <span className="flex size-9 items-center justify-center rounded-full bg-ink text-xs font-bold text-white">TB</span>
              <span>
                <span className="block font-semibold text-ink">{site.name}</span>
                <span className="text-xs text-muted">{t("quote_note", locale)}</span>
              </span>
            </figcaption>
          </figure>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted">{t("follow", locale)}</p>
            <ul className="mt-4 space-y-2">
              {redes.map((r) => (
                <li key={r.label}>
                  <a href={r.href} target="_blank" rel="noreferrer noopener" className="flex min-h-10 items-center gap-3 text-sm text-ink transition-colors hover:text-accent-ink">
                    <span className="flex size-9 items-center justify-center rounded-lg border border-rule bg-surface">{r.icon}</span>
                    {r.label}
                  </a>
                </li>
              ))}
              <li className="flex min-h-10 items-center gap-3 text-sm">
                <span className="flex size-9 items-center justify-center rounded-lg border border-rule bg-surface" aria-hidden="true">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 21s-7-6.1-7-11a7 7 0 1 1 14 0c0 4.9-7 11-7 11Z" /><circle cx="12" cy="10" r="2.5" /></svg>
                </span>
                {site.local[locale]}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
