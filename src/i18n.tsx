import React, { createContext, useContext, useState, ReactNode } from 'react';
import { translations, Lang } from './translations';

export type { Lang };

type DeepKeys<T> = T extends object
  ? {
      [K in keyof T]-?: K extends string | number
        ? `${K}` | `${K}.${DeepKeys<T[K]>}`
        : never;
    }[keyof T]
  : never;

type TranslationKeys = DeepKeys<typeof translations['ca']>;

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('ca');

  const t = (key: string): any => {
    const keys = key.split('.');
    let value: any = translations[lang];
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        // Fallback to Catalan if key is missing
        let fallbackValue: any = translations['ca'];
        for (const fk of keys) {
            if(fallbackValue && typeof fallbackValue === 'object' && fk in fallbackValue){
                fallbackValue = fallbackValue[fk];
            } else {
                return key;
            }
        }
        return fallbackValue !== undefined ? fallbackValue : key;
      }
    }
    return value !== undefined ? value : key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
