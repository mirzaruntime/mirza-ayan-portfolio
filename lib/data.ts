// ─────────────────────────────────────────────────────────────
// All personal content lives here. Anything marked PLACEHOLDER
// should be replaced with your real details before deploying.
// ─────────────────────────────────────────────────────────────

export const profile = {
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
  location: "PLACEHOLDER — City, Country",
  email: "you@example.com", // PLACEHOLDER
  github: "https://github.com/your-username", // PLACEHOLDER
  linkedin: "https://linkedin.com/in/your-username", // PLACEHOLDER
  resumeUrl: "#", // PLACEHOLDER — add /resume.pdf to /public and point here
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
  skills: { name: string; level: number }[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    label: "Frontend",
    eyebrow: "Interfaces",
    skills: [
      { name: "HTML / CSS", level: 92 },
      { name: "JavaScript", level: 88 },
      { name: "TypeScript", level: 78 },
      { name: "React", level: 85 },
      { name: "Next.js", level: 80 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Framer Motion", level: 75 },
      { name: "Shadcn UI", level: 78 },
      { name: "Three.js", level: 55 },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    eyebrow: "Systems",
    skills: [
      { name: "Node.js", level: 80 },
      { name: "Express", level: 78 },
      { name: "MongoDB", level: 76 },
      { name: "Prisma", level: 65 },
      { name: "Supabase", level: 72 },
      { name: "REST APIs", level: 82 },
      { name: "Authentication", level: 74 },
    ],
  },
  {
    id: "ai",
    label: "AI",
    eyebrow: "Intelligence",
    skills: [
      { name: "OpenAI API", level: 78 },
      { name: "Prompt Engineering", level: 80 },
      { name: "AI Automation", level: 70 },
      { name: "Generative AI", level: 68 },
      { name: "LLMs", level: 70 },
      { name: "Agentic AI", level: 55 },
      { name: "Python", level: 65 },
    ],
  },
  {
    id: "tools",
    label: "Tools",
    eyebrow: "Workflow",
    skills: [
      { name: "Git / GitHub", level: 88 },
      { name: "VS Code", level: 95 },
      { name: "Postman", level: 80 },
      { name: "Figma", level: 70 },
      { name: "Vercel", level: 85 },
      { name: "Railway", level: 70 },
      { name: "Stripe", level: 68 },
    ],
  },
];

export type Project = {
  id: string;
  title: string;
  category: "Ecommerce" | "AI" | "Frontend";
  description: string;
  tags: string[];
  highlights: string[];
  liveUrl: string;
  githubUrl: string;
  accent: "cyan" | "purple" | "blue";
};

export const projects: Project[] = [
  {
    id: "aura",
    title: "AURA — Premium Clothing Store",
    category: "Ecommerce",
    description:
      "A luxury fashion ecommerce experience with a full checkout flow, wishlist, and editorial-grade animation on every page.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Stripe", "Supabase", "SEO"],
    highlights: [
      "Stripe-powered checkout & payments",
      "Wishlist with persisted state",
      "Luxury motion design & micro-interactions",
      "Fully responsive, SEO-optimized",
    ],
    liveUrl: "#", // PLACEHOLDER — add live demo link
    githubUrl: "#", // PLACEHOLDER — add repo link
    accent: "cyan",
  },
  {
    id: "aifashion",
    title: "AIFashion",
    category: "AI",
    description:
      "An AI-driven fashion recommendation platform built around a personality-style quiz and mood-based shopping.",
    tags: ["React", "AI Recommendations", "Ecommerce UI"],
    highlights: [
      "Style DNA onboarding quiz",
      "AI-generated outfit recommendations",
      "Shop-by-mood browsing experience",
    ],
    liveUrl: "#",
    githubUrl: "#",
    accent: "purple",
  },
  {
    id: "shoe-store",
    title: "Shoe Ecommerce Store",
    category: "Ecommerce",
    description:
      "A modern sneaker storefront focused on fast browsing, clean product pages, and a polished cart experience.",
    tags: ["React", "Ecommerce", "Responsive UI"],
    highlights: [
      "Product filtering & variant selection",
      "Cart & checkout flow",
      "Mobile-first responsive layout",
    ],
    liveUrl: "#",
    githubUrl: "#",
    accent: "blue",
  },
  {
    id: "clothing-ecommerce",
    title: "Clothing Ecommerce",
    category: "Ecommerce",
    description:
      "A general-purpose apparel storefront exploring layout, catalog structure, and conversion-focused UI patterns.",
    tags: ["React", "Ecommerce", "UI/UX"],
    highlights: [
      "Category-based catalog browsing",
      "Reusable product card system",
      "Clean, conversion-focused layout",
    ],
    liveUrl: "#",
    githubUrl: "#",
    accent: "cyan",
  },
];

export type Service = {
  id: string;
  title: string;
  description: string;
  points: string[];
};

export const services: Service[] = [
  {
    id: "frontend",
    title: "Frontend Development",
    description:
      "Premium, high-performance interfaces built with React and Next.js — the kind that make people stop scrolling.",
    points: ["Responsive UI systems", "Motion & micro-interactions", "Accessibility built in"],
  },
  {
    id: "backend",
    title: "Backend Development",
    description:
      "Robust APIs and data layers using Node.js, Express, and MongoDB, built to scale with your product.",
    points: ["REST API design", "Authentication & authorization", "Database architecture"],
  },
  {
    id: "ai",
    title: "AI Integration",
    description:
      "Practical AI features — recommendations, assistants, and automation — powered by modern LLM APIs.",
    points: ["OpenAI API integration", "Prompt engineering", "Agentic workflows"],
  },
  {
    id: "automation",
    title: "Automation & Consulting",
    description:
      "Streamlining repetitive workflows and advising on how AI can fit into your existing product.",
    points: ["Workflow automation", "Technical consulting", "Rapid prototyping"],
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
