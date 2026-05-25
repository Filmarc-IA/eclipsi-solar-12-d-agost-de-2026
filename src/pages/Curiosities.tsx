import { Link } from 'react-router-dom';
import { ArrowLeft, Sparkles, Calendar, Eye, Moon, Sun, Wind } from 'lucide-react';
import React from 'react';
import { useLanguage } from '../i18n';

export default function Curiosities() {
  const { t } = useLanguage();
  const curiositiesData = t('curiosities.items') || [];
  
  // Create an array mapping icons
  const iconMap = [
    <Eye className="w-8 h-8 text-purple-400" />,
    <Calendar className="w-8 h-8 text-purple-400" />,
    <Moon className="w-8 h-8 text-purple-400" />,
    <Sparkles className="w-8 h-8 text-purple-400" />,
    <Sun className="w-8 h-8 text-purple-400" />,
    <Wind className="w-8 h-8 text-purple-400" />
  ];

  return (
    <div className="min-h-screen w-full bg-[#0a0a0f] text-white overflow-x-hidden font-sans">
      {/* HERO */}
      <div className="relative w-full min-h-[30vh] flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-center bg-cover"
          style={{ 
            backgroundImage: `url('/eclipse2026.jpg')`,
            maskImage: 'linear-gradient(to bottom, white 60%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, white 60%, transparent 100%)'
          }}
        />
        
        <Link to="/" className="absolute top-[clamp(16px,3vh,32px)] left-[clamp(16px,3vw,40px)] z-10 flex items-center gap-2 px-[clamp(14px,2vw,22px)] py-[clamp(8px,1vh,12px)] rounded-xl backdrop-blur-md bg-black/40 border border-white/10 text-white font-rajdhani text-[clamp(12px,1.3vw,16px)] tracking-[0.06em] transition-all hover:bg-amber-500/25 hover:-translate-y-0.5">
          <ArrowLeft className="w-4 h-4" /> {t('nav.back')}
        </Link>
        
        <h1 className="relative z-10 font-cinzel text-[clamp(36px,6vw,52px)] font-bold text-amber-500 tracking-[0.1em] text-center drop-shadow-[0_2px_15px_rgba(0,0,0,0.8)] uppercase pt-4">
          {t('curiosities.title')}
        </h1>
        <p className="relative z-10 mt-3 font-rajdhani text-[clamp(14px,2vw,22px)] text-white/80 max-w-2xl text-center tracking-wide px-4">
          {t('curiosities.subtitle')}
        </p>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4 md:px-6 xl:px-12 pb-20 -mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {curiositiesData.map((item: any, i: number) => (
            <div key={i} className="flex gap-4 bg-[#111116]/80 border border-purple-500/20 rounded-2xl p-6 md:p-8 backdrop-blur-md shadow-lg transition-transform hover:scale-[1.02] hover:border-purple-400/40">
              <div className="flex-shrink-0 mt-1">
                {iconMap[i] || <Sparkles className="w-8 h-8 text-purple-400" />}
              </div>
              <div>
                <h2 className="font-cinzel text-xl text-purple-300 font-bold mb-3 tracking-wider">{item.title}</h2>
                <p className="text-white/70 leading-relaxed text-[15px] md:text-[16px]">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
