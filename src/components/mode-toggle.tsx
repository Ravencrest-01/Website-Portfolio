"use client";

import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";

export function ModeToggle() {
    return (
        <AnimatedThemeToggler
            className="rounded-full w-10 h-10 border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 flex items-center justify-center text-foreground transition-all duration-300"
        />
    );
}
