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
        style={{ backgroundImage: `url('${import.meta.env.BASE_URL}eclipse2026.jpg')` }}
      />

      {/* Stage */}
      <div 
        className="relative z-10 w-full h-full flex flex-col items-center justify-center"
        style={{ '--bg-scale': 'max(1vw, 1.79167vh)' } as React.CSSProperties}
      >
        {/* Top Gradient */}
        <div className="absolute top-0 left-0 right-0 h-[clamp(80px,15vh,180px)] bg-gradient-to-b from-black/80 via-black/20 to-transparent pointer-events-none z-[3]" />

        {/* Top Tagline */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute top-[max(90px,10vh)] sm:top-[clamp(16px,3vh,48px)] left-1/2 -translate-x-1/2 flex flex-col items-center z-20 rounded-[18px] backdrop-blur-md bg-black/25 border border-white/10 w-max max-w-[95vw] sm:max-w-[90vw] text-center"
          style={{ 
            gap: 'calc(0.2 * var(--bg-scale))',
            padding: 'calc(1 * var(--bg-scale)) calc(2 * var(--bg-scale))'
          }}
        >
          <motion.span 
            animate={{ textShadow: ["0 0 20px rgba(34,211,238,.5), 0 1px 6px rgba(0,0,0,.7)", "0 0 35px rgba(34,211,238,.9), 0 1px 6px rgba(0,0,0,.7)", "0 0 20px rgba(34,211,238,.5), 0 1px 6px rgba(0,0,0,.7)"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="font-cinzel font-semibold text-cyan-400 tracking-[0.08em] uppercase"
            style={{ fontSize: 'calc(1.26 * var(--bg-scale))' }}
          >
            {t('home.date')}
          </motion.span>
          <span 
            className="font-rajdhani font-normal text-white/75 tracking-[0.15em] drop-shadow-md"
            style={{ 
              fontSize: 'calc(0.77 * var(--bg-scale))',
              marginTop: 'calc(0.35 * var(--bg-scale))'
            }}
          >
            {t('home.subtitle')}
          </span>
        </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-20 flex flex-col items-center"
        style={{ gap: 'calc(1.5 * var(--bg-scale))' }}
      >
        <motion.h1 
          animate={{ textShadow: ["0 0 40px rgba(255,152,0,.6), 0 0 80px rgba(255,152,0,.3), 0 2px 20px rgba(0,0,0,.9)", "0 0 60px rgba(255,152,0,.8), 0 0 120px rgba(255,152,0,.4), 0 2px 20px rgba(0,0,0,.9)", "0 0 40px rgba(255,152,0,.6), 0 0 80px rgba(255,152,0,.3), 0 2px 20px rgba(0,0,0,.9)"] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="font-black tracking-[0.25em] leading-none text-white font-sans ml-[0.25em]"
          style={{ fontSize: 'calc(4.95 * var(--bg-scale))' }}
        >
          {t('home.eclipse')}
        </motion.h1>
        <div className="relative inline-block" style={{ padding: 'calc(0.5 * var(--bg-scale)) 0' }}>
          <div className="absolute top-1/2 right-[calc(100%+calc(1.5*var(--bg-scale)))] w-[calc(6*var(--bg-scale))] h-[2px] bg-gradient-to-r from-transparent to-amber-500/80 -translate-y-1/2" />
          <motion.span 
            animate={{ textShadow: ["0 0 40px rgba(255,152,0,.7), 0 0 90px rgba(255,152,0,.4), 0 0 140px rgba(255,152,0,.15), 0 2px 20px rgba(0,0,0,.9)", "0 0 60px rgba(255,152,0,.9), 0 0 130px rgba(255,152,0,.6), 0 0 160px rgba(255,152,0,.2), 0 2px 20px rgba(0,0,0,.9)", "0 0 40px rgba(255,152,0,.7), 0 0 90px rgba(255,152,0,.4), 0 0 140px rgba(255,152,0,.15), 0 2px 20px rgba(0,0,0,.9)"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="font-black text-white tracking-[0.12em] leading-none font-sans"
            style={{ fontSize: 'calc(4.05 * var(--bg-scale))' }}
          >
            2026
          </motion.span>
          <div className="absolute top-1/2 left-[calc(100%+calc(1.5*var(--bg-scale)))] w-[calc(6*var(--bg-scale))] h-[2px] bg-gradient-to-l from-transparent to-amber-500/80 -translate-y-1/2" />
        </div>
      </motion.div>

        {/* Bottom Gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-[clamp(80px,15vh,180px)] bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none z-[3]" />

        {/* Bottom Nav Bar */}
        <motion.nav 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute bottom-[clamp(20px,3vh,40px)] flex z-20 flex-wrap justify-center w-full max-w-[94vw]"
          style={{ gap: 'calc(1.4 * var(--bg-scale))' }}
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
    <Link 
      to={to} 
      className={`flex flex-col items-center justify-center text-white transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:scale-105 rounded-xl ${colors.hoverBg} group`}
      style={{
        width: 'calc(6.04 * var(--bg-scale))',
        height: 'calc(8.05 * var(--bg-scale))',
        gap: 'calc(0.4 * var(--bg-scale))'
      }}
    >
      <div 
        className={`flex items-center justify-center rounded-full bg-black border border-white/10 transition-all duration-400 ${colors.text}`} 
        style={{ 
          width: 'calc(4.43 * var(--bg-scale))',
          height: 'calc(4.43 * var(--bg-scale))',
          boxShadow: `0 0 25px 5px ${glowColor.replace('1)', '0.65)')}` 
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = `0 0 35px 9px ${glowColor}, 0 0 65px 18px ${glowColor.replace('1)', '0.8)')}`;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = `0 0 25px 5px ${glowColor.replace('1)', '0.65)')}`;
        }}
      >
        <div 
          className="[&>svg]:w-full [&>svg]:h-full [&>svg]:stroke-[2px]"
          style={{
            width: 'calc(2.01 * var(--bg-scale))',
            height: 'calc(2.01 * var(--bg-scale))'
          }}
        >
          {icon}
        </div>
      </div>
      <span 
        className="font-medium tracking-[0.05em] uppercase drop-shadow-[0_1px_6px_rgba(0,0,0,0.7)]"
        style={{
          fontSize: 'calc(0.725 * var(--bg-scale))'
        }}
      >
        {label}
      </span>
    </Link>
  );
}
