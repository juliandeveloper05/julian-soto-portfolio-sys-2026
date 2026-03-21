import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '../../i18n/LanguageContext';
import { Cpu, Cloud, Zap, Database, Terminal, Shield, Code, ChevronRight } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Cpu,
  Cloud,
  Zap,
  Database,
  Terminal,
  Shield,
  Code
};

export default function Projects() {
  const { t } = useTranslation();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showArrow, setShowArrow] = useState(true);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const handleScroll = () => {
      setShowArrow(el.scrollLeft + el.clientWidth < el.scrollWidth - 20);
    };
    el.addEventListener('scroll', handleScroll, { passive: true });
    return () => el.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="projects" className="relative py-24 bg-background overflow-hidden">
      {/* Matrix Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none font-headline text-[10px] leading-tight text-primary overflow-hidden">
        <div className="flex flex-wrap gap-4 p-4">
          <p>01101011 01100101 01110010 01101110 01100101 01101100 01111111</p>
          <p>#define MAX_BUFFER 1024; system.init();</p>
          <p>void decrypt(char* cipher) {'{'} while(*cipher) {'{'} *cipher ^= 0xAF; {'}'} {'}'}</p>
          <p>sudo rm -rf /root/oblivion</p>
          <p>CONNECTING_TO_UPLINK_0091...</p>
          <p>0x00000000 0x00000001 0x00000002</p>
          <p>SSH_ENCRYPTION_LAYER_ACTIVE</p>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="font-headline text-[10px] text-primary/60 uppercase tracking-[0.3em] mb-6 md:hidden">
          {t.projects.section_label}
        </div>
        <div className="flex md:items-center gap-4 mb-16">
          <div className="h-px bg-primary flex-1 opacity-20 hidden md:block"></div>
          <h2 className="font-headline text-2xl md:text-5xl font-bold tracking-tighter uppercase">
            {t.projects.heading_prefix}<span className="text-primary">{t.projects.heading_highlight}</span>
          </h2>
          <div className="h-px bg-secondary flex-1 opacity-20 hidden md:block"></div>
        </div>

        <div ref={scrollRef} className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-8 md:pb-0">
          {t.projects.items.map((project, index) => {
            const Icon = iconMap[project.icon] || Code;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`min-w-[85vw] md:min-w-0 snap-center group relative glass-panel glitch-border p-6 flex flex-col h-full border border-outline-variant/10 bg-surface/40 backdrop-blur-xl`}
              >
                <div className="scanline absolute inset-0 opacity-[0.03] pointer-events-none"></div>
                <div className="flex justify-between items-start mb-6 relative z-10">
                  <div className={`w-12 h-12 flex items-center justify-center bg-${project.color}/10 border border-${project.color}/20 rounded-lg shadow-[0_0_15px] shadow-${project.color}/20 group-hover:shadow-[0_0_25px] group-hover:shadow-${project.color}/40 transition-all`}>
                    <Icon className={`w-6 h-6 text-${project.color}`} />
                  </div>
                  <span className={`font-headline text-[10px] px-2 py-1 bg-${project.color}/20 text-${project.color} border border-${project.color}/30 tracking-tighter uppercase`}>
                    {project.tag}
                  </span>
                </div>
                
                <h3 className="font-headline text-xl font-bold text-on-surface mb-3 tracking-tight relative z-10">{project.title}</h3>
                <p className="font-body text-sm text-on-surface-variant mb-8 leading-relaxed line-clamp-4 relative z-10">
                  {project.description}
                </p>
                
                <div className="mt-auto flex flex-col xl:flex-row xl:items-center justify-between gap-6 xl:gap-2 relative z-10">
                  <div className="flex gap-2 flex-wrap max-w-[80%] xl:max-w-[60%]">
                    {project.techs.map((tech) => (
                      <span key={tech} className={`font-headline text-[9px] text-${project.color}/50 uppercase tracking-wider`}>#{tech}</span>
                    ))}
                  </div>
                  <a 
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 px-4 py-2 bg-${project.color} text-black font-headline text-xs font-bold tracking-widest shadow-[0_0_20px] shadow-${project.color}/40 hover:shadow-[0_0_30px] hover:shadow-${project.color}/60 transition-all active:scale-95 whitespace-nowrap w-fit`}
                  >
                    {t.projects.view_repo}
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile scroll hint arrow */}
        <div className={`md:hidden flex justify-center mt-4 transition-opacity duration-300 ${showArrow ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          <motion.div
            animate={{ x: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.2, ease: 'easeInOut' }}
            className="flex items-center gap-1 text-primary/70"
          >
            <span className="font-headline text-[10px] uppercase tracking-[0.2em]">scroll</span>
            <ChevronRight className="w-4 h-4" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
