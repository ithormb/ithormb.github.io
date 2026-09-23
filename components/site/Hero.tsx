import Link from "next/link";
import { site } from "@/content/site";
import { t, type Locale } from "@/lib/i18n";
import { Portrait } from "./Portrait";
import { TechBadge } from "./Icon";

const DESTAQUE = ["n8n", "Python", "SQL", "Power BI", "Microsoft Fabric", "BigQuery", "OpenAI", "Claude Code", "LangChain"];

export function Hero({ locale }: { locale: Locale }) {
  return (
    <section className="relative overflow-x-clip">
      <div aria-hidden="true" className="pointer-events-none absolute -top-40 right-0 h-[520px] w-[520px] rounded-full bg-[#ffe4d0] opacity-60 blur-3xl" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-14 sm:px-8 md:grid-cols-[1.1fr_1fr] md:pt-20">
        <div>
          <span className="inline-flex items-center rounded-full bg-accent-soft px-3.5 py-1.5 text-[0.7rem] font-bold uppercase tracking-widest text-accent-ink">
            {t("role_pill", locale)}
          </span>
          <p className="mt-6 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            {site.saudacao[locale]} <span className="text-gradient">{site.primeiroNome}</span>
          </p>
          <h1 className="mt-2 text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl">{site.headline[locale]}</h1>
          <p className="mt-5 max-w-lg text-lg leading-relaxed">{site.tagline[locale]}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href={`/${locale}/#projetos`} className="inline-flex h-11 items-center gap-2 rounded-lg bg-accent px-5 text-sm font-semibold text-white transition-colors hover:bg-accent-2 active:scale-95">
              {t("cta_work", locale)} <span aria-hidden="true">↗</span>
            </Link>
            <a href={site.links.linkedin} target="_blank" rel="noreferrer noopener" className="inline-flex h-11 items-center gap-2 rounded-lg border border-ink/20 bg-surface px-5 text-sm font-semibold text-ink transition-colors hover:border-ink active:scale-95">
              {t("cta_linkedin", locale)}
            </a>
          </div>
          <p className="mt-10 text-xs font-semibold uppercase tracking-widest text-muted">{t("tech_i_use", locale)}</p>
          <ul className="mt-4 flex flex-wrap gap-3">
            {DESTAQUE.map((n) => (
              <li key={n}><TechBadge nome={n} /></li>
            ))}
          </ul>
        </div>
        <Portrait />
      </div>
    </section>
  );
}
