import { Link } from 'react-router-dom';
import { ArrowLeft, HardHat } from 'lucide-react';
import { useLanguage } from '../i18n';

export default function Construction() {
  const { t } = useLanguage();

  return (
    <div className="relative w-screen h-screen overflow-hidden font-sans bg-[#0a0a0f] text-white flex flex-col items-center justify-center">
      <div 
        className="absolute inset-0 z-0 bg-center bg-cover opacity-30 mix-blend-screen"
        style={{ backgroundImage: `url('${import.meta.env.BASE_URL}eclipsi2026.jpg')` }}
      />
      <div className="absolute inset-0 bg-gradient-radial from-transparent to-black/90 pointer-events-none" />
      
      <div className="relative z-10 flex flex-col items-center gap-6 text-center px-6">
        <div className="w-20 h-20 rounded-full border border-orange-500/30 bg-orange-500/10 flex items-center justify-center backdrop-blur-md">
          <HardHat className="w-10 h-10 text-orange-400" />
        </div>
        
        <h1 className="font-cinzel text-3xl md:text-5xl font-semibold text-orange-400 tracking-widest text-shadow-md">
          {t('construction.title')}
        </h1>
        
        <p className="font-rajdhani text-lg md:text-xl text-white/70 max-w-md mx-auto">
          {t('construction.subtitle')}
        </p>

        <Link to="/" className="mt-4 flex items-center gap-2 px-6 py-3 rounded-xl backdrop-blur-md bg-white/5 border border-white/10 text-white font-rajdhani text-base tracking-wider transition-all hover:bg-white/10 hover:-translate-y-0.5">
          <ArrowLeft className="w-4 h-4" /> {t('nav.back')}
        </Link>
      </div>
    </div>
  );
}
