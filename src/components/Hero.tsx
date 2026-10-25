import { profile } from "@/content/profile";

/**
 * Your name set like a type specimen, centered: each line sits between a
 * cap-height guide (dashed) and a baseline guide (solid) that run edge to
 * edge. The role label hangs from the last baseline like a dimension label,
 * and the redline measures the real 48px gap from that label to the summary.
 *
 * `text-box: trim-both cap alphabetic` trims each line's box to exactly
 * cap height → baseline, so the guides land on the letters (Chrome, Edge,
 * Safari). Other browsers fall back to the normal line box.
 */
function Line({ children, last }: { children: React.ReactNode; last?: boolean }) {
  return (
    <span className="relative flex justify-center">
      {/* Guides: full-bleed, drawn in once on load */}
      <span
        aria-hidden
        className="anim-guide pointer-events-none absolute top-0 -right-[100vw] -left-[100vw] border-t border-dashed border-select/45"
      />
      <span
        aria-hidden
        className="anim-guide pointer-events-none absolute -right-[100vw] bottom-0 -left-[100vw] border-b border-select"
      />
      <span className="block [text-box:trim-both_cap_alphabetic]">{children}</span>
      {last && (
        // 20px tall label hanging from the baseline, clear of the letters
        <span className="anim-label absolute top-full left-1/2 -translate-x-1/2 rounded-b-sm bg-select px-2 py-0.5 font-sans text-xs leading-4 font-medium tracking-normal whitespace-nowrap text-white">
          {profile.role}
        </span>
      )}
    </span>
  );
}

export default function Hero() {
  return (
    <section className="relative isolate overflow-x-clip">
      {/* Figma-canvas dot grid, fading out toward the edges */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 [background-image:radial-gradient(rgb(23_32_51/0.14)_1px,transparent_1.2px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_70%_65%_at_50%_45%,black_35%,transparent_100%)]"
      />
      <div className="mx-auto max-w-6xl px-4 pt-20 pb-24 text-center sm:px-8 sm:pt-28">
        <h1 className="flex flex-col gap-[0.32em] font-display text-[clamp(3.25rem,11vw,8.5rem)] leading-none font-bold tracking-[-0.035em]">
          <Line>Johnlien</Line>
          <Line last>Falculan</Line>
        </h1>

        {/* Redline: starts at the label's bottom edge (20px below the
            baseline) and measures the real 48px gap to the summary */}
        <div aria-hidden className="mt-5 flex h-12 justify-center">
          <div className="anim-measure relative flex origin-top flex-col items-center">
            <span className="h-px w-3 bg-redline" />
            <span className="w-px flex-1 bg-redline" />
            <span className="h-px w-3 bg-redline" />
            <span className="absolute top-1/2 left-3 -translate-y-1/2 rounded-sm bg-redline px-1 text-[11px] leading-4 font-medium text-white">
              48
            </span>
          </div>
        </div>

        <p className="mx-auto max-w-2xl text-lg leading-relaxed text-ink/85 sm:text-xl">
          {profile.summary}
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a
            href="#work"
            className="rounded-md bg-ink px-5 py-3 text-sm font-medium text-paper hover:bg-ink/85"
          >
            See case studies
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="rounded-md border border-ink/20 px-5 py-3 text-sm font-medium hover:border-ink"
          >
            Email me
          </a>
        </div>
      </div>
    </section>
  );
}
