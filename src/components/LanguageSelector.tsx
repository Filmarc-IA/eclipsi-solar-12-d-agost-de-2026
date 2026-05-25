import React from 'react';
import { useLanguage, Lang } from '../i18n';

export function LanguageSelector() {
  const { lang, setLang } = useLanguage();
  return (
    <div className="absolute top-[clamp(16px,2vh,32px)] right-[clamp(16px,2.5vw,40px)] z-50 flex items-center gap-2 p-1.5 rounded-full backdrop-blur-md bg-black/40 border border-white/10 shadow-lg">
      {(['ca', 'en', 'de'] as Lang[]).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          className={`w-9 h-9 rounded-full flex items-center justify-center text-[13px] font-bold tracking-widest uppercase transition-all duration-300 ${
            lang === l 
              ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30' 
              : 'text-white/60 hover:text-white hover:bg-white/10 border border-transparent'
          }`}
        >
          {l}
        </button>
      ))}
    </div>
  );
}
