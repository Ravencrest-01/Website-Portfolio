"use client";

import { LimelightNav } from "@/components/ui/desktop/limelight-nav";
import { NAV_LINKS } from "@/lib/data";
import { Home, User, Briefcase, Mail } from "lucide-react";
import { useState } from "react";

export function Navbar() {
    const [activeTab, setActiveTab] = useState(0);

    const icons = [
        <Home key="home" className="w-5 h-5" />,
        <User key="about" className="w-5 h-5" />,
        <Briefcase key="projects" className="w-5 h-5" />,
        <Mail key="contact" className="w-5 h-5" />,
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
