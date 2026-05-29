"use client";

import { useLocale } from "@/i18n/locale";

export default function LanguageToggle({ className = "" }: { className?: string }) {
  const { locale, setLocale } = useLocale();

  return (
    <div
      role="group"
      aria-label="Idioma / Language"
      className={`flex items-center rounded-full border border-line p-0.5 text-xs font-semibold ${className}`}
    >
      {(["es", "en"] as const).map((l) => {
        const active = locale === l;
        return (
          <button
            key={l}
            type="button"
            onClick={() => setLocale(l)}
            aria-pressed={active}
            className={`rounded-full px-2.5 py-1 uppercase tracking-wide transition-colors ${
              active
                ? "bg-brand text-white"
                : "text-muted hover:text-text"
            }`}
          >
            {l}
          </button>
        );
      })}
    </div>
  );
}
