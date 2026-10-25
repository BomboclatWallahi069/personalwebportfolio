import Link from "next/link";
import Hero from "@/components/Hero";
import ProjectCover from "@/components/ProjectCover";
import CopyEmail from "@/components/CopyEmail";
import { profile } from "@/content/profile";
import { projects, type Project } from "@/content/projects";

/** Shared section heading: large title, hairline below, optional note on the right */
function SectionHeader({ title, note }: { title: string; note?: string }) {
  return (
    <div className="flex items-end justify-between gap-6 border-b border-line pb-6">
      <h2 className="font-display text-4xl font-semibold tracking-[-0.025em] sm:text-5xl">{title}</h2>
      {note && <p className="pb-1 text-sm text-muted tabular-nums">{note}</p>}
    </div>
  );
}

function Tags({ tags }: { tags?: string[] }) {
  if (!tags) return null;
  return (
    <ul className="flex flex-wrap gap-2" aria-label="What I did">
      {tags.map((t) => (
        <li key={t} className="rounded-full border border-line bg-surface px-2.5 py-0.5 text-xs text-ink/80">
          {t}
        </li>
      ))}
    </ul>
  );
}

/** Large alternating row for a featured case study */
function FeaturedRow({ p, flip }: { p: Project; flip: boolean }) {
  return (
    <li className="border-b border-line last:border-b-0">
      <Link
        href={`/work/${p.slug}`}
        className="group grid gap-8 py-14 md:grid-cols-12 md:items-center md:gap-12 lg:py-20"
      >
        <div className={`md:col-span-7 ${flip ? "md:order-2" : ""}`}>
          <ProjectCover project={p} />
        </div>
        <div className="md:col-span-5">
          <h3 className="font-display text-3xl font-semibold tracking-[-0.02em] group-hover:text-select sm:text-4xl">
            {p.title}
          </h3>
          <p className="mt-4 text-lg leading-relaxed text-ink/80">{p.tagline}</p>
          <dl className="mt-8 grid grid-cols-2 gap-6 border-t border-line pt-6 text-sm">
            <div>
              <dt className="text-muted">Role</dt>
              <dd className="mt-1 leading-snug">{p.role}</dd>
            </div>
            <div>
              <dt className="text-muted">Platform</dt>
              <dd className="mt-1 leading-snug">{p.platform}</dd>
            </div>
          </dl>
          <div className="mt-6">
            <Tags tags={p.tags} />
          </div>
          <span className="mt-8 inline-block text-sm font-medium underline decoration-line underline-offset-4 group-hover:decoration-ink">
            Read case study
          </span>
        </div>
      </Link>
    </li>
  );
}

/** Smaller card for the "More work" grid */
function WorkCard({ p }: { p: Project }) {
  const body = (
    <>
      <ProjectCover project={p} />
      <div className="mt-6 flex items-baseline justify-between gap-4">
        <h4
          className={`font-display text-xl font-semibold tracking-tight sm:text-2xl ${
            p.confidential ? "" : "group-hover:text-select"
          }`}
        >
          {p.title}
        </h4>
        <p className="shrink-0 text-sm text-muted">{p.platform}</p>
      </div>
      <p className="mt-2 max-w-md leading-relaxed text-muted">{p.tagline}</p>
      <div className="mt-4">
        <Tags tags={p.tags} />
      </div>
    </>
  );

  return (
    <li>
      {p.confidential ? (
        <div className="group">
          {body}
          <a
            href={`mailto:${profile.email}?subject=${encodeURIComponent(`${p.title} walkthrough`)}`}
            className="mt-5 inline-block text-sm font-medium underline decoration-line underline-offset-4 hover:decoration-ink"
          >
            Request a walkthrough
          </a>
        </div>
      ) : (
        <Link href={`/work/${p.slug}`} className="group block">
          {body}
        </Link>
      )}
    </li>
  );
}

export default function Home() {
  const featured = projects.filter((p) => p.featured);
  const more = projects.filter((p) => !p.featured);

  return (
    <main>
      <Hero />

      <section id="work" className="mx-auto max-w-6xl scroll-mt-24 px-4 pt-16 pb-24 sm:px-8">
        <SectionHeader title="Selected work" note={`${projects.length} projects`} />
        <ul>
          {featured.map((p, i) => (
            <FeaturedRow key={p.slug} p={p} flip={i % 2 === 1} />
          ))}
        </ul>

        <div className="mt-8 border-t border-line pt-14">
          <h3 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">More work</h3>
          <ul className="mt-10 grid gap-x-10 gap-y-16 md:grid-cols-2">
            {more.map((p) => (
              <WorkCard key={p.slug} p={p} />
            ))}
          </ul>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl scroll-mt-24 px-4 pt-16 pb-28 sm:px-8">
        <SectionHeader title="About" />
        <div className="mt-12 grid gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-6">
            <p className="max-w-prose text-xl leading-relaxed sm:text-2xl sm:leading-relaxed">
              {/* TODO: write this in your own voice — how you got into design and what you care about */}
              I&rsquo;m a UI/UX designer in {profile.location} with a background in web and mobile
              development, so I design with implementation in mind. I&rsquo;ve built design systems
              for SaaS products and led a disaster-response platform from research to delivery.
            </p>
            <div className="mt-10">
              <h3 className="text-sm text-muted">Skills</h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {profile.skills.map((s) => (
                  <li key={s} className="rounded-full border border-line bg-surface px-3 py-1 text-sm">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Facts in one panel, split by hairlines — like Figma's properties panel */}
          <div className="divide-y divide-line self-start rounded-xl border border-line bg-surface md:col-span-6">
            <div className="p-6 sm:p-8">
              <h3 className="text-sm text-muted">Experience</h3>
              {profile.experience.map((e) => (
                <div key={e.company} className="mt-3">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                    <p className="font-display text-lg font-semibold">{e.company}</p>
                    <p className="text-sm text-muted tabular-nums">{e.period}</p>
                  </div>
                  <p className="text-sm text-muted">{e.role}</p>
                  <p className="mt-3 leading-relaxed">{e.detail}</p>
                </div>
              ))}
            </div>
            <div className="p-6 sm:p-8">
              <h3 className="text-sm text-muted">Education</h3>
              <div className="mt-3 flex flex-wrap items-baseline justify-between gap-x-4">
                <p className="font-display text-lg font-semibold">{profile.education.school}</p>
                <p className="text-sm text-muted tabular-nums">{profile.education.period}</p>
              </div>
              <p className="text-sm text-muted">{profile.education.degree}</p>
              <ul className="mt-4 space-y-1.5">
                {profile.education.honors.map((h) => (
                  <li key={h} className="flex gap-3 leading-snug">
                    <span aria-hidden className="mt-[0.55em] size-1.5 shrink-0 rounded-full bg-select" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-6 sm:p-8">
              <h3 className="text-sm text-muted">Tools</h3>
              <p className="mt-3">{profile.tools.join(", ")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact: a dark band that runs into the footer, so the page has a clear ending */}
      <section id="contact" className="scroll-mt-16 bg-ink text-paper">
        <div className="mx-auto max-w-6xl px-4 pt-24 pb-20 sm:px-8 sm:pt-32">
          <h2 className="font-display text-[clamp(2.25rem,6vw,4.5rem)] leading-none font-bold tracking-tight">
            Let&rsquo;s work together.
          </h2>
          <p className="mt-6 max-w-xl text-lg text-paper/70">
            I&rsquo;m open to UI/UX design roles and freelance projects.
          </p>
          <div className="mt-12 flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-8">
            <a
              href={`mailto:${profile.email}`}
              className="font-display text-[clamp(1.35rem,3.6vw,2.5rem)] font-semibold tracking-tight break-all underline decoration-paper/30 underline-offset-[0.2em] hover:decoration-paper"
            >
              {profile.email}
            </a>
            <CopyEmail email={profile.email} />
          </div>
          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-paper/70">
            {profile.linkedin && (
              <a href={profile.linkedin} className="underline decoration-paper/30 underline-offset-4 hover:text-paper hover:decoration-paper">
                LinkedIn
              </a>
            )}
            {profile.resume && (
              <a href={profile.resume} className="underline decoration-paper/30 underline-offset-4 hover:text-paper hover:decoration-paper">
                Résumé (PDF)
              </a>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
