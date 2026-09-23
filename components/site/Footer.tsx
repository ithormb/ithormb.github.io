import { site } from "@/content/site";
import { t, type Locale } from "@/lib/i18n";

export function Footer({ locale }: { locale: Locale }) {
  return (
    <footer className="border-t border-rule/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-8 text-xs text-muted sm:flex-row sm:justify-between sm:px-8">
        <span>© {new Date().getFullYear()} {site.name}</span>
        <span>{t("footer", locale)}</span>
      </div>
    </footer>
  );
}
