import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/content/site";
import { isLocale, t, type Locale } from "@/lib/i18n";
import { Sidebar } from "@/components/home/Sidebar";
import { SectionTitle } from "@/components/home/SectionTitle";
import { Projects } from "@/components/home/Projects";
import { Experience } from "@/components/home/Experience";
import { Numbers } from "@/components/catalogo/Numbers";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const l: Locale = isLocale(locale) ? locale : "pt";
  return { title: `${site.name} — ${site.role[l]}`, description: site.tagline[l] };
}

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const l: Locale = isLocale(locale) ? locale : "pt";
  return (
    <div className="relative z-10 mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div className="lg:flex lg:justify-between lg:gap-4">
        <Sidebar locale={l} />
        <main id="conteudo" className="pt-24 lg:w-[52%] lg:py-24">
          <section id="sobre" aria-label={t("nav_about", l)} className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
            <SectionTitle>{t("nav_about", l)}</SectionTitle>
            <div className="space-y-4">
              {site.sobre.map((p, i) => (
                <p key={i}>{p[l]}</p>
              ))}
            </div>
          </section>

          {site.experiencia.length > 0 && (
            <section id="experiencia" aria-label={t("nav_experience", l)} className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
              <SectionTitle>{t("nav_experience", l)}</SectionTitle>
              <Experience locale={l} />
            </section>
          )}

          <section id="projetos" aria-label={t("nav_projects", l)} className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
            <SectionTitle>{t("nav_projects", l)}</SectionTitle>
            <Projects locale={l} />
          </section>

          <section id="numeros" aria-label={t("nav_numbers", l)} className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
            <SectionTitle>{t("nav_numbers", l)}</SectionTitle>
            <Numbers locale={l} comHub />
            <Link href={`/${l}/automacoes/`} className="group mt-8 inline-flex min-h-10 items-center gap-2 font-semibold leading-tight text-ink hover:text-accent active:scale-95">
              {t("see_automations", l)}
              <span aria-hidden="true" className="transition-transform group-hover:translate-x-1 motion-reduce:transition-none">→</span>
            </Link>
          </section>

          <footer className="max-w-md pb-16 text-sm text-muted sm:pb-0">
            <p>{t("footer", l)}</p>
          </footer>
        </main>
      </div>
    </div>
  );
}
