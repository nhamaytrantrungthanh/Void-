import { useEffect, useState } from 'react';
import Lenis from 'lenis';
import { motion, useScroll, useSpring } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Manifesto from './components/Manifesto';
import Capabilities from './components/Capabilities';
import Work from './components/Work';
import Metrics from './components/Metrics';
import Process from './components/Process';
import CTA from './components/CTA';
import Footer from './components/Footer';
import BackgroundCanvas from './components/BackgroundCanvas';

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrollVelocity, setScrollVelocity] = useState(0);
  
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      wheelMultiplier: 1.0,
      smoothWheel: true,
    });

    lenis.on('scroll', (e) => {
      setScrollProgress(e.progress);
      setScrollVelocity(e.velocity);
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative">
      {/* Scroll Progress Bar */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[2px] bg-accent z-[999] origin-left shadow-[0_0_8px_var(--color-accent)]"
      />

      {/* Grain Overlay */}
      <div className="grain" />

      {/* 3D Background */}
      <BackgroundCanvas scroll={scrollProgress} velocity={scrollVelocity} />

      <Navbar />

      <main className="relative z-[1]">
        <Hero />
        <Capabilities />
        <Manifesto />
        <Work />
        <Metrics />
        <Process />
        <CTA />
      </main>

      <Footer />
    </div>
  );
}
