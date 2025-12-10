"use client";

import { motion, Variants } from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import {
    CodeIcon,
    PaintBoardIcon,
    Rocket01Icon,
    ArrowRight01Icon
} from "@hugeicons/core-free-icons";

export function About() {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 10,
            },
        },
    };

    return (
        <section id="about" className="py-24 relative overflow-hidden">

            <div className="container px-4 md:px-6 mx-auto relative z-10">
                <motion.div
                    className="max-w-5xl mx-auto"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <div className="flex flex-col md:flex-row gap-12 items-start">
                        {/* Header Section */}
                        <div className="w-full md:w-1/3 space-y-4 sticky top-24">
                            <motion.div variants={itemVariants}>
                                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
                                    About <span className="text-primary">Me</span>
                                </h2>
                            </motion.div>
                            <motion.div variants={itemVariants} className="w-20 h-1.5 bg-gradient-to-r from-primary to-indigo-500 rounded-full" />
                            <motion.p variants={itemVariants} className="text-muted-foreground text-lg leading-relaxed">
                                Crafting digital experiences with a focus on performance, aesthetics, and user interaction.
                            </motion.p>
                            <motion.div variants={itemVariants}>
                                <a href="#contact" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium group">
                                    Let's Connect <HugeiconsIcon icon={ArrowRight01Icon} className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </a>
                            </motion.div>
                        </div>

                        {/* Content Cards */}
                        <div className="w-full md:w-2/3 space-y-6">
                            {/* Main Bio Card */}
                            <motion.div
                                variants={itemVariants}
                                className="bg-background/40 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-colors shadow-lg"
                            >
                                <HugeiconsIcon icon={Rocket01Icon} strokeWidth={1.5} className="w-10 h-10 text-primary mb-4" />
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    Hello! I'm a dedicated developer with a **passion for crafting digital experiences** that live on the web. My journey in web development started with curiosity and has evolved into a career where I strive to build performant, accessible, and beautiful applications.
                                </p>
                                <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                                    I specialize in the modern JavaScript stack, primarily **React and Next.js**, and I have a keen eye for design details. I believe in writing code that not only works but is also clean and maintainable.
                                </p>
                            </motion.div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Skill/Interest Card 1 */}
                                <motion.div
                                    variants={itemVariants}
                                    className="bg-background/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-colors shadow-lg"
                                >
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="p-2 bg-indigo-500/10 rounded-lg">
                                            <HugeiconsIcon icon={CodeIcon} strokeWidth={2} className="w-6 h-6 text-indigo-400" />
                                        </div>
                                        <h3 className="text-xl font-semibold">Engineering</h3>
                                    </div>
                                    <p className="text-sm text-muted-foreground">
                                        Solving complex problems with robust, scalable solutions. I love optimized algorithms and clean architecture.
                                    </p>
                                </motion.div>

                                {/* Skill/Interest Card 2 */}
                                <motion.div
                                    variants={itemVariants}
                                    className="bg-background/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-colors shadow-lg"
                                >
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="p-2 bg-pink-500/10 rounded-lg">
                                            <HugeiconsIcon icon={PaintBoardIcon} strokeWidth={2} className="w-6 h-6 text-pink-400" />
                                        </div>
                                        <h3 className="text-xl font-semibold">Design</h3>
                                    </div>
                                    <p className="text-sm text-muted-foreground">
                                        Bridging the gap between code and creativity. I pay attention to micro-interactions and visual harmony.
                                    </p>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
