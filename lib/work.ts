import type { StaticImageData } from "next/image";
import type { ComponentType } from "react";

import seaglassImg from "@/public/work/seaglass.webp";
import zenithImg from "@/public/work/zenith.png";
import disparitiesImg from "@/public/work/disparities.png";

import SeaglassEssay from "@/content/work/seaglass";
import ZenithEssay from "@/content/work/zenith";
import DisparitiesEssay from "@/content/work/disparities";

export type WorkLink = { label: string; href: string };

export type Work = {
  slug: string;
  title: string;
  /** One line, shown under the title everywhere. */
  tagline: string;
  /** Two or three sentences for the index card. */
  summary: string;
  year: string;
  role: string;
  stack: string[];
  image: StaticImageData;
  imageAlt: string;
  links: WorkLink[];
  featured?: boolean;
  Essay: ComponentType;
};

/**
 * Every project on the site. Order here is display order. To add one: drop an
 * essay component in `content/work/`, an image in `public/work/`, and an entry
 * below. The index, the essay route, and the sitemap all read from this list.
 */
export const work: Work[] = [
  {
    slug: "seaglass",
    title: "Seaglass",
    tagline: "A home for your journeys.",
    summary:
      "A travel app built around one persistent globe. Drop in bookings as they land, travel with what's now and next, and keep the trip as a memory you can share.",
    year: "2025 — now",
    role: "Founder · design, web, API, iOS",
    stack: ["React 19", "TypeScript", "Mapbox GL", "Motion", "Zustand", "Express", "Firebase", "Mistral", "Swift"],
    image: seaglassImg,
    imageAlt: "The Seaglass globe showing a trip's flight path from New York across the Atlantic to the Mediterranean.",
    links: [{ label: "seaglass.travel", href: "https://seaglass.travel" }],
    featured: true,
    Essay: SeaglassEssay,
  },
  {
    slug: "zenith",
    title: "Zenith",
    tagline: "Nested documents, written together.",
    summary:
      "A document workspace with real-time collaboration, nested pages, rich text editing, and public sharing through a single link.",
    year: "2024",
    role: "Solo project",
    stack: ["Next.js", "TypeScript", "Convex", "BlockNote", "Clerk", "EdgeStore", "Tailwind"],
    image: zenithImg,
    imageAlt: "The Zenith editor: a page tree in the sidebar and a recipe document open.",
    links: [
      { label: "Live", href: "https://zenith-pi.vercel.app/" },
      { label: "Source", href: "https://github.com/Z-Ahmad/zenith" },
    ],
    Essay: ZenithEssay,
  },
  {
    slug: "racial-disparities",
    title: "Racial disparities in policing",
    tagline: "What the data says, and what it can't.",
    summary:
      "A data science study of law enforcement interactions, modeling where and how racial disparities show up in incident data.",
    year: "2022",
    role: "University research",
    stack: ["R", "R Markdown", "Shiny"],
    image: disparitiesImg,
    imageAlt: "A histogram of victim ages from the study, beside the R code that produced it.",
    links: [{ label: "Paper (PDF)", href: "https://github.com/Z-Ahmad/Predicting-Police-Brutality/blob/main/TermProject.pdf" }],
    Essay: DisparitiesEssay,
  },
];

export function getWork(slug: string): Work | undefined {
  return work.find((w) => w.slug === slug);
}

/** Wraps around, so every essay ends by pointing somewhere. */
export function getNextWork(slug: string): Work {
  const i = work.findIndex((w) => w.slug === slug);
  return work[(i + 1) % work.length];
}
