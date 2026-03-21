import { Download } from 'lucide-react';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section id="root" className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-12 overflow-hidden px-4">
      {/* Background Aether */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 blur-[120px] rounded-full"></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 flex flex-col items-center text-center max-w-4xl w-full"
      >
        {/* Profile Photo */}
        <div className="relative mb-6 md:mb-8 group">
          <div className="absolute -inset-1 bg-primary rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative w-48 h-48 md:w-40 md:h-40 rounded-full border-2 border-primary overflow-hidden shadow-[0_0_30px_rgba(156,255,147,0.3)]">
            <img 
              alt="Julian Soto Profile" 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCeQMzKGjuFfJM135vyKDtmo_gCZuBola4ceGHYzxWMv3TnyPYEegTO7wllXG5wxfxq-a0sZ41bmmICxVClK53LcANBYPKsK73H6Xr6J5P9Kv6Y2eQjq4A0Q-MOijDmK5N-0SK1IIket76oBIGTPmDnblpWF74ZGZXWNe0b7Al9lLRWztUlXdIsut4xXub_aFTJuJUOn1CuojYQmEEpSD_uYXoEi_hkL0MHGyNl0BNLhur4vJM2yvClZaKRUGB-92gUo39-plZUsmE-"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-2 -right-2 bg-background border border-primary px-2 py-1 text-[10px] font-headline text-primary">
            STATUS: ONLINE
          </div>
        </div>

        <h1 className="font-headline text-4xl md:text-7xl font-bold tracking-tighter text-on-surface mb-4 leading-none uppercase">
          JULIAN SOTO <br/>
          <span className="text-secondary tracking-widest text-2xl md:text-5xl text-glow-secondary">SOFTWARE_ENGINEER</span>
        </h1>

        <p className="font-body text-on-surface-variant max-w-xl mb-10 text-base md:text-lg px-4 md:px-0">
          Architecting digital fortresses and high-performance neural interfaces. Specializing in secure full-stack deployments and esoteric code optimization.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-6 mb-16 w-full max-w-xs md:max-w-none">
          <button className="bg-primary text-black font-headline px-8 py-4 uppercase tracking-widest glitch-hover transition-all flex items-center justify-center gap-2 w-full md:w-auto">
            <Download className="w-5 h-5" /> DESCARGAR CV
          </button>
          <a 
            href="#contact"
            className="border border-on-surface-variant/30 text-secondary font-headline px-8 py-4 uppercase tracking-widest hover:bg-secondary/10 glitch-hover transition-all w-full md:w-auto text-center flex items-center justify-center"
          >
            CONTRATAME! _
          </a>
        </div>
      </motion.div>
    </section>
  );
}
