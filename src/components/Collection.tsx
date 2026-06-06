import { motion } from "framer-motion";
import designer from "@/assets/collection-designer.jpg";
import sports from "@/assets/collection-sports.jpg";
import kids from "@/assets/collection-kids.jpg";
import sunglasses from "@/assets/collection-sunglasses.jpg";

const items = [
  { img: designer, title: "Designer Frames", tag: "Signature Collection", span: "lg:col-span-2 lg:row-span-2" },
  { img: sunglasses, title: "Prescription Sunglasses", tag: "Sun + Vision", span: "" },
  { img: sports, title: "Sports Eyewear", tag: "Performance", span: "" },
  { img: kids, title: "Kids Collection", tag: "Bright & Durable", span: "lg:col-span-2" },
];

export function Collection() {
  return (
    <section id="collection" className="relative py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="text-xs tracking-[0.3em] uppercase text-gold mb-6">— The Collection</div>
            <h2 className="text-5xl md:text-7xl font-light leading-none">
              Curated <span className="italic gold-text">luxury</span>.
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm">
            Hand-selected frames from the world's most coveted ateliers — built for your face, your lifestyle, your story.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 lg:grid-rows-2 gap-4 lg:h-[800px]">
          {items.map((item, i) => (
            <motion.a
              href="#"
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.8 }}
              className={`group relative overflow-hidden rounded-2xl bg-card min-h-[300px] ${item.span}`}
            >
              <img
                src={item.img}
                alt={item.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
              <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/10 transition-colors duration-500" />
              <div className="relative h-full flex flex-col justify-end p-8">
                <div className="text-xs tracking-[0.25em] uppercase text-gold mb-3">{item.tag}</div>
                <h3 className="text-3xl md:text-4xl font-display mb-4 group-hover:translate-x-2 transition-transform duration-500">
                  {item.title}
                </h3>
                <div className="text-sm text-foreground/80 flex items-center gap-2 opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                  Explore collection
                  <span className="w-8 h-px bg-gold group-hover:w-14 transition-all" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
