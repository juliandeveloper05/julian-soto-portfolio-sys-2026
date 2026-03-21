import { motion } from 'framer-motion';
import { useTranslation } from '../../i18n/LanguageContext';

export default function Projects() {
  const { t } = useTranslation();

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

        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-8 md:pb-0">
          {t.projects.items.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`min-w-[85vw] md:min-w-0 snap-center bg-surface/60 backdrop-blur-xl border border-${project.color}/20 p-1 relative group overflow-hidden`}
            >
              <div className="absolute inset-0 scanline-texture opacity-10 pointer-events-none"></div>
              <div className="relative overflow-hidden aspect-video bg-surface mb-4">
                <img 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  src={project.image}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60"></div>
                <div className={`absolute top-2 left-2 bg-${project.color} text-black text-[10px] font-headline px-2 py-0.5 uppercase`}>
                  {project.tag}
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-headline text-xl font-bold text-on-surface mb-2 tracking-tight">{project.title}</h3>
                <p className="font-body text-sm text-on-surface-variant mb-6 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex gap-2">
                    <span className={`w-2 h-2 rounded-full bg-${project.color} animate-pulse`}></span>
                    <span className="w-2 h-2 rounded-full bg-secondary/30"></span>
                  </div>
                  <a 
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`font-headline text-xs text-${project.color} border border-${project.color}/30 px-4 py-2 uppercase tracking-widest glitch-hover transition-all`}
                  >
                    {t.projects.view_repo}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
