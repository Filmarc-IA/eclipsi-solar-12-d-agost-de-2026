import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import React, { type ReactNode } from 'react';
import { ArrowLeft, Glasses, Telescope, Camera, Droplets, Tent, Beaker as Sun, Pocket as Jacket, Droplet, Check } from 'lucide-react';
import { useLanguage } from '../i18n';

export default function Protection() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen w-full bg-[#0a0a0f] text-white overflow-x-hidden font-sans">
      {/* HERO */}
      <div className="relative w-full min-h-[30vh] flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-center bg-cover"
          style={{ 
            backgroundImage: `url('${import.meta.env.BASE_URL}eclipse2026.jpg')`,
            maskImage: 'linear-gradient(to bottom, white 60%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, white 60%, transparent 100%)'
          }}
        />
        
        <Link to="/" className="absolute top-[clamp(16px,3vh,32px)] left-[clamp(16px,3vw,40px)] z-10 flex items-center gap-2 px-[clamp(14px,2vw,22px)] py-[clamp(8px,1vh,12px)] rounded-xl backdrop-blur-md bg-black/40 border border-white/10 text-white font-rajdhani text-[clamp(12px,1.3vw,16px)] tracking-[0.06em] transition-all hover:bg-orange-500/25 hover:-translate-y-0.5">
          <ArrowLeft className="w-4 h-4" /> {t('nav.back')}
        </Link>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 font-cinzel text-[clamp(36px,6vw,64px)] font-semibold text-[#FF5722] tracking-[0.12em] uppercase text-center"
          style={{ textShadow: "0 0 40px rgba(255,87,34,.6), 0 2px 20px rgba(0,0,0,.9)" }}
        >
          {t('protection.title')}
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="relative z-10 font-rajdhani text-[clamp(14px,2vw,22px)] text-white/65 mt-3 tracking-[0.08em] px-4 text-center"
        >
          {t('protection.subtitle')}
        </motion.p>
      </div>

      {/* ALERT CRÍTIC */}
      <div className="relative z-10 max-w-4xl mx-auto -mt-12 px-[clamp(20px,4vw,40px)]">
        <div className="bg-gradient-to-br from-orange-500/15 to-orange-500/5 border border-orange-500/30 rounded-2xl p-[clamp(20px,3vw,32px)] flex items-start gap-4">
          <div className="text-[clamp(28px,4vw,40px)] shrink-0 leading-none">⚠️</div>
          <div>
            <h3 className="font-cinzel text-[clamp(16px,2vw,22px)] text-[#FF5722] mb-2 font-semibold">{t('protection.alert.title')}</h3>
            <p className="text-[clamp(13px,1.4vw,16px)] leading-relaxed text-white/85" dangerouslySetInnerHTML={{ __html: t('protection.alert.desc') }} />
          </div>
        </div>
      </div>

      {/* SECTIONS */}
      <Section title={t('protection.sections.filters.title')}>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,280px),1fr))] gap-[clamp(16px,2vw,24px)]">
          <Card icon={<Glasses className="w-10 h-10 text-orange-400" />} title={t('protection.sections.filters.cards.0.title')} 
                desc={t('protection.sections.filters.cards.0.desc')}
                items={t('protection.sections.filters.cards.0.items')} />
          <Card icon={<Telescope className="w-10 h-10 text-orange-400" />} title={t('protection.sections.filters.cards.1.title')} 
                desc={t('protection.sections.filters.cards.1.desc')}
                items={t('protection.sections.filters.cards.1.items')} />
          <Card icon={<Camera className="w-10 h-10 text-orange-400" />} title={t('protection.sections.filters.cards.2.title')} 
                desc={t('protection.sections.filters.cards.2.desc')}
                items={t('protection.sections.filters.cards.2.items')} />
        </div>
      </Section>

      <Divider />

      <Section title={t('protection.sections.sun.title')}>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,280px),1fr))] gap-[clamp(16px,2vw,24px)]">
          <Card icon={<Droplets className="w-10 h-10 text-orange-400" />} title={t('protection.sections.sun.cards.0.title')} 
                desc={t('protection.sections.sun.cards.0.desc')}
                items={t('protection.sections.sun.cards.0.items')} />
          <Card icon={<Tent className="w-10 h-10 text-orange-400" />} title={t('protection.sections.sun.cards.1.title')} 
                desc={t('protection.sections.sun.cards.1.desc')}
                items={t('protection.sections.sun.cards.1.items')} />
          <Card icon={<Sun className="w-10 h-10 text-orange-400" />} title={t('protection.sections.sun.cards.2.title')} 
                desc={t('protection.sections.sun.cards.2.desc')}
                items={t('protection.sections.sun.cards.2.items')} />
        </div>
      </Section>

      <Divider />

      <Section title={t('protection.sections.cold.title')}>
        <div className="bg-gradient-to-br from-[#FF5722]/10 to-orange-400/5 border-l-4 border-[#FF5722] rounded-r-xl p-[clamp(16px,2vw,24px)] my-[clamp(20px,3vw,36px)]">
          <h5 className="font-rajdhani font-semibold text-[clamp(14px,1.8vw,18px)] text-orange-300 mb-1.5">{t('protection.sections.cold.highlightTitle')}</h5>
          <p className="text-[clamp(12px,1.3vw,15px)] leading-relaxed text-white/80" dangerouslySetInnerHTML={{ __html: t('protection.sections.cold.highlightDesc') }} />
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,280px),1fr))] gap-[clamp(16px,2vw,24px)]">
          <Card icon={<Jacket className="w-10 h-10 text-orange-400" />} title={t('protection.sections.cold.cards.0.title')} 
                desc={t('protection.sections.cold.cards.0.desc')}
                items={t('protection.sections.cold.cards.0.items')} />
          <Card icon={<Droplet className="w-10 h-10 text-orange-400" />} title={t('protection.sections.cold.cards.1.title')} 
                desc={t('protection.sections.cold.cards.1.desc')}
                items={t('protection.sections.cold.cards.1.items')} />
        </div>
      </Section>

      <Divider />
      
      <Section title={t('protection.sections.protocol.title')}>
        <div className="relative max-w-2xl mx-auto before:content-[''] before:absolute before:left-[24px] before:top-0 before:bottom-0 before:w-0.5 before:bg-gradient-to-b before:from-[#FF5722] before:via-[#FFB74D] before:to-transparent">
          {t('protection.sections.protocol.items').map((item: any, i: number) => (
            <TimelineItem key={i} icon={item.icon} title={item.title} time={item.time} desc={item.desc} bold={item.bold} />
          ))}
        </div>
      </Section>

      <Divider />

      <Section title={t('protection.sections.checklist.title')}>
        <div className="max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-2">
          {t('protection.sections.checklist.items').map((item: string, i: number) => (
            <div key={i} className="flex items-center gap-2.5 px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-[clamp(12px,1.3vw,15px)] text-white/80 transition-colors hover:bg-orange-400/10">
              <Check className="w-4 h-4 text-orange-400 shrink-0" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="text-center py-10 px-[clamp(20px,4vw,40px)] text-white/30 text-xs border-t border-white/10 mt-10" dangerouslySetInnerHTML={{ __html: t('protection.footer') }} />
    </div>
  );
}

function Section({ title, children }: { title: string, children: ReactNode }) {
  return (
    <section className="max-w-5xl mx-auto py-[clamp(40px,6vw,80px)] px-[clamp(20px,4vw,40px)]">
      <h2 className="font-cinzel text-[clamp(22px,3.5vw,36px)] text-orange-300 text-center mb-[clamp(30px,4vw,50px)] tracking-widest font-semibold">{title}</h2>
      {children}
    </section>
  );
}

function Card({ icon, title, desc, items }: { icon: ReactNode, title: string, desc: string, items: string[] }) {
  return (
    <div className="bg-gradient-to-br from-white/5 to-white/5 border border-white/10 rounded-2xl p-[clamp(20px,2.5vw,32px)] transition-all duration-300 hover:-translate-y-1 hover:border-orange-300/30 hover:shadow-[0_8px_30px_rgba(255,183,77,0.08)] flex flex-col h-full">
      <div className="mb-4">{icon}</div>
      <h4 className="font-rajdhani font-semibold text-[clamp(16px,2vw,20px)] text-orange-300 mb-2">{title}</h4>
      <p className="text-[clamp(12px,1.3vw,15px)] leading-relaxed text-white/75 mb-4">{desc}</p>
      <ul className="mt-auto space-y-1.5 focus:outline-none">
        {items.map((item, i) => (
          <li key={i} className="text-[clamp(12px,1.3vw,15px)] leading-relaxed text-white/70 relative pl-4 before:content-['✦'] before:absolute before:left-0 before:text-[10px] before:text-orange-300 before:top-1.5">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

const TimelineItem: React.FC<{ icon: string, title: string, time: string, desc: string, bold?: boolean }> = ({ icon, title, time, desc, bold }) => {
  return (
    <div className="flex gap-5 mb-7 items-start relative z-10">
      <div className="shrink-0 w-[50px] h-[50px] rounded-full bg-orange-500/15 border-2 border-[#FF5722] flex items-center justify-center text-[22px] backdrop-blur-sm">
        {icon}
      </div>
      <div className="flex-1 bg-white/5 border border-white/5 rounded-xl p-4 sm:p-5">
        <h4 className="font-rajdhani font-semibold text-[clamp(15px,1.8vw,18px)] text-orange-300 mb-1">{title}</h4>
        <div className="font-cinzel text-xs text-[#FF5722] mb-2 font-medium tracking-wide">{time}</div>
        <p className={`text-[clamp(12px,1.3vw,15px)] leading-relaxed text-white/75 ${bold ? '[&>strong]:text-orange-400 [&>strong]:font-semibold' : ''}`} dangerouslySetInnerHTML={{ __html: desc.replace(/POSADES/g, '<strong>POSADES</strong>').replace(/POSAR LES ULLERES IMMEDIATAMENT/g, '<strong>POSAR LES ULLERES IMMEDIATAMENT</strong>').replace(/100% cobert/g, '<strong>100% cobert</strong>').replace(/POTS treure't les ulleres/g, "<strong>POTS treure't les ulleres</strong>") }} />
      </div>
    </div>
  )
}

function Divider() {
  return <div className="w-[60px] h-0.5 mx-auto bg-gradient-to-r from-transparent via-orange-300 to-transparent" />;
}
