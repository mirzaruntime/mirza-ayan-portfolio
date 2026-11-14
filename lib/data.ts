// ─────────────────────────────────────────────────────────────
// All personal content lives here. Anything marked PLACEHOLDER
// should be replaced with your real details before deploying.
// ─────────────────────────────────────────────────────────────

type Profile = {
  name: string;
  roles: string[];
  mission: string;
  email: string;
  github: string;
  resumeUrl?: string;
};

export const profile: Profile = {
  name: "Mirza Ayan Baig",
  roles: [
    "AI Engineer (Aspiring)",
    "Full Stack MERN Developer",
    "Frontend Developer",
    "Generative AI Learner",
    "Agentic AI Learner",
  ],
  mission:
    "My goal is to become an AI Engineer while building world-class, AI-powered web applications.",
  email: "ayanmirza.dev@gmail.com",
  github: "https://github.com/mirzaruntime",
  resumeUrl: "/resume.pdf",
};

export const learning = [
  "JavaScript",
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Express",
  "MongoDB",
  "Python",
  "Generative AI",
  "Agentic AI",
  "Prompt Engineering",
  "AI APIs",
  "OpenAI",
  "Supabase",
];

export type SkillCategory = {
  id: string;
  label: string;
  eyebrow: string;
  skills: Skill[];
};

export type Skill = {
  name: string;
  percentage: number;
};

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    label: "Frontend Development",
    eyebrow: "Interfaces",
    skills: [
      { name: "HTML", percentage: 92 },
      { name: "CSS", percentage: 90 },
      { name: "JavaScript", percentage: 90 },
      { name: "TypeScript", percentage: 82 },
      { name: "React", percentage: 88 },
      { name: "Next.js", percentage: 85 },
      { name: "Tailwind CSS", percentage: 92 },
    ],
  },
  {
    id: "backend",
    label: "Backend Development",
    eyebrow: "Systems",
    skills: [
      { name: "Node.js", percentage: 85 },
      { name: "Express.js", percentage: 83 },
      { name: "REST APIs", percentage: 87 },
      { name: "JWT Authentication", percentage: 80 },
      { name: "Mongoose", percentage: 82 },
      { name: "Zod", percentage: 80 },
    ],
  },
  {
    id: "databases",
    label: "Databases",
    eyebrow: "Data",
    skills: [
      { name: "MongoDB", percentage: 82 },
      { name: "PostgreSQL", percentage: 78 },
      { name: "Supabase", percentage: 82 },
      { name: "MySQL", percentage: 80 },
    ],
  },
  {
    id: "integrations",
    label: "APIs & Integrations",
    eyebrow: "Integrations",
    skills: [
      { name: "Gemini API", percentage: 82 },
      { name: "AI Integration", percentage: 82 },
      { name: "Stripe", percentage: 76 },
    ],
  },
  {
    id: "tools",
    label: "Tools & Other Technologies",
    eyebrow: "Workflow",
    skills: [
      { name: "Git", percentage: 85 },
      { name: "GitHub", percentage: 88 },
      { name: "VS Code", percentage: 95 },
      { name: "Postman", percentage: 85 },
      { name: "Vercel", percentage: 88 },
      { name: "Figma", percentage: 78 },
      { name: "PHP", percentage: 80 },
      { name: "Python", percentage: 75 },
    ],
  },
];

export type ProjectCategory = "E-commerce" | "Full Stack" | "AI";

export type Project = {
  id: string;
  title: string;
  categories: ProjectCategory[];
  description: string;
  tags: string[];
  highlights: string[];
  caseStudy?: {
    overview: string;
    integrationDetails?: string;
  };
  liveUrl?: string;
  githubUrl?: string;
  accent: "cyan" | "purple" | "blue";
};

export const projects: Project[] = [
  {
    id: "aura",
    title: "AURA Studio",
    categories: ["E-commerce"],
    description:
      "A premium fashion storefront for product discovery, with product details and variants, a shopping cart, Supabase integration, and Stripe checkout session creation.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Stripe", "Supabase"],
    highlights: [
      "Premium fashion storefront and product discovery",
      "Product details and variants",
      "Shopping cart",
      "Supabase integration",
      "Stripe checkout session creation",
    ],
    accent: "cyan",
  },
  {
    id: "clauseguard",
    title: "ClauseGuard",
    categories: ["Full Stack", "AI"],
    description:
      "An AI-powered contract obligation management platform that analyzes contracts, identifies key obligations, and generates AI-assisted insights to help users manage contractual responsibilities.",
    tags: [
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "Grok AI API",
      "Zod",
    ],
    highlights: [
      "AI-powered contract analysis using Grok AI.",
      "Automated identification and extraction of contractual obligations.",
      "AI-generated suggestions with confidence indicators.",
      "Contract and obligation management.",
      "REST API-based backend architecture.",
      "Structured validation using Zod.",
    ],
    caseStudy: {
      overview:
        "ClauseGuard is a full-stack contract management application that uses Grok AI to analyze contracts and identify important contractual obligations. It helps users understand contract requirements, extract obligations, review AI-generated suggestions, and manage important responsibilities through an organized interface.",
      integrationDetails:
        "The Grok AI integration is functional end-to-end. It powers contract analysis, obligation identification, and AI-generated suggestions with confidence indicators.",
    },
    accent: "purple",
  },
];

export type ExperienceEntry = {
  role: string;
  company: string;
  location: string;
  duration: string;
  internship: string;
  technologies: string[];
  description: string;
};

export const experiences: ExperienceEntry[] = [
  {
    role: "Backend Developer Intern",
    company: "Bhupati Softwares Private Limited",
    location: "Akola, Maharashtra",
    duration: "June 2025 – July 2025",
    internship: "150-hour Backend Development Internship",
    technologies: ["PHP", "MySQL", "XAMPP"],
    description:
      "Completed a 150-hour Backend Development Internship focused on PHP and MySQL. Gained practical exposure to backend development, database management, and working with a local development environment using XAMPP.",
  },
];

export const personality = [
  "Curious",
  "Creative",
  "Problem Solver",
  "Continuous Learner",
  "Clean Code Advocate",
  "Detail Oriented",
  "Performance Focused",
  "Modern UI Enthusiast",
];
