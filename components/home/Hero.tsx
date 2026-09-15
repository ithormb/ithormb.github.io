import Link from "next/link";
import { site } from "@/content/site";
import { t, type Locale } from "@/lib/i18n";
import { HeroDiagram } from "@/components/diagrams/HeroDiagram";

export function Hero({ locale }: { locale: Locale }) {
  return (
    <section className="grid gap-10 py-14 sm:py-24 md:grid-cols-[1fr_320px] md:items-center md:gap-16">
      <div>
        <h1 className="font-serif text-[2.6rem] leading-[1.05] tracking-tight sm:text-6xl">
          {site.headline[locale]}
        </h1>
        <p className="mt-6 max-w-[34rem] text-lg leading-relaxed text-ink-2">
          {site.subheadline[locale]}
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Link
            href={`/${locale}/#projetos`}
            className="inline-flex min-h-10 items-center bg-ink px-4 text-sm text-paper transition-colors hover:bg-accent hover:text-accent-ink active:scale-95"
          >
            {t("hero_cta_projects", locale)}
          </Link>
          <a
            href={site.links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="link-ul inline-flex min-h-10 items-center px-2 text-sm active:scale-95"
          >
            {t("hero_cta_linkedin", locale)} ↗
          </a>
        </div>
      </div>
      <div className="hidden justify-self-end text-ink-2 md:block">
        <HeroDiagram locale={locale} />
      </div>
    </section>
  );
}
