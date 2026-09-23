import { site } from "@/content/site";
import { t, type Locale } from "@/lib/i18n";
import { Band, SectionHeader } from "./SectionHeader";

export function Education({ locale }: { locale: Locale }) {
  return (
    <Band id="formacao" alt>
      <SectionHeader eyebrow={t("nav_education", locale)} title={t("edu_title", locale)} />
      <ul className="mt-12 grid gap-5 md:grid-cols-3">
        {site.formacao.map((f) => (
          <li key={f.titulo.pt} className="rounded-2xl border border-rule bg-bg p-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent-ink">{f.periodo[locale]}</p>
            <h3 className="mt-3 font-semibold leading-snug text-ink">{f.titulo[locale]}</h3>
            <p className="text-sm text-ink-2">{f.onde[locale]}</p>
            {f.nota && <p className="mt-3 text-sm leading-relaxed text-muted">{f.nota[locale]}</p>}
          </li>
        ))}
      </ul>
    </Band>
  );
}
