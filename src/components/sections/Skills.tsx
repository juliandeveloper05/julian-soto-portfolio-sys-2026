import { Terminal, Database, Cloud, Code, Shield, Layers, Cpu, Zap, Globe, Braces } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useTranslation } from '../../i18n/LanguageContext';

const skillIcons: Record<string, React.ElementType> = {
  'Next.js': Globe,
  'React 19': Layers,
  'TypeScript': Code,
  'Tailwind CSS': Braces,
  'HTML5': Code,
  'CSS3': Code,
  'Node.js': Terminal,
  'PHP 8': Terminal,
  'WordPress': Globe,
  'PostgreSQL': Database,
  'MySQL': Database,
  'MongoDB': Database,
  'Supabase': Cloud,
  'Python': Terminal,
  'FastAPI': Zap,
  'PyTorch': Cpu,
  'TensorFlow': Cpu,
  'Machine Learning': Cpu,
  'Docker': Cloud,
  'Cloud Sync': Cloud,
  'Web Audio API': Zap,
  'OOP Patterns': Shield,
  'Systems Design': Layers,
};

const colorCycle = ['primary', 'secondary'];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.05
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 300, damping: 24 }
  }
};

export default function Skills() {
  const { t } = useTranslation();
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  // Flatten all skills from categories for the grid display
  const allSkills = t.skills.categories.flatMap((cat, catIdx) =>
    cat.items.map((item) => ({
      name: item,
      icon: skillIcons[item] || Code,
      color: colorCycle[catIdx % 2],
    }))
  );

  return (
    <section id="skills" className="py-12 px-6 max-w-7xl mx-auto w-full">
      <div className="font-headline text-[10px] text-primary/60 uppercase tracking-[0.3em] mb-6 md:hidden">
        {t.skills.section_label}
      </div>
      <motion.div 
        ref={containerRef}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid grid-cols-4 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4"
      >
        {allSkills.map((skill) => (
          <motion.div
            key={skill.name}
            variants={itemVariants}
            whileHover={{ y: -5, scale: 1.02 }}
            className={`bg-surface p-3 md:p-4 border border-on-surface-variant/10 hover:border-${skill.color}/50 hover:shadow-lg hover:shadow-${skill.color}/30 transition-all duration-300 group cursor-default flex flex-col items-center md:items-start`}
          >
            <skill.icon className={`w-5 h-5 md:w-6 md:h-6 text-${skill.color} mb-2 group-hover:scale-110 transition-transform`} />
            <div className="font-headline text-[8px] md:text-xs text-on-surface-variant uppercase tracking-wider text-center md:text-left">{skill.name}</div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
