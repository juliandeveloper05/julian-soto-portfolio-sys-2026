import { Code, Shield, Zap, Cpu } from 'lucide-react';
import { motion } from 'motion/react';

const services = [
  {
    id: 'FULL_STACK',
    title: 'Full-Stack Engineering',
    description: 'End-to-end development of high-performance web applications using React, Next.js, and robust backend architectures.',
    icon: Code,
    color: 'primary'
  },
  {
    id: 'SECURITY',
    title: 'Cybersecurity Audit',
    description: 'Comprehensive vulnerability assessments, penetration testing, and security hardening for critical digital infrastructure.',
    icon: Shield,
    color: 'secondary'
  },
  {
    id: 'PERFORMANCE',
    title: 'Code Optimization',
    description: 'Deep-level performance tuning and esoteric code optimization to ensure zero-latency execution in high-load environments.',
    icon: Zap,
    color: 'tertiary'
  },
  {
    id: 'INFRASTRUCTURE',
    title: 'Cloud Architecture',
    description: 'Designing and deploying scalable, secure cloud infrastructures using AWS, Kubernetes, and modern DevOps practices.',
    icon: Cpu,
    color: 'primary'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-12 md:py-24 px-6 max-w-7xl mx-auto w-full">
      <div className="font-headline text-[10px] text-secondary/60 uppercase tracking-[0.3em] mb-6 md:hidden">
        // SERVICES
      </div>
      <div className="flex items-center gap-4 mb-16">
        <div className="h-px bg-secondary flex-1 opacity-20 hidden md:block"></div>
        <h2 className="font-headline text-2xl md:text-5xl font-bold tracking-tighter uppercase">
          CORE_<span className="text-secondary">SERVICES</span>
        </h2>
        <div className="h-px bg-primary flex-1 opacity-20 hidden md:block"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, index) => (
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
                <service.icon className={`w-6 h-6 text-${service.color}`} />
              </div>
              
              <h3 className="font-headline text-2xl font-bold text-on-surface mb-4 tracking-tight uppercase">
                {service.title}
              </h3>
              
              <p className="font-body text-on-surface-variant leading-relaxed">
                {service.description}
              </p>
            </div>

            {/* Corner Light Trail */}
            <div className={`absolute top-0 right-0 w-16 h-px bg-gradient-to-l from-${service.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
            <div className={`absolute top-0 right-0 h-16 w-px bg-gradient-to-t from-transparent to-${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
