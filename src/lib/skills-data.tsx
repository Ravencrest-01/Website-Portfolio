import React from "react";

// Helper to render an image icon
const IconImage = ({ src, alt, className, ...props }: React.ImgHTMLAttributes<HTMLImageElement>) => (
    <img
        src={src}
        alt={alt}
        className={`w-6 h-6 object-contain ${className}`}
        {...props}
    />
);

// --- Icons (Images) ---
export const Icons = {
    // Languages & Frontend
    html: (props: React.HTMLAttributes<HTMLImageElement>) => <IconImage src="/skills/html5.svg" alt="HTML5" {...props} />,
    css: (props: React.HTMLAttributes<HTMLImageElement>) => <IconImage src="/skills/css3.svg" alt="CSS3" {...props} />,
    react: (props: React.HTMLAttributes<HTMLImageElement>) => <IconImage src="/skills/react.svg" alt="React" {...props} />,
    next: (props: React.HTMLAttributes<HTMLImageElement>) => <IconImage src="/skills/nextdotjs.svg" alt="Next.js" className="dark:invert" {...props} />,
    typescript: (props: React.HTMLAttributes<HTMLImageElement>) => <IconImage src="/skills/typescript.svg" alt="TypeScript" {...props} />,
    javascript: (props: React.HTMLAttributes<HTMLImageElement>) => <IconImage src="/skills/javascript.svg" alt="JavaScript" {...props} />,
    tailwind: (props: React.HTMLAttributes<HTMLImageElement>) => <IconImage src="/skills/tailwindcss.svg" alt="Tailwind" {...props} />,
    threejs: (props: React.SVGProps<SVGSVGElement>) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-foreground" {...props}>
            <path d="M21 16.5V7.5L12 2L3 7.5V16.5L12 22L21 16.5Z" />
            <path d="M3 7.5L12 13L21 7.5" />
            <path d="M12 22V13" />
        </svg>
    ),
    gsap: (props: React.SVGProps<SVGSVGElement>) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-foreground" {...props}>
            <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
    ),

    // Backend
    node: (props: React.HTMLAttributes<HTMLImageElement>) => <IconImage src="/skills/nodedotjs.svg" alt="Node.js" {...props} />,
    express: (props: React.SVGProps<SVGSVGElement>) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-foreground" {...props}>
            <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
            <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
            <line x1="6" x2="6.01" y1="6" y2="6" />
            <line x1="6" x2="6.01" y1="18" y2="18" />
        </svg>
    ),
    python: (props: React.HTMLAttributes<HTMLImageElement>) => <IconImage src="/skills/python.svg" alt="Python" {...props} />,
    django: (props: React.HTMLAttributes<HTMLImageElement>) => <IconImage src="/skills/django.svg" alt="Django" {...props} />,
    java: (props: React.HTMLAttributes<HTMLImageElement>) => <IconImage src="/skills/java.svg" alt="Java" {...props} />,
    cpp: (props: React.HTMLAttributes<HTMLImageElement>) => <IconImage src="/skills/cplusplus.svg" alt="C++" {...props} />,
    c: (props: React.HTMLAttributes<HTMLImageElement>) => <IconImage src="/skills/c.svg" alt="C" {...props} />,
    sql: (props: React.HTMLAttributes<HTMLImageElement>) => <IconImage src="/skills/sql.svg" alt="SQL" {...props} />,
    postgres: (props: React.HTMLAttributes<HTMLImageElement>) => <IconImage src="/skills/postgresql.svg" alt="PostgreSQL" {...props} />,
    mongodb: (props: React.HTMLAttributes<HTMLImageElement>) => <IconImage src="/skills/mongodb.svg" alt="MongoDB" {...props} />,
    mongoose: (props: React.SVGProps<SVGSVGElement>) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-foreground" {...props}>
            <ellipse cx="12" cy="5" rx="9" ry="3" />
            <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
            <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        </svg>
    ),
    supabase: (props: React.HTMLAttributes<HTMLImageElement>) => <IconImage src="/skills/supabase.svg" alt="Supabase" {...props} />,
    firebase: (props: React.HTMLAttributes<HTMLImageElement>) => <IconImage src="/skills/firebase.svg" alt="Firebase" {...props} />,
    tensorflow: (props: React.HTMLAttributes<HTMLImageElement>) => <IconImage src="/skills/tensorflow.svg" alt="TensorFlow" {...props} />,
    betterauth: (props: React.HTMLAttributes<HTMLImageElement>) => <span className="font-bold text-xs">BA</span>,

    // Tools
    git: (props: React.HTMLAttributes<HTMLImageElement>) => <IconImage src="/skills/git.svg" alt="Git" {...props} />,
    github: (props: React.HTMLAttributes<HTMLImageElement>) => <IconImage src="/skills/github.svg" alt="GitHub" className="dark:invert" {...props} />,
    docker: (props: React.HTMLAttributes<HTMLImageElement>) => <IconImage src="/skills/docker.svg" alt="Docker" {...props} />,
    vscode: (props: React.HTMLAttributes<HTMLImageElement>) => <IconImage src="/skills/visualstudiocode.svg" alt="VS Code" {...props} />,
    postman: (props: React.HTMLAttributes<HTMLImageElement>) => <IconImage src="/skills/postman.svg" alt="Postman" {...props} />,
    figma: (props: React.HTMLAttributes<HTMLImageElement>) => <IconImage src="/skills/figma.svg" alt="Figma" {...props} />,
    adobexd: (props: React.HTMLAttributes<HTMLImageElement>) => <IconImage src="/skills/adobexd.svg" alt="Adobe XD" {...props} />,
    vercel: (props: React.HTMLAttributes<HTMLImageElement>) => <IconImage src="/skills/vercel.png" alt="Vercel" className="dark:invert" {...props} />,
    cursor: (props: React.HTMLAttributes<HTMLImageElement>) => <span className="font-bold text-xs">C</span>,
    antigravity: (props: React.HTMLAttributes<HTMLImageElement>) => <span className="font-bold text-xs">AG</span>,
};

export const SKILL_CATEGORIES = {
    FRONTEND: [
        { icon: Icons.react, label: "React", slug: "react" },
        { icon: Icons.next, label: "Next.js", slug: "nextdotjs" },
        { icon: Icons.typescript, label: "TypeScript", slug: "typescript" },
        { icon: Icons.javascript, label: "JavaScript", slug: "javascript" },
        { icon: Icons.html, label: "HTML5", slug: "html5" },
        { icon: Icons.css, label: "CSS3", slug: "css3" },
        { icon: Icons.tailwind, label: "Tailwind", slug: "tailwindcss" },
        { icon: Icons.threejs, label: "Three.js", slug: "threejs" },
        { icon: Icons.gsap, label: "GSAP", slug: "gsap" },
    ],
    BACKEND: [
        { icon: Icons.node, label: "Node.js", slug: "nodedotjs" },
        { icon: Icons.express, label: "Express", slug: "express" },
        { icon: Icons.python, label: "Python", slug: "python" },
        { icon: Icons.django, label: "Django", slug: "django" },
        { icon: Icons.java, label: "Java", slug: "java" },
        { icon: Icons.cpp, label: "C++", slug: "cplusplus" },
        { icon: Icons.c, label: "C", slug: "c" },
        { icon: Icons.sql, label: "SQL", slug: "sql" },
        { icon: Icons.postgres, label: "PostgreSQL", slug: "postgresql" },
        { icon: Icons.mongodb, label: "MongoDB", slug: "mongodb" },
        { icon: Icons.mongoose, label: "Mongoose", slug: "mongoose" },
        { icon: Icons.supabase, label: "Supabase", slug: "supabase" },
        { icon: Icons.firebase, label: "Firebase", slug: "firebase" },
        { icon: Icons.betterauth, label: "Better Auth", slug: "betterauth" },
        { icon: Icons.tensorflow, label: "TensorFlow", slug: "tensorflow" },
    ],
    TOOLS: [
        { icon: Icons.git, label: "Git", slug: "git" },
        { icon: Icons.github, label: "GitHub", slug: "github" },
        { icon: Icons.docker, label: "Docker", slug: "docker" },
        { icon: Icons.vscode, label: "VS Code", slug: "visualstudiocode" },
        { icon: Icons.postman, label: "Postman", slug: "postman" },
        { icon: Icons.figma, label: "Figma", slug: "figma" },
        { icon: Icons.adobexd, label: "Adobe XD", slug: "adobexd" },
        { icon: Icons.vercel, label: "Vercel", slug: "vercel" },
        { icon: Icons.cursor, label: "Cursor", slug: "cursor" },
        { icon: Icons.antigravity, label: "Antigravity", slug: "antigravity" },
    ]
};
