import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => `${Math.floor(v).toLocaleString()}${suffix}`);

  useEffect(() => {
    if (inView) {
      const controls = animate(count, to, { duration: 2.2, ease: [0.22, 1, 0.36, 1] });
      return controls.stop;
    }
  }, [inView, to, count]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

const stats = [
  { value: 10000, suffix: "+", label: "Happy Customers" },
  { value: 100, suffix: "+", label: "Designer Frames" },
  { value: 15, suffix: "+", label: "Premium Brands" },
  { value: 4.8, suffix: "★", label: "Customer Rating", decimal: true },
];

export function Stats() {
  return (
    <section className="relative py-32 border-y border-border/40">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.7 }}
            className="text-center group"
          >
            <div className="text-5xl md:text-6xl font-display gold-text mb-3">
              {s.decimal ? <span>{s.value}{s.suffix}</span> : <Counter to={s.value} suffix={s.suffix} />}
            </div>
            <div className="text-xs tracking-[0.2em] uppercase text-muted-foreground">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
