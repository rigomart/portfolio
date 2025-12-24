export type Project = {
  title: string;
  description: string;
  imageSrc: string;
  imageWidth: number;
  imageHeight: number;
  tech: string[];
  href: string;
};

export const projects: Project[] = [
  {
    title: "Phonaria",
    description:
      "Pronunciation learning tool that combines grapheme‑to‑phoneme transcription, an interactive IPA chart, and phoneme contrast guidance in a single responsive workspace, backed by a typed phonetics data package.",
    imageSrc: "/project-placeholder.svg",
    imageWidth: 1200,
    imageHeight: 675,
    tech: [
      "Next.js",
      "Tailwind CSS",
      "shadcn/ui",
      "TanStack Query",
      "Redis",
      "Turborepo",
    ],
    href: "https://github.com/rigomart/phonaria",
  },
  {
    title: "Planteria",
    description:
      "AI planning app for developers that turns product ideas into structured, shippable plans with strict criteria and realtime syncing. Includes a read‑only MCP server for integration with any AI agent.",
    imageSrc: "/project-placeholder.svg",
    imageWidth: 1200,
    imageHeight: 675,
    tech: [
      "Next.js",
      "Convex",
      "OpenAI SDK",
      "Better Auth",
      "MCP",
      "Firecrawl",
    ],
    href: "https://github.com/rigomart/planteria",
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
    title: "Front-End Architect",
    company: "Sofftek - Pacifico Seguros",
    period: {
      start: "2024",
      end: "2025",
    },
    highlights: [
      "Led the company’s first microfrontend initiative (Module Federation) and cross-team coordination.",
      "Owned frontend delivery and modernization (linting, types, refactoring) alongside production support.",
      "Shipped critical migrations: React 19, Tailwind 4, and Rsbuild.",
    ],
    tags: ["Microfrontends", "Modernization", "Architecture", "CI/CD"],
    stack: [
      "React",
      "Rsbuild",
      "TanStack Query & Router",
      "Tailwind CSS",
      "Module Federation",
    ],
  },
  {
    title: "Senior Front-End Developer",
    company: "Atlantic City",
    period: {
      start: "2022",
      end: "2023",
    },
    highlights: [
      "Drove platform improvements: Next.js Pages → App Router, Azure DevOps pipelines, and internal docs.",
      "Helped scale the frontend team by introducing branching workflows and engineering standards.",
      "Shipped core product flows (payments, registration) during a legacy CMS to Next.js migration.",
    ],
    tags: ["Next.js", "Migration", "DevOps", "Documentation"],
    stack: ["Next.js", "Tailwind CSS", "Azure DevOps", "Docusaurus"],
  },
];
