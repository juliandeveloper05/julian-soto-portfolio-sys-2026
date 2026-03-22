import { LanguageProvider } from './i18n/LanguageContext';
import CyberCursor from './components/ui/CyberCursor';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import About from './components/sections/About';
import Services from './components/sections/Services';
import Timeline from './components/sections/Timeline';
import Contact from './components/sections/Contact';

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background selection:bg-primary selection:text-black overflow-x-hidden">
        <CyberCursor />
        {/* Scanline Overlay */}
        <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.03] scanline-texture"></div>
        
        <Navbar />
        
        <main>
          <Hero />
          <Skills />
          <Projects />
          <About />
          <Services />
          <Timeline />
          <Contact />
        </main>

        <Footer />
      </div>
    </LanguageProvider>
  );
}
