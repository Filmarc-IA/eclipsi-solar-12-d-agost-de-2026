import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { type ReactNode } from 'react';
import { Award, Map, Backpack, Route, Glasses, Sparkles } from 'lucide-react';
import { useLanguage } from '../i18n';

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="relative w-screen h-screen overflow-hidden font-sans bg-black">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-center bg-cover transition-opacity duration-500"
        style={{ backgroundImage: `url('${import.meta.env.BASE_URL}eclipsi2026.jpg')` }}
      />

      {/* Stage */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
        {/* Top Gradient */}
        <div className="absolute top-0 left-0 right-0 h-[clamp(80px,15vh,180px)] bg-gradient-to-b from-black/80 via-black/20 to-transparent pointer-events-none z-[3]" />

        {/* Top Tagline */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute top-[clamp(16px,3vh,48px)] left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 z-20 px-[clamp(28px,3.5vw,56px)] py-[clamp(10px,1.5vh,20px)] rounded-[18px] backdrop-blur-md bg-black/25 border border-white/10 w-max max-w-[90vw] text-center"
        >
          <motion.span 
            animate={{ textShadow: ["0 0 20px rgba(34,211,238,.5), 0 1px 6px rgba(0,0,0,.7)", "0 0 35px rgba(34,211,238,.9), 0 1px 6px rgba(0,0,0,.7)", "0 0 20px rgba(34,211,238,.5), 0 1px 6px rgba(0,0,0,.7)"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="font-cinzel text-[clamp(16px,2.2vw,32px)] font-semibold text-cyan-400 tracking-[0.08em] uppercase"
          >
            {t('home.date')}
          </motion.span>
          <span className="font-rajdhani text-[clamp(11px,1.4vw,20px)] font-normal text-white/75 tracking-[0.15em] drop-shadow-md mt-1">
            {t('home.subtitle')}
          </span>
        </motion.div>

        {/* Center Title */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-20 w-[90vw] flex flex-col items-center gap-[clamp(14px,2vw,28px)]"
        >
          <motion.h1 
            animate={{ textShadow: ["0 0 40px rgba(255,152,0,.6), 0 0 80px rgba(255,152,0,.3), 0 2px 20px rgba(0,0,0,.9)", "0 0 60px rgba(255,152,0,.8), 0 0 120px rgba(255,152,0,.4), 0 2px 20px rgba(0,0,0,.9)", "0 0 40px rgba(255,152,0,.6), 0 0 80px rgba(255,152,0,.3), 0 2px 20px rgba(0,0,0,.9)"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="text-[clamp(33px,6.7vw,101px)] font-black tracking-[0.25em] leading-none text-white font-sans ml-[0.25em]"
          >
            {t('home.eclipse')}
          </motion.h1>
          <div className="relative inline-block py-[clamp(6px,1vh,12px)]">
            <div className="absolute top-1/2 right-[calc(100%+clamp(12px,2vw,24px))] w-[clamp(40px,8vw,120px)] h-[2px] bg-gradient-to-r from-transparent to-amber-500/80 -translate-y-1/2" />
            <motion.span 
              animate={{ textShadow: ["0 0 40px rgba(255,152,0,.7), 0 0 90px rgba(255,152,0,.4), 0 0 140px rgba(255,152,0,.15), 0 2px 20px rgba(0,0,0,.9)", "0 0 60px rgba(255,152,0,.9), 0 0 130px rgba(255,152,0,.6), 0 0 160px rgba(255,152,0,.2), 0 2px 20px rgba(0,0,0,.9)", "0 0 40px rgba(255,152,0,.7), 0 0 90px rgba(255,152,0,.4), 0 0 140px rgba(255,152,0,.15), 0 2px 20px rgba(0,0,0,.9)"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="text-[clamp(30px,6.1vw,92px)] font-black text-white tracking-[0.12em] leading-none font-sans"
            >
              2026
            </motion.span>
            <div className="absolute top-1/2 left-[calc(100%+clamp(12px,2vw,24px))] w-[clamp(40px,8vw,120px)] h-[2px] bg-gradient-to-l from-transparent to-amber-500/80 -translate-y-1/2" />
          </div>
        </motion.div>

        {/* Bottom Gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-[clamp(80px,15vh,180px)] bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none z-[3]" />

        {/* Bottom Nav Bar */}
        <motion.nav 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute bottom-[clamp(20px,3vh,40px)] flex gap-[clamp(14px,2.5vw,36px)] z-20 flex-wrap justify-center max-w-[94vw]"
        >
          <NavItem to="/ranking" icon={<Award />} label={t('home.ranking')} color="amber" glowColor="rgba(255,193,7,1)" />
          <NavItem to="/mapa" icon={<Map />} label={t('home.map')} color="blue" glowColor="rgba(33,150,243,1)" />
          <NavItem to="/equipatge" icon={<Backpack />} label={t('home.gear')} color="green" glowColor="rgba(76,175,80,1)" />
          <NavItem to="/rutes" icon={<Route />} label={t('home.routes')} color="cyan" glowColor="rgba(0,188,212,1)" />
          <NavItem to="/proteccio" icon={<Glasses />} label={t('home.protection')} color="orange" glowColor="rgba(255,87,34,1)" />
          <NavItem to="/curiositats" icon={<Sparkles />} label={t('home.funFacts')} color="purple" glowColor="rgba(171,71,188,1)" />
        </motion.nav>
      </div>
    </div>
  );
}

function NavItem({ to, icon, label, color, glowColor }: { to: string, icon: ReactNode, label: string, color: string, glowColor: string }) {
  const colorMap = {
    amber: { text: "text-amber-400", hoverBg: "hover:bg-amber-400/15" },
    blue: { text: "text-blue-500", hoverBg: "hover:bg-blue-500/15" },
    green: { text: "text-green-500", hoverBg: "hover:bg-green-500/15" },
    cyan: { text: "text-cyan-500", hoverBg: "hover:bg-cyan-500/15" },
    orange: { text: "text-orange-500", hoverBg: "hover:bg-orange-500/15" },
    purple: { text: "text-purple-500", hoverBg: "hover:bg-purple-500/15" },
  } as Record<string, { text: string, hoverBg: string }>;

   const colors = colorMap[color];

  return (
    <Link to={to} className={`flex flex-col items-center justify-center gap-[clamp(4px,0.8vw,8px)] w-[clamp(72px,11vw,120px)] h-[clamp(92px,12.5vw,140px)] text-white transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:scale-105 rounded-xl ${colors.hoverBg} group`}>
      <div className={`flex items-center justify-center w-[clamp(62px,9vw,100px)] h-[clamp(62px,9vw,100px)] rounded-full bg-black border border-white/10 transition-all duration-400 ${colors.text}`} 
           style={{ 
             boxShadow: `0 0 35px 8px ${glowColor.replace('1)', '0.65)')}` 
           }}
           onMouseEnter={(e) => {
             e.currentTarget.style.boxShadow = `0 0 45px 12px ${glowColor}, 0 0 85px 25px ${glowColor.replace('1)', '0.8)')}`;
           }}
           onMouseLeave={(e) => {
             e.currentTarget.style.boxShadow = `0 0 35px 8px ${glowColor.replace('1)', '0.65)')}`;
           }}
      >
        <div className="w-[clamp(28px,3.5vw,34px)] h-[clamp(28px,3.5vw,34px)] [&>svg]:w-full [&>svg]:h-full [&>svg]:stroke-[2px]">
          {icon}
        </div>
      </div>
      <span className="text-[clamp(10px,1.15vw,14px)] font-medium tracking-[0.05em] uppercase drop-shadow-[0_1px_6px_rgba(0,0,0,0.7)]">
        {label}
      </span>
    </Link>
  );
}
