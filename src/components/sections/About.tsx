"use client";

import { motion } from 'framer-motion';
import { useTranslation } from '../../i18n/LanguageContext';
import { useState, useRef, useEffect, type ReactNode, type KeyboardEvent } from 'react';
import type { TranslationSchema } from '../../i18n/types';

function renderHelp(t: TranslationSchema) {
  const tt = t.about.terminal;
  const cmds: [string, string][] = [
    ['whoami',  tt.cmd_whoami_desc],
    ['skills',  tt.cmd_skills_desc],
    ['contact', tt.cmd_contact_desc],
    ['clear',   tt.cmd_clear_desc],
    ['date',    tt.cmd_date_desc],
    ['echo',    tt.cmd_echo_desc],
    ['help',    '—'],
  ];
  return (
    <div className="space-y-1">
      <div className="text-primary/70 mb-2">{tt.help_title}</div>
      {cmds.map(([cmd, desc]) => (
        <div key={cmd} className="flex gap-4">
          <span className="text-secondary min-w-[80px]">{cmd}</span>
          <span className="text-on-surface-variant">{desc}</span>
        </div>
      ))}
    </div>
  );
}

function renderWhoami(t: TranslationSchema) {
  return (
    <div className="space-y-2">
      {t.about.lines.map((line) => (
        <div key={line.label} className="flex flex-col md:flex-row gap-1 md:gap-4">
          <span className="text-primary font-bold min-w-[100px] uppercase">[{line.label}]:</span>
          <span className="text-on-surface">{line.value}</span>
        </div>
      ))}
    </div>
  );
}

function renderSkills(t: TranslationSchema) {
  const tt = t.about.terminal;
  const groups: [string, string[]][] = [
    [tt.skills_frontend, ['TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Vite']],
    [tt.skills_backend,  ['Node.js', 'PHP 8', 'WordPress', 'FastAPI', 'REST / GraphQL']],
    [tt.skills_ml,       ['Python', 'PyTorch', 'TensorFlow', 'Hugging Face']],
    [tt.skills_tools,    ['Git', 'Docker', 'Vercel', 'Linux', 'Figma']],
  ];
  return (
    <div className="space-y-3">
      {groups.map(([group, items]) => (
        <div key={group}>
          <div className="text-tertiary uppercase text-xs tracking-widest mb-1">{group}</div>
          <div className="text-on-surface">{items.join('  ·  ')}</div>
        </div>
      ))}
    </div>
  );
}

function renderContact(t: TranslationSchema) {
  return (
    <div className="space-y-2">
      <div className="flex gap-4">
        <span className="text-primary font-bold min-w-[120px] uppercase">[EMAIL]:</span>
        <span className="text-on-surface">{t.contact.email_value}</span>
      </div>
      <div className="flex gap-4">
        <span className="text-primary font-bold min-w-[120px] uppercase">[{t.contact.availability_label}]:</span>
        <span className="text-on-surface">{t.contact.availability_value}</span>
      </div>
    </div>
  );
}

export default function About() {
  const { t } = useTranslation();
  const [inputValue, setInputValue] = useState('');
  const [commandHistory, setCommandHistory] = useState<{ command: string; response: ReactNode }[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [commandHistory]);

  const executeCommand = (raw: string): ReactNode => {
    const parts = raw.trim().split(/\s+/);
    const cmd = parts[0].toLowerCase().replace(/^['"`]|['"`]$/g, '');
    const args = parts.slice(1).join(' ').replace(/^['"`]|['"`]$/g, '');
    switch (cmd) {
      case 'help':    return renderHelp(t);
      case 'whoami':  return renderWhoami(t);
      case 'skills':  return renderSkills(t);
      case 'contact': return renderContact(t);
      case 'date':    return <span className="text-on-surface">{new Date().toISOString()}</span>;
      case 'echo':    return <span className="text-on-surface">{args}</span>;
      default:        return <span className="text-red-500/80">bash: {cmd}: command not found</span>;
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const trimmed = inputValue.trim();
      if (trimmed === '') {
        setCommandHistory(prev => [...prev, { command: '', response: null }]);
      } else if (trimmed.toLowerCase() === 'clear') {
        setCommandHistory([]);
      } else {
        const response = executeCommand(trimmed);
        setCommandHistory(prev => [...prev, { command: trimmed, response }]);
      }
      setInputValue('');
    }
  };

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
        <div
          className="p-6 font-mono text-sm md:text-base leading-relaxed cursor-text relative max-h-[32rem] overflow-y-auto"
          onClick={() => inputRef.current?.focus()}
        >
          {/* Static initial whoami output */}
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

          {/* Hint */}
          <div className="mt-4 text-on-surface-variant/40 text-xs">{t.about.terminal.hint}</div>

          {/* Command History */}
          <div className="z-10 relative">
            {commandHistory.map((item, index) => (
              <div key={index} className="mt-6">
                {item.command !== '' && (
                  <div className="flex items-center gap-2 flex-wrap mb-2">
                    <span className="text-primary whitespace-nowrap">julian@mainframe</span>:<span className="text-secondary whitespace-nowrap">~</span>$
                    <span className="text-on-surface break-all">{item.command}</span>
                  </div>
                )}
                {item.response && <div>{item.response}</div>}
              </div>
            ))}
          </div>

          {/* Current input line */}
          <div className="mt-6 flex items-center gap-2 flex-wrap z-10 relative">
            <span className="text-primary whitespace-nowrap">julian@mainframe</span>:<span className="text-secondary whitespace-nowrap">~</span>$
            <span className="text-on-surface break-all">{inputValue}</span>
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="w-2 h-5 bg-primary"
            ></motion.span>
          </div>

          <div ref={bottomRef} />

          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            className="absolute inset-0 opacity-0 cursor-text w-full h-full z-0"
            spellCheck={false}
            autoComplete="off"
            aria-hidden="true"
          />
        </div>
      </motion.div>
    </section>
  );
}
