import { Link } from 'react-router-dom';
import { ArrowLeft, Map, BatteryCharging } from 'lucide-react';
import React, { useState } from 'react';
import { useLanguage } from '../i18n';

export default function RoutesPage() {
  const [activeTab, setActiveTab] = useState<'es' | 'cat'>('es');
  const { t } = useLanguage();
  
  const espanaRoutes = t('routes.espanaRoutes') || [];
  const catRoutes = t('routes.catRoutes') || [];
  const data = activeTab === 'es' ? espanaRoutes : catRoutes;

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
        
        <Link to="/" className="absolute top-[clamp(16px,3vh,32px)] left-[clamp(16px,3vw,40px)] z-10 flex items-center gap-2 px-[clamp(14px,2vw,22px)] py-[clamp(8px,1vh,12px)] rounded-xl backdrop-blur-md bg-black/40 border border-white/10 text-white font-rajdhani text-[clamp(12px,1.3vw,16px)] tracking-[0.06em] transition-all hover:bg-cyan-500/25 hover:-translate-y-0.5">
          <ArrowLeft className="w-4 h-4" /> {t('nav.back')}
        </Link>
        
        <h1 className="relative z-10 font-cinzel text-[clamp(32px,5vw,56px)] font-bold tracking-[0.08em] uppercase pt-4"
            style={{
              background: 'linear-gradient(to right, #06b6d4, #22d3ee)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              filter: 'drop-shadow(0 0 15px rgba(6,182,212,0.3)) drop-shadow(0 0 5px rgba(6,182,212,0.5))'
            }}>
          {t('routes.title')}
        </h1>
        <p className="relative z-10 mt-3 font-rajdhani text-[clamp(14px,2vw,22px)] text-white/80 max-w-2xl text-center tracking-wide px-4">
          {t('routes.subtitle')}
        </p>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 w-full mx-auto px-4 md:px-6 xl:px-12 pb-20 -mt-24 flex flex-col items-center">
        
        {/* TABS I TAULA */}
        <div className="w-full flex flex-col items-start">
          
          {/* Tabs */}
          <div className="inline-flex bg-[#111116] p-1 rounded-xl border border-white/10 mb-8 ml-2 md:ml-0">
            <button 
              onClick={() => setActiveTab('es')}
              className={`flex items-center justify-center gap-2 px-6 sm:px-8 py-3 rounded-lg font-rajdhani text-[15px] sm:text-[17px] font-semibold tracking-wider transition-all duration-300 ${activeTab === 'es' ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 shadow-[0_0_15px_rgba(6,182,212,0.15)]' : 'text-white/40 hover:text-white/70 border border-transparent'}`}
            >
              {t('routes.spain')}
            </button>
            <button 
               onClick={() => setActiveTab('cat')}
              className={`flex items-center justify-center gap-2 px-6 sm:px-8 py-3 rounded-lg font-rajdhani text-[15px] sm:text-[17px] font-semibold tracking-wider transition-all duration-300 ${activeTab === 'cat' ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 shadow-[0_0_15px_rgba(6,182,212,0.15)]' : 'text-white/40 hover:text-white/70 border border-transparent'}`}
            >
              {t('routes.catalonia')}
            </button>
          </div>

          {/* Desktop Table View */}
          <div className="hidden lg:block w-full overflow-x-auto pb-4">
            <div className="w-full min-w-[1240px]">
              {/* Header Row */}
              <div className="grid grid-cols-[40px_minmax(180px,1.1fr)_100px_minmax(200px,1.3fr)_minmax(180px,1fr)_minmax(280px,1.5fr)] gap-5 items-center px-6 py-3 bg-black/60 border-b border-white/10 text-[14px] md:text-[15px] font-bold text-white tracking-widest uppercase sticky top-0 backdrop-blur-md z-20">
                <div>#</div>
                <div>{t('routes.headers.loc')}</div>
                <div>{t('routes.headers.traj')}</div>
                <div>{t('routes.headers.maps')}</div>
                <div className="flex items-center gap-1.5"><BatteryCharging className="w-5 h-5 text-green-400" /> {t('routes.headers.stop')}</div>
                <div>{t('routes.headers.strat')}</div>
              </div>

              {/* Data Rows */}
              <div className="flex flex-col bg-black/30 backdrop-blur-sm mt-[1px]">
                {data.map((route: any, i: number) => (
                  <div key={i} className="grid grid-cols-[40px_minmax(180px,1.1fr)_100px_minmax(200px,1.3fr)_minmax(180px,1fr)_minmax(280px,1.5fr)] gap-5 items-start px-6 py-4 border-b border-white/5 hover:bg-white/[0.04] transition-colors last:border-b-0">
                    <div className="font-sans font-medium text-white/50 text-2xl pl-1 pt-1">{route.rank}</div>
                    
                    <div className="pt-1 pr-2">
                      <div className="text-white font-bold text-[18px]">{route.pob}</div>
                      <div className="text-white/60 text-[15px] mt-1">{route.loc}</div>
                    </div>

                    <div className="pt-1">
                      <div className="font-bold text-amber-500 text-[17px]">{route.dist}</div>
                      <div className="text-white/60 text-[15px] mt-1 font-medium">{route.time}</div>
                    </div>

                    <div className="pt-1 pr-2">
                      <a href={route.mapLink} target="_blank" rel="noreferrer" title={t('routes.openMap')} className="inline-flex items-center justify-start w-full gap-2 px-3.5 py-2 rounded-full bg-cyan-600/10 text-cyan-400 hover:bg-cyan-500 hover:text-white transition-all transform hover:-translate-y-0.5 border border-cyan-500/30 group mt-0.5">
                        <Map className="w-4 h-4 shrink-0 transition-transform group-hover:scale-110" />
                        <span className="text-[12px] font-semibold tracking-wider uppercase truncate pt-[1px]">Torelló ➔ {route.loc}</span>
                      </a>
                    </div>

                    <div className="flex flex-col items-start pt-1 pr-2">
                      <div className="font-bold text-green-300 text-[14px] leading-snug">
                         {route.chargeStop}
                      </div>
                    </div>
                    
                    <div className="text-white/70 text-[15px] leading-relaxed pt-1 pr-2">
                      {route.chargeDesc}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile / Tablet View */}
          <div className="lg:hidden w-full flex flex-col gap-6">
          {data.map((route: any, i: number) => (
            <div key={i} className="flex flex-col bg-black/50 border border-white/10 rounded-2xl p-5 md:p-6 backdrop-blur-sm shadow-xl">
              <div className="flex items-start justify-between mb-5 pb-5 border-b border-white/10">
                <div className="flex items-start gap-4">
                  <div className="font-sans text-[28px] text-white/40 font-bold w-6 pt-0.5">{route.rank}.</div>
                  <div>
                    <h3 className="font-sans text-[22px] font-bold text-white tracking-wide leading-tight">{route.pob}</h3>
                    <p className="text-[17px] text-white/50 mt-1">{route.loc}</p>
                    <p className="inline-block px-3 py-1 bg-amber-500/10 text-amber-400 text-[15px] font-bold tracking-widest uppercase rounded-md mt-3 border border-amber-500/20">
                      {route.dist} · {route.time}
                    </p>
                  </div>
                </div>
                <a href={route.mapLink} target="_blank" rel="noreferrer" title={t('routes.openMap')} className="flex-shrink-0 inline-flex items-center justify-center w-14 h-14 rounded-full bg-cyan-600/20 text-cyan-400 hover:bg-cyan-500 hover:text-white transition-colors border border-cyan-500/30 group ml-2 mt-1">
                  <Map className="w-6 h-6 group-hover:scale-110 transition-transform" />
                </a>
              </div>

              <div className="bg-black/40 rounded-xl p-5 border border-green-500/20">
                <div className="flex items-center gap-2 mb-4 border-b border-green-500/20 pb-4">
                  <BatteryCharging className="w-5 h-5 text-green-400" />
                  <span className="font-bold text-green-300 text-[14px] md:text-[15px] uppercase tracking-wider leading-snug">
                    {t('routes.idealStop')}: <span className="text-white normal-case">{route.chargeStop}</span>
                  </span>
                </div>
                <p className="text-white/70 text-[16px] md:text-[17px] leading-relaxed">
                  {route.chargeDesc}
                </p>
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>
    </div>
  );
}
