"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Award, Star } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { isPlaceholder, projectCategories, projects, type Project } from "@/data/portfolio";

type Filter = (typeof projectCategories)[number];

// Deterministic gradient header per project (no screenshots, for a consistent grid).
const gradients = [
  "from-cyan-500/30 via-sky-500/10 to-transparent",
  "from-violet-500/30 via-fuchsia-500/10 to-transparent",
  "from-emerald-500/30 via-teal-500/10 to-transparent",
  "from-amber-500/30 via-orange-500/10 to-transparent",
  "from-rose-500/30 via-pink-500/10 to-transparent",
];

function ProjectVisual({ project, index }: { project: Project; index: number }) {
  const initials = project.title
    .split(/[\s/&]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("");
  return (
    <div className={`absolute inset-0 bg-gradient-to-br ${gradients[index % gradients.length]}`} aria-hidden="true">
      {/* Grid lives on its own layer so it doesn't override the gradient's background-image. */}
      <div className="bg-grid absolute inset-0" />
      <span className="absolute bottom-3 right-4 font-mono text-5xl font-semibold text-fg/10">{initials}</span>
    </div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const links = project.links.filter((l) => !isPlaceholder(l.href));
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-elevated transition-colors hover:border-accent/50">
      <div className="relative aspect-[16/9] overflow-hidden border-b border-border bg-bg">
        <ProjectVisual project={project} index={index} />
        <div className="absolute left-3 top-3 flex flex-wrap gap-2">
          {project.featured && (
            <span className="inline-flex items-center gap-1 rounded-full bg-accent px-2.5 py-1 text-xs font-medium text-accent-fg">
              <Star className="size-3" aria-hidden="true" /> Featured
            </span>
          )}
          {project.status && (
            <span className="rounded-full border border-amber-500/40 bg-bg/80 px-2.5 py-1 text-xs font-medium text-amber-600 backdrop-blur dark:text-amber-400">
              {project.status}
            </span>
          )}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="font-mono text-[11px] uppercase tracking-wider text-subtle">{project.categories.join(" · ")}</p>
        <h3 className="mt-2 text-lg font-semibold">{project.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{project.description}</p>

        {project.badge && (
          <p className="mt-4 inline-flex w-fit items-center gap-1.5 rounded-md border border-accent/30 bg-accent-soft px-2.5 py-1 font-mono text-xs text-accent">
            <Award className="size-3.5" aria-hidden="true" />
            {project.badge}
          </p>
        )}

        <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Tech stack">
          {project.stack.map((tech) => (
            <li key={tech} className="rounded-md border border-border px-2 py-0.5 font-mono text-[11px] text-muted">
              {tech}
            </li>
          ))}
        </ul>

        {links.length > 0 && (
          <div className="mt-auto flex flex-wrap gap-4 pt-5">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-fg transition-colors hover:text-accent"
              >
                {link.kind === "code" ? <FaGithub className="size-4" aria-hidden="true" /> : null}
                {link.label}
                <ArrowUpRight className="size-3.5" aria-hidden="true" />
                <span className="sr-only">({project.title})</span>
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

export function Projects() {
  const [filter, setFilter] = useState<Filter>("All");
  const reduce = useReducedMotion();

  const visible = useMemo(() => {
    const list = filter === "All" ? projects : projects.filter((p) => p.categories.includes(filter));
    // Featured first, otherwise keep the order from portfolio.ts.
    return [...list].sort((a, b) => Number(!!b.featured) - Number(!!a.featured));
  }, [filter]);

  return (
    <>
      <div role="group" aria-label="Filter projects by category" className="mb-8 flex flex-wrap gap-2">
        {projectCategories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setFilter(cat)}
            aria-pressed={filter === cat}
            className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${
              filter === cat
                ? "border-accent bg-accent text-accent-fg"
                : "border-border text-muted hover:border-border-strong hover:text-fg"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <motion.ul layout={!reduce} className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout" initial={false}>
          {visible.map((project) => (
            <motion.li
              key={project.title}
              layout={!reduce}
              initial={reduce ? false : { opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={reduce ? undefined : { opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.25 }}
            >
              <ProjectCard project={project} index={projects.indexOf(project)} />
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>
    </>
  );
}
