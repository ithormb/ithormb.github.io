import Link from "next/link";
import { site } from "@/content/site";
import { t, type Locale } from "@/lib/i18n";
import { SectionNav } from "./SectionNav";
import { GitHubIcon, LinkedInIcon, MailIcon } from "@/components/ui/Icons";

export function Sidebar({ locale }: { locale: Locale }) {
  const other: Locale = locale === "pt" ? "en" : "pt";
  const nav = [
    { id: "sobre", label: t("nav_about", locale) },
    ...(site.experiencia.length ? [{ id: "experiencia", label: t("nav_experience", locale) }] : []),
    { id: "projetos", label: t("nav_projects", locale) },
    { id: "formacao", label: t("nav_education", locale) },
    { id: "numeros", label: t("nav_numbers", locale) },
  ];
  const social = [
    { href: site.links.github, label: "GitHub", icon: <GitHubIcon /> },
    { href: site.links.linkedin, label: "LinkedIn", icon: <LinkedInIcon /> },
    ...(site.links.email ? [{ href: `mailto:${site.links.email}`, label: "E-mail", icon: <MailIcon /> }] : []),
  ];
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-ink sm:text-5xl">
          <Link href={`/${locale}/`}>{site.name}</Link>
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-ink sm:text-xl">{site.role[locale]}</h2>
        <p className="mt-4 max-w-xs leading-normal">{site.tagline[locale]}</p>
        <SectionNav items={nav} />
      </div>
      <div className="mt-8 flex items-center gap-5">
        <ul className="flex items-center gap-5" aria-label="redes">
          {social.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={s.label}
                title={s.label}
                className="flex size-10 items-center justify-center text-ink-2 transition-colors hover:text-ink active:scale-95"
              >
                {s.icon}
              </a>
            </li>
          ))}
        </ul>
        <Link
          href={`/${other}/`}
          hrefLang={other}
          className="ml-2 flex h-10 items-center rounded-full border border-rule px-3 text-xs font-bold uppercase tracking-widest text-ink-2 transition-colors hover:border-ink-2 hover:text-ink active:scale-95"
        >
          {other}
        </Link>
      </div>
    </header>
  );
}
