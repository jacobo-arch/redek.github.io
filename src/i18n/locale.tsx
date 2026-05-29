"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type Locale = "es" | "en";
export const LOCALES: Locale[] = ["es", "en"];
export const DEFAULT_LOCALE: Locale = "es";

type Ctx = { locale: Locale; setLocale: (l: Locale) => void; toggle: () => void };

const LocaleContext = createContext<Ctx>({
  locale: DEFAULT_LOCALE,
  setLocale: () => {},
  toggle: () => {},
});

export function LocaleProvider({ children }: { children: ReactNode }) {
  // SSR + first paint render in Spanish (the static, SEO-primary locale).
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("redek-lang");
      if (stored === "en" || stored === "es") {
        setLocaleState(stored);
        document.documentElement.lang = stored;
      }
    } catch {}
  }, []);

  const setLocale = (l: Locale) => {
    setLocaleState(l);
    document.documentElement.lang = l;
    try {
      localStorage.setItem("redek-lang", l);
    } catch {}
  };

  const toggle = () => setLocale(locale === "es" ? "en" : "es");

  return (
    <LocaleContext.Provider value={{ locale, setLocale, toggle }}>
      {children}
    </LocaleContext.Provider>
  );
}

export const useLocale = () => useContext(LocaleContext);

/**
 * Helper para copy bilingüe local por componente:
 *   const t = useCopy({ es: {...}, en: {...} } as const);
 * Devuelve el objeto del locale activo. El tipo de retorno se toma de la
 * rama `es` (para IntelliSense); `en` puede tener literales distintos sin
 * romper (las claves son espejo), así que `as const` funciona sin fricción.
 */
export function useCopy<C extends { es: unknown; en: unknown }>(
  copy: C
): C["es"] {
  const { locale } = useLocale();
  return copy[locale] as C["es"];
}
