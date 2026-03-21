import { Code, Shield, Zap, Cpu, Layers, Database } from 'lucide-react';
import { motion } from 'motion/react';
import { useTranslation } from '../../i18n/LanguageContext';

const iconMap: Record<string, React.ElementType> = {
  Code,
  Shield,
  Zap,
  Cpu,
  Layers,
  Database,
};

export default function Services() {
  const { t } = useTranslation();

  return (
    <section id="services" className="py-12 md:py-24 px-6 max-w-7xl mx-auto w-full">
      <div className="font-headline text-[10px] text-secondary/60 uppercase tracking-[0.3em] mb-6 md:hidden">
        {t.services.section_label}
      </div>
      <div className="flex items-center gap-4 mb-16">
        <div className="h-px bg-secondary flex-1 opacity-20 hidden md:block"></div>
        <h2 className="font-headline text-2xl md:text-5xl font-bold tracking-tighter uppercase">
          {t.services.heading_prefix}<span className="text-secondary">{t.services.heading_highlight}</span>
        </h2>
        <div className="h-px bg-primary flex-1 opacity-20 hidden md:block"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {t.services.items.map((service, index) => {
          const IconComponent = iconMap[service.icon] || Code;
          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`group relative p-8 bg-surface/40 backdrop-blur-xl border border-on-surface-variant/10 hover:border-${service.color}/50 transition-all duration-500 rounded-lg overflow-hidden`}
            >
              {/* Ambient Glow */}
              <div className={`absolute -top-24 -right-24 w-48 h-48 bg-${service.color}/10 blur-[60px] rounded-full group-hover:bg-${service.color}/20 transition-all duration-500`}></div>
              
              <div className="relative z-10">
                <div className={`w-12 h-12 rounded-lg bg-${service.color}/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                  <IconComponent className={`w-6 h-6 text-${service.color}`} />
                </div>
                
                <h3 className="font-headline text-xl font-bold text-on-surface mb-4 tracking-tight uppercase">
                  {service.title}
                </h3>
                
                <p className="font-body text-on-surface-variant leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>

              {/* Corner Light Trail */}
              <div className={`absolute top-0 right-0 w-16 h-px bg-gradient-to-l from-${service.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              <div className={`absolute top-0 right-0 h-16 w-px bg-gradient-to-t from-transparent to-${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
