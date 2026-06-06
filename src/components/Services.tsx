import { motion } from "framer-motion";
import { Eye, Glasses, Sun, Contact, Baby, Wrench } from "lucide-react";

const services = [
  { icon: Eye, title: "Eye Exams", desc: "Advanced diagnostic technology paired with expert clinical insight." },
  { icon: Glasses, title: "Prescription Glasses", desc: "Custom-cut lenses engineered for every lifestyle and vision need." },
  { icon: Sun, title: "Designer Sunglasses", desc: "Iconic fashion meets uncompromising UV protection." },
  { icon: Contact, title: "Contact Lenses", desc: "Comfortable daily, monthly, and specialty lens options." },
  { icon: Baby, title: "Kids Eyewear", desc: "Durable, stylish frames built for growing eyes and active days." },
  { icon: Wrench, title: "Frame Adjustments", desc: "Professional fittings, cleaning, and on-site repairs." },
];

export function Services() {
  return (
    <section id="services" className="relative py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mb-20"
        >
          <div className="text-xs tracking-[0.3em] uppercase text-gold mb-6">— Our Services</div>
          <h2 className="text-5xl md:text-7xl font-light leading-tight">
            Crafted care for <span className="italic gold-text">every gaze</span>.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border/40">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.7 }}
              className="group relative bg-background p-10 overflow-hidden hover:bg-card transition-colors duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gold/0 to-accent/0 group-hover:from-gold/5 group-hover:to-accent/10 transition-all duration-700" />
              <div className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full bg-gold/0 group-hover:bg-gold/10 blur-3xl transition-all duration-700" />
              <div className="relative">
                <s.icon className="w-10 h-10 text-gold mb-8 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-500" strokeWidth={1.2} />
                <h3 className="text-2xl font-display mb-3">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                <div className="mt-8 text-xs tracking-[0.2em] uppercase text-gold opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                  Learn more →
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
