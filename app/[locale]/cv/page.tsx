import type { Metadata } from "next";
import { site } from "@/content/site";
import { hub } from "@/content/hub";
import { isLocale, type Locale } from "@/lib/i18n";

// Página diagramada em A4 que vira o PDF do CV (ver scripts/gerar-cv.sh).
// Não aparece no menu; o conteúdo é o mesmo do site, para os dois nunca divergirem.
export const metadata: Metadata = { robots: { index: false } };

const L = {
  resumo: { pt: "Resumo", en: "Summary" },
  exp: { pt: "Experiência", en: "Experience" },
  proj: { pt: "Projetos em destaque", en: "Selected projects" },
  comp: { pt: "Competências", en: "Skills" },
  form: { pt: "Formação e publicação", en: "Education and publication" },
  contato: { pt: "Contato", en: "Contact" },
  gov: { pt: "Como trabalho", en: "How I work" },
  res: { pt: "Resultado", en: "Outcome" },
};

function Titulo({ children }: { children: React.ReactNode }) {
  return <h2 className="mb-2 border-b border-rule pb-1 font-sans text-[8.5pt] font-bold uppercase tracking-[0.16em] text-accent-ink">{children}</h2>;
}

export default async function CV({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const l: Locale = isLocale(locale) ? locale : "pt";
  const projetos = site.projetos.filter((p) => !p.estudo);
  return (
    <>
      <style>{`@page { size: A4; margin: 0 } html, body { background: #fff !important; }`}</style>
      <main className="mx-auto grid min-h-[297mm] w-[210mm] grid-cols-[62mm_1fr] bg-white text-[8.5pt] leading-[1.42] text-ink-2">
        {/* coluna lateral */}
        <aside className="bg-surface-2 px-[7mm] py-[9mm]">
          {site.foto && (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={site.foto} alt="" className="mx-auto mb-4 size-[32mm] rounded-full bg-gradient-to-b from-[#ffb37a] to-accent object-cover object-top" />
          )}
          <section className="mb-5">
            <Titulo>{L.contato[l]}</Titulo>
            <ul className="space-y-1 break-words">
              <li>{site.local[l]}</li>
              <li>linkedin.com/in/thomas-barbosa-silva</li>
              <li>github.com/ithormb</li>
              <li>ithormb.github.io</li>
              {site.links.email && <li>{site.links.email}</li>}
            </ul>
          </section>
          <section className="mb-5">
            <Titulo>{L.comp[l]}</Titulo>
            <div className="space-y-2.5">
              {site.tecnologias.map((g) => (
                <div key={g.grupo.pt}>
                  <p className="font-semibold text-ink">{g.grupo[l]}</p>
                  <p>{g.itens.join(" · ")}</p>
                </div>
              ))}
            </div>
          </section>
          <section>
            <Titulo>{L.form[l]}</Titulo>
            <ul className="space-y-2">
              {site.formacao.map((f) => (
                <li key={f.titulo.pt}>
                  <p className="font-semibold text-ink">{f.titulo[l]}</p>
                  <p>{f.onde[l]} · {f.periodo[l]}</p>
                </li>
              ))}
            </ul>
          </section>
        </aside>

        {/* coluna principal */}
        <div className="px-[9mm] py-[9mm]">
          <header className="mb-4">
            <h1 className="font-display text-[24pt] font-semibold leading-none text-ink">{site.name}</h1>
            <p className="mt-1.5 font-sans text-[9.5pt] font-bold uppercase tracking-[0.12em] text-accent-ink">{site.role[l]}</p>
          </header>
          <section className="mb-3">
            <Titulo>{L.resumo[l]}</Titulo>
            <p>{site.tagline[l]}</p>
          </section>
          <section className="mb-3">
            <Titulo>{L.exp[l]}</Titulo>
            <ol className="space-y-2.5">
              {site.experiencia.map((e) => {
                const [atual, ...ant] = e.cargos;
                return (
                  <li key={e.onde.pt} className="break-inside-avoid">
                    <div className="flex items-baseline justify-between gap-3">
                      <p className="font-semibold text-ink">{atual.titulo[l]} · {e.onde[l]}</p>
                      <p className="shrink-0 text-[8pt] text-muted">{e.periodo[l]}</p>
                    </div>
                    {ant.length > 0 && <p className="text-[8pt] text-muted">{ant.map((c) => `${c.titulo[l]} (${c.periodo[l]})`).join(" · ")}</p>}
                    <p className="mt-0.5">{e.descricao[l]}</p>
                  </li>
                );
              })}
            </ol>
          </section>
          <section className="mb-3">
            <Titulo>{L.proj[l]}</Titulo>
            <ol className="space-y-2.5">
              {projetos.map((p) => (
                <li key={p.titulo.pt} className="break-inside-avoid">
                  <p className="font-semibold text-ink">{p.titulo[l]} <span className="font-normal text-muted">· {p.tags.join(", ")}</span></p>
                  <p className="mt-0.5">{p.descricao[l]}</p>
                  {p.resultado && <p className="mt-0.5"><span className="font-semibold text-accent-ink">{L.res[l]}:</span> {p.resultado[l]}</p>}
                </li>
              ))}
            </ol>
          </section>
          <section className="break-inside-avoid">
            <Titulo>{L.gov[l]}</Titulo>
            <p>{hub.garantias.map((g) => g.titulo[l]).join(" · ")}.</p>
          </section>
        </div>
      </main>
    </>
  );
}
