import { site } from "@/content/site";
import type { Locale } from "@/lib/i18n";

export function Education({ locale }: { locale: Locale }) {
  return (
    <ol className="space-y-10">
      {site.formacao.map((f) => (
        <li key={f.titulo.pt} className="grid sm:grid-cols-8 sm:gap-8 md:gap-4">
          <p className="mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-muted sm:col-span-2">{f.periodo[locale]}</p>
          <div className="sm:col-span-6">
            <h3 className="font-medium leading-snug text-ink">{f.titulo[locale]}</h3>
            <p className="text-sm text-ink-2">{f.onde[locale]}</p>
            {f.nota && <p className="mt-2 text-sm leading-normal text-muted">{f.nota[locale]}</p>}
          </div>
        </li>
      ))}
    </ol>
  );
}
