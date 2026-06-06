const brands = ["Ray-Ban", "Tom Ford", "Gucci", "Burberry", "Coach", "Michael Kors", "Armani", "Lacoste", "Guess", "Vogue"];

export function Brands() {
  return (
    <section id="brands" className="relative py-24 border-y border-border/40 overflow-hidden">
      <div className="text-center mb-12">
        <div className="text-xs tracking-[0.3em] uppercase text-gold mb-4">— Featured Houses</div>
        <h2 className="text-3xl md:text-4xl font-display font-light">15+ world-class designer brands</h2>
      </div>
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
        <div className="flex animate-marquee whitespace-nowrap">
          {[...brands, ...brands].map((b, i) => (
            <div
              key={i}
              className="mx-12 text-4xl md:text-5xl font-display italic text-muted-foreground/60 hover:text-gold transition-colors duration-300 cursor-default"
            >
              {b}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
