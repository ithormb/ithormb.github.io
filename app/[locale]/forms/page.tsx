import type { Metadata } from "next";
import { site } from "@/content/site";
import { forms } from "@/content/forms";
import { isLocale, type Locale } from "@/lib/i18n";
import { Subpage, SubSection } from "@/components/ui/Subpage";
import { FormsDiagram } from "@/components/diagrams/FormsDiagram";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const l: Locale = isLocale(locale) ? locale : "pt";
  return { title: `${forms.nome[l]} — ${site.name}`, description: forms.resumo[l] };
}

const T = {
  problema: { pt: "O que muda no chão de fábrica", en: "What changes on the shop floor" },
  antes: { pt: "Antes", en: "Before" },
  depois: { pt: "Com o Hub Forms", en: "With Hub Forms" },
  modulos: { pt: "Módulos", en: "Modules" },
  integracoes: { pt: "Um ambiente, todos os sistemas", en: "One environment, every system" },
  integracoesNota: {
    pt: "O registro feito no celular é o mesmo dado que o ERP valida, que o FlowPilot cobra, que o painel mostra e que a IA consulta.",
    en: "The record made on the phone is the same data the ERP validates, FlowPilot follows up, the dashboard shows and the AI queries.",
  },
  arquitetura: { pt: "Decisões de arquitetura", en: "Architecture decisions" },
};

export default async function FormsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const l: Locale = isLocale(locale) ? locale : "pt";
  return (
    <Subpage locale={l} path="/forms/">
      <header className="mt-10">
        <p className="text-xs font-semibold uppercase tracking-widest text-accent-ink">{forms.estado[l]}</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-ink sm:text-5xl">{forms.nome[l]}</h1>
        <p className="mt-3 font-display text-xl text-ink-2">{forms.subtitulo[l]}</p>
        <p className="mt-6 text-lg leading-relaxed text-ink-2">{forms.resumo[l]}</p>
        <ul className="mt-5 flex flex-wrap gap-1.5">
          {forms.stack.map((s) => (
            <li key={s} className="rounded-full border border-accent/20 bg-accent-soft px-3 py-1 text-xs font-semibold leading-5 text-accent-ink">{s}</li>
          ))}
        </ul>
      </header>

      <div className="mt-10">
        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-rule bg-rule shadow-sm sm:grid-cols-4">
          {forms.metricas.map((m) => (
            <div key={m.rotulo.pt} className="flex flex-col bg-bg p-5">
              <dt className="order-2 mt-1.5 text-xs leading-snug text-ink-2">{m.rotulo[l]}</dt>
              <dd className="order-1 font-display text-3xl font-semibold tracking-tight text-ink">{m.valor}</dd>
            </div>
          ))}
        </dl>
      </div>

      <SubSection titulo={T.problema[l]}>
        <div className="overflow-hidden rounded-2xl border border-rule">
          <div className="grid grid-cols-2 bg-surface-2 text-xs font-bold uppercase tracking-wider">
            <span className="px-4 py-2.5 text-muted">{T.antes[l]}</span>
            <span className="border-l border-rule px-4 py-2.5 text-accent-ink">{T.depois[l]}</span>
          </div>
          {forms.antesDepois.map((p) => (
            <div key={p.antes.pt} className="grid grid-cols-2 border-t border-rule bg-surface text-sm leading-relaxed">
              <p className="px-4 py-3 text-ink-2">{p.antes[l]}</p>
              <p className="border-l border-rule px-4 py-3 font-medium text-ink">{p.depois[l]}</p>
            </div>
          ))}
        </div>
      </SubSection>

      <SubSection titulo={T.modulos[l]}>
        <div className="grid gap-5 md:grid-cols-2">
          {forms.modulos.map((m) => (
            <article key={m.nome.pt} className="flex flex-col rounded-2xl border border-rule bg-surface p-6 shadow-sm">
              <span className="text-[0.7rem] font-bold uppercase tracking-wider text-muted">{m.area[l]}</span>
              <h3 className="mt-1.5 text-lg font-semibold leading-snug text-ink">{m.nome[l]}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-2">{m.faz[l]}</p>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed">
                {m.pontos.map((p) => (
                  <li key={p.pt} className="flex gap-2.5">
                    <span aria-hidden="true" className="mt-[9px] size-1.5 shrink-0 rounded-full bg-accent" />
                    <span>{p[l]}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </SubSection>

      <SubSection titulo={T.integracoes[l]}>
        <p className="-mt-4 mb-6 text-sm leading-relaxed text-ink-2">{T.integracoesNota[l]}</p>
        <div className="rounded-2xl border border-rule bg-surface p-4 shadow-sm sm:p-6">
          <FormsDiagram locale={l} />
        </div>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {forms.integracoes.map((i) => (
            <li key={i.nome} className="rounded-xl border border-rule bg-surface p-4 text-sm leading-normal">
              <strong className="block font-semibold text-ink">{i.nome}</strong>
              <span className="text-ink-2">{i.papel[l]}</span>
            </li>
          ))}
        </ul>
      </SubSection>

      <SubSection titulo={T.arquitetura[l]}>
        <ol className="space-y-3.5">
          {forms.arquitetura.map((g, i) => (
            <li key={g.titulo.pt} className="rounded-xl border border-rule bg-surface p-4 text-sm leading-normal shadow-sm">
              <div className="mb-1.5 flex items-center gap-2.5">
                <span className="rounded border border-accent/25 bg-accent/10 px-2 py-0.5 font-mono text-xs font-bold text-accent-ink">{String(i + 1).padStart(2, "0")}</span>
                <strong className="text-base font-semibold text-ink">{g.titulo[l]}</strong>
              </div>
              <p className="pl-8 leading-relaxed text-ink-2">{g[l]}</p>
            </li>
          ))}
        </ol>
      </SubSection>
    </Subpage>
  );
}
