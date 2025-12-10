"use client";

import React from 'react';
import { HugeiconsIcon } from "@hugeicons/react";
import { cn } from "@/lib/utils";

export type PillNavItem = {
    id: string;
    label: string;
    icon: any; // Icon component
    onClick: () => void;
    isActive: boolean;
};

export interface PillNavProps {
    items: PillNavItem[];
    className?: string;
    // Removed unused color props for cleaner code, using Tailwind classes
}

const PillNav: React.FC<PillNavProps> = ({
    items,
    className = '',
}) => {
    return (
        <nav className={cn("flex flex-col items-center gap-6 p-3 rounded-full transition-all duration-300", className)}>
            {items.map((item) => {
                const isActive = item.isActive;

                return (
                    <button
                        key={item.id}
                        onClick={item.onClick}
                        className="relative flex items-center justify-center cursor-pointer group outline-none"
                        aria-label={item.label}
                    >
                        <div
                            className={cn(
                                "relative z-20 transition-all duration-500 ease-spring flex items-center justify-center",
                                // Active: White Background, Black Icon, Scaled, Shifted, Shadow
                                // Inactive: Transparent Background, Black Icon, Dimmed
                                isActive
                                    ? "w-12 h-12 bg-black/60 dark:bg-white/10 backdrop-blur-md border border-white/10 rounded-full text-white dark:text-foreground scale-110 translate-x-6 shadow-xl"
                                    : "w-6 h-6 text-black dark:text-zinc-300 opacity-50 hover:opacity-100"
                            )}
                        >
                            <HugeiconsIcon
                                icon={item.icon}
                                className={cn("transition-all duration-300", isActive ? "w-6 h-6" : "w-6 h-6")}
                                strokeWidth={isActive ? 2.5 : 2}
                            />
                        </div>
                    </button>
                )
            })}
        </nav>
    );
};

export default PillNav;
