import { learning, personality, profile } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

export default function About() {
  return (
    <section id="about" className="relative px-6 py-28 md:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="About"
          title="Turning curiosity into shipped products."
        />

        <div className="mt-14 grid gap-12 md:grid-cols-5">
          <div className="md:col-span-3">
            <Reveal delay={0.1}>
              <p className="text-lg leading-relaxed text-ink md:text-xl">
                I&apos;m a full-stack developer working across the MERN stack,
                who spends as much time in AI APIs and prompt design as I do in
                React components. I care about the details most people skip —
                the 40ms of extra polish on a hover state, the empty state that
                actually helps, the API that fails gracefully.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-5 text-lg leading-relaxed text-ink-muted md:text-xl">
                Right now I&apos;m deliberately building toward one goal:{" "}
                <span className="text-ink-bright">{profile.mission}</span> Every
                project on this site is a step in that direction — shipping
                real interfaces while layering in generative and agentic AI.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-10 flex flex-wrap gap-2">
                {personality.map((trait) => (
                  <span
                    key={trait}
                    className="glass rounded-full px-4 py-1.5 text-xs text-ink-muted"
                  >
                    {trait}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="md:col-span-2">
            <Reveal delay={0.25}>
              <div className="glass rounded-2xl p-6">
                <span className="eyebrow">Currently learning</span>
                <div className="mt-4 flex flex-wrap gap-2">
                  {learning.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-border-strong px-3 py-1.5 font-mono text-[11px] text-cyan"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
