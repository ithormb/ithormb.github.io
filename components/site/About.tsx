import Link from "next/link";
import { site } from "@/content/site";
import { t, type Locale } from "@/lib/i18n";
import { Band, SectionHeader } from "./SectionHeader";
import { StatIcon } from "./Icon";

export function About({ locale }: { locale: Locale }) {
  return (
    <Band id="sobre" alt>
      <div className="grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:items-start">
        <div>
          <SectionHeader eyebrow={t("nav_about", locale)} title={site.sobreTitulo[locale]} />
          <div className="mt-6 space-y-4 leading-relaxed">
            {site.sobre.map((p, i) => (
              <p key={i}>{p[locale]}</p>
            ))}
          </div>
          <Link href={`/${locale}/#experiencia`} className="mt-8 inline-flex h-11 items-center gap-2 rounded-lg border border-ink/20 px-5 text-sm font-semibold text-ink transition-colors hover:border-ink active:scale-95">
            {t("more_about", locale)} <span aria-hidden="true">→</span>
          </Link>
        </div>
        <dl className="grid grid-cols-2 gap-4 lg:mt-14">
          {site.stats.map((s) => (
            <div key={s.rotulo.pt} className="flex flex-col rounded-2xl border border-rule bg-surface-2/50 p-5">
              <span className="flex size-10 items-center justify-center rounded-lg bg-accent-soft text-accent-ink"><StatIcon kind={s.icone} /></span>
              <dd className="order-2 mt-4 text-3xl font-bold tracking-tight text-ink">{s.valor}</dd>
              <dt className="order-3 mt-1 text-sm leading-snug">{s.rotulo[locale]}</dt>
            </div>
          ))}
        </dl>
      </div>
    </Band>
  );
}
