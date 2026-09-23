import type { Metadata } from "next";
import { site } from "@/content/site";
import { isLocale, type Locale } from "@/lib/i18n";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { TrustBar } from "@/components/site/TrustBar";
import { Skills } from "@/components/site/Skills";
import { HowIWork } from "@/components/site/HowIWork";
import { Experience } from "@/components/site/Experience";
import { Projects } from "@/components/site/Projects";
import { Education } from "@/components/site/Education";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const l: Locale = isLocale(locale) ? locale : "pt";
  return { title: `${site.name} — ${site.role[l]}`, description: site.tagline[l] };
}

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const l: Locale = isLocale(locale) ? locale : "pt";
  return (
    <>
      <Navbar locale={l} />
      <main id="conteudo">
        <Hero locale={l} />
        <TrustBar locale={l} />
        <About locale={l} />
        <HowIWork locale={l} />
        <Skills locale={l} />
        <Experience locale={l} />
        <Projects locale={l} />
        <Education locale={l} />
        <Contact locale={l} />
      </main>
      <Footer locale={l} />
    </>
  );
}
