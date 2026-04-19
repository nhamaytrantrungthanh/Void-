import { useEffect } from 'react';

declare global {
  interface Window {
    UnicornStudio: any;
  }
}

export default function Footer() {
  useEffect(() => {
    // Load Unicorn Studio script
    const initUnicorn = () => {
      const u = window.UnicornStudio;
      if (u && u.init) {
        if (document.readyState === "loading") {
          document.addEventListener("DOMContentLoaded", () => u.init());
        } else {
          u.init();
        }
      } else {
        window.UnicornStudio = { isInitialized: false };
        const i = document.createElement("script");
        i.src = "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.1.1/dist/unicornStudio.umd.js";
        i.onload = () => {
          if (document.readyState === "loading") {
            document.addEventListener("DOMContentLoaded", () => window.UnicornStudio.init());
          } else {
            window.UnicornStudio.init();
          }
        };
        (document.head || document.body).appendChild(i);
      }
    };

    initUnicorn();
  }, []);

  return (
    <footer className="relative z-[1] border-t border-glass-border pt-12 pb-6 mt-20 overflow-hidden min-h-[300px]">
      {/* Unicorn Studio Aura Background */}
      <div 
        className="absolute w-full h-full left-0 top-0 -z-[1] pointer-events-none" 
        data-us-project="aH0ZsntZ1TcKHIyweEA8"
      ></div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-[clamp(1.25rem,4vw,2.5rem)] flex flex-wrap justify-between items-start gap-8">
        <div>
          <span className="font-display text-[1.1rem] font-extrabold tracking-[0.15em]">
            VOID<span className="text-accent">.</span>
          </span>
          <p className="text-[0.75rem] text-[#444] mt-[0.3rem]">Digital Experience Studio</p>
        </div>

        <div className="flex gap-16 md:gap-16 flex-col sm:flex-row">
          <div className="flex flex-col gap-2">
            <span className="text-[0.65rem] font-semibold tracking-[0.15em] uppercase text-[#777] mb-[0.3rem]">Navigation</span>
            {['Services', 'Work', 'Process', 'Contact'].map(link => (
              <a key={link} href={`#${link.toLowerCase()}`} className="text-[0.78rem] text-[#444] hover:text-accent transition-colors">{link}</a>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-[0.65rem] font-semibold tracking-[0.15em] uppercase text-[#777] mb-[0.3rem]">Connect</span>
            {['Twitter / X', 'Instagram', 'Dribbble', 'LinkedIn'].map(link => (
              <a key={link} href="#" className="text-[0.78rem] text-[#444] hover:text-accent transition-colors">{link}</a>
            ))}
          </div>
        </div>
      </div>
      <div className="relative z-10 max-w-[1200px] mx-auto px-[clamp(1.25rem,4vw,2.5rem)] flex justify-between mt-10 pt-5 border-t border-glass-border text-[0.68rem] text-[#444] flex-col sm:flex-row gap-2 text-center">
        <span>© 2026 VOID Studio</span>
        <span>Crafted with obsession</span>
      </div>
    </footer>
  );
}
