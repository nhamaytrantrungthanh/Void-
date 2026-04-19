import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const characters = "VOID".split("");

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center text-center px-[clamp(1.25rem,4vw,2.5rem)] relative z-[1]">
      <div className="flex flex-col items-center max-w-4xl">
        <motion.div
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-[0.8rem] font-semibold tracking-[0.25em] uppercase text-accent mb-6 px-[1.2rem] py-2 rounded-full bg-bg/50 backdrop-blur-md border border-accent/10"
        >
          Digital Experience Studio
        </motion.div>

        <h1 className="font-display text-[clamp(5rem,18vw,14rem)] font-extrabold tracking-[0.06em] leading-[1.05] [perspective:600px] drop-shadow-[0_0_60px_rgba(200,255,0,0.15)]">
          {characters.map((char, i) => (
            <motion.span
              key={i}
              initial={{ y: 80, rotateX: 40, opacity: 0 }}
              animate={{ y: 0, rotateX: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="inline-block origin-bottom"
            >
              {char}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="text-[clamp(1.15rem,2.5vw,1.5rem)] text-white max-w-[580px] mt-6 leading-[1.6] font-medium drop-shadow-[0_2px_16px_rgba(6,6,6,1)]"
        >
          We engineer digital realities that transcend the boundaries of convention
        </motion.p>

        <motion.div
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-4 mt-10 justify-center w-full sm:w-auto"
        >
          <a
            href="#work"
            className="inline-flex items-center justify-center gap-2 font-display text-[0.82rem] font-bold px-[1.8rem] py-[0.85rem] rounded-full bg-accent text-bg transition-all duration-400 tracking-[0.04em] hover:shadow-[0_0_30px_rgba(200,255,0,0.35)] hover:-translate-y-1"
          >
            View Work <ArrowRight size={16} />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 font-display text-[0.82rem] font-bold px-[1.8rem] py-[0.85rem] rounded-full border border-white/20 text-white bg-bg/50 backdrop-blur-md transition-all duration-400 tracking-[0.04em] hover:border-accent hover:text-accent hover:bg-bg/60"
          >
            Start Project
          </a>
        </motion.div>
      </div>
    </section>
  );
}
