import Image from "next/image";

export function Hero() {
    return (
        <section id="home" className="relative flex flex-col items-center justify-center min-h-screen pt-24 pb-12 overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-pulse" />
                <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[128px] animate-pulse delay-1000" />
            </div>

            <div className="container px-4 md:px-6 relative z-10 flex flex-col items-center text-center space-y-8">
                <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary backdrop-blur-sm">
                    <span>Available for new projects</span>
                </div>

                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70 max-w-3xl mx-auto">
                    Crafting Digital Experiences with <span className="text-primary italic">Precision</span>
                </h1>

                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                    I'm a full-stack developer passionate about building accessible, pixel-perfect, and performant web applications.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 min-w-[200px]">
                    <a
                        href="#projects"
                        className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                    >
                        View Work
                    </a>
                    <a
                        href="#contact"
                        className="inline-flex h-12 items-center justify-center rounded-full border border-input bg-background/50 backdrop-blur-sm px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                    >
                        Contact Me
                    </a>
                </div>
            </div>
        </section>
    );
}
