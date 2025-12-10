import { PROJECTS } from "@/lib/data";
import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";

export function Projects() {
    return (
        <section id="projects" className="py-24 relative">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="flex flex-col items-center text-center space-y-4 mb-16">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-foreground">
                        Featured Projects
                    </h2>
                    <p className="text-muted-foreground max-w-[600px]">
                        A showcase of my recent work, highlighting complex problems solved with elegant solutions.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {PROJECTS.map((project) => (
                        <div
                            key={project.id}
                            className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all hover:shadow-xl hover:shadow-primary/10 hover:border-primary/50"
                        >
                            <div className="relative aspect-video overflow-hidden bg-muted">
                                {/* Fallback color if image is missing, or use Next.js Image */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 group-hover:scale-105 transition-transform duration-500" />
                                {/* We will add real images later */}
                                {/* <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                /> */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-background/60 backdrop-blur-sm">
                                    <div className="flex gap-4">
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2 rounded-full bg-background border border-border hover:text-primary transition-colors"
                                        >
                                            <Github className="w-5 h-5" />
                                        </a>
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2 rounded-full bg-background border border-border hover:text-primary transition-colors"
                                        >
                                            <ExternalLink className="w-5 h-5" />
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col flex-1 p-6 space-y-4">
                                <div className="space-y-2">
                                    <h3 className="text-xl font-bold tracking-tight text-foreground">
                                        {project.title}
                                    </h3>
                                    <p className="text-sm text-muted-foreground line-clamp-2">
                                        {project.description}
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="inline-flex items-center rounded-md bg-secondary px-2 py-1 text-xs font-medium text-secondary-foreground ring-1 ring-inset ring-white/10"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
