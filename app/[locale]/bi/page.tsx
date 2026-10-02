import type { Metadata } from "next";
import { site } from "@/content/site";
import { bi } from "@/content/bi";
import { isLocale, t, type Locale } from "@/lib/i18n";
import { Subpage, SubSection } from "@/components/ui/Subpage";
import { TechIcon } from "@/components/site/Icon";
import { withBase } from "@/lib/paths";

// Só leva ícone o que tem marca; conceito (modelagem, formato de projeto) fica só no texto.
const COM_LOGO: Record<string, string> = { "Power BI": "Power BI", DAX: "DAX", "Power Query (M)": "Power Query", BigQuery: "BigQuery" };

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
        <ol className="space-y-5">
          {bi.comoConstruo.map((c, i) => (
            <li key={c.titulo.pt} className="flex gap-4 text-sm leading-relaxed">
              <span className="font-mono text-accent-ink">{String(i + 1).padStart(2, "0")}</span>
              <p><strong className="text-ink">{c.titulo[l]}.</strong> {c.texto[l]}</p>
            </li>
          ))}
        </ol>
      </SubSection>
    </Subpage>
  );
}
