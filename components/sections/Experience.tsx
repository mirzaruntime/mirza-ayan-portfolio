import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { experiences } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="relative px-6 py-28 md:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Experience" title="Backend Development Internship." />

        <div className="mt-12 space-y-6">
          {experiences.map((experience, index) => (
            <Reveal key={`${experience.company}-${experience.role}`} delay={index * 0.1}>
              <article className="glass rounded-2xl p-6 md:p-8">
                <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                  <div>
                    <span className="eyebrow">{experience.internship}</span>
                    <h3 className="mt-3 font-display text-xl font-semibold text-ink-bright md:text-2xl">
                      {experience.role}
                    </h3>
                    <p className="mt-2 text-base font-medium text-ink">
                      {experience.company}
                    </p>
                  </div>

                  <dl className="flex flex-col gap-2 text-sm text-ink-muted md:items-end">
                    <div className="flex flex-wrap gap-1">
                      <dt className="font-medium text-ink">Location:</dt>
                      <dd>{experience.location}</dd>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      <dt className="font-medium text-ink">Duration:</dt>
                      <dd>{experience.duration}</dd>
                    </div>
                  </dl>
                </div>

                <p className="mt-6 max-w-4xl text-sm leading-relaxed text-ink-muted md:text-base">
                  {experience.description}
                </p>

                <div className="mt-6">
                  <h4 className="text-xs font-medium uppercase tracking-wide text-ink-muted">
                    Technologies
                  </h4>
                  <ul className="mt-3 flex flex-wrap gap-2" aria-label="Technologies">
                    {experience.technologies.map((technology) => (
                      <li
                        key={technology}
                        className="rounded-full border border-border-strong px-3 py-1 font-mono text-[11px] text-ink-muted"
                      >
                        {technology}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
