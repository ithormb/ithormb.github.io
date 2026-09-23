import Link from "next/link";
import { site, type Projeto } from "@/content/site";
import { t, type Locale } from "@/lib/i18n";
import { Band, SectionHeader } from "./SectionHeader";
import { Thumb } from "@/components/thumbs/Thumb";

function Card({ p, i, locale }: { p: Projeto; i: number; locale: Locale }) {
  const externo = p.href.startsWith("http");
  const href = externo ? p.href : `/${locale}${p.href}`;
  const inner = (
    <>
      <div className="relative border-b border-rule bg-surface-2 p-4">
        <span className="absolute left-4 top-3 z-10 font-mono text-xs font-semibold text-accent-ink">{String(i + 1).padStart(2, "0")}</span>
        <Thumb kind={p.thumb} />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center gap-2 text-xs text-muted">
          <span>{p.ano}</span>
          {p.estudo && <span className="rounded border border-rule px-1.5 py-0.5">{t("study", locale)}</span>}
        </div>
        <h3 className="mt-2 font-semibold leading-snug text-ink transition-colors group-hover:text-accent-ink">{p.titulo[locale]}</h3>
        <p className="mt-2 text-sm leading-relaxed">{p.descricao[locale]}</p>
        {p.resultado && (
          <div className="mt-4 rounded-lg border-l-4 border-accent bg-surface-2 px-3 py-2.5">
            <p className="text-[0.7rem] font-bold uppercase tracking-widest text-accent-ink">{t("result_label", locale)}</p>
            <p className="mt-1 text-sm font-medium leading-snug text-ink">{p.resultado[locale]}</p>
          </div>
        )}
        <ul className="mt-4 flex flex-wrap gap-1.5">
          {p.tags.map((tag) => (
            <li key={tag} className="rounded-md border border-rule px-2 py-0.5 text-[0.7rem] text-ink-2">{tag}</li>
          ))}
        </ul>
        <span className="mt-auto pt-5 text-right text-sm font-semibold text-accent-ink">
          {t("view_project", locale)} <span aria-hidden="true" className="inline-block transition-transform group-hover:translate-x-1">→</span>
        </span>
      </div>
    </>
  );
  const cls = "group flex h-full flex-col overflow-hidden rounded-2xl border border-rule bg-surface transition hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_20px_50px_-24px_rgba(242,106,27,0.5)] motion-reduce:hover:translate-y-0";
  return externo ? (
    <a href={href} target="_blank" rel="noreferrer noopener" className={cls}>{inner}</a>
  ) : (
    <Link href={href} className={cls}>{inner}</Link>
  );
}

export function Projects({ locale }: { locale: Locale }) {
  return (
    <Band id="projetos">
      <SectionHeader eyebrow={t("projects_eyebrow", locale)} title={t("projects_title", locale)} center />
      <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {site.projetos.map((p, i) => (
          <li key={p.titulo.pt}><Card p={p} i={i} locale={locale} /></li>
        ))}
      </ul>
    </Band>
  );
}
