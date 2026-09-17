import { numeros } from "@/content/automacoes";
import { hub } from "@/content/hub";
import { t, type Locale } from "@/lib/i18n";

const fmt = (n: number, l: Locale) => n.toLocaleString(l === "pt" ? "pt-BR" : "en-US");

export function Numbers({ locale, comHub = false }: { locale: Locale; comHub?: boolean }) {
  const itens = [
    ...(comHub ? [{ v: String(hub.agentes.length), l: { pt: "agentes de IA no hub", en: "AI agents in the hub" } }] : []),
    { v: fmt(numeros.workflows, locale), l: { pt: "workflows no n8n", en: "n8n workflows" } },
    { v: fmt(numeros.ativos, locale), l: { pt: "ativos com gatilho", en: "active with a trigger" } },
    { v: fmt(numeros.nos, locale), l: { pt: "nós, sem contar anotações", en: "nodes, excluding notes" } },
    { v: fmt(numeros.tiposDeNo, locale), l: { pt: "tipos de nó diferentes", en: "distinct node types" } },
    { v: fmt(numeros.credenciais, locale), l: { pt: "credenciais de serviço", en: "service credentials" } },
    ...(comHub ? [] : [{ v: `${numeros.mediaNosPorWorkflow} · ${numeros.maiorWorkflow}`, l: { pt: "nós por workflow: média · maior", en: "nodes per workflow: mean · largest" } }]),
  ];
  const data = new Date(numeros.medidoEm + "T00:00:00").toLocaleDateString(locale === "pt" ? "pt-BR" : "en-GB");
  return (
    <div>
      <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-md border border-rule bg-rule sm:grid-cols-3">
        {itens.map((i) => (
          <div key={i.l.pt} className="flex flex-col bg-bg p-5">
            <dt className="order-2 mt-1 text-xs leading-snug text-ink-2">{i.l[locale]}</dt>
            <dd className="order-1 font-mono text-2xl font-medium tracking-tight text-ink">{i.v}</dd>
          </div>
        ))}
      </dl>
      <p className="mt-3 text-xs text-muted">
        {t("measured_on", locale)} {data} · API do n8n
      </p>
    </div>
  );
}
