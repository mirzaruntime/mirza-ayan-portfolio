"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { profile } from "@/lib/data";
import MagneticButton from "@/components/ui/MagneticButton";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
        <a
          href="#top"
          className="font-display text-lg font-semibold tracking-tight text-ink-bright"
        >
          M<span className="text-cyan">.</span>Ayan
        </a>

        <nav
          className={`hidden items-center gap-1 rounded-full px-2 py-2 transition-all duration-300 md:flex ${
            scrolled ? "glass" : ""
          }`}
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm text-ink-muted transition-colors hover:text-ink-bright"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <MagneticButton href="#contact" variant="secondary" className="!px-5 !py-2.5 !text-xs">
            Let&apos;s talk
          </MagneticButton>
        </div>

        <button
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          className="glass rounded-full p-2.5 text-ink-bright md:hidden"
        >
          <Menu size={20} />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-bg/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex items-center justify-between px-6 py-5">
              <span className="font-display text-lg font-semibold text-ink-bright">
                {profile.name}
              </span>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="glass rounded-full p-2.5 text-ink-bright"
              >
                <X size={20} />
              </button>
            </div>
            <nav className="mt-8 flex flex-col items-center gap-2">
              {links.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06 }}
                  className="px-6 py-3 font-display text-2xl text-ink hover:text-cyan"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
