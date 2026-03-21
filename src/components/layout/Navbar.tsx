"use client";

import { Terminal, Menu, X, Home, Code, Cpu, Link as LinkIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'ROOT', href: '#root' },
    { name: 'ABOUT', href: '#about' },
    { name: 'SERVICES', href: '#services' },
    { name: 'SKILLS', href: '#skills' },
    { name: 'PROJECTS', href: '#projects' },
    { name: 'TIMELINE', href: '#timeline' },
    { name: 'CONTACT', href: '#contact' },
  ];

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      {/* Top Header - Responsive */}
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed top-0 md:top-4 left-0 md:left-1/2 md:-translate-x-1/2 w-full md:w-[95%] max-w-7xl md:rounded-lg border-b md:border border-primary/20 bg-background/80 md:bg-background/60 backdrop-blur-xl z-[70] flex justify-between items-center px-6 py-4 md:py-3 shadow-[0_0_20px_rgba(156,255,147,0.1)]"
      >
        <div className="flex items-center gap-2 text-lg md:text-xl font-headline font-bold text-primary tracking-widest">
          <Terminal className="w-5 h-5 animate-pulse hidden md:block" />
          <span className="md:hidden text-primary">{'>//'}</span> JULIAN_SOTO_SYS
        </div>
        
        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              className="font-headline tracking-tighter uppercase text-sm text-secondary/70 hover:text-secondary transition-colors hover:bg-primary/10 hover:skew-x-2 px-2" 
              href={link.href}
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Terminal className="w-5 h-5 text-primary cursor-pointer hover:scale-110 transition-transform hidden md:block" />
          <button className="hidden md:block font-headline tracking-tighter uppercase text-sm text-primary border border-primary/30 px-4 py-1 hover:bg-primary hover:text-black transition-all active:scale-95">
            CONTACT_ME
          </button>
          
          {/* Mobile Toggle Icon - Dynamic Change */}
          <button 
            onClick={toggleMenu}
            className="md:hidden text-primary p-1 focus:outline-none transition-transform active:scale-90"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? (
              <div className="flex items-center font-headline text-sm font-bold">
                [<X className="w-5 h-5" />]
              </div>
            ) : (
              <div className="flex items-center font-headline text-sm font-bold">
                {'>'}_
              </div>
            )}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Dropdown Menu - Terminal Style */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed top-[60px] left-0 w-full bg-background/95 backdrop-blur-2xl border-b border-primary/20 z-[60] md:hidden overflow-hidden shadow-2xl"
          >
            <div className="p-6 flex flex-col gap-4 font-mono">
              <div className="text-[10px] text-primary/40 mb-2 uppercase tracking-[0.2em]">
                // SYSTEM_NAVIGATION_MENU
              </div>
              {navLinks.map((link, index) => (
                <motion.a 
                  key={link.name}
                  href={link.href}
                  onClick={closeMenu}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.05 }}
                  className="text-xl font-headline font-bold text-on-surface hover:text-primary flex items-center gap-3 group py-2"
                >
                  <span className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">{'>'}</span>
                  {link.name}_
                </motion.a>
              ))}
              <div className="mt-4 pt-4 border-t border-primary/10">
                <button 
                  onClick={closeMenu}
                  className="w-full bg-primary/10 text-primary font-headline py-3 uppercase tracking-widest text-sm border border-primary/20"
                >
                  EXECUTE_CLOSE
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Bottom Navigation (Mockup Style) */}
      <div className="fixed bottom-0 left-0 w-full bg-background/90 backdrop-blur-lg border-t border-primary/20 z-50 flex md:hidden justify-around items-center py-3 px-2">
        <a href="#root" onClick={closeMenu} className="flex flex-col items-center gap-1 group">
          <div className="p-1 rounded-lg bg-primary/20 shadow-[0_0_10px_rgba(156,255,147,0.3)]">
            <Home className="w-5 h-5 text-primary" />
          </div>
          <span className="text-[10px] font-headline text-primary uppercase tracking-tighter">ROOT</span>
        </a>
        <a href="#projects" onClick={closeMenu} className="flex flex-col items-center gap-1 opacity-50 hover:opacity-100 transition-opacity">
          <Code className="w-5 h-5 text-on-surface" />
          <span className="text-[10px] font-headline text-on-surface uppercase tracking-tighter">CODE</span>
        </a>
        <a href="#services" onClick={closeMenu} className="flex flex-col items-center gap-1 opacity-50 hover:opacity-100 transition-opacity">
          <Cpu className="w-5 h-5 text-on-surface" />
          <span className="text-[10px] font-headline text-on-surface uppercase tracking-tighter">CORE</span>
        </a>
        <a href="#contact" onClick={closeMenu} className="flex flex-col items-center gap-1 opacity-50 hover:opacity-100 transition-opacity">
          <LinkIcon className="w-5 h-5 text-on-surface" />
          <span className="text-[10px] font-headline text-on-surface uppercase tracking-tighter">LINK</span>
        </a>
      </div>
    </>
  );
}
