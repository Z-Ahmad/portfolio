import Image from "next/image";
import Link from "next/link";
import type { Work } from "@/lib/work";

/** Index entry for a project. The featured one gets the full width and a larger image. */
export default function WorkCard({ work, priority = false }: { work: Work; priority?: boolean }) {
  const featured = work.featured;
  return (
    <Link
      href={`/work/${work.slug}`}
      className="group block rounded-2xl outline-offset-8"
    >
      <div className="overflow-hidden rounded-2xl border border-hairline bg-surface">
        <Image
          src={work.image}
          alt={work.imageAlt}
          placeholder="blur"
          priority={priority}
          sizes={featured ? "(min-width: 1024px) 976px, 100vw" : "(min-width: 1024px) 480px, (min-width: 640px) 50vw, 100vw"}
          className={`w-full object-cover transition-transform duration-700 ease-out-expo group-hover:scale-[1.025] motion-reduce:transition-none ${
            featured ? "aspect-[16/9] object-center" : "aspect-[4/3] object-left-top"
          }`}
        />
      </div>
      <div className="mt-5 flex items-baseline justify-between gap-4">
        <h3 className="font-serif text-2xl tracking-tight">{work.title}</h3>
        <span className="shrink-0 font-mono text-xs text-faint">{work.year}</span>
      </div>
      <p className="mt-1 font-serif italic text-muted">{work.tagline}</p>
      <p className={`mt-3 leading-relaxed text-muted ${featured ? "max-w-2xl" : ""}`}>{work.summary}</p>
      <span className="mt-4 inline-flex items-center gap-1.5 text-sm text-accent">
        Read the story
        <span aria-hidden className="transition-transform duration-300 ease-out-expo group-hover:translate-x-1 motion-reduce:transition-none">
          →
        </span>
      </span>
    </Link>
  );
}
