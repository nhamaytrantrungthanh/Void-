import { motion, useSpring, useTransform, animate } from 'motion/react';
import { useEffect, useState } from 'react';

const metrics = [
  { label: 'Projects Delivered', count: 147 },
  { label: 'Global Clients', count: 52 },
  { label: 'Awards Won', count: 18 },
  { label: 'Years Active', count: 9 }
];

function Counter({ value }: { value: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const animation = animate(0, value, {
      duration: 2,
      ease: 'easeOut',
      onUpdate: (latest) => setCount(Math.round(latest))
    });
    return () => animation.stop();
  }, [value]);

  return <>{count}</>;
}

export default function Metrics() {
  return (
    <section className="py-[clamp(4rem,8vw,7rem)] relative z-[1]">
      <div className="max-w-[1200px] mx-auto px-[clamp(1.25rem,4vw,2.5rem)]">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {metrics.map((metric, i) => (
            <motion.div
              key={i}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="flex flex-col items-center"
            >
              <span className="font-display text-[clamp(2.5rem,5vw,4rem)] font-extrabold text-accent drop-shadow-[0_0_30px_rgba(200,255,0,0.2)]">
                <Counter value={metric.count} />
              </span>
              <span className="text-[0.72rem] text-[#777] tracking-[0.08em] mt-1 uppercase font-medium">{metric.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
