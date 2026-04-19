import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-[clamp(1.25rem,4vw,2.5rem)] py-5 transition-all duration-400 ${scrolled ? 'bg-bg/70 backdrop-blur-lg' : ''} ${menuOpen ? '!bg-transparent !backdrop-blur-none' : ''}`}>
      <a href="#" className="font-display text-[1.1rem] font-extrabold tracking-[0.15em] relative z-[102]">
        VOID<span className="text-accent">.</span>
      </a>

      <div className={`nav__links md:flex gap-8 ${menuOpen ? 'flex !fixed inset-0 z-[101] flex-col items-center justify-center bg-bg/97 backdrop-blur-2xl' : 'hidden'}`}>
        {['About', 'Services', 'Work', 'Contact'].map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            onClick={() => setMenuOpen(false)}
            className="text-[0.78rem] md:text-[0.78rem] text-lg font-normal tracking-[0.06em] text-[#777] hover:text-white transition-colors relative group"
          >
            {link}
            <span className="absolute bottom-[-4px] left-0 w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-full"></span>
          </a>
        ))}
      </div>

      <a href="#contact" className="hidden md:flex items-center gap-[0.4rem] text-[0.72rem] font-medium tracking-[0.08em] text-accent hover:opacity-70 transition-opacity">
        Start Project <ArrowRight size={14} />
      </a>

      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden w-6 h-4 relative z-[102]"
        aria-label="Menu"
      >
        <span className={`block w-full h-[1px] bg-white absolute left-0 transition-all duration-300 ${menuOpen ? 'top-1/2 rotate-45' : 'top-0'}`}></span>
        <span className={`block w-full h-[1px] bg-white absolute left-0 transition-all duration-300 ${menuOpen ? 'bottom-1/2 -rotate-45' : 'bottom-0'}`}></span>
      </button>
    </nav>
  );
}
