import { Phone, Mail, MapPin, Clock } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="relative py-32">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12">
        <div>
          <div className="text-xs tracking-[0.3em] uppercase text-gold mb-6">— Visit Us</div>
          <h2 className="text-5xl md:text-6xl font-light leading-tight mb-12">
            Come <span className="italic gold-text">say hello</span>.
          </h2>
          <div className="space-y-8">
            {[
              { icon: MapPin, label: "Address", lines: ["8990 Chinguacousy Road", "Brampton, ON L6Y 5X6"] },
              { icon: Phone, label: "Phone", lines: ["(905) 796-1100"] },
              { icon: Mail, label: "Email", lines: ["info@opticalpulse.com"] },
              { icon: Clock, label: "Hours", lines: ["Mon–Fri: 10:30 AM – 8:00 PM", "Sat: 10:30 AM – 6:00 PM", "Sun: 12:00 PM – 5:00 PM"] },
            ].map((c) => (
              <div key={c.label} className="flex gap-5 group">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-background transition-all">
                  <c.icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs tracking-[0.25em] uppercase text-muted-foreground mb-2">{c.label}</div>
                  {c.lines.map((l) => <div key={l} className="text-foreground">{l}</div>)}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative aspect-square lg:aspect-auto rounded-3xl overflow-hidden border border-border glass">
          <iframe
            title="Optical Pulse location"
            src="https://www.google.com/maps?q=8990+Chinguacousy+Road+Brampton+ON&output=embed"
            className="w-full h-full grayscale contrast-125 opacity-90"
            loading="lazy"
          />
        </div>
      </div>

      <footer className="max-w-7xl mx-auto px-6 mt-32 pt-10 border-t border-border/60 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-gold to-accent" />
          <span>Optical <span className="gold-text font-semibold">Pulse</span> · © {new Date().getFullYear()}</span>
        </div>
        <div>Premium Vision Care · Brampton, Ontario</div>
      </footer>
    </section>
  );
}
