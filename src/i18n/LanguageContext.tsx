import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import type { Locale, TranslationSchema } from './types';
import es from './locales/es.json';
import en from './locales/en.json';

const translations: Record<Locale, TranslationSchema> = {
  es: es as unknown as TranslationSchema,
  en: en as unknown as TranslationSchema,
};

const STORAGE_KEY = 'portfolio-lang';

function getInitialLocale(): Locale {
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'es' || stored === 'en') return stored;
  }
  return 'es';
}

interface LanguageContextType {
  locale: Locale;
  t: TranslationSchema;
  toggleLocale: () => void;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>(getInitialLocale);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, locale);
    document.documentElement.lang = locale;
  }, [locale]);

  const toggleLocale = () => {
    setLocale((prev) => (prev === 'es' ? 'en' : 'es'));
  };

  const value: LanguageContextType = {
    locale,
    t: translations[locale],
    toggleLocale,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useTranslation must be used within a LanguageProvider');
  }
  return context;
}
