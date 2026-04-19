import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    name: 'Neural Canvas',
    cat: 'Immersive Web',
    img: 'https://images.unsplash.com/photo-1720962158789-9389a4f399da?w=2560&q=80',
    tall: true
  },
  {
    id: 2,
    name: 'Prism',
    cat: 'Brand Experience',
    img: 'https://images.unsplash.com/photo-1720962158919-6c5f5f99630d?w=1600&q=80',
    tall: false
  },
  {
    id: 3,
    name: 'Retrowave',
    cat: 'Spatial Computing',
    img: 'https://images.unsplash.com/photo-1720962158858-5fb16991d2b8?w=1600&q=80',
    tall: false
  }
];

export default function Work() {
  return (
    <section id="work" className="py-[clamp(5rem,12vw,10rem)] relative z-[1]">
      <div className="max-w-[1200px] mx-auto px-[clamp(1.25rem,4vw,2.5rem)]">
        <div className="flex items-center gap-[0.7rem] mb-6 uppercase text-accent tracking-[0.2em] font-medium text-[0.68rem] before:content-[''] before:w-5 before:h-[1px] before:bg-accent before:shadow-[0_0_8px_var(--color-accent)]">
          Selected Work
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
              Projects
            </motion.span>
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-[280px]">
          {projects.map((project, i) => (
            <motion.a
              key={project.id}
              href="#"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: 'easeOut' }}
              className={`relative rounded-md overflow-hidden group ${project.tall ? 'row-span-2 md:h-full' : 'h-[280px] md:h-full'}`}
            >
              <img 
                src={project.img} 
                alt={project.name}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.08]"
              />
              <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-black/85 via-black/20 to-transparent transition-opacity duration-400 group-hover:opacity-100 opacity-0 md:group-hover:opacity-100 md:opacity-0 max-md:opacity-100">
                <span className="text-[0.62rem] tracking-[0.15em] uppercase text-accent mb-1">{project.cat}</span>
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-xl font-bold">{project.name}</h3>
                  <ArrowUpRight size={18} className="text-white" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
