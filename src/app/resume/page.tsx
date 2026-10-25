import type { Metadata } from "next";
import Link from "next/link";
import { profile } from "@/content/profile";
import { resume } from "@/content/resume";

export const metadata: Metadata = {
  title: `Résumé — ${profile.name}`,
  description: resume.summary,
};

/** A section row: heading on the left, content on the right (same grid as case studies) */
function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="grid gap-4 border-t border-line py-12 md:grid-cols-[14rem_1fr] md:gap-12">
      <h2 className="font-display text-xl font-semibold tracking-tight">{title}</h2>
      <div className="min-w-0 space-y-10">{children}</div>
    </section>
  );
}

function Points({ points }: { points: string[] }) {
  return (
    <ul className="mt-4 max-w-prose list-disc space-y-2 pl-5 leading-relaxed marker:text-line">
      {points.map((p) => (
        <li key={p}>{p}</li>
      ))}
    </ul>
  );
}

function Entry({
  title,
  meta,
  period,
  points,
}: {
  title: React.ReactNode;
  meta: string;
  period?: string;
  points: string[];
}) {
  return (
    <div>
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
        <h3 className="font-display text-lg font-semibold">{title}</h3>
        {period && <p className="text-sm text-muted tabular-nums">{period}</p>}
      </div>
      <p className="mt-1 text-muted">{meta}</p>
      <Points points={points} />
    </div>
  );
}

export default function ResumePage() {
  return (
    <main className="mx-auto max-w-6xl px-4 pb-24 sm:px-8">
      <header className="flex flex-col gap-8 pt-10 pb-12 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="font-display text-[clamp(2.5rem,7vw,5rem)] leading-[0.95] font-bold tracking-[-0.03em]">
            Résumé
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/85">{resume.summary}</p>
        </div>
        <div className="flex shrink-0 flex-wrap gap-3">
          <a
            href={resume.pdf}
            download={resume.pdfDownloadName}
            className="inline-flex items-center gap-2 rounded-md bg-ink px-5 py-3 text-sm font-medium text-paper hover:bg-ink/85"
          >
            <svg
              aria-hidden
              viewBox="0 0 20 20"
              className="size-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M10 3v10M5.5 8.5 10 13l4.5-4.5M4 16.5h12" />
            </svg>
            Download PDF
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="rounded-md border border-ink/20 px-5 py-3 text-sm font-medium hover:border-ink"
          >
            Email me
          </a>
        </div>
      </header>

      <Section title="Experience">
        {resume.experience.map((e) => (
          <Entry key={e.org} title={e.org} meta={`${e.role}, ${e.place}`} period={e.period} points={e.points} />
        ))}
      </Section>

      <Section title="Education">
        {resume.education.map((e) => (
          <Entry key={e.org} title={e.org} meta={`${e.role}, ${e.place}`} period={e.period} points={e.points} />
        ))}
      </Section>

      <Section title="Projects">
        {resume.projects.map((p) => (
          <Entry
            key={p.name}
            title={
              <Link href={p.href} className="underline decoration-line underline-offset-4 hover:decoration-ink">
                {p.name}
              </Link>
            }
            meta={`${p.description}. ${p.role}`}
            points={p.points}
          />
        ))}
      </Section>

      <Section title="Skills">
        <dl className="space-y-6">
          {resume.skills.map((s) => (
            <div key={s.group}>
              <dt className="text-sm font-medium text-muted">{s.group}</dt>
              <dd className="mt-3 flex flex-wrap gap-2">
                {s.items.map((i) => (
                  <span key={i} className="rounded-full border border-line bg-surface px-3 py-1 text-sm">
                    {i}
                  </span>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section title="Certifications">
        <ul className="space-y-2 leading-relaxed">
          {resume.certifications.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
        <p className="text-muted">Character references available on request.</p>
      </Section>
    </main>
  );
}
