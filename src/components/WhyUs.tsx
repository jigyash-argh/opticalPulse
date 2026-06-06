import { motion } from "framer-motion";
import doctor from "@/assets/doctor.jpg";

const reasons = [
  { num: "01", title: "State-of-the-art technology", desc: "Latest diagnostic equipment for precise, comfortable exams." },
  { num: "02", title: "Experienced eye-care professionals", desc: "Decades of combined clinical expertise on every visit." },
  { num: "03", title: "Wide luxury eyewear selection", desc: "Over 100 designer frames from 15+ premium houses." },
  { num: "04", title: "Affordable vision solutions", desc: "Transparent pricing and major insurance accepted." },
  { num: "05", title: "Personalized customer experience", desc: "Every fitting tailored to your face, prescription, and lifestyle." },
];

export function WhyUs() {
  return (
    <section id="about" className="relative py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <div className="absolute -inset-4 bg-gradient-to-br from-gold/20 to-accent/20 blur-3xl" />
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-border">
            <img src={doctor} alt="Optometrist examining patient" loading="lazy" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 glass rounded-2xl p-6">
              <div className="text-xs tracking-[0.25em] uppercase text-gold mb-2">Optical Pulse</div>
              <div className="text-xl font-display">Brampton, Ontario · Since est.</div>
            </div>
          </div>
        </motion.div>

        <div>
          <div className="text-xs tracking-[0.3em] uppercase text-gold mb-6">— Why Choose Us</div>
          <h2 className="text-5xl md:text-6xl font-light leading-tight mb-12">
            Vision care, <span className="italic gold-text">elevated</span>.
          </h2>
          <div className="space-y-2">
            {reasons.map((r, i) => (
              <motion.div
                key={r.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group flex gap-6 py-5 border-b border-border/60 hover:border-gold/40 transition-colors"
              >
                <div className="text-sm text-gold font-mono pt-1">{r.num}</div>
                <div className="flex-1">
                  <h3 className="text-xl font-display mb-1 group-hover:translate-x-2 transition-transform">{r.title}</h3>
                  <p className="text-sm text-muted-foreground">{r.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
