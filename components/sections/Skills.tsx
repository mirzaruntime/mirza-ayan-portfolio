"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { skillCategories } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

export default function Skills() {
  const [active, setActive] = useState(skillCategories[0].id);
  const current = skillCategories.find((c) => c.id === active)!;

  return (
    <section id="skills" className="relative px-6 py-28 md:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Skills"
          title="A toolkit built for full-stack, AI-driven products."
        />

        <Reveal delay={0.15} className="mt-12">
          <div className="flex flex-wrap gap-2">
            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActive(cat.id)}
                className={`relative rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${
                  active === cat.id ? "text-black" : "text-ink-muted hover:text-ink"
                }`}
              >
                {active === cat.id && (
                  <motion.span
                    layoutId="skill-tab"
                    className="absolute inset-0 rounded-full bg-cyan"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat.label}</span>
              </button>
            ))}
          </div>
        </Reveal>

        <motion.div
          key={active}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mt-10 grid gap-x-10 gap-y-6 sm:grid-cols-2"
        >
          <span className="eyebrow sm:col-span-2">{current.eyebrow}</span>
          {current.skills.map((skill, i) => (
            <div key={skill.name}>
              <div className="mb-2 flex items-center justify-between">
                <span className="text-sm text-ink">{skill.name}</span>
                <span className="font-mono text-xs text-ink-muted">{skill.level}%</span>
              </div>
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-surface-2">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                  className="h-full rounded-full bg-gradient-to-r from-cyan via-blue to-purple"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
