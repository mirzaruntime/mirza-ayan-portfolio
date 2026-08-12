"use client";

import { useRef, useState, MouseEvent, ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Props = {
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  target?: string;
  rel?: string;
  type?: "button" | "submit";
  ariaLabel?: string;
};

export default function MagneticButton({
  href,
  onClick,
  children,
  variant = "primary",
  className,
  target,
  rel,
  type = "button",
  ariaLabel,
}: Props) {
  const ref = useRef<HTMLAnchorElement & HTMLButtonElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMove = (e: MouseEvent<HTMLElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const relX = e.clientX - rect.left - rect.width / 2;
    const relY = e.clientY - rect.top - rect.height / 2;
    setPos({ x: relX * 0.25, y: relY * 0.35 });
  };

  const reset = () => setPos({ x: 0, y: 0 });

  const styles = cn(
    "group relative inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium tracking-wide transition-colors duration-300 focus-visible:outline-offset-4",
    variant === "primary"
      ? "bg-ink-bright text-black hover:bg-cyan"
      : "border border-border-strong text-ink hover:border-cyan hover:text-cyan",
    className,
  );

  const inner = (
    <motion.span
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 150, damping: 12, mass: 0.4 }}
      className="relative z-10 flex items-center gap-2"
    >
      {children}
    </motion.span>
  );

  if (href) {
    return (
      <motion.a
        ref={ref}
        href={href}
        target={target}
        rel={rel}
        aria-label={ariaLabel}
        onMouseMove={handleMove}
        onMouseLeave={reset}
        animate={{ x: pos.x * 0.4, y: pos.y * 0.4 }}
        transition={{ type: "spring", stiffness: 150, damping: 14 }}
        className={styles}
      >
        {inner}
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={ref}
      type={type}
      onClick={onClick}
      aria-label={ariaLabel}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      animate={{ x: pos.x * 0.4, y: pos.y * 0.4 }}
      transition={{ type: "spring", stiffness: 150, damping: 14 }}
      className={styles}
    >
      {inner}
    </motion.button>
  );
}
