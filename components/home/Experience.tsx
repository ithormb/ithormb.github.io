import { site } from "@/content/site";
import type { Locale } from "@/lib/i18n";

export function Experience({ locale }: { locale: Locale }) {
  return (
    <ol className="space-y-12">
      {site.experiencia.map((e) => {
        const [atual, ...anteriores] = e.cargos;
        return (
          <li key={e.onde.pt} className="grid sm:grid-cols-8 sm:gap-8 md:gap-4">
            <p className="mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-muted sm:col-span-2">{e.periodo[locale]}</p>
            <div className="sm:col-span-6">
              <h3 className="font-medium leading-snug text-ink">
                {atual.titulo[locale]} · <span className="text-ink">{e.onde[locale]}</span>
              </h3>
              {anteriores.length > 0 && (
                <ul className="mt-1 space-y-0.5 text-sm text-muted">
                  {anteriores.map((c) => (
                    <li key={c.titulo.pt}>
                      {c.titulo[locale]} <span className="text-xs">· {c.periodo[locale]}</span>
                    </li>
                  ))}
                </ul>
              )}
              <p className="mt-2 text-sm leading-normal">{e.descricao[locale]}</p>
              {e.tags.length > 0 && (
                <ul className="mt-3 flex flex-wrap gap-1.5" aria-label="tecnologias">
                  {e.tags.map((tag) => (
                    <li key={tag} className="rounded-full bg-accent-soft px-3 py-1 text-xs font-medium leading-5 text-accent">{tag}</li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        );
      })}
    </ol>
  );
}
