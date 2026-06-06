import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { Services } from "@/components/Services";
import { Brands } from "@/components/Brands";
import { Collection } from "@/components/Collection";
import { WhyUs } from "@/components/WhyUs";
import { TryOn } from "@/components/TryOn";
import { Testimonials } from "@/components/Testimonials";
import { CTA } from "@/components/CTA";
import { Contact } from "@/components/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Optical Pulse · Premium Vision Care & Luxury Eyewear in Brampton" },
      { name: "description", content: "Designer frames, comprehensive eye exams, and personalized vision care in Brampton, ON. Ray-Ban, Tom Ford, Gucci & more." },
      { property: "og:title", content: "Optical Pulse · Premium Vision Care" },
      { property: "og:description", content: "Luxury eyewear and expert eye care in Brampton, Ontario." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-background text-foreground">
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <Brands />
      <Collection />
      <WhyUs />
      <TryOn />
      <Testimonials />
      <CTA />
      <Contact />
    </main>
  );
}
