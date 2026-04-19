import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section id="contact" className="min-h-[80vh] flex items-center justify-center text-center py-[clamp(5rem,12vw,10rem)] px-[clamp(1.25rem,4vw,2.5rem)] relative z-[1]">
      <div className="max-w-4xl">
        <div className="flex items-center justify-center gap-[0.7rem] mb-6 uppercase text-accent tracking-[0.2em] font-medium text-[0.68rem] before:content-[''] before:w-5 before:h-[1px] before:bg-accent before:shadow-[0_0_8px_var(--color-accent)] after:content-[''] after:w-5 after:h-[1px] after:bg-accent after:shadow-[0_0_8px_var(--color-accent)]">
          Get In Touch
        </div>
        <motion.h2 
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="font-display text-[clamp(2.2rem,5.5vw,4.5rem)] font-extrabold leading-[1.15] tracking-[-0.02em] drop-shadow-[0_0_60px_rgba(200,255,0,0.1)]"
        >
          Let's create<br />something <em className="italic text-accent not-italic">extraordinary</em>
        </motion.h2>
        <motion.p 
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[0.95rem] text-[#777] mt-5 font-light"
        >
          Ready to push the boundaries of digital experience?
        </motion.p>
        <motion.a
          href="mailto:hello@void.studio"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="inline-flex items-center gap-[0.6rem] mt-10 px-8 py-[0.9rem] border border-accent text-accent rounded-full text-[0.82rem] font-medium tracking-[0.06em] transition-all duration-400 hover:bg-accent hover:text-bg hover:shadow-[0_0_30px_rgba(200,255,0,0.3)] hover:-translate-y-1"
        >
          <span>Start a Project</span>
          <ArrowRight size={18} />
        </motion.a>
      </div>
    </section>
  );
}
