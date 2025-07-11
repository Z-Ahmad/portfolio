import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import globeplotImg from "@/public/globeplot.png";
import ppbImg from "@/public/ppbImg.png";
import zenithImg from "@/public/zenith-card-image.png";

export const links = [
  {
    name: "Home",
    hash: "#home"
  },
  {
    name: "About",
    hash: "#about"
  },
  {
    name: "Projects",
    hash: "#projects"
  },
  {
    name: "Skills",
    hash: "#skills"
  },
  {
    name: "Experience",
    hash: "#experience"
  },
  {
    name: "Contact",
    hash: "#contact"
  }
] as const; 

export const experiencesData = [
  {
    title: "Web Analytics & Development Intern",
    location: "Albany, NY",
    description:
      "I interned at Brandsbyday, a digital marketing agency based in Albany, NY. I worked on the company website and client websites. I improved my skills in HTML, CSS, JavaScript, WordPress, and SEO.",
    icon: React.createElement(CgWorkAlt),
    date: "Feb 2022 - Aug 2022"
  },
  {
    title: "Graduated University",
    location: "Buffalo, NY",
    description: "I graduated with a Bachelor of Science in Computer Science from the University at Buffalo, achieving cum laude honors.",
    icon: React.createElement(LuGraduationCap),
    date: "Aug 2019 - May 2023"
  },
  {
    title: "Full Stack Developer",
    location: "Latham, NY",
    description:
      "Working as a Full Stack Developer for the Office of the New York State Attorney General. Playing a pivotal role in the development and management of web applications using C#, ASP.NET, React, TailwindCSS, and SQL. ",
    icon: React.createElement(CgWorkAlt),
    date: "Nov 2023 - present"
  }
] as const;

export type Project = {
  title: string;
  description: string;
  tags: readonly string[];
  imageUrl: any;
  gitUrl?: string;
  projectUrl?: string;
  blogUrl?: string;
};

export const projectsData: Project[] = [
  {
    title: "Globeplot",
    description:
      "A web app for organizing multi-stop travel itineraries with AI-powered document processing. Users upload travel confirmations (PDFs, emails) and Globeplot extracts events to create clean, editable trip plans grouped by location and date. Features interactive maps, timeline views, and secure trip sharing.",
    tags: ["React", "TypeScript", "Tailwind", "Firebase", "Express.js", "Mapbox", "Mistral AI", "Zustand"],
    imageUrl: globeplotImg,
    projectUrl: "https://www.globeplot.com/",
  },
  {
    title: "Zenith",
    description:
      "A Notion-inspired document management platform built with Next.js, featuring real-time collaboration and a sleek dark-mode interface. Users can create nested documents with rich text editing, add cover images and emojis, and share their work publicly through unique URLs.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind", "Convex", "EdgeStore", "BlockNote", "Clerk"],
    imageUrl: zenithImg,
    gitUrl: "https://github.com/Z-Ahmad/zenith",
    projectUrl: "https://zenith-pi.vercel.app/",
    blogUrl: "https://zenith-pi.vercel.app/preview/j57ddfc9khbnev9ftqswy8z8fx74v7ek"
  },
  {
    title: "Predicting Racial Disparities in Law Enforcement Interactions",
    description:
      "A comprehensive study that utilizes data science techniques to analyze and predict law enforcement incidents, particularly those involving racial disparities.",
    tags: ["R", "R Studio", "HTML", "CSS", "Jupyter Notebook"],
    imageUrl: ppbImg,
    gitUrl: "https://github.com/Z-Ahmad/Predicting-Police-Brutality/blob/main/TermProject.pdf"
  }
];

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "C/C++",
  "C#",
  "Java",
  "Git",
  "Tailwind",
  "Figma",
  "Framer Motion",
  "MongoDB",
  "SQL",
  "Python",
  "Flask",
  "R",
  "Docker",
  "Linux",
  "Azure",
] as const;