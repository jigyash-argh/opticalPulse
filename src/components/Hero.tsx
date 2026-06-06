import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import heroGlasses from "@/assets/hero-glasses.png";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 50, damping: 20 });
  const sy = useSpring(my, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 60;
      const y = (e.clientY / window.innerHeight - 0.5) * 60;
      mx.set(x);
      my.set(y);
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, [mx, my]);

  return (
    <section ref={ref} className="relative min-h-screen overflow-hidden grain">
      {/* Ambient gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/40 to-background" />
      <motion.div
        style={{ x: sx, y: sy }}
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-accent/20 blur-[120px]"
      />
      <motion.div
        style={{ x: useTransform(sx, (v) => -v), y: useTransform(sy, (v) => -v) }}
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-gold/15 blur-[120px]"
      />

      <motion.div style={{ y, opacity }} className="relative z-10 max-w-7xl mx-auto px-6 pt-40 pb-20 grid lg:grid-cols-2 gap-12 items-center min-h-screen">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs tracking-[0.2em] text-gold uppercase mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
            Brampton's Premier Optical Boutique
          </motion.div>

          <h1 className="text-6xl md:text-8xl font-light leading-[0.95]">
            {["Premium", "Vision", "Care."].map((word, i) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.15, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="block"
              >
                {i === 1 ? <span className="gold-text italic">{word}</span> : word}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-8 text-lg text-muted-foreground max-w-md leading-relaxed"
          >
            Discover designer frames, comprehensive eye exams, and personalized vision solutions crafted for those who see life clearly.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#contact"
              className="group relative px-8 py-4 rounded-full bg-gold text-background font-medium overflow-hidden hover:scale-105 transition-transform"
            >
              <span className="relative z-10">Book Eye Exam →</span>
              <div className="absolute inset-0 bg-gradient-to-r from-gold via-yellow-200 to-gold opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a
              href="#collection"
              className="px-8 py-4 rounded-full border border-foreground/20 hover:border-gold/60 hover:text-gold transition-all"
            >
              Browse Frames
            </a>
          </motion.div>
        </div>

        <motion.div
          style={{ x: sx, y: sy }}
          className="relative h-[500px] lg:h-[600px] flex items-center justify-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative animate-float"
          >
            <div className="absolute inset-0 bg-gold/30 blur-3xl scale-75" />
            <img src={heroGlasses} alt="Luxury designer eyewear" className="relative w-full max-w-lg drop-shadow-[0_30px_60px_rgba(212,175,55,0.3)]" />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-xs tracking-[0.3em] text-muted-foreground uppercase flex flex-col items-center gap-3"
      >
        Scroll
        <div className="w-px h-12 bg-gradient-to-b from-gold to-transparent" />
      </motion.div>
    </section>
  );
}
