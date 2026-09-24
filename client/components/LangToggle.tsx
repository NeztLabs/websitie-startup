"use client";

import { useI18n } from "./I18nProvider";

export default function LangToggle({ className = "" }: { className?: string }) {
  const { locale, toggleLocale, t } = useI18n();

  return (
    <button
      type="button"
      onClick={toggleLocale}
      aria-label={t.langToggle}
      title={t.langToggle}
      className={`relative grid h-9 min-w-9 place-items-center rounded-sm border border-border px-2 font-mono text-[0.6875rem] font-semibold tracking-wider text-muted transition-colors duration-200 hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-accent ${className}`}
    >
      {locale === "es" ? "EN" : "ES"}
    </button>
  );
}
