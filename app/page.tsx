import Image from "next/image";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import ExternalLink from "@/components/ExternalLink";
import Reveal from "@/components/Reveal";
import WorkCard from "@/components/WorkCard";
import { experience, principles, site } from "@/lib/site";
import { work } from "@/lib/work";
import portrait from "@/public/zaki.png";

function SectionLabel({ id, children }: { id?: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="font-mono text-xs uppercase tracking-[0.18em] text-faint">
      {children}
    </h2>
  );
}

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl px-6">
      {/* Hero */}
      <section className="pb-24 pt-20 sm:pb-32 sm:pt-28">
        <Reveal>
          <p className="text-muted">
            {site.role} · {site.location}
          </p>
        </Reveal>
        <Reveal delay={0.06}>
          <h1 className="mt-6 max-w-4xl font-serif text-[2.6rem] leading-[1.08] tracking-tight sm:text-6xl sm:leading-[1.05]">
            I build smooth, performant, <em className="text-accent">beautiful</em> tools, made to last and made to be
            extended.
          </h1>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted">
            Right now that&apos;s <Link href="/work/seaglass" className="link text-ink">Seaglass</Link>, a home for your
            journeys. Alongside it, I build web applications for the New York State Attorney General&apos;s office.
          </p>
        </Reveal>
        <Reveal delay={0.18} className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
          <a
            href="#contact"
            className="rounded-xl bg-ink px-5 py-3 font-medium text-bg transition-transform duration-200 ease-out-expo hover:-translate-y-px motion-reduce:transition-none"
          >
            Get in touch
          </a>
          <ExternalLink href={site.resume} className="text-muted hover:text-ink">
            Résumé
          </ExternalLink>
          <ExternalLink href={site.links.github} className="text-muted hover:text-ink">
            GitHub
          </ExternalLink>
          <ExternalLink href={site.links.linkedin} className="text-muted hover:text-ink">
            LinkedIn
          </ExternalLink>
        </Reveal>
      </section>

      {/* Principles */}
      <section aria-labelledby="principles" className="border-t border-hairline py-16 sm:py-20">
        <SectionLabel id="principles">What I believe</SectionLabel>
        <ul className="mt-10 grid gap-10 sm:grid-cols-3 sm:gap-8">
          {principles.map((p, i) => (
            <Reveal as="li" key={p.title} inView delay={i * 0.06}>
              <h3 className="font-serif text-xl tracking-tight">{p.title}</h3>
              <p className="mt-3 leading-relaxed text-muted">{p.body}</p>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* Work */}
      <section id="work" className="scroll-mt-20 border-t border-hairline py-16 sm:py-20">
        <SectionLabel>Selected work</SectionLabel>
        <div className="mt-10 grid gap-x-8 gap-y-16 sm:grid-cols-2">
          {work.map((w, i) => (
            <Reveal key={w.slug} inView className={w.featured ? "sm:col-span-2" : ""} delay={w.featured ? 0 : (i % 2) * 0.06}>
              <WorkCard work={w} priority={i === 0} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="scroll-mt-20 border-t border-hairline py-16 sm:py-20">
        <SectionLabel>About</SectionLabel>
        <div className="mt-10 grid gap-12 md:grid-cols-[1fr_1.4fr]">
          <Reveal inView className="space-y-5 leading-relaxed text-muted">
            <Image
              src={portrait}
              alt="Zaki Ahmad"
              placeholder="blur"
              sizes="96px"
              className="size-24 rounded-full object-cover object-[50%_30%]"
            />
            <p>
              I built my first computer at fourteen and never really stopped taking things apart. I studied computer
              science at the University at Buffalo, and I&apos;ve worked across the stack since, from public-sector
              systems to products I design myself.
            </p>
            <p>
              Away from the keyboard: weightlifting, video games, music production, and languages. I&apos;m working on
              Urdu and Spanish.
            </p>
          </Reveal>
          <ol className="divide-y divide-hairline border-y border-hairline">
            {experience.map((role, i) => (
              <Reveal as="li" key={role.org} inView delay={i * 0.05} className="grid gap-1 py-5 sm:grid-cols-[8rem_1fr] sm:gap-6">
                <span className="font-mono text-xs leading-6 text-faint">{role.period}</span>
                <div>
                  <p className="font-medium">
                    {role.title} <span className="text-muted">· {role.org}</span>
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{role.note}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="scroll-mt-20 border-t border-hairline py-16 sm:py-20">
        <SectionLabel>Contact</SectionLabel>
        <div className="mt-10 grid gap-12 md:grid-cols-[1fr_1.4fr]">
          <div>
            <p className="font-serif text-3xl leading-tight tracking-tight">Building something careful? I&apos;d like to hear about it.</p>
            <p className="mt-4 text-muted">
              Or write to{" "}
              <a href={`mailto:${site.email}`} className="link text-ink">
                {site.email}
              </a>
              .
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
