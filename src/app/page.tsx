"use client";

import { useState, useEffect } from "react";
import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Footer } from "@/components/sections/Footer";
import { Plasma } from "@/components/ui/desktop/Plasma";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { HugeiconsIcon } from "@hugeicons/react";
import { PlayIcon, StopIcon } from "@hugeicons/core-free-icons";

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
      <div className="fixed top-6 left-6 z-50">
        <Button
          variant="outline"
          onClick={toggleAnimation}
          className="rounded-full border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all duration-300 gap-2"
        >
          <HugeiconsIcon icon={animationOn ? StopIcon : PlayIcon} className="w-4 h-4" />
          <span className="hidden sm:inline">{animationOn ? "Animation On" : "Animation Off"}</span>
        </Button>
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
