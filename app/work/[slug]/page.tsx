import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ExternalLink from "@/components/ExternalLink";
import Reveal from "@/components/Reveal";
import { getNextWork, getWork, work } from "@/lib/work";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return work.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const w = getWork((await params).slug);
  if (!w) return {};
  return {
    title: w.title,
    description: w.summary,
    openGraph: { title: w.title, description: w.summary, images: [{ url: w.image.src, alt: w.imageAlt }] },
  };
}

export default async function WorkPage({ params }: Props) {
  const { slug } = await params;
  const w = getWork(slug);
  if (!w) notFound();
  const next = getNextWork(slug);
  const { Essay } = w;

  return (
    <article className="mx-auto max-w-5xl px-6 pt-16 sm:pt-24">
      <Reveal>
        <Link href="/#work" className="group inline-flex items-center gap-1.5 text-sm text-muted hover:text-ink">
          <span aria-hidden className="transition-transform duration-300 ease-out-expo group-hover:-translate-x-1 motion-reduce:transition-none">
            ←
          </span>
          All work
        </Link>
      </Reveal>

      <header className="mt-10 max-w-3xl">
        <Reveal delay={0.04}>
          <h1 className="font-serif text-5xl leading-[1.05] tracking-tight sm:text-6xl">{w.title}</h1>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mt-4 font-serif text-2xl italic text-muted">{w.tagline}</p>
        </Reveal>
      </header>

      <Reveal delay={0.12}>
        <dl className="mt-12 grid gap-6 border-y border-hairline py-6 text-sm sm:grid-cols-[auto_auto_1fr] sm:gap-12">
          <div>
            <dt className="font-mono text-xs uppercase tracking-[0.18em] text-faint">Year</dt>
            <dd className="mt-1">{w.year}</dd>
          </div>
          <div>
            <dt className="font-mono text-xs uppercase tracking-[0.18em] text-faint">Role</dt>
            <dd className="mt-1">{w.role}</dd>
          </div>
          <div>
            <dt className="font-mono text-xs uppercase tracking-[0.18em] text-faint">Links</dt>
            <dd className="mt-1 flex flex-wrap gap-x-5 gap-y-1">
              {w.links.map((l) => (
                <ExternalLink key={l.href} href={l.href} className="text-accent">
                  {l.label}
                </ExternalLink>
              ))}
            </dd>
          </div>
        </dl>
      </Reveal>

      <Reveal delay={0.16} className="mt-12 overflow-hidden rounded-2xl border border-hairline bg-surface">
        <Image
          src={w.image}
          alt={w.imageAlt}
          placeholder="blur"
          priority
          sizes="(min-width: 1024px) 976px, 100vw"
          className="max-h-[70vh] w-full object-cover object-top"
        />
      </Reveal>

      <div className="mx-auto mt-16 max-w-[38rem]">
        <div className="essay">
          <Essay />
        </div>

        <p className="mt-12 flex flex-wrap gap-2">
          {w.stack.map((t) => (
            <span key={t} className="rounded-lg border border-hairline px-2.5 py-1 font-mono text-xs text-muted">
              {t}
            </span>
          ))}
        </p>
      </div>

      <nav aria-label="Next project" className="mt-24 border-t border-hairline pt-10">
        <Link href={`/work/${next.slug}`} className="group block">
          <span className="font-mono text-xs uppercase tracking-[0.18em] text-faint">Next</span>
          <span className="mt-3 flex items-baseline gap-3">
            <span className="font-serif text-3xl tracking-tight sm:text-4xl">{next.title}</span>
            <span aria-hidden className="text-2xl text-accent transition-transform duration-300 ease-out-expo group-hover:translate-x-1.5 motion-reduce:transition-none">
              →
            </span>
          </span>
          <span className="mt-1 block font-serif italic text-muted">{next.tagline}</span>
        </Link>
      </nav>
    </article>
  );
}
