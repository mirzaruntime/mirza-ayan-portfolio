"use client";

import { motion } from "framer-motion";
import { ArrowDown, FileText } from "lucide-react";
import { GithubIcon } from "@/components/ui/BrandIcons";
import MagneticButton from "@/components/ui/MagneticButton";
import { profile } from "@/lib/data";

const roleLabels = ["MERN Stack", "Backend Development", "AI Integration"];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden px-6 pt-28 pb-16"
    >
      <div className="absolute inset-0 -z-10 grid-mesh" aria-hidden />
      <div
        className="absolute -top-40 left-1/2 -z-10 h-[560px] w-[560px] -translate-x-1/2 rounded-full opacity-30 blur-[120px]"
        aria-hidden
        style={{
          background:
            "radial-gradient(circle, var(--cyan) 0%, var(--purple) 50%, transparent 72%)",
        }}
      />
      <div className="noise absolute inset-0 -z-10" aria-hidden />

      <div className="mx-auto w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glass mb-8 inline-flex items-center gap-2 rounded-full px-4 py-2"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan" />
          </span>
          <span className="font-mono text-xs tracking-wide text-ink-muted">
            Open to opportunities
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-[10.5vw] font-semibold leading-[0.95] tracking-tight text-ink-bright sm:text-[9vw] md:text-[6.2vw]"
        >
          Mirza Ayan Baig
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 font-mono text-lg text-cyan md:text-2xl"
        >
          <span className="block sm:inline">Full-Stack Developer</span>
          <span className="hidden sm:inline"> | </span>
          <span className="block sm:inline">MERN Stack</span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-6 max-w-2xl text-base leading-relaxed text-ink-muted md:text-lg"
        >
          Building modern full-stack web applications with the MERN stack and exploring
          practical AI integrations to create useful, user-focused solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mt-6 flex flex-wrap gap-2"
        >
          {roleLabels.map((label) => (
            <span
              key={label}
              className="rounded-full border border-border-strong bg-surface/80 px-3 py-1.5 font-mono text-[11px] text-ink-muted"
            >
              {label}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <MagneticButton href="#projects">View Projects</MagneticButton>
          {profile.resumeUrl && (
            <MagneticButton
              href={profile.resumeUrl}
              variant="secondary"
              ariaLabel="Download resume"
              download
            >
              <FileText size={16} /> Download Resume
            </MagneticButton>
          )}
          <MagneticButton
            href="https://github.com/mirzaruntime"
            variant="secondary"
            target="_blank"
            rel="noopener noreferrer"
            ariaLabel="Visit GitHub profile"
          >
            <GithubIcon className="h-4 w-4" /> GitHub
          </MagneticButton>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to about section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-ink-muted"
      >
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="font-mono text-[10px] tracking-widest uppercase">Scroll</span>
          <ArrowDown size={16} />
        </motion.span>
      </motion.a>
    </section>
  );
}
