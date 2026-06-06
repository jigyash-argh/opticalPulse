import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { Sparkles, Upload } from "lucide-react";
import { useRef } from "react";
import heroGlasses from "@/assets/hero-glasses.png";

export function TryOn() {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rx = useSpring(useTransform(y, [-0.5, 0.5], [12, -12]), { stiffness: 150, damping: 15 });
  const ry = useSpring(useTransform(x, [-0.5, 0.5], [-12, 12]), { stiffness: 150, damping: 15 });

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current!.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const handleLeave = () => { x.set(0); y.set(0); };

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-accent/10 blur-[160px]" />
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs tracking-[0.2em] text-gold uppercase mb-6">
            <Sparkles className="w-3 h-3" /> AI Powered
          </div>
          <h2 className="text-5xl md:text-7xl font-light leading-tight mb-6">
            Try frames <span className="italic gold-text">virtually</span>.
          </h2>
          <p className="text-lg text-muted-foreground max-w-md mb-10 leading-relaxed">
            Upload a single photo and our AI mirrors any frame onto your face in seconds — find your perfect style before you visit.
          </p>
          <button className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-foreground text-background font-medium hover:bg-gold transition-all duration-300">
            <Upload className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
            Upload Your Photo
          </button>
        </div>

        <div ref={ref} onMouseMove={handleMove} onMouseLeave={handleLeave} className="relative h-[500px] perspective-[1200px]" style={{ perspective: "1200px" }}>
          <motion.div
            style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
            className="relative w-full h-full rounded-3xl glass overflow-hidden flex items-center justify-center grain"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-transparent to-accent/20" />
            <div className="absolute top-6 left-6 right-6 flex items-center justify-between text-xs tracking-[0.2em] uppercase text-muted-foreground">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-gold animate-pulse" /> Live Preview
              </span>
              <span>AI · v2.4</span>
            </div>
            <motion.img
              src={heroGlasses}
              alt="Virtual try-on preview"
              style={{ transform: "translateZ(80px)" }}
              className="relative w-3/4 max-w-md drop-shadow-[0_30px_60px_rgba(212,175,55,0.5)]"
            />
            <div className="absolute bottom-6 left-6 right-6 flex justify-between text-xs">
              <div className="text-muted-foreground">Tom Ford · Aviator</div>
              <div className="text-gold">98% match</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
