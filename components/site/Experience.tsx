import { site } from "@/content/site";
import { t, type Locale } from "@/lib/i18n";
import { Band, SectionHeader } from "./SectionHeader";

export function Experience({ locale }: { locale: Locale }) {
  return (
    <Band id="experiencia" alt>
      <SectionHeader eyebrow={t("nav_experience", locale)} title={t("exp_title", locale)} />
      <ol className="relative mt-12 space-y-10 border-l border-rule pl-8 md:ml-4">
        {site.experiencia.map((e, i) => {
          const [atual, ...anteriores] = e.cargos;
          return (
            <li key={e.onde.pt} className="relative">
              <span aria-hidden="true" className={`absolute -left-[39px] top-1.5 size-3.5 rounded-full border-2 ${i === 0 ? "border-accent bg-accent shadow-[0_0_0_4px_rgba(139,92,246,0.2)]" : "border-rule bg-bg"}`} />
              <div className="grid gap-2 md:grid-cols-[170px_1fr] md:gap-8">
                <div>
                  <p className="text-sm font-semibold text-accent-ink">{e.periodo[locale]}</p>
                  {e.local && <p className="text-xs text-muted">{e.local[locale]}</p>}
                </div>
                <div className="rounded-2xl border border-rule bg-surface p-5">
                  <h3 className="font-semibold leading-snug text-ink">{atual.titulo[locale]}</h3>
                  <p className="text-sm text-ink-2">{e.onde[locale]}</p>
                  {anteriores.length > 0 && (
                    <ul className="mt-2 space-y-0.5 text-xs text-muted">
                      {anteriores.map((c) => (
                        <li key={c.titulo.pt}>↳ {c.titulo[locale]} · {c.periodo[locale]}</li>
                      ))}
                    </ul>
                  )}
                  <p className="mt-3 text-sm leading-relaxed">{e.descricao[locale]}</p>
                  {e.tags.length > 0 && (
                    <ul className="mt-4 flex flex-wrap gap-1.5">
                      {e.tags.map((tag) => (
                        <li key={tag} className="rounded-md bg-accent-soft px-2.5 py-1 text-xs font-medium text-accent-ink">{tag}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </li>
          );
        })}
      </ol>
    </Band>
  );
}
