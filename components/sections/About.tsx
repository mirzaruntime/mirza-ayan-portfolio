import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

export default function About() {
  return (
    <section id="about" className="relative px-6 py-28 md:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="About"
          title="Building practical, user-friendly web applications."
        />

        <div className="mt-14 grid gap-12 md:grid-cols-5">
          <div className="md:col-span-3">
            <Reveal delay={0.1}>
              <p className="text-lg leading-relaxed text-ink md:text-xl">
                I&apos;m a BCA graduate and aspiring Full-Stack Developer focused on building
                practical, user-friendly web applications.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mt-5 text-lg leading-relaxed text-ink-muted md:text-xl">
                I work with the MERN stack and modern frontend technologies, with an interest in
                backend engineering and AI integration.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <p className="mt-5 text-lg leading-relaxed text-ink-muted md:text-xl">
                Through projects like ClauseGuard and AURA Studio, I apply what I learn to real
                development challenges — from building REST APIs and managing databases to
                integrating AI-powered functionality.
              </p>
            </Reveal>

            <Reveal delay={0.4}>
              <p className="mt-5 text-lg leading-relaxed text-ink-muted md:text-xl">
                I&apos;m continuously improving my development skills and looking for opportunities
                to contribute to real-world software projects.
              </p>
            </Reveal>
          </div>

          <div className="md:col-span-2">
            <Reveal delay={0.25}>
              <div className="glass rounded-2xl p-6">
                <span className="eyebrow">Education</span>
                <p className="mt-4 text-lg font-medium text-ink-bright">
                  Bachelor of Computer Applications (BCA)
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
