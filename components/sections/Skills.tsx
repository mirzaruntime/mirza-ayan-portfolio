"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from "framer-motion";
import { skillCategories, type Skill } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

type SkillProgressProps = {
  skill: Skill;
  index: number;
  isInView: boolean;
  prefersReducedMotion: boolean;
};

function SkillProgress({
  skill,
  index,
  isInView,
  prefersReducedMotion,
}: SkillProgressProps) {
  const targetWidth = skill.percentage;
  const progress = useMotionValue(prefersReducedMotion ? targetWidth : 0);
  const displayedPercentage = useTransform(progress, (value) => Math.round(value));
  const progressWidth = useTransform(progress, (value) => `${value}%`);

  useEffect(() => {
    if (prefersReducedMotion) {
      progress.set(targetWidth);
      return;
    }

    progress.set(0);
    if (!isInView) return;

    const controls = animate(progress, targetWidth, {
      duration: 0.95,
      delay: Math.min(index * 0.07, 0.42),
      ease: [0.22, 1, 0.36, 1],
    });

    return () => controls.stop();
  }, [index, isInView, prefersReducedMotion, progress, targetWidth]);

  return (
    <>
      <div className="mb-2 flex items-center justify-between gap-4">
        <span className="text-sm font-medium text-ink">{skill.name}</span>
        <span
          className="font-mono text-xs tabular-nums text-ink-muted"
          aria-label={`${skill.percentage}%`}
        >
          <motion.span aria-hidden="true">{displayedPercentage}</motion.span>%
        </span>
      </div>
      <div aria-hidden="true" className="h-2 overflow-hidden rounded-full bg-surface-2">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-cyan to-purple"
          style={{ width: progressWidth }}
        />
      </div>
    </>
  );
}

export default function Skills() {
  const [active, setActive] = useState(skillCategories[0].id);
  const prefersReducedMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true });
  const current = useMemo(
    () => skillCategories.find((category) => category.id === active) ?? skillCategories[0],
    [active],
  );

  const handleTabKeyDown = (
    event: React.KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) => {
    let nextIndex = index;

    switch (event.key) {
      case "ArrowRight":
        nextIndex = (index + 1) % skillCategories.length;
        break;
      case "ArrowLeft":
        nextIndex = (index - 1 + skillCategories.length) % skillCategories.length;
        break;
      case "Home":
        nextIndex = 0;
        break;
      case "End":
        nextIndex = skillCategories.length - 1;
        break;
      default:
        return;
    }

    event.preventDefault();
    const nextCategory = skillCategories[nextIndex];
    setActive(nextCategory.id);
    document.getElementById(`skill-tab-${nextCategory.id}`)?.focus();
  };

  return (
    <section ref={sectionRef} id="skills" className="relative px-6 py-28 md:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Skills"
          title="Technologies I Work With"
          description="A practical toolkit for building full-stack web applications, developing backend APIs, working with databases, and integrating AI-powered features."
        />

        <Reveal delay={0.15} className="mt-12">
          <div role="tablist" aria-label="Skill categories" className="flex flex-wrap gap-2">
            {skillCategories.map((cat, index) => {
              const isActive = active === cat.id;

              return (
                <button
                  key={cat.id}
                  id={`skill-tab-${cat.id}`}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`skill-panel-${cat.id}`}
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => setActive(cat.id)}
                  onKeyDown={(event) => handleTabKeyDown(event, index)}
                  className={`relative rounded-full px-5 py-2.5 text-sm font-medium transition-colors duration-200 ${
                    isActive ? "text-black" : "text-ink-muted hover:text-ink"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="skill-tab"
                      className="absolute inset-0 rounded-full bg-cyan"
                      transition={
                        prefersReducedMotion
                          ? { duration: 0 }
                          : { type: "spring", stiffness: 300, damping: 30 }
                      }
                    />
                  )}
                  <span className="relative z-10">{cat.label}</span>
                </button>
              );
            })}
          </div>
        </Reveal>

        <motion.div
          key={active}
          id={`skill-panel-${current.id}`}
          role="tabpanel"
          aria-labelledby={`skill-tab-${current.id}`}
          tabIndex={0}
          initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
          animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.4 }}
          className="mt-10"
        >
          <span className="eyebrow">{current.eyebrow}</span>
          <div className="mt-6 grid grid-cols-1 gap-x-12 gap-y-7 sm:grid-cols-2">
            {current.skills.map((skill, index) => (
              <div key={skill.name}>
                <SkillProgress
                  skill={skill}
                  index={index}
                  isInView={isInView}
                  prefersReducedMotion={Boolean(prefersReducedMotion)}
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
