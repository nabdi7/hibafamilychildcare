import Hero from "@/components/hero/Hero";
import Programs from "@/components/programs/Programs";
import Features from "@/components/features/Feature";
import Testimonials from "@/components/testimonials/Testimonials";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Programs />
      <Features />
      <Testimonials />
    </main>
  );
}
