"use client";

import { motion, MotionStyle } from "framer-motion";
import PillNav, { PillNavItem } from "@/components/ui/pill-nav";

interface SideNavProps {
    items: PillNavItem[];
    style?: MotionStyle;
}

export function SideNav({ items, style }: SideNavProps) {
    return (
        <motion.div
            className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden lg:block"
            style={style}
        >
            <PillNav
                items={items}
                className="bg-black/20 dark:bg-white/5 backdrop-blur-md border border-white/5 dark:border-white/10 py-6 px-2 shadow-lg rounded-full w-16"
            />
        </motion.div>
    );
}
