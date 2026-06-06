import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const links = [
  { label: "Collection", href: "#collection" },
  { label: "Services", href: "#services" },
  { label: "Brands", href: "#brands" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "glass py-3" : "py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gold to-accent group-hover:scale-110 transition-transform" />
          <span className="font-display text-xl tracking-wide">
            Optical <span className="gold-text font-semibold">Pulse</span>
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-10 text-sm text-muted-foreground">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative hover:text-foreground transition-colors after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-px after:bg-gold after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gold/40 text-gold text-sm hover:bg-gold hover:text-background transition-all duration-300"
        >
          Book Exam
        </a>
      </div>
    </motion.header>
  );
}
