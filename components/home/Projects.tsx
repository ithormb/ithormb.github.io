import Link from "next/link";
import { site, type Projeto } from "@/content/site";
import { t, type Locale } from "@/lib/i18n";
import { ArrowUpRight } from "@/components/ui/Icons";
import { Thumb } from "@/components/thumbs/Thumb";

function Card({ p, locale }: { p: Projeto; locale: Locale }) {
  const externo = p.href.startsWith("http");
  const href = externo ? p.href : `/${locale}${p.href}`;
  const conteudo = (
    <>
      <span className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-surface/60 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
      <div className="z-10 sm:order-2 sm:col-span-6">
        <h3 className="font-medium leading-snug text-ink">
          <span className="inline-flex items-baseline gap-1 text-base font-medium leading-tight text-ink group-hover:text-accent group-focus-visible:text-accent">
            {p.titulo[locale]}
            <ArrowUpRight className="ml-0.5 translate-y-px transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transition-none" />
          </span>
        </h3>
        <p className="mt-2 text-sm leading-normal">{p.descricao[locale]}</p>
        <ul className="mt-3 flex flex-wrap gap-1.5" aria-label="tecnologias">
          {p.estudo && (
            <li className="rounded-full border border-rule px-3 py-1 text-xs font-medium leading-5 text-ink-2">{t("study", locale)}</li>
          )}
          {p.tags.map((tag) => (
            <li key={tag} className="rounded-full bg-accent-soft px-3 py-1 text-xs font-medium leading-5 text-accent">
              {tag}
            </li>
          ))}
        </ul>
      </div>
      <div className="z-10 mt-4 max-w-[200px] sm:order-1 sm:col-span-2 sm:mt-1 sm:max-w-none">
        <Thumb kind={p.thumb} />
        <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-muted">{p.ano}</p>
      </div>
    </>
  );
  const cls = "group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50";
  return externo ? (
    <a href={href} target="_blank" rel="noreferrer noopener" className={cls}>{conteudo}</a>
  ) : (
    <Link href={href} className={cls}>{conteudo}</Link>
  );
}

export function Projects({ locale }: { locale: Locale }) {
  return (
    <ul className="group/list space-y-12">
      {site.projetos.map((p) => (
        <li key={p.titulo.pt}>
          <Card p={p} locale={locale} />
        </li>
      ))}
    </ul>
  );
}
