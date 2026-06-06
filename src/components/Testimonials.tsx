import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  { quote: "Amazing service and an excellent frame selection. I felt taken care of from the moment I walked in.", name: "Priya S.", role: "Brampton, ON" },
  { quote: "Professional eye exam and genuinely friendly staff. The technology they use feels years ahead.", name: "Marcus D.", role: "Mississauga, ON" },
  { quote: "Found the perfect designer glasses thanks to their personalized fitting. Worth every dollar.", name: "Aisha K.", role: "Toronto, ON" },
];

export function Testimonials() {
  return (
    <section className="relative py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="text-xs tracking-[0.3em] uppercase text-gold mb-6">— Loved by Clients</div>
          <h2 className="text-5xl md:text-6xl font-light">
            Rated <span className="gold-text italic">4.8</span> by 10,000+ customers
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.7 }}
              className="glass rounded-3xl p-8 hover:-translate-y-2 hover:border-gold/30 transition-all duration-500"
            >
              <div className="flex gap-1 mb-6">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-lg font-display leading-relaxed mb-8">"{r.quote}"</p>
              <div className="flex items-center gap-3 pt-6 border-t border-border/60">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold to-accent" />
                <div>
                  <div className="text-sm">{r.name}</div>
                  <div className="text-xs text-muted-foreground">{r.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
