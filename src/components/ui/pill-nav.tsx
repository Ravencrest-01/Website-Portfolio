"use client";

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
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
    baseColor?: string;
    pillColor?: string; // Color of the active bubble
    hoveredIconColor?: string;
    iconColor?: string;
}

const PillNav: React.FC<PillNavProps> = ({
    items,
    className = '',
    baseColor = 'rgba(0,0,0,0)', // Transparent base for vertical sidebar usually
    pillColor = '#fff', // White bubble
    hoveredIconColor = '#000', // Icon becomes black inside bubble
    iconColor = 'rgba(255,255,255,0.5)', // Default dimmed icon
}) => {
    const circleRefs = useRef<Array<HTMLSpanElement | null>>([]);
    const tlRefs = useRef<Array<gsap.core.Timeline | null>>([]);
    const activeTweenRefs = useRef<Array<gsap.core.Tween | null>>([]);

    useEffect(() => {
        const layout = () => {
            circleRefs.current.forEach(circle => {
                if (!circle?.parentElement) return;

                const pill = circle.parentElement as HTMLElement;
                const rect = pill.getBoundingClientRect();
                const { width: w, height: h } = rect;

                // Vertical Logic: Swap W and H usage conceptually for the "bulge" logic if needed, 
                // but since we want the bubble to rise from below/behind for each item...

                // The original code calculates a large circle (R) that sits below the item and scales up.
                // For vertical, we might want it to sit "behind" or "to the side"?
                // Actually, the original effect is a circle expanding to fill the pill.
                // Let's stick to the original math but apply it to the square items.

                const R = ((w * w) / 4 + h * h) / (2 * h);
                const D = Math.ceil(2 * R) + 2;
                const delta = Math.ceil(R - Math.sqrt(Math.max(0, R * R - (w * w) / 4))) + 1;
                const originY = D - delta;

                circle.style.width = `${D}px`;
                circle.style.height = `${D}px`;
                // circle.style.bottom = `-${delta}px`; // Original: bottom aligned
                // For vertical stack, we probably want center-based expansion? 
                // Or keeping it bottom-aligned relative to the *item* container works if the item is square.
                circle.style.bottom = `-${delta}px`;

                gsap.set(circle, {
                    xPercent: -50,
                    scale: 0,
                    transformOrigin: `50% ${originY}px`
                });

                // Icon Animations
                const iconDef = pill.querySelector<HTMLElement>('.nav-icon-default');
                const iconHover = pill.querySelector<HTMLElement>('.nav-icon-hover');

                if (iconDef) gsap.set(iconDef, { y: 0, opacity: 1 });
                if (iconHover) gsap.set(iconHover, { y: h + 10, opacity: 0 });

                const index = circleRefs.current.indexOf(circle);
                if (index === -1) return;

                tlRefs.current[index]?.kill();
                const tl = gsap.timeline({ paused: true });

                // Animate Circle
                tl.to(circle, { scale: 1.2, xPercent: -50, duration: 0.4, ease: 'power3.out', overwrite: 'auto' }, 0);

                // Animate Icons
                if (iconDef) {
                    tl.to(iconDef, { y: -h / 2, opacity: 0, duration: 0.4, ease: 'power3.out', overwrite: 'auto' }, 0);
                }
                if (iconHover) {
                    gsap.set(iconHover, { y: h / 2 }); // Start from below
                    tl.to(iconHover, { y: 0, opacity: 1, duration: 0.4, ease: 'power3.out', overwrite: 'auto' }, 0);
                }

                tlRefs.current[index] = tl;
            });
        };

        layout();
        const onResize = () => layout();
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, [items]);

    const handleEnter = (i: number) => {
        tlRefs.current[i]?.play();
    };

    const handleLeave = (i: number) => {
        // Only reverse if NOT active. If active, we might want to keep it? 
        // The user didn't specify active state behavior for the pill effect, 
        // but usually navs highlight active. 
        // However, the GSAP effect is a "hover" fill. 
        // Let's rely on React state for the persistent active style (handled via separate logic or CSS)
        // and use GSAP for the interaction flair.
        tlRefs.current[i]?.reverse();
    };

    // Update: If an item is active, maybe we force the timeline to play or stay at end?
    // For simplicity and to avoid conflict with the GSAP hover logic, let's keep GSAP as hover-only
    // and handle "active" state with a static visual indicator (like a border or color change) in the DOM,
    // OR we can make the GSAP state persistent. 
    // Let's try to make it persistent for the active item.
    useEffect(() => {
        items.forEach((item, i) => {
            if (item.isActive && tlRefs.current[i]) {
                tlRefs.current[i]?.play(); // Force play if active
            } else if (!item.isActive && tlRefs.current[i]) {
                // If not hovered... hard to track hover state here without refs.
                // Simplest: Just reverse if not active. Warning: This might fight with hover if cursor is there.
                // Usually acceptable to let hover win or just update on prop change.
                // Let's just let hover drive the GSAP, and Active state drive CSS color literals.
            }
        })
    }, [items]);


    return (
        <nav className={cn("flex flex-col items-center gap-4 p-2 rounded-full", className)} style={{ background: baseColor }}>
            {items.map((item, i) => {
                const isActive = item.isActive;

                return (
                    <button
                        key={item.id}
                        onClick={item.onClick}
                        className="relative overflow-hidden w-12 h-12 rounded-full flex items-center justify-center cursor-pointer group"
                        onMouseEnter={() => handleEnter(i)}
                        onMouseLeave={() => handleLeave(i)}
                        aria-label={item.label}
                    >
                        {/* Background Bubble (GSAP animated) */}
                        <span
                            className="hover-circle absolute left-1/2 bottom-0 rounded-full z-10 pointer-events-none"
                            style={{ background: pillColor }}
                            ref={el => { circleRefs.current[i] = el; }}
                        />

                        {/* Default Icon (Visible when not hovered/active) */}
                        <div
                            className="nav-icon-default relative z-20 transition-all duration-300"
                            style={{ color: isActive ? pillColor : iconColor }}
                        >
                            <HugeiconsIcon icon={item.icon} className="w-6 h-6" />
                        </div>

                        {/* Hover/Active Icon (Visible when hovered/active) */}
                        {/* 
                   Actually, the GSAP logic above tries to swap them. 
                   We need two icons layered or just one animating. 
                   The provided code had 'pill-label' and 'pill-label-hover'. 
                */}
                        <div
                            className="nav-icon-hover absolute inset-0 flex items-center justify-center z-30"
                            style={{ color: hoveredIconColor }}
                        >
                            <HugeiconsIcon icon={item.icon} className="w-6 h-6" />
                        </div>

                        {/* Active Indicator Dot (Optional, if we want extra cue) */}
                        {isActive && (
                            <span className="absolute -right-1 top-1/2 -translate-y-1/2 w-1 h-8 bg-white/50 rounded-full blur-[2px] hidden" />
                        )}
                    </button>
                )
            })}
        </nav>
    );
};

export default PillNav;
