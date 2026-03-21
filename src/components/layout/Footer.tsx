export default function Footer() {
  return (
    <footer className="bg-background border-t border-secondary/10 w-full py-12">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-8 gap-4">
        <div className="font-headline text-[10px] tracking-[0.2em] uppercase text-on-surface-variant/40">
          © 2024 J_SOTO // ENCRYPTED_CONNECTION
        </div>
        
        <div className="flex gap-8">
          <a 
            className="font-headline text-[10px] tracking-[0.2em] uppercase text-on-surface-variant/40 hover:text-primary transition-all hover:translate-y-[-2px]" 
            href="https://github.com/juliandeveloper05"
            target="_blank"
            rel="noopener noreferrer"
          >
            GITHUB
          </a>
          <a 
            className="font-headline text-[10px] tracking-[0.2em] uppercase text-on-surface-variant/40 hover:text-primary transition-all hover:translate-y-[-2px]" 
            href="https://www.linkedin.com/in/full-stack-julian-soto/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LINKEDIN
          </a>
          <a 
            className="font-headline text-[10px] tracking-[0.2em] uppercase text-on-surface-variant/40 hover:text-primary transition-all hover:translate-y-[-2px]" 
            href="https://www.instagram.com/palee_0x71"
            target="_blank"
            rel="noopener noreferrer"
          >
            INSTAGRAM
          </a>
        </div>

        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse shadow-[0_0_8px_#9cff93]"></div>
          <span className="font-headline text-[10px] text-primary/60 tracking-widest uppercase">UP_LINK_ACTIVE</span>
        </div>
      </div>
    </footer>
  );
}
