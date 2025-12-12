"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { SKILL_CATEGORIES } from "@/lib/skills-data";
import { Terminal, TypingAnimation, AnimatedSpan } from "@/components/ui/terminal";

export function Skills() {
    const chunkArray = <T,>(array: T[], size: number): T[][] => {
        const chunked: T[][] = [];
        let index = 0;
        while (index < array.length) {
            chunked.push(array.slice(index, index + size));
            index += size;
        }
        return chunked;
    };

    const COL_SIZE = 10;
    const frontendCols = chunkArray(SKILL_CATEGORIES.FRONTEND, COL_SIZE);
    const backendCols = chunkArray(SKILL_CATEGORIES.BACKEND, COL_SIZE);
    const toolsCols = chunkArray(SKILL_CATEGORIES.TOOLS, COL_SIZE);

    return (
        <section id="arsenal" className="py-24 relative overflow-hidden">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="flex flex-col items-center text-center space-y-4 mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-foreground">
                        Technical Arsenal
                    </h2>
                    <p className="text-muted-foreground max-w-[600px]">
                        Accessing secure mainframe...
                    </p>
                </div>

                <div className="flex justify-center">
                    {/* Terminal with flex-col to stack rows neatly */}
                    <Terminal
                        className="bg-background/90 backdrop-blur-xl border border-border/50 dark:border-white/30 shadow-2xl w-full max-w-7xl min-h-[770px] font-mono text-base md:text-lg leading-relaxed"
                        contentClassName="flex flex-col gap-1 overflow-x-auto"
                        sequence={true}
                    >
                        <TypingAnimation className="text-foreground">
                            &gt; ssh guest@ravencrest.sys
                        </TypingAnimation>

                        <AnimatedSpan delay={500} className="text-green-500">
                            ✔ Secure connection established.
                        </AnimatedSpan>

                        <TypingAnimation delay={1000} className="text-foreground">
                            &gt; query --table --all --format=expanded
                        </TypingAnimation>

                        <AnimatedSpan delay={1500} className="text-muted-foreground">
                            <span>Fetching data schema... [OK]</span>
                        </AnimatedSpan>

                        {/* Spacer before table */}
                        <AnimatedSpan delay={2000} className="h-8" ><span></span></AnimatedSpan>

                        {/* 1. Header Row */}
                        <AnimatedSpan delay={0} className="w-full min-w-[800px]">
                            <div className="grid grid-cols-4 border-2 border-dashed border-muted-foreground/30 rounded-t-lg bg-white/5 border-b-0">
                                <div className="p-4 border-r-2 border-dashed border-muted-foreground/30 font-bold text-foreground col-span-1">FRONTEND</div>
                                <div className="p-4 border-r-2 border-dashed border-muted-foreground/30 font-bold text-foreground col-span-2">BACKEND</div>
                                <div className="p-4 font-bold text-foreground col-span-1">TOOLS & PLATFORMS</div>
                            </div>
                        </AnimatedSpan>

                        {/* 2. Data Rows (rendered line by line) */}
                        {Array.from({ length: Math.max(frontendCols[0]?.length || 0, backendCols[0]?.length || 0, toolsCols[0]?.length || 0) }).map((_, rowIndex) => {
                            const frontendSkill = frontendCols[0]?.[rowIndex];
                            const backendSkill1 = backendCols[0]?.[rowIndex];
                            const backendSkill2 = backendCols[1]?.[rowIndex];
                            const toolsSkill = toolsCols[0]?.[rowIndex];

                            return (
                                <AnimatedSpan key={rowIndex} delay={0} className="w-full min-w-[800px]">
                                    <div className="grid grid-cols-4 border-x-2 border-dashed border-muted-foreground/30 border-b-0 hover:bg-white/5 transition-colors">
                                        {/* Frontend Cell */}
                                        <div className="px-6 py-2 border-r-2 border-dashed border-muted-foreground/30 col-span-1 flex items-center h-full">
                                            {frontendSkill ? (
                                                <div className="flex items-center gap-4">
                                                    <frontendSkill.icon className="w-6 h-6 shrink-0" />
                                                    <span className="text-muted-foreground hover:text-foreground transition-colors cursor-default whitespace-nowrap">
                                                        {frontendSkill.label}
                                                    </span>
                                                </div>
                                            ) : <div className="h-6" />}
                                        </div>

                                        {/* Backend Cell (Spans 2 cols, internally split) */}
                                        <div className="px-6 py-2 border-r-2 border-dashed border-muted-foreground/30 col-span-2 grid grid-cols-2 gap-4 h-full">
                                            <div className="flex items-center col-span-1">
                                                {backendSkill1 ? (
                                                    <div className="flex items-center gap-4">
                                                        <backendSkill1.icon className="w-6 h-6 shrink-0" />
                                                        <span className="text-muted-foreground hover:text-foreground transition-colors cursor-default whitespace-nowrap">
                                                            {backendSkill1.label}
                                                        </span>
                                                    </div>
                                                ) : <div className="h-6" />}
                                            </div>
                                            <div className="flex items-center col-span-1">
                                                {backendSkill2 ? (
                                                    <div className="flex items-center gap-4">
                                                        <backendSkill2.icon className="w-6 h-6 shrink-0" />
                                                        <span className="text-muted-foreground hover:text-foreground transition-colors cursor-default whitespace-nowrap">
                                                            {backendSkill2.label}
                                                        </span>
                                                    </div>
                                                ) : <div className="h-6" />}
                                            </div>
                                        </div>

                                        {/* Tools Cell */}
                                        <div className="px-6 py-2 col-span-1 flex items-center h-full">
                                            {toolsSkill ? (
                                                <div className="flex items-center gap-4">
                                                    <toolsSkill.icon className="w-6 h-6 shrink-0" />
                                                    <span className="text-muted-foreground hover:text-foreground transition-colors cursor-default whitespace-nowrap">
                                                        {toolsSkill.label}
                                                    </span>
                                                </div>
                                            ) : <div className="h-6" />}
                                        </div>
                                    </div>
                                </AnimatedSpan>
                            );
                        })}

                        {/* 3. Footer Row */}
                        <AnimatedSpan delay={0} className="w-full min-w-[800px]">
                            <div className="border-2 border-dashed border-muted-foreground/30 rounded-b-lg p-3 bg-white/5 text-muted-foreground text-sm font-mono px-6">
                                <span>Total clusters: {SKILL_CATEGORIES.FRONTEND.length + SKILL_CATEGORIES.BACKEND.length + SKILL_CATEGORIES.TOOLS.length} loaded. // System status: STABLE</span>
                            </div>
                        </AnimatedSpan>

                        {/* Mobile Stack Layout (visible only on small screens, rendered as a single block for simplicity) */}
                        <AnimatedSpan delay={100} className="xl:hidden">
                            <div className="flex flex-col gap-8">
                                {/* Simple stack for mobile */}
                                <div className="flex flex-col gap-4">
                                    <span className="font-bold text-foreground border-b border-border/50 pb-2">FRONTEND</span>
                                    {SKILL_CATEGORIES.FRONTEND.map((skill, idx) => (
                                        <div key={idx} className="flex items-center gap-4">
                                            <skill.icon className="w-6 h-6" />
                                            <span className="text-muted-foreground">{skill.label}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="flex flex-col gap-4">
                                    <span className="font-bold text-foreground border-b border-border/50 pb-2">BACKEND</span>
                                    {SKILL_CATEGORIES.BACKEND.map((skill, idx) => (
                                        <div key={idx} className="flex items-center gap-4">
                                            <skill.icon className="w-6 h-6" />
                                            <span className="text-muted-foreground">{skill.label}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="flex flex-col gap-4">
                                    <span className="font-bold text-foreground border-b border-border/50 pb-2">TOOLS</span>
                                    {SKILL_CATEGORIES.TOOLS.map((skill, idx) => (
                                        <div key={idx} className="flex items-center gap-4">
                                            <skill.icon className="w-6 h-6" />
                                            <span className="text-muted-foreground">{skill.label}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </AnimatedSpan>

                    </Terminal>
                </div>
            </div>
        </section>
    );
}
