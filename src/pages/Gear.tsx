import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import React from 'react';
import { useLanguage } from '../i18n';

export default function Gear() {
  const { t } = useLanguage();
  const gearItems = t('gear.gearItems') || [];
  const kidsGear = t('gear.kidsGear') || [];

  return (
    <div className="min-h-screen w-full bg-[#0a0a0f] text-white overflow-x-hidden font-sans">
      {/* HERO */}
      <div className="relative w-full min-h-[30vh] flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-center bg-cover"
          style={{ 
            backgroundImage: `url('${import.meta.env.BASE_URL}eclipsi2026.jpg')`,
            maskImage: 'linear-gradient(to bottom, white 60%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, white 60%, transparent 100%)'
          }}
        />
        
        <Link to="/" className="absolute top-[clamp(16px,3vh,32px)] left-[clamp(16px,3vw,40px)] z-10 flex items-center gap-2 px-[clamp(14px,2vw,22px)] py-[clamp(8px,1vh,12px)] rounded-xl backdrop-blur-md bg-black/40 border border-white/10 text-white font-rajdhani text-[clamp(12px,1.3vw,16px)] tracking-[0.06em] transition-all hover:bg-amber-500/25 hover:-translate-y-0.5">
          <ArrowLeft className="w-4 h-4" /> {t('nav.back')}
        </Link>
        
        <h1 className="relative z-10 font-cinzel text-[clamp(36px,6vw,52px)] font-bold text-amber-500 tracking-[0.1em] text-center drop-shadow-[0_2px_15px_rgba(0,0,0,0.8)] uppercase pt-4">
          {t('gear.title')}
        </h1>
        <p className="relative z-10 mt-3 font-rajdhani text-[clamp(14px,2vw,22px)] text-white/80 max-w-2xl text-center tracking-wide px-4">
          {t('gear.subtitle')}
        </p>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4 md:px-6 xl:px-12 pb-20 -mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gearItems.map((group, i) => (
            <div key={i} className="flex flex-col bg-black/60 border border-white/10 rounded-2xl p-6 backdrop-blur-md shadow-xl">
              <h2 className="font-cinzel text-xl text-green-400 border-b border-white/10 pb-3 mb-4 tracking-widest">{group.category}</h2>
              <ul className="flex flex-col gap-4">
                {group.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-white/90">{item.name}</h3>
                      <p className="text-white/60 text-sm mt-1 leading-relaxed">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* NENS SECTION */}
        <div className="mt-12 bg-black/60 border border-amber-500/20 rounded-2xl p-6 md:p-10 backdrop-blur-md shadow-xl flex flex-col gap-6">
          <div className="flex flex-col items-start gap-2 border-b border-amber-500/20 pb-6">
            <h2 className="font-cinzel text-2xl md:text-3xl text-amber-500 tracking-wider">
              👶 {t('gear.kidsTitle')} <span className="text-xl md:text-2xl text-white/60 lowercase tracking-normal">{t('gear.kidsTitleInfo')}</span>
            </h2>
            <p className="text-lg md:text-xl text-white/70 italic font-rajdhani tracking-wide mt-1">
              {t('gear.kidsSubtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {kidsGear.map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-5 rounded-xl bg-black/40 border border-white/5 hover:border-amber-500/30 transition-colors shadow-lg">
                <div className="text-[32px] flex-shrink-0 leading-none">{item.icon}</div>
                <div className="pt-0.5">
                  <h3 className="font-semibold text-white/90 text-[17px] mb-2">{item.name}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
