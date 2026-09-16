import { numeros } from "@/content/automacoes";
import { t, type Locale } from "@/lib/i18n";

const fmt = (n: number, l: Locale) => n.toLocaleString(l === "pt" ? "pt-BR" : "en-US");

export function Numbers({ locale }: { locale: Locale }) {
  const itens = [
    { v: fmt(numeros.workflows, locale), l: { pt: "workflows", en: "workflows" } },
    { v: fmt(numeros.ativos, locale), l: { pt: "ativos com gatilho", en: "active with a trigger" } },
    { v: fmt(numeros.nos, locale), l: { pt: "nós, sem contar anotações", en: "nodes, excluding notes" } },
    { v: fmt(numeros.tiposDeNo, locale), l: { pt: "tipos de nó diferentes", en: "distinct node types" } },
    { v: fmt(numeros.credenciais, locale), l: { pt: "credenciais de serviço", en: "service credentials" } },
    { v: `${numeros.mediaNosPorWorkflow} · ${numeros.maiorWorkflow}`, l: { pt: "nós por workflow: média · maior", en: "nodes per workflow: mean · largest" } },
  ];
  const data = new Date(numeros.medidoEm + "T00:00:00").toLocaleDateString(locale === "pt" ? "pt-BR" : "en-GB");
  return (
    <div>
      <dl className="grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-3">
        {itens.map((i) => (
          <div key={i.l.pt}>
            <dd className="font-mono text-3xl tracking-tight sm:text-4xl">{i.v}</dd>
            <dt className="mt-1 text-sm text-muted">{i.l[locale]}</dt>
          </div>
        ))}
      </dl>
      <p className="eyebrow mt-8">
        {t("measured_on", locale)} {data} · API do n8n
      </p>
    </div>
  );
}
