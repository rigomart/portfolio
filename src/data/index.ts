export const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/rigomart",
  },
  {
    name: "X (Twitter)",
    href: "https://x.com/rigomart",
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
  imageSrc: string;
  imageWidth: number;
  imageHeight: number;
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
      "Pronunciation learning tool that combines grapheme‑to‑phoneme transcription, an interactive IPA chart, and phoneme contrast guidance in a single responsive workspace, backed by a typed phonetics data package.",
    imageSrc: "/project-placeholder.svg",
    imageWidth: 1200,
    imageHeight: 675,
    tech: ["Next.js", "Tailwind CSS", "shadcn/ui", "TanStack Query", "Redis"],
    links: {
      repo: "https://github.com/rigomart/phonaria",
      demo: "https://phonaria.rigos.dev",
    },
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
  highlights: string[];
  tags: string[];
  stack: string[];
};

export const experiences: Experience[] = [
  {
    title: "Front-End Architect",
    company: "Sofftek - Pacifico Seguros",
    period: {
      start: "Nov 2024",
      end: "Jul 2025",
    },
    highlights: [
      "Promoted to Architect to lead the firm’s first Microfrontend initiative using Module Federation, migrating the host to Rsbuild and decoupling features to enable parallel team deployments.",
      "Designed a data-driven modernization strategy using forensic code analysis (Code Maat) to identify 'hotspots' and temporal coupling, prioritizing high-churn refactors.",
      "Enforced strict TypeScript standards and eliminated 'god files', while managing React 19 / Tailwind 4 upgrades across the platform without disrupting ongoing sprint delivery.",
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
    title: "Senior Front-End Developer",
    company: "Atlantic City",
    period: {
      start: "Dec 2022",
      end: "Nov 2023",
    },
    highlights: [
      "Led the full-stack migration of core financial modules (Payments, Deposits, Balances, Bonuses) from legacy CMS to Next.js, coordinating on-site with vendor teams in Madrid.",
      "Initiated the transition from Pages Router to App Router to resolve structural performance bottlenecks, establishing a foundation that improved developer velocity.",
      "Scaled the frontend practice from 4 to 10+ engineers by implementing DevOps workflows (Azure DevOps pipelines, Gitflow), strict TypeScript standards, and centralized Docusaurus documentation.",
    ],
    tags: ["Leadership", "Migration", "DevOps", "Scaling"],
    stack: ["Next.js", "TypeScript", "Azure DevOps", "Tailwind CSS"],
  },
];
