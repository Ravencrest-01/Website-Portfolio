
import React from "react";

// --- Icons (SVGs) ---
export const Icons = {
    // Languages
    python: (props: React.SVGProps<SVGSVGElement>) => (
        <svg viewBox="0 0 24 24" fill="none" {...props}>
            <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z" fill="currentColor" className="opacity-20" />
            <path d="M10 8V6H14V8H16V12H14V10H10V14H8V10H10Z" fill="currentColor" />
        </svg>
    ),
    javascript: (props: React.SVGProps<SVGSVGElement>) => (
        <svg viewBox="0 0 24 24" fill="none" {...props}>
            <rect x="2" y="2" width="20" height="20" rx="4" fill="#F7DF1E" />
            <path d="M16.5 16V13.5H15V14.5H16.5V16H18V13H16.5C15.5 13 15 13.5 15 14.5V16H16.5ZM11 16V12H9.5V16H11Z" fill="#000" />
        </svg>
    ),
    typescript: (props: React.SVGProps<SVGSVGElement>) => (
        <svg viewBox="0 0 24 24" fill="none" {...props}>
            <rect x="2" y="2" width="20" height="20" rx="4" fill="#3178C6" />
            <path d="M10 16V12H6V10H14V12H12V16H10Z" fill="white" />
            <path d="M18 16V13.5C18 12.5 17.5 12 16.5 12H15V13H16.5V14H15V14.5C15 15.5 15.5 16 16.5 16H18Z" fill="white" />
        </svg>
    ),
    java: (props: React.SVGProps<SVGSVGElement>) => (
        <svg viewBox="0 0 24 24" fill="none" {...props}>
            <path d="M4.53 18.23C4.53 18.23 8.36 21.03 14.75 19.33C14.75 19.33 13.43 18.89 11.2 18.96C8.83 19.03 4.53 18.23 4.53 18.23ZM13.88 17.07C13.88 17.07 16.89 16.63 17.47 14.17C17.47 14.17 17.7 15.69 13.88 17.07ZM14.04 8.78C14.04 8.78 12.87 9.17 11.5 12.35C11.5 12.35 15.89 10.3 14.04 8.78ZM9.16 12.5C9.16 12.5 12.01 13.35 13.62 16.73C13.62 16.73 11 16.96 6.55 13.64C6.55 13.63 7.84 13.06 9.16 12.5Z" fill="#5382A1" />
        </svg>
    ),
    cpp: (props: React.SVGProps<SVGSVGElement>) => (
        <svg viewBox="0 0 24 24" fill="none" {...props}>
            <path d="M11 7C11 7 7 7 7 12C7 17 11 17 11 17M15 9V11H13V13H15V15H17V13H19V11H17V9H15ZM21 9V11H19V13H21V15H23V13H25V11H23V9H21Z" stroke="#00599C" strokeWidth="2" />
        </svg>
    ),
    c: (props: React.SVGProps<SVGSVGElement>) => (
        <svg viewBox="0 0 24 24" fill="none" {...props}>
            <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z" fill="#A8B9CC" />
            <path d="M14 8C14 8 10 9 10 12C10 15 14 16 14 16" stroke="white" strokeWidth="2" />
        </svg>
    ),

    // Frameworks
    react: (props: React.SVGProps<SVGSVGElement>) => (
        <svg viewBox="0 0 24 24" fill="none" {...props}>
            <ellipse cx="12" cy="12" rx="3" ry="8" transform="rotate(-45 12 12)" stroke="#61DAFB" strokeWidth="1.5" />
            <ellipse cx="12" cy="12" rx="3" ry="8" transform="rotate(45 12 12)" stroke="#61DAFB" strokeWidth="1.5" />
            <circle cx="12" cy="12" r="2" fill="#61DAFB" />
        </svg>
    ),
    next: (props: React.SVGProps<SVGSVGElement>) => (
        <svg viewBox="0 0 24 24" fill="none" {...props}>
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="currentColor" />
            <path d="M8 8V16" stroke="CurrentColor" strokeWidth="1.5" className="text-white dark:text-black" />
            <path d="M16 16V8" stroke="CurrentColor" strokeWidth="1.5" className="text-white dark:text-black" />
            <path d="M8 8L16 16" stroke="CurrentColor" strokeWidth="1.5" className="text-white dark:text-black" />
        </svg>
    ),
    node: (props: React.SVGProps<SVGSVGElement>) => (
        <svg viewBox="0 0 24 24" fill="none" {...props}>
            <path d="M12 2L4 6.5V17.5L12 22L20 17.5V6.5L12 2Z" fill="#339933" className="opacity-20" />
            <path d="M12 22V6.5" stroke="#339933" strokeWidth="1.5" />
            <path d="M20 6.5L12 11L4 6.5" stroke="#339933" strokeWidth="1.5" />
        </svg>
    ),
    express: (props: React.SVGProps<SVGSVGElement>) => (
        <svg viewBox="0 0 24 24" fill="none" {...props}>
            <path d="M4 12C4 12 6 8 8 8C10 8 12 10 12 12C12 14 10 16 8 16C6 16 4 12 4 12ZM14 16H20V14H16V13H20V11H16V10H20V8H14V16Z" fill="currentColor" />
        </svg>
    ),
    django: (props: React.SVGProps<SVGSVGElement>) => (
        <svg viewBox="0 0 24 24" fill="none" {...props}>
            <rect x="2" y="5" width="20" height="14" rx="2" fill="#092E20" />
            <path d="M7 15V9H9V15H7ZM11 15V9H13V15H11ZM15 15V13H17V15H15Z" fill="white" />
        </svg>
    ),
    tensorflow: (props: React.SVGProps<SVGSVGElement>) => (
        <svg viewBox="0 0 24 24" fill="none" {...props}>
            <path d="M11.66 2.05L10.37 8.34H6.55L7.84 2.05H11.66ZM17.34 2.05L16.05 8.34H12.23L13.52 2.05H17.34ZM19.23 8.35L17.95 14.63H14.13L15.41 8.35H19.23ZM13.53 8.35L12.25 14.63H8.43L9.71 8.35H13.53ZM7.83 8.35L6.55 14.63H2.73L4.01 8.35H7.83ZM14.86 14.64L13.58 20.93H9.76L11.04 14.64H14.86Z" fill="#FF6F00" />
        </svg>
    ),
    mongoose: (props: React.SVGProps<SVGSVGElement>) => (
        <svg viewBox="0 0 24 24" fill="none" {...props}>
            <path d="M3 3H21V21H3V3Z" fill="none" />
            <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" fill="#880000" className="opacity-20" />
            <path d="M12 20C12 20 16 16 16 10C16 4 8 4 8 10C8 16 12 20 12 20Z" stroke="#880000" strokeWidth="2" strokeLinejoin="round" />
        </svg>
    ),

    // Tools
    git: (props: React.SVGProps<SVGSVGElement>) => (
        <svg viewBox="0 0 24 24" fill="none" {...props}>
            <path d="M22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12Z" fill="#F05032" className="opacity-10" />
            <path d="M15 11L12 8L9 11M12 8V16" stroke="#F05032" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    ),
    github: (props: React.SVGProps<SVGSVGElement>) => (
        <svg viewBox="0 0 24 24" fill="none" {...props}>
            <path d="M12 2C6.477 2 2 6.484 2 12.017C2 16.441 5.865 20.194 9.839 21.516C10.339 21.608 10.522 21.299 10.522 21.033C10.522 20.793 10.513 20.157 10.508 19.313C6.756 20.134 5.964 17.502 5.964 17.502C5.509 16.344 4.852 16.036 4.852 16.036C3.628 15.197 4.945 15.214 4.945 15.214C6.301 15.309 7.014 16.608 7.014 16.608C8.217 18.675 10.171 18.078 10.941 17.732C11.063 16.858 11.413 16.262 11.8 15.924C8.806 15.583 5.66 14.426 5.66 9.259C5.66 7.787 6.186 6.585 7.039 5.649C6.897 5.309 6.433 3.936 7.171 2.067C7.171 2.067 8.304 1.704 10.883 3.454C11.96 3.154 13.116 3.005 14.27 3.005C15.424 3.005 16.58 3.154 17.658 3.454C20.236 1.704 21.368 2.067 21.368 2.067C22.107 3.936 21.644 5.309 21.503 5.649C22.358 6.585 22.883 7.787 22.883 9.259C22.883 14.437 19.734 15.58 16.732 15.914C17.225 16.339 17.665 17.178 17.665 18.463C17.665 20.303 17.649 21.782 17.649 21.033C17.649 21.303 17.83 21.616 18.337 21.516C22.308 20.192 26.172 16.441 26.172 12.017C26.172 6.484 21.695 2 16.172 2H12Z" fill="currentColor" />
        </svg>
    ),
    docker: (props: React.SVGProps<SVGSVGElement>) => (
        <svg viewBox="0 0 24 24" fill="none" {...props}>
            <path d="M4 10H6V12H4V10ZM8 10H10V12H8V10ZM12 10H14V12H12V10ZM4 14H6V16H4V14ZM8 14H10V16H8V14ZM12 14H14V16H12V14ZM16 14H18V16H16V14ZM4 18H6V20H4V18ZM8 18H10V20H8V18ZM12 18H14V20H12V18ZM16 18H18V20H16V18ZM20 18H22V20H20V18ZM2 22V8H22V22H2Z" fill="#2496ED" />
        </svg>
    ),
    vscode: (props: React.SVGProps<SVGSVGElement>) => (
        <svg viewBox="0 0 24 24" fill="none" {...props}>
            <path d="M4 4L14 12L4 20" stroke="#007ACC" strokeWidth="2" strokeLinejoin="round" />
            <path d="M14 12L21 21V3L14 12Z" fill="#007ACC" fillOpacity="0.2" />
        </svg>
    ),
    postman: (props: React.SVGProps<SVGSVGElement>) => (
        <svg viewBox="0 0 24 24" fill="none" {...props}>
            <circle cx="12" cy="12" r="10" stroke="#FF6C37" strokeWidth="2" />
            <path d="M8 12L12 8L16 12M12 16V8" stroke="#FF6C37" strokeWidth="2" />
        </svg>
    ),
    figma: (props: React.SVGProps<SVGSVGElement>) => (
        <svg viewBox="0 0 24 24" fill="none" {...props}>
            <path d="M6 12C6 12 6 6 12 6C12 6 18 6 18 12C18 18 12 18 12 18C12 18 6 18 6 12Z" stroke="#F24E1E" strokeWidth="2" />
            <circle cx="12" cy="6" r="3" fill="#F24E1E" />
            <circle cx="6" cy="12" r="3" fill="#F24E1E" />
            <circle cx="12" cy="18" r="3" fill="#1ABCFE" />
            <circle cx="18" cy="12" r="3" fill="#A259FF" />
        </svg>
    ),
    firebase: (props: React.SVGProps<SVGSVGElement>) => (
        <svg viewBox="0 0 24 24" fill="none" {...props}>
            <path d="M4 16L12 4L20 16H4Z" fill="#FFCA28" />
            <path d="M12 14L16 6L20 16H12Z" fill="#FFA000" />
        </svg>
    ),
    mongodb: (props: React.SVGProps<SVGSVGElement>) => (
        <svg viewBox="0 0 24 24" fill="none" {...props}>
            <path d="M12 2C12 2 6 8 6 14C6 18 8 20 12 20C16 20 18 18 18 14C18 8 12 2 12 2Z" stroke="#47A248" strokeWidth="1.5" />
            <path d="M12 4V18" stroke="#47A248" strokeWidth="1.5" />
        </svg>
    ),
    postgres: (props: React.SVGProps<SVGSVGElement>) => (
        <svg viewBox="0 0 24 24" fill="none" {...props}>
            <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z" stroke="#336791" strokeWidth="1.5" />
            <path d="M8 12L12 16L16 8" stroke="#336791" strokeWidth="1.5" />
        </svg>
    ),
};

export type SkillItem = {
    icon: React.FC<React.SVGProps<SVGSVGElement>>;
    label: string;
    slug: string;
};

export const SKILL_CATEGORIES = {
    LANGUAGES: [
        { icon: Icons.python, label: "Python", slug: "python" },
        { icon: Icons.javascript, label: "JavaScript", slug: "javascript" },
        { icon: Icons.typescript, label: "TypeScript", slug: "typescript" },
        { icon: Icons.java, label: "Java", slug: "java" },
        { icon: Icons.cpp, label: "C++", slug: "cplusplus" },
        { icon: Icons.c, label: "C", slug: "c" },
    ],
    FRAMEWORKS: [
        { icon: Icons.react, label: "React", slug: "react" },
        { icon: Icons.next, label: "Next.js", slug: "nextdotjs" },
        { icon: Icons.node, label: "Node.js", slug: "nodedotjs" },
        { icon: Icons.express, label: "Express", slug: "express" },
        { icon: Icons.django, label: "Django", slug: "django" },
        { icon: Icons.tensorflow, label: "TensorFlow", slug: "tensorflow" },
        { icon: Icons.mongoose, label: "Mongoose", slug: "mongoose" },
    ],
    TOOLS: [
        { icon: Icons.git, label: "Git", slug: "git" },
        { icon: Icons.github, label: "GitHub", slug: "github" },
        { icon: Icons.docker, label: "Docker", slug: "docker" },
        { icon: Icons.vscode, label: "VS Code", slug: "visualstudiocode" },
        { icon: Icons.postman, label: "Postman", slug: "postman" },
        { icon: Icons.figma, label: "Figma", slug: "figma" },
        { icon: Icons.firebase, label: "Firebase", slug: "firebase" },
        { icon: Icons.mongodb, label: "MongoDB", slug: "mongodb" },
        { icon: Icons.postgres, label: "PostgreSQL", slug: "postgresql" },
    ]
};
