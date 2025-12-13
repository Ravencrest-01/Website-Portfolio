"use client";

import { LimelightNav } from "@/components/ui/limelight-nav";
import { ModeToggle } from "@/components/mode-toggle";
import { NAV_LINKS } from "@/lib/data";
import { HugeiconsIcon } from "@hugeicons/react";
import { Home04Icon, IdIcon, ThreeDScaleIcon, Mail02Icon } from "@hugeicons/core-free-icons";
import { useState, useEffect } from "react";

export function Navbar() {
    const [activeTab, setActiveTab] = useState(0);

    const icons = [
        <HugeiconsIcon key="home" icon={Home04Icon} strokeWidth={2} className="w-7 h-7" />,
        <HugeiconsIcon key="about" icon={IdIcon} strokeWidth={2} className="w-7 h-7" />,
        <HugeiconsIcon key="projects" icon={ThreeDScaleIcon} strokeWidth={2} className="w-7 h-7" />,
        <HugeiconsIcon key="contact" icon={Mail02Icon} strokeWidth={2} className="w-7 h-7" />,
    ];

    const items = NAV_LINKS.map((link, index) => ({
        id: link.name.toLowerCase(),
        icon: icons[index],
        label: link.name,
        onClick: () => {
            const element = document.querySelector(link.href);
            if (element) {
                if (link.href === "#about") {
                    const rect = element.getBoundingClientRect();
                    const absoluteTop = window.scrollY + rect.top;
                    const centerPosition = absoluteTop - (window.innerHeight / 2) + (rect.height / 2);

                    window.scrollTo({
                        top: centerPosition,
                        behavior: "smooth"
                    });
                } else {
                    element.scrollIntoView({ behavior: "smooth" });
                }
            }
            setActiveTab(index);
        },
    }));

    useEffect(() => {
        const handleScroll = () => {
            const sections = NAV_LINKS.map(link => document.querySelector(link.href || ""));
            const scrollValues = sections.map(section => {
                if (!section) return 0;
                const rect = section.getBoundingClientRect();
                // Check if section is visible in viewport (adjust threshold as needed)
                if (rect.top <= 150 && rect.bottom >= 150) {
                    return 1;
                }
                return 0;
            });

            const activeIndex = scrollValues.findIndex(val => val === 1);
            if (activeIndex !== -1) {
                setActiveTab(activeIndex);
            }
        };

        window.addEventListener('scroll', handleScroll);
        // Trigger once on mount to set initial state
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, [items]);

    return (
        <>
            <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
                <LimelightNav
                    items={items}
                    activeIndex={activeTab} // Pass controlled activeIndex
                    onTabChange={setActiveTab}
                />
            </div>
            <div className="fixed top-9 right-6 z-50">
                <ModeToggle />
            </div>
        </>
    );
}
