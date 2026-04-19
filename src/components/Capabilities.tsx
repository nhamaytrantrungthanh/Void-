import React, { useState, useRef } from 'react';
import { MonitorSmartphone, Code, Globe, Palette } from 'lucide-react';
import { motion } from 'motion/react';

const capabilities = [
  {
    num: '01',
    icon: <MonitorSmartphone size={28} />,
    title: 'Immersive Experiences',
    desc: 'WebGL environments, 3D product configurators, and interactive installations that dissolve the boundary between digital and physical worlds.'
  },
  {
    num: '02',
    icon: <Code size={28} />,
    title: 'Creative Development',
    desc: 'Custom-built websites and applications with obsessive attention to interaction design, micro-animations, and performance.'
  },
  {
    num: '03',
    icon: <Globe size={28} />,
    title: 'Spatial Computing',
    desc: 'AR/VR experiences and spatial interfaces designed for the next generation of computing platforms and interaction paradigms.'
  },
  {
    num: '04',
    icon: <Palette size={28} />,
    title: 'Real-time Graphics',
    desc: 'GPU-accelerated visualizations, shader programming, and real-time rendering for brand experiences and data narratives.'
  }
];

interface CapCardProps {
  cap: typeof capabilities[0];
  key?: string | number;
}

function CapCard({ cap }: CapCardProps) {
  const [displayText, setDisplayText] = useState(cap.title);
  const cardRef = useRef<HTMLDivElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);
  const scrambleIntervalRef = useRef<any>(null);

  const startScramble = () => {
    const chars = '!<>-_\\/[]{}—=+*^?#________';
    let iter = 0;
    const original = cap.title;
    
    if (scrambleIntervalRef.current) clearInterval(scrambleIntervalRef.current);
    
    scrambleIntervalRef.current = setInterval(() => {
      setDisplayText(
        original.split('').map((c, i) =>
          i < iter ? original[i] : chars[Math.floor(Math.random() * chars.length)]
        ).join('')
      );
      iter += 0.5;
      if (iter >= original.length) {
        clearInterval(scrambleIntervalRef.current);
        setDisplayText(original);
      }
    }, 30);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const r = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width) * 100;
    const y = ((e.clientY - r.top) / r.height) * 100;
    cardRef.current.style.setProperty('--mx', `${x}%`);
    cardRef.current.style.setProperty('--my', `${y}%`);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={startScramble}
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="bg-white/[0.03] border border-white/[0.06] rounded-lg p-[clamp(1.5rem,3vw,2.5rem)] transition-all duration-400 group relative overflow-hidden hover:border-accent/30 hover:-translate-y-1"
    >
      <div 
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-400"
        style={{
          background: 'radial-gradient(circle at var(--mx, 50%) var(--my, 50%), rgba(200,255,0,0.05), transparent 60%)'
        }}
      />
      <span className="font-display text-[0.7rem] font-bold text-accent opacity-40 tracking-[0.1em] block mb-5">{cap.num}</span>
      <div className="text-accent mb-4">{cap.icon}</div>
      <h3 className="font-display text-[1.15rem] font-bold mb-[0.6rem] tracking-[-0.01em]">{displayText}</h3>
      <p className="text-[0.82rem] text-[#777] leading-[1.6] font-light">{cap.desc}</p>
    </motion.div>
  );
}

export default function Capabilities() {
  return (
    <section id="capabilities" className="py-[clamp(5rem,12vw,10rem)] relative z-[1]">
      <div className="max-w-[1200px] mx-auto px-[clamp(1.25rem,4vw,2.5rem)]">
        <div className="flex items-center gap-[0.7rem] mb-6 uppercase text-accent tracking-[0.2em] font-medium text-[0.68rem] before:content-[''] before:w-5 before:h-[1px] before:bg-accent before:shadow-[0_0_8px_var(--color-accent)]">
          What We Do
        </div>
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-12">
          <span className="heading-reveal">
            <motion.span 
              initial={{ y: '100%' }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="inline-block"
            >
              Capabilities
            </motion.span>
          </span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
          {capabilities.map((cap) => (
            <CapCard key={cap.num} cap={cap} />
          ))}
        </div>
      </div>
    </section>
  );
}
