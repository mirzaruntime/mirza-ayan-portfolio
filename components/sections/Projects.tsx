"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import { GithubIcon } from "@/components/ui/BrandIcons";
import { projects, type Project } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

const categories = ["All", "Ecommerce", "AI", "Frontend"] as const;

const accentMap: Record<Project["accent"], string> = {
  cyan: "from-cyan/20 via-cyan/5 to-transparent",
  purple: "from-purple/20 via-purple/5 to-transparent",
  blue: "from-blue/20 via-blue/5 to-transparent",
};

function ProjectCard({ project, onOpen }: { project: Project; onOpen: (p: Project) => void }) {
  return (
    <motion.button
      onClick={() => onOpen(project)}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="group relative overflow-hidden rounded-2xl border border-border bg-surface p-7 text-left"
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br ${accentMap[project.accent]} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
        aria-hidden
      />
      <div className="relative z-10">
        <div className="flex items-start justify-between">
          <span className="eyebrow">{project.category}</span>
          <ArrowUpRight
            size={18}
            className="text-ink-muted transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan"
          />
        </div>
        <h3 className="mt-4 font-display text-xl font-semibold text-ink-bright md:text-2xl">
          {project.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-ink-muted">{project.description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border-strong px-2.5 py-1 font-mono text-[10px] text-ink-muted"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.button>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[80] flex items-center justify-center bg-black/70 p-4 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 12, scale: 0.98 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="glass relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-2xl p-8"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
      >
        <button
          onClick={onClose}
          aria-label="Close case study"
          className="absolute right-6 top-6 rounded-full border border-border-strong p-2 text-ink-muted hover:text-cyan"
        >
          <X size={18} />
        </button>

        <span className="eyebrow">{project.category} Case Study</span>
        <h3 id="project-modal-title" className="mt-3 font-display text-2xl font-semibold text-ink-bright md:text-3xl">
          {project.title}
        </h3>
        <p className="mt-4 text-base leading-relaxed text-ink-muted">{project.description}</p>

        <div className="mt-6">
          <span className="text-xs font-medium uppercase tracking-wide text-ink-muted">
            Highlights
          </span>
          <ul className="mt-3 space-y-2">
            {project.highlights.map((h) => (
              <li key={h} className="flex items-start gap-2 text-sm text-ink">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" />
                {h}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border-strong px-3 py-1 font-mono text-[11px] text-ink-muted"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-ink-bright px-5 py-2.5 text-sm font-medium text-black hover:bg-cyan"
          >
            Live demo <ArrowUpRight size={14} />
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border-strong px-5 py-2.5 text-sm text-ink hover:border-cyan hover:text-cyan"
          >
            <GithubIcon className="h-[14px] w-[14px]" /> Source
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState<(typeof categories)[number]>("All");
  const [active, setActive] = useState<Project | null>(null);

  const filtered = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.category === filter)),
    [filter],
  );

  return (
    <section id="projects" className="relative px-6 py-28 md:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work."
          description="A mix of luxury ecommerce builds and AI-driven product experiments."
        />

        <Reveal delay={0.15} className="mt-10 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`relative rounded-full px-5 py-2 text-sm transition-colors ${
                filter === cat ? "text-black" : "text-ink-muted hover:text-ink"
              }`}
            >
              {filter === cat && (
                <motion.span
                  layoutId="project-filter"
                  className="absolute inset-0 rounded-full bg-cyan"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10">{cat}</span>
            </button>
          ))}
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {filtered.map((project, i) => (
            <Reveal key={project.id} delay={i * 0.08}>
              <ProjectCard project={project} onOpen={setActive} />
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && <ProjectModal project={active} onClose={() => setActive(null)} />}
      </AnimatePresence>
    </section>
  );
}
