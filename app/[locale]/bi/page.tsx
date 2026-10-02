import type { Metadata } from "next";
import { site } from "@/content/site";
import { bi } from "@/content/bi";
import { isLocale, t, type Locale } from "@/lib/i18n";
import { Subpage, SubSection } from "@/components/ui/Subpage";
import { TechIcon } from "@/components/site/Icon";
import { withBase } from "@/lib/paths";

// Só leva ícone o que tem marca; conceito (modelagem, formato de projeto) fica só no texto.
const COM_LOGO: Record<string, string> = {
  "Power BI": "Power BI", "Looker Studio": "Looker", Looker: "Looker", DAX: "DAX", "Power Query (M)": "Power Query", "Power Query": "Power Query", BigQuery: "BigQuery",
  dbt: "dbt", "dbt tests": "dbt", "dbt docs": "dbt", SQL: "SQL", Python: "Python", n8n: "n8n", Git: "Git", PostgreSQL: "PostgreSQL", "APIs REST": "APIs REST",
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const l: Locale = isLocale(locale) ? locale : "pt";
  return { title: `${bi.nome[l]} — ${site.name}`, description: bi.resumo[l] };
}

export default async function BiPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const l: Locale = isLocale(locale) ? locale : "pt";
  return (
    <Subpage locale={l} path="/bi/">
      <header className="mt-10">
        <h1 className="text-4xl font-semibold tracking-tight text-ink sm:text-5xl">{bi.nome[l]}</h1>
        <p className="mt-6 leading-relaxed">{bi.resumo[l]}</p>
        <ul className="mt-5 flex flex-wrap gap-2">
          {bi.stack.map((s) => (
            <li key={s} className="flex items-center gap-2 rounded-full border border-rule bg-surface px-3 py-1 text-xs font-medium text-ink">
              {COM_LOGO[s] && <TechIcon nome={COM_LOGO[s]} size={14} />}
              {s}
            </li>
          ))}
        </ul>
      </header>

      <SubSection titulo={t("bi_screens", l)}>
        <p className="-mt-4 mb-6 text-sm text-muted">{t("bi_fake", l)}</p>
        <ul className="space-y-8">
          {bi.telas.map((tela) => (
            <li key={tela.arquivo} id={`tela-${tela.arquivo.split("/").pop()?.replace(".webp", "")}`} className="scroll-mt-24">
              <a href={withBase(tela.arquivo)} target="_blank" rel="noopener" className="group block overflow-hidden rounded-xl border border-rule bg-surface shadow-[0_18px_40px_-24px_rgba(23,18,14,0.45)] transition hover:border-accent/50">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={withBase(tela.arquivo)} alt={`${tela.titulo[l]} — ${tela.legenda[l]}`} width={1536} height={864} loading="lazy" className="block h-auto w-full" />
              </a>
              <h3 className="mt-3 text-lg font-semibold text-ink">{tela.titulo[l]}</h3>
              <p className="mt-1 text-sm leading-relaxed">{tela.legenda[l]}</p>
            </li>
          ))}
        </ul>
      </SubSection>

      <SubSection titulo={t("bi_looker", l)}>
        <figure>
          <a href={withBase(bi.looker.imagem)} target="_blank" rel="noopener" className="block overflow-hidden rounded-xl border border-rule shadow-[0_18px_40px_-24px_rgba(23,18,14,0.45)] transition hover:border-accent/50">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={withBase(bi.looker.imagem)} alt={bi.looker.titulo[l]} width={1227} height={687} loading="lazy" className="block h-auto w-full" />
          </a>
          <figcaption className="mt-2 text-xs text-muted">{bi.looker.fonte[l]}</figcaption>
        </figure>
        <h3 className="mt-5 text-lg font-semibold text-ink">{bi.looker.titulo[l]}</h3>
        <p className="mt-2 text-sm leading-relaxed">{bi.looker.descricao[l]}</p>
        <ul className="mt-3 space-y-1.5 text-sm">
          {bi.looker.mostra.map((m) => (
            <li key={m.pt} className="flex gap-2">
              <span aria-hidden="true" className="mt-[0.45rem] size-1.5 shrink-0 rounded-full bg-accent" />
              {m[l]}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-xs font-bold uppercase tracking-widest text-accent-ink">{t("bi_pipeline_short", l)}</p>
        <ol className="mt-2 flex flex-wrap items-center gap-y-2 text-sm">
          {bi.looker.etapas.map((e, i) => (
            <li key={e} className="flex items-center">
              {i > 0 && <span aria-hidden="true" className="mx-2 text-accent">→</span>}
              <span className="rounded-md border border-rule bg-surface px-2.5 py-1 text-ink">{e}</span>
            </li>
          ))}
        </ol>
        <div className="mt-5 flex flex-wrap gap-3">
          <a href={bi.looker.relatorio} target="_blank" rel="noreferrer noopener" className="inline-flex h-11 items-center gap-2 rounded-full bg-accent px-5 text-sm font-semibold text-white transition hover:bg-accent-2 active:scale-95">
            {t("bi_open_report", l)} <span aria-hidden="true">↗</span>
          </a>
          <a href={bi.looker.codigo} target="_blank" rel="noreferrer noopener" className="inline-flex h-11 items-center gap-2 rounded-full border border-ink/20 bg-surface px-5 text-sm font-semibold text-ink transition hover:border-ink active:scale-95">
            {t("bi_see_code", l)} <span aria-hidden="true">↗</span>
          </a>
        </div>
      </SubSection>

      <SubSection titulo={t("bi_fronts", l)}>
        <ol className="grid gap-4 sm:grid-cols-2">
          {bi.frentes.map((f, i) => (
            <li key={f.id} className="rounded-2xl border border-rule bg-surface p-5 shadow-[0_8px_24px_-18px_rgba(23,18,14,0.3)]">
              <div className="flex items-baseline gap-3">
                <span className="font-display text-2xl font-semibold text-accent">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="text-lg font-semibold leading-snug text-ink">{f.nome[l]}</h3>
              </div>
              <p className="mt-2 text-sm italic text-ink-2">
                <span className="not-italic font-semibold text-accent-ink">{t("bi_answers", l)}:</span> {f.pergunta[l]}
              </p>
              {bi.telas.some((x) => x.frente === f.id) && (
                <a href={`#tela-${bi.telas.find((x) => x.frente === f.id)!.arquivo.split("/").pop()!.replace(".webp", "")}`} className="mt-2 inline-flex min-h-8 items-center text-xs font-semibold text-accent-ink hover:underline">
                  {t("bi_see_screen", l)} ↑
                </a>
              )}
              <ul className="mt-3 space-y-1.5 text-sm">
                {f.mostra.map((m) => (
                  <li key={m.pt} className="flex gap-2">
                    <span aria-hidden="true" className="mt-[0.45rem] size-1.5 shrink-0 rounded-full bg-accent" />
                    {m[l]}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </SubSection>

      <SubSection titulo={t("bi_how", l)}>
        <h3 className="-mt-2 text-2xl font-semibold text-ink sm:text-3xl">{t("bi_how_title", l)}</h3>
        <p className="mt-3 leading-relaxed">{t("bi_how_lead", l)}</p>

        {/* fluxo: as seis etapas em sequência */}
        <ol aria-label={t("bi_how_title", l)} className="mt-8 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
          {bi.pipeline.map((e, i) => (
            <li key={e.id} className="relative">
              <a href={`#etapa-${e.id}`} className="flex h-full min-h-16 flex-col justify-center rounded-xl border border-accent/30 bg-accent-soft px-3 py-2.5 transition hover:border-accent">
                <span className="font-mono text-[0.7rem] font-semibold text-accent-ink">{String(i + 1).padStart(2, "0")}</span>
                <span className="hyphens-auto break-words text-[0.8rem] font-semibold leading-tight text-ink">{e.titulo[l]}</span>
              </a>
              {i < bi.pipeline.length - 1 && (
                <span aria-hidden="true" className="absolute -right-2 top-1/2 z-10 hidden -translate-y-1/2 text-accent lg:block">▸</span>
              )}
            </li>
          ))}
        </ol>

        <ol className="mt-8 space-y-4">
          {bi.pipeline.map((e, i) => (
            <li key={e.id} id={`etapa-${e.id}`} className="scroll-mt-24 rounded-2xl border border-rule bg-surface p-5 shadow-[0_8px_24px_-18px_rgba(23,18,14,0.3)]">
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span className="font-display text-2xl font-semibold text-accent">{String(i + 1).padStart(2, "0")}</span>
                <h4 className="font-display text-lg font-semibold text-ink">{e.titulo[l]}</h4>
                <span className="text-sm italic text-ink-2">— {e.lema[l]}</span>
              </div>
              <ul className="mt-3 space-y-1.5 text-sm leading-relaxed">
                {e.praticas.map((p) => (
                  <li key={p.pt} className="flex gap-2">
                    <span aria-hidden="true" className="mt-[0.5rem] size-1.5 shrink-0 rounded-full bg-accent" />
                    {p[l]}
                  </li>
                ))}
              </ul>
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {e.ferramentas.map((f) => (
                  <li key={f} className="flex items-center gap-1.5 rounded-md border border-rule bg-bg px-2 py-0.5 text-xs text-ink">
                    {COM_LOGO[f] && <TechIcon nome={COM_LOGO[f]} size={12} />}
                    {f}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </SubSection>
    </Subpage>
  );
}
