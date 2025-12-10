import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Footer } from "@/components/sections/Footer";
import { Plasma } from "@/components/ui/Plasma";

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative">
      <div className="fixed inset-0 z-0 opacity-50">
        <Plasma />
      </div>
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Skills />
        <Projects />
        <Footer />
      </div>
    </main>
  );
}
