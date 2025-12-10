import { SKILLS } from "@/lib/data";

export function Skills() {
    return (
        <section id="skills" className="py-24 relative">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="flex flex-col items-center text-center space-y-4 mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-foreground">
                        Technical Arsenal
                    </h2>
                    <p className="text-muted-foreground max-w-[600px]">
                        A curated list of technologies I use to build robust and scalable applications.
                    </p>
                </div>

                <div className="flex flex-wrapjustify-center gap-4 max-w-4xl mx-auto">
                    <div className="flex flex-wrap justify-center gap-3">
                        {SKILLS.map((skill) => (
                            <div
                                key={skill}
                                className="group relative overflow-hidden rounded-full border border-border bg-background px-6 py-2 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
                                <span className="relative z-10 text-sm font-medium text-foreground/80 group-hover:text-foreground">
                                    {skill}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
