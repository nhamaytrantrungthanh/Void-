import { motion } from 'motion/react';

const steps = [
  { num: '01', title: 'Discovery', desc: 'Deep research into your brand, audience, and objectives to define the creative direction.' },
  { num: '02', title: 'Concept', desc: 'Visual exploration and prototyping to establish narrative, aesthetics, and interaction model.' },
  { num: '03', title: 'Craft', desc: 'Meticulous development with obsessive attention to performance, detail, and user experience.' },
  { num: '04', title: 'Launch', desc: 'Deployment, optimization, and ongoing support to ensure lasting impact and results.' }
];

export default function Process() {
  return (
    <section id="process" className="py-[clamp(5rem,12vw,10rem)] relative z-[1]">
      <div className="max-w-[1200px] mx-auto px-[clamp(1.25rem,4vw,2.5rem)]">
        <div className="flex items-center gap-[0.7rem] mb-6 uppercase text-accent tracking-[0.2em] font-medium text-[0.68rem] before:content-[''] before:w-5 before:h-[1px] before:bg-accent before:shadow-[0_0_8px_var(--color-accent)]">
          How We Work
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
              Process
            </motion.span>
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.12 }}
              className="p-8 border-l border-white/[0.06] hover:border-accent transition-colors duration-400 group"
            >
              <span className="font-display text-[clamp(2rem,4vw,3rem)] font-extrabold text-accent opacity-20 block mb-3 group-hover:opacity-40 transition-opacity">{step.num}</span>
              <h3 className="font-display text-base font-bold mb-2 uppercase tracking-wide">{step.title}</h3>
              <p className="text-[0.85rem] text-[#777] leading-[1.6] font-light">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
