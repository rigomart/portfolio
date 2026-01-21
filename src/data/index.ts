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
    title: "Phonaria",
    description:
      "Collection of tools to understand pronunciation. Consolidates IPA transcription, interactive charts, minimal pairs, contrasts, and dictionary lookup. Optimized for instant feedback through layered data sources and smart caching.",
    imageSrc: phonariaImage,
    tech: ["Next.js", "TanStack Query", "Redis", "Server Actions", "Drizzle", "Neon"],
    links: {
      repo: "https://github.com/rigomart/phonaria",
      demo: "https://phonaria.rigos.dev",
    },
  },
  {
    title: "Planteria",
    description:
      "AI planning tool that turns product ideas into structured plans with built-in guardrails against scope creep. Uses Firecrawl for research before generating with OpenAI. Also published an MCP server npm package so external AI agents can query plans.",
    imageSrc: planteriaImage,
    tech: [
      "Next.js",
      "Convex",
      "OpenAI SDK",
      "Better Auth",
      "MCP",
      "Firecrawl",
    ],
    links: {
      repo: "https://github.com/rigomart/planteria",
      demo: "https://planteria-web.vercel.app/",
    },
  },
  {
    title: "Deppulse",
    description:
      "Maintenance analyzer that scores repos 0-100 based on commits, issue response times, releases, and community activity. No signup required, instant results with aggressive caching.",
    imageSrc: deppulseImage,
    tech: ["Next.js", "Server Actions", "Github API", "Drizzle", "Neon"],
    links: {
      repo: "https://github.com/rigomart/deppulse",
      demo: "https://deppulse.rigos.dev",
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
  highlights: string[];
  tags: string[];
  stack: string[];
};

export const experiences: Experience[] = [
  {
    title: "Frontend Architect",
    company: "Softtek - Pacífico Seguros",
    period: {
      start: "Nov 2024",
      end: "Jul 2025",
    },
    highlights: [
      "Led the company's first microfrontend initiative using Module Federation for Peru's second largest insurer, enabling independent deployments across 4 teams.",
      "Created parallel legacy/modern structure using strangler fig pattern, allowing incremental refactoring without blocking releases.",
      "Promoted after building internal tooling to analyze churn, complexity, and coupling, driving data-informed prioritization.",
    ],
    tags: ["Architecture", "Microfrontends", "Code Forensics", "DX"],
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
    highlights: [
      "Led migration from legacy CMS to Next.js for Peru's largest online casino, rebuilding critical modules from scratch after inheriting incomplete work from external agency.",
      "Led Next.js Pages → App Router migration and established Azure DevOps CI/CD pipelines, reducing manual deployments and standardizing release process.",
      "Scaled frontend team from 3 to 9+ engineers, conducting interviews, redesigning selection process, and documenting standards and workflows.",
    ],
    tags: ["Leadership", "Migration", "DevOps", "Scaling"],
    stack: ["Next.js", "TypeScript", "Azure DevOps", "Tailwind CSS"],
  },
];
