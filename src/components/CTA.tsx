import { motion } from "framer-motion";

export function CTA() {
  return (
    <section className="relative py-32 px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative max-w-6xl mx-auto rounded-[2.5rem] overflow-hidden p-12 md:p-20 text-center grain"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-card to-background" />
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-gold/20 blur-[120px]" />
        <div className="absolute -bottom-32 right-1/2 translate-x-1/2 w-[500px] h-[500px] rounded-full bg-accent/20 blur-[120px]" />
        <div className="relative">
          <div className="text-xs tracking-[0.3em] uppercase text-gold mb-6">— Book Your Visit</div>
          <h2 className="text-5xl md:text-7xl font-light leading-[1.05] max-w-3xl mx-auto">
            Ready for <span className="italic gold-text">clearer</span> vision?
          </h2>
          <p className="mt-8 text-muted-foreground max-w-lg mx-auto">
            Book your comprehensive eye exam today — same-week appointments available.
          </p>
          <a
            href="tel:9057961100"
            className="mt-12 inline-flex items-center gap-3 px-10 py-5 rounded-full bg-gold text-background font-medium animate-glow-pulse hover:scale-105 transition-transform"
          >
            Book Eye Exam — (905) 796-1100
          </a>
        </div>
      </motion.div>
    </section>
  );
}
