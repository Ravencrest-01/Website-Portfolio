"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { SKILL_CATEGORIES } from "@/lib/skills-data";
import { motion } from "framer-motion";

function Pill({ icon: Icon, label }: { icon: React.ComponentType<{ className?: string }>; label: string }) {
    return (
        <div className="group relative flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 hover:border-white/20 hover:bg-white/10 transition-all overflow-hidden cursor-default">
            {/* Glare/Shine Effect */}
            <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent z-0" />

            <Icon className="relative z-10 w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity" />
            <span className="relative z-10 text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                {label}
            </span>
        </div>
    );
}

function SkillCard({ title, skills }: { title: string; skills: typeof SKILL_CATEGORIES.LANGUAGES }) {
    return (
        <motion.div
            className="flex flex-col h-full rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-lg transition-colors hover:border-primary/20"
        >
            <h3 className="text-xl font-bold mb-6 text-foreground border-b border-white/10 pb-4">
                {title}
            </h3>
            <div className="flex flex-wrap gap-3">
                {skills.map((skill, idx) => (
                    <Pill key={idx} icon={skill.icon} label={skill.label} />
                ))}
            </div>
        </motion.div>
    );
}

export function Skills() {
    return (
        <section id="arsenal" className="py-24 relative overflow-hidden">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="flex flex-col items-center text-center space-y-4 mb-16">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-foreground">
                        Technical Arsenal
                    </h2>
                    <p className="text-muted-foreground max-w-[600px]">
                        The full stack of technologies I use to build digital products.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    <SkillCard title="Languages" skills={SKILL_CATEGORIES.LANGUAGES} />
                    <SkillCard title="Frameworks & Libs" skills={SKILL_CATEGORIES.FRAMEWORKS} />
                    <SkillCard title="Tools & Platforms" skills={SKILL_CATEGORIES.TOOLS} />
                </div>
            </div>
        </section>
    );
}
