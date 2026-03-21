import { motion } from 'motion/react';

const timelineEvents = [
  {
    id: 'EVENT_01',
    year: '2024 - PRESENT',
    title: 'Senior Software Architect',
    company: 'Mainframe Systems Inc.',
    description: 'Leading the development of high-performance distributed systems and secure cloud architectures for global fintech clients.',
    color: 'primary'
  },
  {
    id: 'EVENT_02',
    year: '2022 - 2024',
    title: 'Full-Stack Developer',
    company: 'Cyberdyne Solutions',
    description: 'Developed and optimized secure web applications and internal tools using React, Node.js, and specialized security protocols.',
    color: 'secondary'
  },
  {
    id: 'EVENT_03',
    year: '2020 - 2022',
    title: 'Security Analyst',
    company: 'Shield Security Group',
    description: 'Performed comprehensive security audits and penetration testing for enterprise-level digital infrastructure.',
    color: 'tertiary'
  },
  {
    id: 'EVENT_04',
    year: '2018 - 2020',
    title: 'Junior Developer',
    company: 'Neon Tech Lab',
    description: 'Started my journey building responsive web interfaces and learning the intricacies of high-performance code.',
    color: 'primary'
  }
];

export default function Timeline() {
  return (
    <section id="timeline" className="py-12 md:py-24 px-6 max-w-7xl mx-auto w-full">
      <div className="font-headline text-[10px] text-primary/60 uppercase tracking-[0.3em] mb-6 md:hidden">
        // TIMELINE
      </div>
      <div className="flex items-center gap-4 mb-20">
        <h2 className="font-headline text-2xl md:text-5xl font-bold tracking-tighter uppercase">
          SYSTEM_<span className="text-primary">TIMELINE</span>
        </h2>
        <div className="h-px bg-primary flex-1 opacity-20 hidden md:block"></div>
      </div>

      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-secondary/50 to-transparent opacity-20"></div>

        <div className="space-y-16">
          {timelineEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Timeline Node */}
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-background border-2 border-primary z-10 shadow-[0_0_15px_rgba(156,255,147,0.5)]">
                <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-20"></div>
              </div>

              {/* Content Card */}
              <div className={`w-full md:w-[45%] p-6 bg-surface/40 backdrop-blur-xl border border-on-surface-variant/10 rounded-lg hover:border-${event.color}/50 transition-all duration-500 group`}>
                <div className={`font-headline text-xs text-${event.color} mb-2 tracking-widest uppercase`}>
                  {event.year}
                </div>
                
                <h3 className="font-headline text-xl font-bold text-on-surface mb-1 tracking-tight uppercase">
                  {event.title}
                </h3>
                
                <div className="font-headline text-sm text-on-surface-variant mb-4 uppercase tracking-tighter">
                  {event.company}
                </div>
                
                <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                  {event.description}
                </p>

                {/* Ambient Glow */}
                <div className={`absolute -bottom-12 -right-12 w-24 h-24 bg-${event.color}/5 blur-[40px] rounded-full group-hover:bg-${event.color}/10 transition-all duration-500`}></div>
              </div>

              {/* Spacer for Desktop */}
              <div className="hidden md:block w-[45%]"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
