export function About() {
    return (
        <section id="about" className="py-24 relative">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="flex flex-col items-center text-center space-y-8 max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-foreground">
                        About Me
                    </h2>
                    <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                        <p>
                            Hello! I'm a dedicated developer with a passion for crafting digital experiences that live on the web. My journey in web development started with curiosity and has evolved into a career where I strive to build performant, accessible, and beautiful applications.
                        </p>
                        <p>
                            I specialize in the modern JavaScript stack, primarily React and Next.js, and I have a keen eye for design details. I love solving complex problems and learning new technologies to stay ahead in this fast-paced industry.
                        </p>
                        <p>
                            When I'm not coding, you can find me exploring new coffee shops, reading tech blogs, or contributing to open-source projects.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
