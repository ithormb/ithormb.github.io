import Link from "next/link";
import { site } from "@/content/site";
import { t, type Locale } from "@/lib/i18n";

export function Navbar({ locale, path = "/" }: { locale: Locale; path?: string }) {
  const other: Locale = locale === "pt" ? "en" : "pt";
  const home = `/${locale}/`;
  const links = [
    { href: `${home}#sobre`, label: t("nav_about", locale) },
    { href: `${home}#experiencia`, label: t("nav_experience", locale) },
    { href: `${home}#projetos`, label: t("nav_projects", locale) },
    { href: `/${locale}/automacoes/`, label: t("section_automations", locale) },
    { href: `${home}#contato`, label: t("nav_contact", locale) },
  ];
  return (
    <header className="sticky top-0 z-40 border-b border-rule bg-bg/85 backdrop-blur">
      <nav aria-label="principal" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link href={home} className="flex items-center gap-2 font-bold tracking-tight text-ink">
          <span className="flex size-8 items-center justify-center rounded-lg bg-ink text-xs text-white">TB</span>
          <span className="hidden sm:inline">{site.name}</span>
        </Link>
        <ul className="hidden items-center gap-7 text-sm md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="text-ink-2 transition-colors hover:text-ink">{l.label}</Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <Link
            href={`/${other}${path}`}
            hrefLang={other}
            className="flex h-10 items-center rounded-lg px-3 text-xs font-bold uppercase tracking-widest text-ink-2 hover:text-ink active:scale-95"
          >
            {other}
          </Link>
          <a
            href={site.links.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            className="hidden h-10 items-center gap-1.5 rounded-full bg-ink px-5 text-sm font-semibold text-white transition-colors hover:bg-accent active:scale-95 sm:flex"
          >
            LinkedIn <span aria-hidden="true">↗</span>
          </a>
          <details className="relative md:hidden">
            <summary className="flex size-10 cursor-pointer list-none items-center justify-center rounded-lg border border-rule text-ink [&::-webkit-details-marker]:hidden" aria-label={t("menu", locale)}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16" /></svg>
            </summary>
            <ul className="absolute right-0 mt-2 w-52 rounded-xl border border-rule bg-surface p-2 shadow-2xl">
              {links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="flex min-h-10 items-center rounded-lg px-3 text-sm text-ink-2 hover:bg-surface-2 hover:text-ink">{l.label}</Link>
                </li>
              ))}
              <li>
                <a href={site.links.linkedin} target="_blank" rel="noreferrer noopener" className="flex min-h-10 items-center rounded-lg px-3 text-sm font-semibold text-accent-ink hover:bg-surface-2">LinkedIn ↗</a>
              </li>
            </ul>
          </details>
        </div>
      </nav>
    </header>
  );
}
