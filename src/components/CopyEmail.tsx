"use client";

import { useState } from "react";

/** Copies your email to the clipboard and confirms with "Copied" */
export default function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      className="inline-flex w-fit items-center gap-2 rounded-md border border-white/35 px-4 py-2.5 text-sm font-medium hover:border-white hover:bg-white/10"
    >
      <svg
        aria-hidden
        viewBox="0 0 20 20"
        className="size-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {copied ? (
          <path d="m4.5 10.5 3.5 3.5 7.5-8" />
        ) : (
          <>
            <rect x="7" y="7" width="9.5" height="9.5" rx="1.5" />
            <path d="M13 7V5a1.5 1.5 0 0 0-1.5-1.5h-6A1.5 1.5 0 0 0 4 5v6.5A1.5 1.5 0 0 0 5.5 13H7" />
          </>
        )}
      </svg>
      <span aria-live="polite">{copied ? "Copied" : "Copy email"}</span>
    </button>
  );
}
