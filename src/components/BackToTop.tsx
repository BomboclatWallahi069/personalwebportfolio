"use client";

import { useEffect, useState } from "react";

/**
 * Floating "back to top" button. Hidden near the top of the page, fades in
 * once the visitor has scrolled past the first screen.
 */
export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
    // Return keyboard focus to the top of the page
    document.querySelector<HTMLElement>("header a")?.focus({ preventScroll: true });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      tabIndex={visible ? 0 : -1}
      className={`fixed right-4 bottom-4 z-50 flex size-12 items-center justify-center rounded-md bg-ink text-paper ring-1 ring-paper/20 shadow-lg shadow-ink/15 transition-[opacity,translate] duration-300 hover:bg-ink/85 motion-reduce:transition-none sm:right-8 sm:bottom-8 ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0"
      }`}
    >
      <svg
        aria-hidden
        viewBox="0 0 20 20"
        className="size-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M10 16V4M4.5 9.5 10 4l5.5 5.5" />
      </svg>
    </button>
  );
}
