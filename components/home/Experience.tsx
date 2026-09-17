import { site } from "@/content/site";
import type { Locale } from "@/lib/i18n";

export function Experience({ locale }: { locale: Locale }) {
  return (
    <ol className="space-y-12">
      {site.experiencia.map((e) => (
        <li key={e.cargo.pt + e.periodo.pt} className="grid sm:grid-cols-8 sm:gap-8 md:gap-4">
          <p className="mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-muted sm:col-span-2">{e.periodo[locale]}</p>
          <div className="sm:col-span-6">
            <h3 className="font-medium leading-snug text-ink">
              {e.cargo[locale]} · <span className="text-ink-2">{e.onde[locale]}</span>
            </h3>
            <p className="mt-2 text-sm leading-normal">{e.descricao[locale]}</p>
            <ul className="mt-3 flex flex-wrap gap-1.5">
              {e.tags.map((tag) => (
                <li key={tag} className="rounded-full bg-accent-soft px-3 py-1 text-xs font-medium leading-5 text-accent">{tag}</li>
              ))}
            </ul>
          </div>
        </li>
      ))}
    </ol>
  );
}
