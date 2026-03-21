import { Send, Mail, User, MessageSquare } from 'lucide-react';
import { motion } from 'motion/react';

export default function Contact() {
  return (
    <section id="contact" className="py-12 md:py-24 px-6 max-w-7xl mx-auto w-full mb-16 md:mb-0">
      <div className="font-headline text-[10px] text-secondary/60 uppercase tracking-[0.3em] mb-6 md:hidden">
        // INITIATE_CONTACT
      </div>
      <div className="flex items-center gap-4 mb-16">
        <div className="h-px bg-secondary flex-1 opacity-20 hidden md:block"></div>
        <h2 className="font-headline text-2xl md:text-5xl font-bold tracking-tighter uppercase">
          CONTACT_<span className="text-secondary">ME</span>
        </h2>
        <div className="h-px bg-primary flex-1 opacity-20 hidden md:block"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h3 className="font-headline text-2xl font-bold text-on-surface mb-6 tracking-tight uppercase">
            ESTABLISH_CONNECTION
          </h3>
          
          <p className="font-body text-on-surface-variant leading-relaxed max-w-md">
            Ready to architect your next digital fortress? Send a message to initiate the handshake protocol. I am always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4 group">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:border-primary/50 transition-all duration-300">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="font-headline text-[10px] text-primary/60 uppercase tracking-widest">EMAIL</div>
                <div className="font-body text-on-surface group-hover:text-primary transition-colors">juliansoto.dev@gmail.com</div>
              </div>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center border border-secondary/20 group-hover:border-secondary/50 transition-all duration-300">
                <User className="w-5 h-5 text-secondary" />
              </div>
              <div>
                <div className="font-headline text-[10px] text-secondary/60 uppercase tracking-widest">AVAILABILITY</div>
                <div className="font-body text-on-surface group-hover:text-secondary transition-colors">OPEN_FOR_COLLABORATION</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-surface/40 backdrop-blur-xl border border-on-surface-variant/10 p-8 rounded-lg relative overflow-hidden group"
        >
          {/* Ambient Glow */}
          <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-primary/5 blur-[60px] rounded-full group-hover:bg-primary/10 transition-all duration-500"></div>

          <form className="space-y-6 relative z-10">
            <div className="space-y-2">
              <label className="font-headline text-[10px] text-primary/60 uppercase tracking-widest block">NAME</label>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="ENTER_NAME"
                  className="w-full bg-background/50 border-b border-on-surface-variant/20 py-3 px-4 text-on-surface placeholder:text-on-surface-variant/30 focus:outline-none focus:border-primary transition-all duration-300 font-body"
                />
                <div className="absolute bottom-0 left-0 h-px bg-primary w-0 focus-within:w-full transition-all duration-500"></div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="font-headline text-[10px] text-secondary/60 uppercase tracking-widest block">EMAIL</label>
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="ENTER_EMAIL"
                  className="w-full bg-background/50 border-b border-on-surface-variant/20 py-3 px-4 text-on-surface placeholder:text-on-surface-variant/30 focus:outline-none focus:border-secondary transition-all duration-300 font-body"
                />
                <div className="absolute bottom-0 left-0 h-px bg-secondary w-0 focus-within:w-full transition-all duration-500"></div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="font-headline text-[10px] text-tertiary/60 uppercase tracking-widest block">MESSAGE</label>
              <div className="relative">
                <textarea 
                  rows={4}
                  placeholder="ENTER_MESSAGE"
                  className="w-full bg-background/50 border border-on-surface-variant/20 py-3 px-4 text-on-surface placeholder:text-on-surface-variant/30 focus:outline-none focus:border-tertiary transition-all duration-300 font-body resize-none rounded-lg"
                ></textarea>
              </div>
            </div>

            <button 
              type="submit"
              className="w-full bg-primary text-black font-headline py-4 uppercase tracking-widest glitch-hover transition-all flex items-center justify-center gap-2 group"
            >
              <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /> 
              SEND_MESSAGE
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
