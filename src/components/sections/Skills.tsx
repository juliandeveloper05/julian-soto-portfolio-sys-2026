import { Terminal, Database, Cloud, Code, Shield, Layers } from 'lucide-react';
import { motion } from 'motion/react';

const skills = [
  { name: 'Rust / C++', icon: Terminal, color: 'primary' },
  { name: 'PostgreSQL', icon: Database, color: 'secondary' },
  { name: 'AWS / K8s', icon: Cloud, color: 'primary' },
  { name: 'TypeScript', icon: Code, color: 'secondary' },
  { name: 'Pentesting', icon: Shield, color: 'primary' },
  { name: 'React / Next', icon: Layers, color: 'secondary' },
];

export default function Skills() {
  return (
    <section id="skills" className="py-12 px-6 max-w-7xl mx-auto w-full">
      <div className="font-headline text-[10px] text-primary/60 uppercase tracking-[0.3em] mb-6 md:hidden">
        // SKILLS_CACHE
      </div>
      <div className="grid grid-cols-4 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`bg-surface p-3 md:p-4 border border-on-surface-variant/10 hover:border-${skill.color}/50 transition-all group cursor-default flex flex-col items-center md:items-start`}
          >
            <skill.icon className={`w-5 h-5 md:w-6 md:h-6 text-${skill.color} mb-2 group-hover:scale-110 transition-transform`} />
            <div className="font-headline text-[8px] md:text-xs text-on-surface-variant uppercase tracking-wider text-center md:text-left">{skill.name}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
