import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useLanguage } from '../i18n';

const renderBadge = (text: string, colorClass: string) => {
  let bgClass = 'bg-[#1a1a1a] border-[#333]';
  let textColor = colorClass;
  
  if (colorClass.includes('emerald') || colorClass.includes('lime')) {
    bgClass = 'bg-[#0f3a25]/90 border-[#14532d]/50'; 
    textColor = 'text-[#4ade80]'; 
  }
  else if (colorClass.includes('yellow') || colorClass.includes('amber')) {
    bgClass = 'bg-[#422006]/90 border-[#713f12]/50'; 
    textColor = 'text-[#facc15]'; 
  }
  else if (colorClass.includes('orange')) {
    bgClass = 'bg-[#431407]/90 border-[#7c2d12]/50';
    textColor = 'text-[#fb923c]'; 
  }
  else if (colorClass.includes('red')) {
    bgClass = 'bg-[#450a0a]/90 border-[#7f1d1d]/50';
    textColor = 'text-[#f87171]'; 
  }

  return (
    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-[13px] md:text-[14px] font-bold tracking-wider uppercase border ${bgClass} ${textColor}`}>
      {text}
    </span>
  );
};

export default function Ranking() {
  const [activeTab, setActiveTab] = useState<'es' | 'cat'>('es');
  const { t } = useLanguage();
  const data = activeTab === 'es' ? t('rankingData.espanaData') : t('rankingData.catData');

  return (
    <div className="min-h-screen w-full bg-[#0a0a0f] text-white flex flex-col font-sans overflow-x-hidden relative">
      {/* BACKGROUND IMAGE - top part only, fading into solid color */}
      <div 
        className="absolute top-0 left-0 right-0 h-[80vh] bg-[50%_80%] bg-cover opacity-100 z-0 pointer-events-none transition-opacity duration-1000"
        style={{ backgroundImage: `url('/eclipse2026.jpg')` }}
      />
      <div className="absolute top-0 left-0 right-0 h-[80vh] bg-gradient-to-b from-transparent from-30% via-[#0a0a0f]/80 to-[#0a0a0f] z-0 pointer-events-none" />

      {/* HEADER CONTENT */}
      <div className="relative z-10 flex flex-col items-center pt-[clamp(30px,4vh,60px)] pb-8 px-4">
        <Link to="/" className="absolute top-[clamp(16px,3vh,32px)] left-[clamp(16px,3vw,40px)] z-20 flex items-center gap-2 px-[clamp(14px,2vw,22px)] py-[clamp(8px,1vh,12px)] rounded-xl backdrop-blur-md bg-black/40 border border-white/10 text-white font-rajdhani text-[clamp(12px,1.3vw,16px)] tracking-[0.06em] transition-all hover:bg-orange-500/25 hover:-translate-y-0.5">
          <ArrowLeft className="w-4 h-4" /> {t('nav.back')}
        </Link>
        
        {/* Main Title */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-[clamp(50px,10vh,110px)] text-center flex flex-col items-center gap-2"
        >
          <h1 className="font-cinzel text-[clamp(28px,4.5vw,56px)] font-bold tracking-[0.08em] uppercase"
              style={{
                background: 'linear-gradient(to right, #f59e0b, #fbbf24)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                filter: 'drop-shadow(0 0 15px rgba(251,191,36,0.3)) drop-shadow(0 0 5px rgba(251,191,36,0.5))'
              }}>
            {t('ranking.title')}
          </h1>
          <p className="font-rajdhani text-base md:text-xl text-white/75 tracking-widest mt-2 px-2">
            {t('ranking.subtitle')}
          </p>
        </motion.div>
      </div>

      {/* TABS & TABLE SECION */}
      <div className="relative z-10 w-full mx-auto px-4 md:px-6 xl:px-12 pb-20 -mt-2 md:-mt-6 flex flex-col items-center">
        
        {/* Tabs */}
        <div className="flex bg-[#111116] p-1 rounded-xl border border-white/10 mb-8 self-start ml-2 md:ml-0">
          <button 
            onClick={() => setActiveTab('es')}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-lg font-rajdhani text-[17px] font-semibold tracking-wider transition-all duration-300 ${activeTab === 'es' ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20 shadow-[0_0_15px_rgba(245,158,11,0.15)]' : 'text-white/40 hover:text-white/70 border border-transparent'}`}
          >
            {t('ranking.spain')}
          </button>
          <button 
             onClick={() => setActiveTab('cat')}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-lg font-rajdhani text-[17px] font-semibold tracking-wider transition-all duration-300 ${activeTab === 'cat' ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20 shadow-[0_0_15px_rgba(245,158,11,0.15)]' : 'text-white/40 hover:text-white/70 border border-transparent'}`}
          >
            {t('ranking.catalonia')}
          </button>
        </div>

        {/* Desktop Table View */}
        <div className="hidden lg:block w-full overflow-x-auto pb-4">
          <div className="min-w-[1300px]">
            {/* Header Row */}
            <div className="grid grid-cols-[50px_70px_minmax(160px,1.2fr)_minmax(170px,1.3fr)_100px_70px_100px_160px_100px_130px_minmax(250px,2fr)] gap-4 items-center px-6 py-3 bg-black/60 border-b border-white/10 text-[15px] font-bold text-white tracking-widest uppercase sticky top-0 backdrop-blur-md z-20">
              <div>#</div>
              <div>{t('ranking.headers.score')}</div>
              <div>{t('ranking.headers.base')}</div>
              <div>{t('ranking.headers.loc')}</div>
              <div>{t('ranking.headers.tot')}</div>
              <div>{t('ranking.headers.sun')}</div>
              <div>{t('ranking.headers.hor')}</div>
              <div>{t('ranking.headers.dist')}</div>
              <div>{t('ranking.headers.sky')}</div>
              <div>{t('ranking.headers.crowd')}</div>
              <div className="pl-4">{t('ranking.headers.pros')}</div>
            </div>

            {/* Data Rows */}
            <div className="flex flex-col bg-black/30 backdrop-blur-sm mt-[1px]">
              {data.map((loc, i) => (
                <div key={i} className="grid grid-cols-[50px_70px_minmax(160px,1.2fr)_minmax(170px,1.3fr)_100px_70px_100px_160px_100px_130px_minmax(250px,2fr)] gap-4 items-center px-6 py-4 border-b border-white/5 hover:bg-white/[0.04] transition-colors last:border-b-0 text-[17px] leading-snug">
                  <div className="font-sans font-medium text-white/50 text-2xl pl-1">{loc.rank}</div>
                  
                  <div className="flex items-center justify-center w-[54px] h-[54px] rounded-full bg-black border border-white/10"
                       style={{ boxShadow: `0 0 15px 3px ${loc.scoreGlow.replace('1)', '0.6)')}` }}>
                    <span className={`font-black text-xl ${loc.scoreColor} drop-shadow-[0_0_5px_currentColor]`}>{loc.score}</span>
                  </div>

                  <div className="text-white font-medium text-[19px]">{loc.pob}</div>
                  <div className="text-white/80 text-[16px]">{loc.loc}</div>

                  
                  <div className={`font-semibold ${loc.totColor}`}>{loc.tot}</div>
                  <div className={`font-medium ${loc.solColor}`}>{loc.sol}</div>
                  <div className={`font-medium tracking-wide ${loc.horColor}`}>{loc.hor}</div>
                  
                  <div className={`font-medium ${loc.distColor}`}>{loc.dist}</div>
                  
                  <div>{renderBadge(loc.cel, loc.celColor)}</div>
                  <div>{renderBadge(loc.mas, loc.masColor)}</div>
                  
                  <div className="text-white/80 text-[17px] leading-relaxed pr-2 pl-4">
                    {loc.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile / Tablet List View */}
        <div className="lg:hidden flex flex-col gap-4 w-full">
          {data.map((loc, i) => (
            <div key={i} className="flex flex-col bg-black/50 border border-white/10 rounded-2xl p-4 md:p-5 backdrop-blur-sm">
              <div className="flex items-start justify-between mb-3 border-b border-white/10 pb-3">
                <div className="flex items-center gap-3">
                  <div className="font-sans text-2xl text-white/50 font-bold w-7">{loc.rank}.</div>
                  <div className="flex items-center justify-center w-[60px] h-[60px] rounded-full bg-black border border-white/10"
                       style={{ boxShadow: `0 0 15px 3px ${loc.scoreGlow.replace('1)', '0.6)')}` }}>
                    <span className={`font-black text-xl ${loc.scoreColor} drop-shadow-[0_0_5px_currentColor]`}>{loc.score}</span>
                  </div>
                  <div>
                    <h3 className="font-sans text-[20px] font-bold text-white tracking-wide">{loc.pob}</h3>
                    <p className="text-[16px] text-white/60 mt-0.5">{loc.loc}</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-y-4 gap-x-2 text-[17px] mb-4">
                <div className="flex flex-col items-start">
                  <div className="text-[12px] text-white/40 uppercase mb-1 font-bold tracking-wider">Durada</div>
                  <div className={`font-semibold ${loc.totColor}`}>{loc.tot}</div>
                </div>
                <div className="flex flex-col items-start">
                  <div className="text-[12px] text-white/40 uppercase mb-1 font-bold tracking-wider">Sol ↑</div>
                  <div className={`font-semibold ${loc.solColor}`}>{loc.sol}</div>
                </div>
                <div className="flex flex-col items-start">
                  <div className="text-[12px] text-white/40 uppercase mb-1 font-bold tracking-wider">Horitzó</div>
                  <div className={`font-semibold tracking-wide ${loc.horColor}`}>{loc.hor}</div>
                </div>
                <div className="flex flex-col items-start">
                  <div className="text-[12px] text-white/40 uppercase mb-1.5 font-bold tracking-wider">Cel serè</div>
                  {renderBadge(loc.cel, loc.celColor)}
                </div>
                <div className="flex flex-col items-start">
                  <div className="text-[12px] text-white/40 uppercase mb-1 font-bold tracking-wider">Distància</div>
                  <div className={`font-semibold ${loc.distColor}`}>{loc.dist}</div>
                </div>
                <div className="flex flex-col items-start">
                  <div className="text-[12px] text-white/40 uppercase mb-1.5 font-bold tracking-wider">Massificació</div>
                  {renderBadge(loc.mas, loc.masColor)}
                </div>
              </div>
              <div className="pt-3 border-t border-white/10">
                 <p className="text-[16px] text-white/70 leading-relaxed italic">"{loc.desc}"</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

