"use client";

import { useState, useEffect } from "react";
import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Footer } from "@/components/sections/Footer";
import { Plasma } from "@/components/ui/Plasma";
import { toast } from "sonner";
import { AnimationToggle } from "@/components/animation-toggle";

export default function Home() {
  const [animationOn, setAnimationOn] = useState(true);

  useEffect(() => {
    // Check for hardware acceleration/WebGL support
    const checkHardwareAcceleration = () => {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl', { failIfMajorPerformanceCaveat: true });

      if (!gl) {
        setAnimationOn(false);
        toast("Hardware Acceleration Not Detected", {
          description: "Plasma animations disabled for optimal performance.",
        });
        return false;
      }
      return true;
    };

    checkHardwareAcceleration();
  }, []);

  const toggleAnimation = () => {
    if (animationOn) {
      setAnimationOn(false);
      toast("Animations turned off!", {
        description: "Plasma animation paused for better performance.",
      });
    } else {
      setAnimationOn(true);
      toast("Animations turned on!", {
        description: "Plasma animation resumed.",
      });
    }
  };

  return (
    <main className="min-h-screen bg-background relative">
      <div className="fixed top-9 left-6 z-50">
        <AnimationToggle isOn={animationOn} onToggle={toggleAnimation} />
      </div>

      <div className="fixed inset-0 z-0 opacity-50">
        <Plasma paused={!animationOn} />
      </div>

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Footer />
      </div>
    </main>
  );
}
