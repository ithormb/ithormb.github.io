import Link from "next/link";
import { site } from "@/content/site";
import { t, type Locale } from "@/lib/i18n";
import { ThemeToggle } from "./ThemeToggle";

export function Header({ locale }: { locale: Locale }) {
  const other: Locale = locale === "pt" ? "en" : "pt";
  return (
    <header className="flex items-center justify-between py-6">
      <Link href={`/${locale}/`} className="font-serif text-lg tracking-tight">
        {site.name}
      </Link>
      <nav aria-label="principal" className="flex items-center gap-1 text-sm">
        <Link href={`/${locale}/hub/`} className="link-ul inline-flex min-h-10 items-center px-2 active:scale-95">
          {t("nav_hub", locale)}
        </Link>
        <Link href={`/${locale}/automacoes/`} className="link-ul inline-flex min-h-10 items-center px-2 active:scale-95">
          {t("nav_automations", locale)}
        </Link>
        <Link
          href={`/${locale}/sobre/`}
          className="link-ul inline-flex min-h-10 items-center px-2 active:scale-95"
        >
          {t("nav_about", locale)}
        </Link>
        <Link
          href={`/${other}/`}
          hrefLang={other}
          className="eyebrow inline-flex min-h-10 items-center px-2 hover:text-ink active:scale-95"
        >
          {other}
        </Link>
        <ThemeToggle label={t("toggle_theme", locale)} />
      </nav>
    </header>
  );
}
