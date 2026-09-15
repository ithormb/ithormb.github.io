import { site } from "@/content/site";
import { t, type Locale } from "@/lib/i18n";

export function Footer({ locale }: { locale: Locale }) {
  return (
    <footer className="rule mt-24 flex flex-col gap-3 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
      <span>
        © {new Date().getFullYear()} {site.name}
      </span>
      <span className="eyebrow normal-case tracking-normal">{t("footer_note", locale)}</span>
    </footer>
  );
}
