import { services } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

export default function Services() {
  return (
    <section id="services" className="relative px-6 py-28 md:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Services"
          title="How I can help build your product."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {services.map((service, i) => (
            <Reveal key={service.id} delay={i * 0.08}>
              <div className="group relative h-full rounded-2xl border border-border bg-surface p-8 transition-colors duration-300 hover:border-border-strong">
                <span className="font-mono text-xs text-ink-muted">
                  0{i + 1}
                </span>
                <h3 className="mt-4 font-display text-xl font-semibold text-ink-bright md:text-2xl">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                  {service.description}
                </p>
                <ul className="mt-5 space-y-2">
                  {service.points.map((p) => (
                    <li key={p} className="flex items-center gap-2 text-sm text-ink">
                      <span className="h-1 w-1 rounded-full bg-cyan" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
