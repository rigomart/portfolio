import type { ImageMetadata } from "astro";
import phonariaImage from "../assets/phonaria-landing.png";
import planteriaImage from "../assets/planteria-landing.png";
import deppulseImage from "../assets/deppulse.png";

export const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/rigomart",
  },
  {
    name: "X (Twitter)",
    href: "https://x.com/rigomart_",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/mrodriguezto/",
  },
  {
    name: "Email",
    href: "mailto:mirdor.dev@gmail.com",
  },
];

export const skills: string[] = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Tailwind CSS",
  "TanStack Query",
  "PostgreSQL",
  "Drizzle",
  "Convex",
  "GraphQL",
  "Module Federation",
  "Turborepo",
  "Azure DevOps",
  "Vercel",
  "Claude Code",
  "MCP",
];

export type Project = {
  title: string;
  description: string;
  imageSrc: ImageMetadata;
  tech: string[];
  links: {
    repo: string;
    demo: string;
  };
};

export const projects: Project[] = [
    {
    title: "Deppulse",
    description:
      "Scores GitHub repos 0–100 based on commits, issue response times, releases, and community activity. No signup, instant results with aggressive caching.",
    imageSrc: deppulseImage,
    tech: ["Next.js", "Cache Components", "Convex", "Github API"],
    links: {
      repo: "https://github.com/rigomart/deppulse",
      demo: "https://deppulse.rigos.dev",
    },
  },
  {
    title: "Phonaria",
    description:
      "Pronunciation toolkit with IPA transcription, interactive phoneme charts, minimal pair drills, and dictionary lookup. Layered caching for instant feedback.",
    imageSrc: phonariaImage,
    tech: ["Next.js", "TanStack Query", "Redis", "Drizzle", "PostgreSQL"],
    links: {
      repo: "https://github.com/rigomart/phonaria",
      demo: "https://phonaria.rigos.dev",
    },
  },
  {
    title: "Planteria",
    description:
      "AI planning tool that turns product ideas into structured plans with strict hierarchy. AI powered generation and iterative adjustments. Real time updates via Convex subscriptions. MCP server for external AI agent integration",
    imageSrc: planteriaImage,
    tech: ["Next.js", "Convex", "OpenAI SDK", "Better Auth", "MCP"],
    links: {
      repo: "https://github.com/rigomart/planteria",
      demo: "https://planteria-web.vercel.app/",
    },
  },
];

export type Experience = {
  title: string;
  company: string;
  period: {
    start: string;
    end: string;
  };
  description: string;
  tags: string[];
  stack: string[];
};

export const experiences: Experience[] = [
  {
    title: "Senior Frontend Developer",
    company: "Softtek - Pacífico Seguros",
    period: {
      start: "Nov 2024",
      end: "Jul 2025",
    },
    description:
      "Led the company's first microfrontend initiative using Module Federation, extracting a reusable flow from a 50k LOC host app and enabling independent deployments across 4 teams. Designed a parallel legacy/modern codebase structure using the strangler fig pattern, and built internal tooling to analyze git history for churn and coupling to drive data-informed refactoring priorities.",
    tags: ["Architecture", "Microfrontends", "Migration", "DX"],
    stack: [
      "React",
      "Rsbuild",
      "Module Federation",
      "TanStack Query",
      "Tailwind CSS",
    ],
  },
  {
    title: "Senior Frontend Developer",
    company: "Atlantic City",
    period: {
      start: "Dec 2022",
      end: "Nov 2024",
    },
    description:
      "Led migration from legacy CMS to Next.js for Peru's largest online casino, rebuilding 8+ core modules from scratch including payments, registration, and user profile. Led Pages to App Router migration, set up Azure DevOps CI/CD pipelines reducing deployment time by ~80%, and scaled the frontend team from 3 to 9+ engineers.",
    tags: ["Leadership", "Migration", "DevOps", "Scaling"],
    stack: ["Next.js", "TypeScript", "Azure DevOps", "Tailwind CSS"],
  },
  {
    title: "Frontend Developer",
    company: "Nexoescena - Ministry of Culture, Peru",
    period: {
      start: "Nov 2021",
      end: "Nov 2022",
    },
    description:
      "Founding frontend developer on a grant-funded platform connecting artists with professional opportunities. Built 9+ core modules from scratch including authentication, multi-step profiles, search, and job listings. Set the frontend technical foundation that other developers continued building on after handoff.",
    tags: ["Greenfield", "GraphQL"],
    stack: ["Next.js", "Material UI", "Redux Toolkit", "GraphQL"],
  },
];
