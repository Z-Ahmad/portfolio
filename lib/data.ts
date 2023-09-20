import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import yelpcampImg from "@/public/yelpcampImg.png";
import ppbImg from "@/public/ppbImg.png";
import quantumquillImg from "@/public/quantumQuill.png";

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
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description: "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019"
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description: "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021"
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present"
  }
] as const;

export const projectsData = [
  {
    title: "YelpCamp",
    description:
      "I created a full stack web application to provide a comprehensive list of campgrounds. It has features like authentication, authorization, CRUD operations, comments, ratings and more.",
    tags: ["Node.js", "ExpressJS", "Bootstrap", "MongoDB", "MapBox API"],
    imageUrl: yelpcampImg,
    projectUrl: "https://github.com/Z-Ahmad/YelpCamp"
  },
  {
    title: "Predicting Police Brutality",
    description:
      "A data science project that aimed to predict the number of Black Americans that would die at the hands of police in 2020 and beyond. Created during the Black Lives Matter protests of 2020.",
    tags: ["R", "R Studio", "HTML", "CSS", "Jupyter Notebook"],
    imageUrl: ppbImg,
    projectUrl: "https://github.com/Z-Ahmad/Predicting-Police-Brutality/blob/main/TermProject.pdf"
  },
  {
    title: "Quantum Quill",
    description:
      "Currently working on a full stack web application that will allow users to create haikus with the help of an AI. Syllable and rhyme schemes will be automatically generated.",
    tags: ["Python", "GPT4.5 API", "SvelteKit", "Tailwind"],
    imageUrl: quantumquillImg,
    projectUrl: "https://github.com/Z-Ahmad"
  }
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion"
] as const;
