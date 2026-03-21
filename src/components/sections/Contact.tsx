import { Send, Mail, User, CheckCircle, XCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from '../../i18n/LanguageContext';
import { useState } from 'react';

export default function Contact() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setStatus('loading');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="py-12 md:py-24 px-6 max-w-7xl mx-auto w-full mb-16 md:mb-0">
      <div className="font-headline text-[10px] text-secondary/60 uppercase tracking-[0.3em] mb-6 md:hidden">
        {t.contact.section_label}
      </div>
      <div className="flex items-center gap-4 mb-16">
        <div className="h-px bg-secondary flex-1 opacity-20 hidden md:block"></div>
        <h2 className="font-headline text-2xl md:text-5xl font-bold tracking-tighter uppercase">
          {t.contact.heading_prefix}<span className="text-secondary">{t.contact.heading_highlight}</span>
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
            {t.contact.establish_title}
          </h3>
          
          <p className="font-body text-on-surface-variant leading-relaxed max-w-md">
            {t.contact.establish_description}
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4 group">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:border-primary/50 transition-all duration-300">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="font-headline text-[10px] text-primary/60 uppercase tracking-widest">{t.contact.email_label}</div>
                <div className="font-body text-on-surface group-hover:text-primary transition-colors">{t.contact.email_value}</div>
              </div>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center border border-secondary/20 group-hover:border-secondary/50 transition-all duration-300">
                <User className="w-5 h-5 text-secondary" />
              </div>
              <div>
                <div className="font-headline text-[10px] text-secondary/60 uppercase tracking-widest">{t.contact.availability_label}</div>
                <div className="font-body text-on-surface group-hover:text-secondary transition-colors">{t.contact.availability_value}</div>
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

          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            <div className="space-y-2">
              <label className="font-headline text-[10px] text-primary/60 uppercase tracking-widest block">{t.contact.form.name_label}</label>
              <div className="relative">
                <input 
                  type="text" 
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  disabled={status === 'loading'}
                  required
                  placeholder={t.contact.form.name_placeholder}
                  className="w-full bg-background/50 border-b border-on-surface-variant/20 py-3 px-4 text-on-surface placeholder:text-on-surface-variant/30 focus:outline-none focus:border-primary transition-all duration-300 font-body disabled:opacity-50"
                />
                <div className="absolute bottom-0 left-0 h-px bg-primary w-0 focus-within:w-full transition-all duration-500"></div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="font-headline text-[10px] text-secondary/60 uppercase tracking-widest block">{t.contact.form.email_label}</label>
              <div className="relative">
                <input 
                  type="email" 
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  disabled={status === 'loading'}
                  required
                  placeholder={t.contact.form.email_placeholder}
                  className="w-full bg-background/50 border-b border-on-surface-variant/20 py-3 px-4 text-on-surface placeholder:text-on-surface-variant/30 focus:outline-none focus:border-secondary transition-all duration-300 font-body disabled:opacity-50"
                />
                <div className="absolute bottom-0 left-0 h-px bg-secondary w-0 focus-within:w-full transition-all duration-500"></div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="font-headline text-[10px] text-tertiary/60 uppercase tracking-widest block">{t.contact.form.message_label}</label>
              <div className="relative">
                <textarea 
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  disabled={status === 'loading'}
                  required
                  placeholder={t.contact.form.message_placeholder}
                  className="w-full bg-background/50 border border-on-surface-variant/20 py-3 px-4 text-on-surface placeholder:text-on-surface-variant/30 focus:outline-none focus:border-tertiary transition-all duration-300 font-body resize-none rounded-lg disabled:opacity-50"
                ></textarea>
              </div>
            </div>

            <button 
              type="submit"
              disabled={status === 'loading'}
              className={`w-full font-headline py-4 uppercase tracking-widest transition-all flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed ${
                status === 'success' ? 'bg-green-500 text-black' : 
                status === 'error' ? 'bg-red-500 text-white' : 
                'bg-primary text-black glitch-hover'
              }`}
            >
              {status === 'loading' ? (
                <span className="flex items-center gap-2">
                  <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }} className="w-5 h-5 border-2 border-black border-t-transparent rounded-full" />
                  Sending...
                </span>
              ) : status === 'success' ? (
                <>
                  <CheckCircle className="w-5 h-5" /> Message Sent
                </>
              ) : status === 'error' ? (
                <>
                  <XCircle className="w-5 h-5" /> Error Sending
                </>
              ) : (
                <>
                  <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /> 
                  {t.contact.form.send_button}
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
