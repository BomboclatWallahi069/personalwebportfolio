import Image from "next/image";
import type { Project } from "@/content/projects";

/**
 * Cover image for a project row. Until you add a `cover` in projects.ts,
 * it shows an empty frame telling you which file to drop in.
 */
export default function ProjectCover({ project }: { project: Project }) {
  if (project.confidential) {
    // NDA work: a blurred wireframe instead of real screens
    return (
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg border border-line bg-surface">
        <div aria-hidden className="absolute inset-0 flex gap-3 p-4 blur-[3px]">
          <div className="w-1/5 space-y-2 rounded-md bg-paper p-3">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-2.5 rounded-full bg-line" />
            ))}
          </div>
          <div className="flex flex-1 flex-col gap-3">
            <div className="h-6 w-2/5 rounded-md bg-line" />
            <div className="grid grid-cols-3 gap-3">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="h-16 rounded-md bg-paper" />
              ))}
            </div>
            <div className="flex-1 rounded-md bg-paper" />
          </div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-2 text-sm font-medium shadow-sm">
            <svg aria-hidden viewBox="0 0 16 16" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="3" y="7" width="10" height="7" rx="1.5" />
              <path d="M5.5 7V5a2.5 2.5 0 0 1 5 0v2" />
            </svg>
            Under NDA
          </p>
        </div>
      </div>
    );
  }

  if (project.cover) {
    return (
      <div className="relative">
        <div className="overflow-hidden rounded-lg border border-line bg-surface">
          <Image
            src={project.cover.src}
            alt={project.cover.alt}
            width={1600}
            height={1000}
            sizes="(min-width: 768px) 55vw, 100vw"
            className="aspect-[16/10] w-full object-cover"
          />
        </div>
        {/* On hover/focus: a Figma selection frame, named after the project */}
        <div
          aria-hidden
          className="pointer-events-none absolute -inset-2 border-[1.5px] border-select opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100 motion-reduce:transition-none"
        >
          <span className="absolute -top-6 left-0 text-xs font-medium whitespace-nowrap text-select">
            {project.title}
          </span>
          {["-top-[5px] -left-[5px]", "-top-[5px] -right-[5px]", "-bottom-[5px] -left-[5px]", "-right-[5px] -bottom-[5px]"].map(
            (pos) => (
              <span key={pos} className={`absolute size-2 border-[1.5px] border-select bg-surface ${pos}`} />
            ),
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="flex aspect-[16/10] w-full items-center justify-center rounded-lg border-[1.5px] border-dashed border-line bg-surface/60 text-sm text-muted">
      public/work/{project.slug}/cover.png
    </div>
  );
}
