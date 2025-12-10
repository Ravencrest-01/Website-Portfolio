"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from "framer-motion";
import {
    Briefcase01Icon,
    Mortarboard02Icon,
    BookOpen01Icon,
    Award01Icon,
    UserIcon,
    ArrowRight01Icon
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { ABOUT_DATA } from "@/lib/about-data";
import PillNav, { PillNavItem } from "@/components/ui/pill-nav";

// --- Types & Data ---
type SectionId = "intro" | "education" | "work" | "publications" | "awards";

const SECTIONS_CONFIG: { id: SectionId; label: string; icon: any; component: React.FC }[] = [
    { id: "intro", label: "Introduction", icon: UserIcon, component: IntroContent },
    { id: "education", label: "Education", icon: Mortarboard02Icon, component: EducationContent },
    { id: "work", label: "Work Experience", icon: Briefcase01Icon, component: WorkContent },
    { id: "publications", label: "Publications", icon: BookOpen01Icon, component: PublicationsContent },
    { id: "awards", label: "Awards", icon: Award01Icon, component: AwardsContent },
];

export function About() {
    const [activeSection, setActiveSection] = useState<SectionId>("intro");
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    const xParams = useTransform(
        scrollYProgress,
        [0, 0.1, 0.9, 1],
        [-100, 0, 0, -100]
    );
    const opacityParams = useTransform(
        scrollYProgress,
        [0, 0.1, 0.9, 1],
        [0, 1, 1, 0]
    );

    const springX = useSpring(xParams, { stiffness: 300, damping: 30 });
    const springOpacity = useSpring(opacityParams, { stiffness: 300, damping: 30 });

    const pillItems: PillNavItem[] = SECTIONS_CONFIG.map(section => ({
        id: section.id,
        label: section.label,
        icon: section.icon,
        isActive: activeSection === section.id,
        onClick: () => setActiveSection(section.id)
    }));

    const ActiveComponent = SECTIONS_CONFIG.find(s => s.id === activeSection)?.component || IntroContent;

    return (
        <section ref={containerRef} id="about" className="py-24 relative min-h-screen">
            {/* --- Vertical Pill Sidebar --- */}
            <motion.div
                className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden lg:block"
                style={{ x: springX, opacity: springOpacity }}
            >
                <PillNav
                    items={pillItems}
                    className="bg-black/20 backdrop-blur-md border border-white/5 py-6 px-2 shadow-lg rounded-full w-16"
                />
            </motion.div>

            {/* --- Main Content Area --- */}
            <div className="container px-4 md:px-6 mx-auto max-w-4xl pl-4 md:pl-24 lg:pl-32 min-h-[60vh] flex items-center">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeSection}
                        initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="w-full"
                    >
                        <ActiveComponent />
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
}

// --- Content Sub-Components ---

function IntroContent() {
    const { heading, name, description, cta } = ABOUT_DATA.intro;
    return (
        <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
                {heading} <span className="text-primary">{name}</span>
            </h2>
            <div className="text-lg text-zinc-600 leading-relaxed space-y-6">
                {description.map((para, index) => (
                    <p key={index} dangerouslySetInnerHTML={{ __html: para }} />
                ))}
                <div className="pt-4">
                    <a href="#contact" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium group text-lg">
                        {cta} <HugeiconsIcon icon={ArrowRight01Icon} className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>
            </div>
        </div>
    );
}

function EducationContent() {
    return (
        <div className="space-y-8">
            <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary/10 rounded-xl">
                    <HugeiconsIcon icon={Mortarboard02Icon} strokeWidth={2} className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-3xl font-bold">Education</h3>
            </div>

            <div className="grid gap-8">
                {ABOUT_DATA.education.map((edu, index) => (
                    <Card
                        key={index}
                        title={edu.title}
                        subtitle={edu.subtitle}
                        meta={edu.meta}
                    />
                ))}
            </div>
        </div>
    );
}

function WorkContent() {
    return (
        <div className="space-y-8">
            <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary/10 rounded-xl">
                    <HugeiconsIcon icon={Briefcase01Icon} strokeWidth={2} className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-3xl font-bold">Work Experience</h3>
            </div>

            <div className="space-y-12 pl-4 border-l-2 border-white/5">
                {ABOUT_DATA.work.map((job, index) => (
                    <TimelineItem
                        key={index}
                        role={job.role}
                        company={job.company}
                        period={job.period}
                    />
                ))}
            </div>
        </div>
    );
}

function PublicationsContent() {
    return (
        <div className="space-y-8">
            <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary/10 rounded-xl">
                    <HugeiconsIcon icon={BookOpen01Icon} strokeWidth={2} className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-3xl font-bold">Publications & Patents</h3>
            </div>

            <div className="grid gap-10">
                {ABOUT_DATA.publications.map((pub, index) => (
                    <div key={index} className="pl-4">
                        <span className={`text-sm font-bold tracking-wider uppercase mb-2 block ${pub.type === 'Patent' ? 'text-zinc-600' : 'text-primary'}`}>
                            {pub.type}
                        </span>
                        <h4 className="text-2xl font-bold text-foreground mb-2">{pub.title}</h4>
                        <p className="text-zinc-600 mb-4">{pub.meta}</p>
                        <p className="text-zinc-600 leading-relaxed mb-4 max-w-3xl">
                            {pub.description}
                        </p>
                        {pub.link && (
                            <a href={pub.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary font-medium hover:underline">
                                Read {pub.type} <HugeiconsIcon icon={ArrowRight01Icon} className="w-4 h-4" />
                            </a>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

function AwardsContent() {
    return (
        <div className="space-y-8">
            <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary/10 rounded-xl">
                    <HugeiconsIcon icon={Award01Icon} strokeWidth={2} className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-3xl font-bold">Honours & Awards</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {ABOUT_DATA.awards.map((award, index) => (
                    <Card key={index} title={award.title} subtitle={award.subtitle} meta={award.meta}>
                        <p className="text-zinc-600 mt-2 leading-relaxed">
                            {award.description}
                        </p>
                    </Card>
                ))}
            </div>
        </div>
    );
}

// --- Helper Components ---

function Card({ title, subtitle, meta, children }: { title: string, subtitle: string, meta: string, children?: React.ReactNode }) {
    return (
        <div className="pl-4 border-l-2 border-white/10 hover:border-zinc-500 transition-colors duration-300">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                <h4 className="font-bold text-xl text-foreground pr-4">{title}</h4>
                <span className="text-zinc-600 font-bold text-lg whitespace-nowrap mt-1 sm:mt-0">{meta}</span>
            </div>
            <p className="text-zinc-600 font-medium text-lg mb-2">{subtitle}</p>
            {children}
        </div>
    );
}

function TimelineItem({ role, company, period, children }: { role: string, company: string, period: string, children?: React.ReactNode }) {
    return (
        <div className="relative pl-8">
            <div className="absolute left-[-9px] top-1.5 w-4 h-4 rounded-full bg-background border-4 border-zinc-500" />

            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                <h4 className="text-2xl font-bold text-foreground">{role}</h4>
                <span className="text-zinc-600 font-bold text-lg mt-1 sm:mt-0 w-fit">{period}</span>
            </div>
            <p className="text-zinc-600 font-medium text-lg">{company}</p>
            {children}
        </div>
    );
}
