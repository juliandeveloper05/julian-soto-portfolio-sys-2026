import { motion } from 'framer-motion';
import { useTranslation } from '../../i18n/LanguageContext';

export default function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-12 md:py-24 px-6 max-w-7xl mx-auto w-full">
      <div className="font-headline text-[10px] text-primary/60 uppercase tracking-[0.3em] mb-6 md:hidden">
        {t.about.section_label}
      </div>
      <div className="flex items-center gap-4 mb-12">
        <h2 className="font-headline text-2xl md:text-5xl font-bold tracking-tighter uppercase">
          {t.about.heading_prefix}<span className="text-primary">{t.about.heading_highlight}</span>
        </h2>
        <div className="h-px bg-primary flex-1 opacity-20 hidden md:block"></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-surface/80 border border-primary/20 rounded-lg overflow-hidden shadow-[0_0_30px_rgba(156,255,147,0.05)]"
      >
        {/* Terminal Header */}
        <div className="bg-primary/10 px-4 py-2 flex items-center justify-between border-b border-primary/20">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
          </div>
          <div className="font-headline text-[10px] text-primary/60 uppercase tracking-widest">
            {t.about.terminal_title}
          </div>
        </div>

        {/* Terminal Body */}
        <div className="p-6 font-mono text-sm md:text-base leading-relaxed">
          <div className="mb-4 text-on-surface-variant">
            <span className="text-primary">julian@mainframe</span>:<span className="text-secondary">~</span>$ {t.about.terminal_command}
          </div>
          
          <div className="space-y-4">
            {t.about.lines.map((line, i) => (
              <motion.div 
                key={line.label}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row gap-2 md:gap-4"
              >
                <span className="text-primary font-bold min-w-[100px] uppercase">[{line.label}]:</span>
                <span className="text-on-surface">{line.value}</span>
              </motion.div>
            ))}
          </div>

          <div className="mt-6 flex items-center gap-2">
            <span className="text-primary">julian@mainframe</span>:<span className="text-secondary">~</span>$ 
            <motion.span 
              animate={{ opacity: [1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="w-2 h-5 bg-primary"
            ></motion.span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
