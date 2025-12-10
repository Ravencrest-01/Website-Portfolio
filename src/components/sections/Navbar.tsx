"use client";

import { LimelightNav } from "@/components/ui/desktop/limelight-nav";
import { NAV_LINKS } from "@/lib/data";
import { HugeiconsIcon } from "@hugeicons/react";
import { Home04Icon, IdIcon, ThreeDScaleIcon, Mail02Icon } from "@hugeicons/core-free-icons";
import { useState } from "react";

export function Navbar() {
    const [activeTab, setActiveTab] = useState(0);

    const icons = [
        <HugeiconsIcon key="home" icon={Home04Icon} strokeWidth={2} className="w-5 h-5" />,
        <HugeiconsIcon key="about" icon={IdIcon} strokeWidth={2} className="w-5 h-5" />,
        <HugeiconsIcon key="projects" icon={ThreeDScaleIcon} strokeWidth={2} className="w-5 h-5" />,
        <HugeiconsIcon key="contact" icon={Mail02Icon} strokeWidth={2} className="w-5 h-5" />,
    ];

    const items = NAV_LINKS.map((link, index) => ({
        id: link.name.toLowerCase(),
        icon: icons[index],
        label: link.name,
        onClick: () => {
            const element = document.querySelector(link.href);
            element?.scrollIntoView({ behavior: "smooth" });
        },
    }));

    return (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
            <LimelightNav
                items={items}
                defaultActiveIndex={0}
                onTabChange={setActiveTab}
            />
        </div>
    );
}
