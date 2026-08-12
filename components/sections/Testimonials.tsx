import { Quote } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

const slots = [1, 2, 3];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative px-6 py-28 md:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Testimonials"
          title="What clients & collaborators say."
          description="This space is reserved for real feedback — swap these placeholders for quotes as you collect them."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {slots.map((s) => (
            <Reveal key={s} delay={s * 0.08}>
              <div className="flex h-full flex-col justify-between rounded-2xl border border-dashed border-border-strong p-7">
                <Quote className="text-ink-muted/40" size={28} />
                <p className="mt-6 text-sm leading-relaxed text-ink-muted">
                  Add a testimonial from a client, collaborator, or mentor here
                  once you have one.
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full border border-border-strong" />
                  <div>
                    <p className="text-sm text-ink">Name — PLACEHOLDER</p>
                    <p className="font-mono text-xs text-ink-muted">Role, Company</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
