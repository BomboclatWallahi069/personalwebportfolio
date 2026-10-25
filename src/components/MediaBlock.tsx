import Image from "next/image";
import type { Media } from "@/content/projects";

/** Renders a case study image or video. */
export default function MediaBlock({ media }: { media: Media }) {
  return (
    <figure className="mt-8">
      {media.type === "video" ? (
        <video
          controls
          preload="none"
          playsInline
          poster={media.poster}
          aria-label={media.label}
          className="aspect-video w-full rounded-lg border border-line bg-ink"
        >
          <source src={media.src} type="video/mp4" />
        </video>
      ) : media.tall ? (
        // Full-page screenshots sit in a browser-style frame you scroll inside
        <div className="overflow-hidden rounded-lg border border-line bg-surface">
          <div aria-hidden className="flex gap-1.5 border-b border-line px-3 py-2.5">
            <span className="size-2.5 rounded-full bg-line" />
            <span className="size-2.5 rounded-full bg-line" />
            <span className="size-2.5 rounded-full bg-line" />
          </div>
          <div
            tabIndex={0}
            role="region"
            aria-label={`${media.alt} (scrollable)`}
            className="max-h-[75vh] overflow-y-auto"
          >
            <Image
              src={media.src}
              alt={media.alt}
              width={media.width}
              height={media.height}
              sizes="(min-width: 1024px) 900px, 100vw"
              className="w-full"
            />
          </div>
        </div>
      ) : (
        <Image
          src={media.src}
          alt={media.alt}
          width={media.width}
          height={media.height}
          sizes="(min-width: 1024px) 900px, 100vw"
          className="w-full rounded-lg border border-line"
        />
      )}
      {media.caption && (
        <figcaption className="mt-3 text-sm text-muted">{media.caption}</figcaption>
      )}
    </figure>
  );
}
