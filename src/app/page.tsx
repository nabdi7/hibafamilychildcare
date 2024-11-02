import Hero from "@/components/hero/Hero"
import Programs from "@/components/programs/Programs";
import Features from "@/components/features/Feature";
import Testimonials from "@/components/testimonials/Testimonials";
import About from "@/components/about/About";

export default function Home() {
  return (
    <main className="">
      <Hero />
      {/* <About /> */}
      <Programs />
      <Features />
      <Testimonials />
      
    </main>
  );
}
