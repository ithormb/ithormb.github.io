import { notFound } from "next/navigation";
import { locales, isLocale } from "@/lib/i18n";
import { listarProjetos, getProjeto } from "@/lib/content";

export function generateStaticParams() {
  return locales.flatMap((locale) => listarProjetos().map((p) => ({ locale, slug: p.slug })));
}

export default async function ProjetoPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const p = getProjeto(slug);
  if (!p || !isLocale(locale)) notFound();
  return (
    <div className="py-16">
      <h1 className="font-serif text-4xl">{p.titulo[locale]}</h1>
      <p className="mt-4 text-ink-2">(página do projeto — próxima etapa)</p>
    </div>
  );
}
