import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, Terminal, Loader2 } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';
import { useTranslation } from '../../i18n/LanguageContext';

interface Message {
  role: 'user' | 'bot';
  text: string;
}

const SYSTEM_PROMPT = `You are Julian Soto's portfolio AI assistant. Your job is to help visitors learn about Julian and his work.

About Julian Soto:
- Senior Software Engineer & Full-Stack Developer based in Argentina, working remotely
- Specializes in: Next.js, React 19, TypeScript, Node.js, PHP 8, WordPress, Python, FastAPI, PyTorch, TensorFlow
- Also experienced with: PostgreSQL, MySQL, MongoDB, Supabase, Docker, Web Audio API

Key Projects:
1. DUMU AI - Full-stack AI app that extracts bass lines from audio using Meta AI's Demucs neural network + Spotify's Basic Pitch for MIDI conversion. Built with Next.js, Python, PyTorch.
2. BITROVA TASKS - Cross-platform task manager (iOS/Android/Web) with Supabase auth, drag & drop, Lottie animations. Built with React Native, Supabase, TypeScript.
3. BASS ACADEMY - Interactive music training app with real-time audio synthesis. Built with React 19 + Web Audio API.
4. NEXUSSHOP - Headless e-commerce with Stripe/MercadoPago payments, MongoDB inventory. Built with Next.js, MongoDB, Stripe.
5. SOUL SOLUTIONS - Enterprise landing page for mainframe modernization consulting. COBOL/Db2 legacy integration.
6. FORMA REAL CMS - Fitness community forum on custom WordPress with OOP plugin, real-time notifications, full-text search.

Services offered:
- Modern Frontend Architecture (React 19, Next.js)
- Scalable Backend & API Design (Node.js, PHP 8)
- Data Strategy & Modeling (MySQL, MongoDB, PostgreSQL, Supabase)
- End-to-End Product Engineering
- CMS & WordPress Development
- AI & Audio Processing (PyTorch, TensorFlow, FastAPI)

Experience:
- Senior Software Engineer at Soul Solutions (2020 - present): mainframe modernization, COBOL/Db2 + modern cloud
- Full Stack Specialization at APX School (2024): MERN Stack, System Architecture
- Computer Science Degree at Universidad Nacional de Quilmes (2023 - present)

Contact:
- Email: juliansoto.dev@gmail.com
- Open for collaboration and new projects

Instructions:
- Be concise, friendly and professional
- Answer in the same language the user writes in (Spanish or English)
- If asked about something you don't know about Julian, say you don't have that info but suggest contacting him directly at juliansoto.dev@gmail.com
- Keep responses short (2-4 sentences max unless detail is specifically requested)
- You can suggest scrolling to a specific section if relevant (Skills, Projects, About, Services, Timeline, Contact)
- Never make up information about Julian that isn't in this prompt`;

export default function ChatBot({ isMobileNavOpen }: { isMobileNavOpen?: boolean }) {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [hasGreeted, setHasGreeted] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const savedScrollY = useRef(0);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen) {
      savedScrollY.current = window.scrollY;
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${savedScrollY.current}px`;
      document.body.style.width = '100%';
      if (!hasGreeted) {
        setHasGreeted(true);
        setMessages([{ role: 'bot', text: t.chatbot.welcome_message }]);
      }
      setTimeout(() => inputRef.current?.focus(), 300);
    } else {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      window.scrollTo(0, savedScrollY.current);
    }
  }, [isOpen, hasGreeted, t.chatbot.welcome_message]);

  const sendMessage = async () => {
    const trimmed = input.trim();
    if (!trimmed || isLoading) return;

    const userMessage: Message = { role: 'user', text: trimmed };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });
      const history = messages.map(m => ({
        role: m.role === 'user' ? 'user' : 'model',
        parts: [{ text: m.text }],
      }));

      const chat = ai.chats.create({
        model: 'gemini-2.0-flash',
        config: { systemInstruction: SYSTEM_PROMPT },
        history,
      });

      const response = await chat.sendMessage({ message: trimmed });
      const botText = response.text || t.chatbot.error_message;
      setMessages(prev => [...prev, { role: 'bot', text: botText }]);
    } catch {
      setMessages(prev => [...prev, { role: 'bot', text: t.chatbot.error_message }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  if (isMobileNavOpen) return null;

  return (
    <>
      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed inset-0 z-[200]
                       sm:inset-auto sm:bottom-24 sm:right-6 sm:w-[calc(100vw-3rem)] sm:max-w-[380px] sm:rounded-xl sm:border sm:border-primary/20
                       flex flex-col bg-surface border-0 rounded-none shadow-2xl
                       shadow-primary/10 overflow-hidden sm:[height:min(520px,calc(100svh-160px))]"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-primary/20 bg-background/60 backdrop-blur-sm flex-shrink-0">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-primary" />
                <span className="font-headline text-sm font-semibold text-primary tracking-wider">
                  {t.chatbot.title}
                </span>
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-on-surface-variant hover:text-primary transition-colors p-1 rounded"
                aria-label="Close chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 chat-scrollbar min-h-0">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] px-3 py-2 rounded-lg text-sm leading-relaxed ${
                      msg.role === 'user'
                        ? 'bg-primary/15 text-on-surface border border-primary/30 rounded-br-sm'
                        : 'bg-background text-on-surface border-l-2 border-primary rounded-bl-sm'
                    }`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}

              {isLoading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="bg-background border-l-2 border-primary px-3 py-2 rounded-lg rounded-bl-sm flex items-center gap-2">
                    <Loader2 className="w-3 h-3 text-primary animate-spin" />
                    <span className="text-xs text-on-surface-variant font-mono">{t.chatbot.typing}</span>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="flex items-center gap-2 px-3 py-3 border-t border-primary/20 bg-background/40 flex-shrink-0">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={t.chatbot.placeholder}
                disabled={isLoading}
                className="flex-1 bg-surface/80 border border-secondary/30 focus:border-secondary/70
                           rounded-lg px-3 py-2 text-sm text-on-surface placeholder:text-on-surface-variant/50
                           outline-none transition-colors disabled:opacity-50 font-body"
              />
              <button
                onClick={sendMessage}
                disabled={isLoading || !input.trim()}
                className="p-2 bg-primary text-background rounded-lg hover:bg-primary/90
                           disabled:opacity-40 disabled:cursor-not-allowed transition-all
                           flex items-center justify-center flex-shrink-0"
                aria-label="Send message"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(prev => !prev)}
        className={`fixed bottom-20 right-4 sm:bottom-6 sm:right-6 z-[200]
                   w-12 h-12 sm:w-auto sm:h-auto
                   ${isOpen ? 'hidden sm:flex' : 'flex'} items-center justify-center sm:gap-2 sm:px-4 sm:py-3
                   bg-primary text-background font-headline font-semibold text-sm tracking-widest
                   rounded-full shadow-lg shadow-primary/30 hover:shadow-primary/50
                   hover:scale-105 active:scale-95 transition-all`}
        whileTap={{ scale: 0.95 }}
        aria-label="Toggle chat"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
              <X className="w-4 h-4" />
            </motion.span>
          ) : (
            <motion.span key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
              <MessageSquare className="w-4 h-4" />
            </motion.span>
          )}
        </AnimatePresence>
        <span className="hidden sm:inline">{isOpen ? t.chatbot.close_label : t.chatbot.button_label}</span>
      </motion.button>
    </>
  );
}
