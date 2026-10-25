import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import MediaBlock from "@/components/MediaBlock";
import { getProject, publicProjects } from "@/content/projects";

type Props = { params: Promise<{ slug: string }> };

/** Renders **bold** spans inside a paragraph */
function Rich({ text }: { text: string }) {
  return (
    <>
      {text.split(/\*\*(.+?)\*\*/g).map((part, i) =>
        i % 2 === 1 ? (
          <strong key={i} className="font-semibold">
            {part}
          </strong>
        ) : (
          part
        ),
      )}
    </>
  );
}

export function generateStaticParams() {
  return publicProjects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  return project ? { title: `${project.title} — Case study`, description: project.tagline } : {};
}

export default async function CaseStudy({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const index = publicProjects.findIndex((p) => p.slug === slug);
  const next = publicProjects[(index + 1) % publicProjects.length];
  const accent = "var(--color-brand)";

  return (
    <main className="mx-auto max-w-6xl px-4 pb-24 sm:px-8">
      <Link href="/#work" className="text-sm text-muted hover:text-ink">
        All work
      </Link>

      <header className="mt-10 border-b-2 pb-12" style={{ borderColor: accent }}>
        <h1
          className="font-display text-[clamp(2.5rem,7vw,5.5rem)] leading-[0.95] font-bold tracking-[-0.03em]"
          style={{ color: accent }}
        >
          {project.title}
        </h1>
        <p className="mt-6 max-w-2xl text-xl leading-relaxed text-ink/85">{project.tagline}</p>
        <dl className="mt-10 grid gap-6 text-sm sm:grid-cols-3">
          <div>
            <dt className="text-muted">Role</dt>
            <dd className="mt-1">{project.role}</dd>
          </div>
          <div>
            <dt className="text-muted">Platform</dt>
            <dd className="mt-1">{project.platform}</dd>
          </div>
          <div>
            <dt className="text-muted">Year</dt>
            <dd className="mt-1">{project.year}</dd>
          </div>
        </dl>
      </header>

      {project.cover && (
        <Image
          src={project.cover.src}
          alt={project.cover.alt}
          width={1600}
          height={1000}
          sizes="(min-width: 1152px) 1088px, 100vw"
          className="mt-12 w-full rounded-lg border border-line"
          priority
        />
      )}

      <article className="mt-16 space-y-16">
        {project.sections.map((s) => (
          <section key={s.heading} className="grid gap-4 md:grid-cols-[14rem_1fr] md:gap-12">
            <h2 className="font-display text-xl font-semibold tracking-tight" style={{ color: accent }}>
              {s.heading}
            </h2>
            <div className="min-w-0">
              <div className="max-w-prose space-y-4 text-lg leading-relaxed">
                {s.body.map((para, i) => (
                  <p key={i}>
                    <Rich text={para} />
                  </p>
                ))}
              </div>
              {s.media?.map((m) => <MediaBlock key={m.src} media={m} />)}
            </div>
          </section>
        ))}
      </article>

      <Link
        href={`/work/${next.slug}`}
        className="group mt-24 block border-t border-line pt-10"
      >
        <span className="text-sm text-muted">Next case study</span>
        <span className="mt-2 block font-display text-3xl font-semibold tracking-tight group-hover:text-select sm:text-4xl">
          {next.title}
        </span>
      </Link>
    </main>
  );
}
