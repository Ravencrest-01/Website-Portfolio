"use client";

import { Button } from "@/components/ui/button";
import { HugeiconsIcon } from "@hugeicons/react";
import { PlayIcon, StopIcon } from "@hugeicons/core-free-icons";
import { cn } from "@/lib/utils";

interface AnimationToggleProps {
    isOn: boolean;
    onToggle: () => void;
    className?: string;
}

export function AnimationToggle({ isOn, onToggle, className }: AnimationToggleProps) {
    return (
        <Button
            variant="outline"
            onClick={onToggle}
            className={cn(
                "rounded-full border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all duration-300 gap-2",
                className
            )}
        >
            <HugeiconsIcon icon={isOn ? StopIcon : PlayIcon} className="w-4 h-4" />
            <span className="hidden sm:inline">{isOn ? "Animation On" : "Animation Off"}</span>
        </Button>
    );
}
