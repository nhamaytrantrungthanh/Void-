import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Manifesto() {
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!textRef.current) return;

    const words = textRef.current.innerText.trim().split(/\s+/);
    textRef.current.innerHTML = words.map(w => `<span class="mword opacity-[0.12] inline-block mr-[0.5em]">${w}</span>`).join('');
    
    const spans = textRef.current.querySelectorAll('.mword');
    
    gsap.to(spans, {
      opacity: 1,
      stagger: 0.1,
      scrollTrigger: {
        trigger: textRef.current,
        start: 'top 75%',
        end: 'bottom 40%',
        scrub: true,
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  return (
    <section id="manifesto" className="min-h-screen flex items-center justify-center py-[clamp(4rem,10vw,8rem)] relative z-[1]">
      <div className="max-w-[1000px] px-[clamp(1.5rem,4vw,3rem)]">
        <p ref={textRef} className="font-display text-[clamp(1.6rem,3.5vw,3rem)] font-medium leading-[1.45] tracking-[-0.01em]">
          We don't just design interfaces — we engineer digital realities. Spaces where code becomes art, data becomes narrative, and interaction becomes instinct. Every pixel is intentional. Every frame is crafted.
        </p>
      </div>
    </section>
  );
}
