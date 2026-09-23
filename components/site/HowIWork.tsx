import { hub } from "@/content/hub";
import { t, type Locale } from "@/lib/i18n";
import { Band, SectionHeader } from "./SectionHeader";

// As garantias do hub, trazidas para a home: é o que o recrutador lê como governança de IA.
export function HowIWork({ locale }: { locale: Locale }) {
  return (
    <Band id="como-trabalho">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.4fr] lg:items-start">
        <div>
          <SectionHeader eyebrow={t("how_eyebrow", locale)} title={t("how_title", locale)} />
          <p className="mt-6 leading-relaxed">{t("how_lead", locale)}</p>
        </div>
        <ol className="grid gap-4 sm:grid-cols-2">
          {hub.garantias.map((g, i) => (
            <li key={g.titulo.pt} className="rounded-2xl border border-rule bg-surface p-5 shadow-[0_8px_24px_-18px_rgba(23,18,14,0.3)]">
              <span className="font-display text-3xl font-semibold text-accent">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-2 text-lg font-semibold leading-snug text-ink">{g.titulo[locale]}</h3>
              <p className="mt-2 text-sm leading-relaxed">{g[locale]}</p>
            </li>
          ))}
        </ol>
      </div>
    </Band>
  );
}
