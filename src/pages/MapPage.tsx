import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import React from 'react';
import { useLanguage } from '../i18n';

export default function MapPage() {
  const { t } = useLanguage();
  return (
    <div className="fixed inset-0 w-full h-full bg-black z-50 flex items-center justify-center overflow-hidden cursor-default">
      <Link to="/" className="absolute top-[clamp(16px,3vh,32px)] left-[clamp(16px,3vw,40px)] z-20 flex items-center gap-2 px-[clamp(14px,2vw,22px)] py-[clamp(8px,1vh,12px)] rounded-xl backdrop-blur-md bg-black/40 border border-white/10 text-white font-rajdhani text-[clamp(12px,1.3vw,16px)] tracking-[0.06em] transition-all hover:bg-cyan-500/25 hover:-translate-y-0.5">
        <ArrowLeft className="w-4 h-4" /> {t('nav.back')}
      </Link>

      <img 
        src={`${import.meta.env.BASE_URL}eclipsi2026.jpg`}
        alt={t('map.alt')} 
        className="w-full h-full object-contain"
      />
    </div>
  );
}
