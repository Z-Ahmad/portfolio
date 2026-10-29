export const site = {
  name: "Zaki Ahmad",
  role: "Full-stack engineer",
  location: "New York",
  // Canonical origin for metadata. Vercel sets the production host; override with SITE_URL.
  url:
    process.env.SITE_URL ??
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "http://localhost:3000"),
  description:
    "Zaki Ahmad builds smooth, performant, beautiful tools for serious users. No tracking, no dark patterns, fair pricing or open source.",
  email: "zakiahmad42661@gmail.com",
  resume: "/Zaki_Ahmad_Resume.pdf",
  links: {
    github: "https://github.com/Z-Ahmad",
    linkedin: "https://www.linkedin.com/in/zakiahmad75/",
  },
} as const;

export const principles = [
  {
    title: "Craft is the feature",
    body: "Smooth, fast, and considered down to the spring curve. Features are easy to copy. The way a tool feels is not, so that is where the time goes.",
  },
  {
    title: "Humanist by default",
    body: "No dark patterns, no tracking, no ads, no renewals you forgot about. Fair, honest pricing, or open source.",
  },
  {
    title: "For serious users",
    body: "Tools that respect the people who rely on them: depth over hand-holding, and built to be extended rather than to lock you in.",
  },
] as const;

export type Role = {
  period: string;
  title: string;
  org: string;
  note: string;
};

export const experience: Role[] = [
  {
    period: "2025 — now",
    title: "Founder & engineer",
    org: "Seaglass",
    note: "Designing and building a travel app end to end: web, API, and a native iPhone app.",
  },
  {
    period: "2023 — now",
    title: "Full-stack developer",
    org: "Office of the New York State Attorney General",
    note: "Web applications for the office in C#, ASP.NET, React, Tailwind, and SQL.",
  },
  {
    period: "2022",
    title: "Web analytics & development intern",
    org: "Brandsbyday",
    note: "Company and client sites: HTML, CSS, JavaScript, WordPress, and SEO.",
  },
  {
    period: "2019 — 2023",
    title: "B.S. Computer Science, cum laude",
    org: "University at Buffalo",
    note: "Software engineering, systems, security, data science, and human–computer interaction.",
  },
];
