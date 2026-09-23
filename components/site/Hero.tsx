import Link from "next/link";
import { site } from "@/content/site";
import { t, type Locale } from "@/lib/i18n";
import { Portrait } from "./Portrait";
import { TechBadge } from "./Icon";

const DESTAQUE = ["n8n", "Python", "SQL", "Power BI", "Microsoft Fabric", "BigQuery", "OpenAI", "Claude Code", "LangChain"];

export function Hero({ locale }: { locale: Locale }) {
  const h = site.headline[locale];
  return (
    <section className="relative overflow-x-clip">
      <div aria-hidden="true" className="pointer-events-none absolute -top-40 right-[-10%] h-[640px] w-[640px] rounded-full bg-[#ffe4d0] opacity-70 blur-3xl" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 pb-16 pt-10 md:gap-14 sm:px-8 md:grid-cols-[1.15fr_1fr] md:pt-16">
        <div>
          <p className="text-lg text-ink-2">
            {t("hello", locale)} <span className="font-semibold text-ink">{site.name}</span>
          </p>
          <p className="mt-1 text-sm font-bold uppercase tracking-[0.14em] text-accent-ink">{t("role_pill", locale)}</p>
          <h1 className="mt-3 text-5xl font-semibold leading-[1.02] text-ink sm:text-6xl lg:text-[4.4rem]">
            {h.antes}
            <span className="relative whitespace-nowrap text-accent">
              {h.destaque}
              <svg aria-hidden="true" viewBox="0 0 220 18" preserveAspectRatio="none" className="absolute -bottom-2 left-0 h-3 w-full text-accent/60">
                <path d="M3 13 C 50 3, 120 3, 217 9" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
              </svg>
            </span>
            {h.depois}
          </h1>
          <p className="mt-7 max-w-xl text-[1.05rem] leading-relaxed">{site.tagline[locale]}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href={`/${locale}/#projetos`} className="inline-flex h-12 items-center gap-2 rounded-full bg-accent px-6 text-sm font-semibold text-white shadow-[0_12px_24px_-10px_rgba(242,106,27,0.7)] transition hover:bg-accent-2 active:scale-95">
              {t("cta_work", locale)} <span aria-hidden="true">↗</span>
            </Link>
            <a href={site.links.linkedin} target="_blank" rel="noreferrer noopener" className="inline-flex h-12 items-center gap-2 rounded-full bg-ink px-6 text-sm font-semibold text-white transition hover:bg-ink-2 active:scale-95">
              {t("cta_talk", locale)}
            </a>
          </div>
          <p className="mt-10 text-xs font-semibold uppercase tracking-widest text-muted">{t("tech_i_use", locale)}</p>
          <ul className="mt-4 flex flex-wrap gap-3">
            {DESTAQUE.map((n) => (
              <li key={n}><TechBadge nome={n} /></li>
            ))}
          </ul>
        </div>
        <div className="order-first md:order-none">
          <Portrait locale={locale} />
        </div>
      </div>
    </section>
  );
}
