import Image from "next/image";

export default function Home() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-16 sm:py-24">
      {/* Header */}
      <header className="mb-12">
        <h1 className="text-2xl font-medium tracking-tight">Your Name</h1>
        <p className="mt-1 text-muted">Software Engineer</p>
      </header>

      {/* About */}
      <section className="mb-12">
        <p className="text-foreground/90 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente at
          nisi harum praesentium deserunt a accusamus quia ducimus incidunt
          beatae, libero assumenda recusandae nesciunt repellat dolorum atque,
          error fugit vero.
        </p>
      </section>

      {/* Projects */}
      <section className="mb-12">
        <h2 className="mb-6 text-sm font-medium uppercase tracking-wide text-muted">
          Projects
        </h2>
        <div className="space-y-6">
          <ProjectCard
            title="Project One"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            image="/project-placeholder.svg"
            tech={["React", "TypeScript", "Node.js"]}
            href="https://github.com/you/project"
          />
          <ProjectCard
            title="Project Two"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            image="/project-placeholder.svg"
            tech={["Next.js", "PostgreSQL", "Tailwind"]}
            href="https://github.com/you/project"
          />
          <ProjectCard
            title="Project Three"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            image="/project-placeholder.svg"
            tech={["Python", "FastAPI", "Redis"]}
            href="https://github.com/you/project"
          />
        </div>
      </section>

      {/* Experience */}
      <section className="mb-12">
        <h2 className="mb-6 text-sm font-medium uppercase tracking-wide text-muted">
          Experience
        </h2>
        <div className="relative border-l border-border pl-6">
          <ExperienceItem
            title="Senior Engineer"
            company="Company Name"
            period="2022 – Present"
            description="Led development of core platform features. Mentored junior engineers and established code review practices."
          />
          <ExperienceItem
            title="Software Engineer"
            company="Previous Co"
            period="2019 – 2022"
            description="Built and maintained customer-facing APIs. Improved system performance and reduced latency by 40%."
          />
          <ExperienceItem
            title="Junior Developer"
            company="First Job Inc"
            period="2017 – 2019"
            description="Developed internal tools and contributed to frontend features. Learned production-grade development practices."
            isLast
          />
        </div>
      </section>

      {/* Links */}
      <section>
        <h2 className="mb-4 text-sm font-medium uppercase tracking-wide text-muted">
          Links
        </h2>
        <div className="flex gap-6 text-sm">
          <a
            href="mailto:you@email.com"
            className="transition-colors hover:text-foreground"
          >
            Email
          </a>
          <a
            href="https://github.com/you"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/you"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground"
          >
            LinkedIn
          </a>
        </div>
      </section>
    </main>
  );
}

function ProjectCard({
  title,
  description,
  image,
  tech,
  href,
}: {
  title: string;
  description: string;
  image: string;
  tech: string[];
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block overflow-hidden rounded-lg border border-border bg-surface transition-colors hover:border-muted"
    >
      <div className="relative aspect-video overflow-hidden bg-surface-inset">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover opacity-90 transition-opacity group-hover:opacity-100"
        />
      </div>
      <div className="p-4">
        <h3 className="font-medium transition-colors group-hover:text-accent">
          {title}
        </h3>
        <p className="mt-1 text-sm leading-relaxed text-muted">{description}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {tech.map((t) => (
            <span
              key={t}
              className="rounded bg-surface-hover px-2 py-0.5 text-xs text-muted"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}

function ExperienceItem({
  title,
  company,
  period,
  description,
  isLast = false,
}: {
  title: string;
  company: string;
  period: string;
  description: string;
  isLast?: boolean;
}) {
  return (
    <div className={`relative ${isLast ? "" : "pb-6"}`}>
      {/* Timeline dot */}
      <div className="absolute -left-6 top-1.5 size-2 rounded-full bg-muted" />

      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
        <div>
          <span className="font-medium">{title}</span>
          <span className="mx-2 text-muted">·</span>
          <span className="text-muted">{company}</span>
        </div>
        <span className="shrink-0 text-sm text-muted">{period}</span>
      </div>
      <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
    </div>
  );
}
