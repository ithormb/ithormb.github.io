import { site } from "@/content/site";
import type { Locale } from "@/lib/i18n";

export function Metrics({ locale }: { locale: Locale }) {
  return (
    <dl className="rule grid grid-cols-2 gap-x-6 gap-y-8 py-8 md:grid-cols-4">
      {site.metrics.map((m) => (
        <div key={m.value}>
          <dd className="font-mono text-2xl tracking-tight sm:text-3xl">{m.value}</dd>
          <dt className="mt-1 text-sm text-muted">{m.label[locale]}</dt>
        </div>
      ))}
    </dl>
  );
}
