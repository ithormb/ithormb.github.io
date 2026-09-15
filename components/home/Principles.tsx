import { site } from "@/content/site";
import type { Locale } from "@/lib/i18n";

export function Principles({ locale }: { locale: Locale }) {
  return (
    <div className="grid gap-8 md:grid-cols-3">
      {site.principles.map((p) => (
        <div key={p.title.pt}>
          <h3 className="font-serif text-xl leading-snug">{p.title[locale]}</h3>
          <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-2">{p.body[locale]}</p>
        </div>
      ))}
    </div>
  );
}
