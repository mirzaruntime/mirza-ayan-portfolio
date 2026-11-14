"use client";

import { FormEvent, useState } from "react";
import { Mail, Send } from "lucide-react";
import { GithubIcon } from "@/components/ui/BrandIcons";
import { profile } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import MagneticButton from "@/components/ui/MagneticButton";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [feedback, setFeedback] = useState<{
    type: "error" | "status";
    message: string;
  } | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const name = form.name.trim();
    const email = form.email.trim();
    const message = form.message.trim();

    if (!name || !email || !message) {
      setFeedback({ type: "error", message: "Please complete all fields." });
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setFeedback({ type: "error", message: "Please enter a valid email address." });
      return;
    }

    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(
      `${message}\n\n— ${name} (${email})`,
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setFeedback({
      type: "status",
      message:
        "Your email app should open with a draft. This website does not send the message; send it from your email app.",
    });
  };

  return (
    <section id="contact" className="relative px-6 py-28 md:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Contact"
          title="Let's connect and discuss opportunities."
          description="I'm open to junior full-stack developer opportunities, collaborations, and conversations about building useful software."
        />

        <div className="mt-14 grid gap-10 md:grid-cols-5">
          <Reveal delay={0.1} className="md:col-span-2">
            <div className="space-y-6">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-3 text-ink transition-colors hover:text-cyan"
              >
                <span className="glass flex h-11 w-11 items-center justify-center rounded-full">
                  <Mail size={17} />
                </span>
                {profile.email}
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-ink transition-colors hover:text-cyan"
              >
                <span className="glass flex h-11 w-11 items-center justify-center rounded-full">
                  <GithubIcon className="h-[17px] w-[17px]" />
                </span>
                GitHub
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.2} className="md:col-span-3">
            <form
              onSubmit={handleSubmit}
              noValidate
              className="glass space-y-5 rounded-2xl p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-xs text-ink-muted">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    value={form.name}
                    onChange={(e) => {
                      setForm({ ...form, name: e.target.value });
                      setFeedback(null);
                    }}
                    className="w-full rounded-lg border border-border-strong bg-surface px-4 py-3 text-sm text-ink outline-none focus:border-cyan"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-xs text-ink-muted">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => {
                      setForm({ ...form, email: e.target.value });
                      setFeedback(null);
                    }}
                    className="w-full rounded-lg border border-border-strong bg-surface px-4 py-3 text-sm text-ink outline-none focus:border-cyan"
                    placeholder="you@company.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-xs text-ink-muted">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => {
                    setForm({ ...form, message: e.target.value });
                    setFeedback(null);
                  }}
                  className="w-full resize-none rounded-lg border border-border-strong bg-surface px-4 py-3 text-sm text-ink outline-none focus:border-cyan"
                  placeholder="Tell me about your project..."
                />
              </div>
              <MagneticButton type="submit">
                <Send size={16} /> Send message
              </MagneticButton>
              {feedback && (
                <p
                  role={feedback.type === "error" ? "alert" : "status"}
                  className={`font-mono text-xs ${
                    feedback.type === "error" ? "text-red-400" : "text-cyan"
                  }`}
                >
                  {feedback.message}
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
