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
    title: "IT Specialist 2 Programming",
    location: "Latham, NY",
    description:
      "Working as an IT Specialist Programmer for the NYS Office of the Attorney General. Playing a pivotal role in the migration of a legacy Enterprise Content Management system, adeptly managing content, applications, and APIs for a seamless transition. Developing and maintaining dynamic E-Payment web applications in Java and Javascript. Ensuring flawless integration with a sophisticated hosted payment platform to enhance user experience and streamline transactions. ",
    icon: React.createElement(CgWorkAlt),
    date: "Nov 2023 - present"
  }
] as const;

export const projectsData = [
  {
    title: "Quantum Quill",
    description:
      "Quantum Quill seamlessly combines your creativity with AI assistance, providing real-time suggestions to craft beautiful haikus while maintaining the haiku structure. Precision is insured through a custom syllable-counting API.",
    tags: ["React", "Next.js", "OPENAI GPT", "Flask", "Tailwind"],
    imageUrl: quantumquillImg,
    projectUrl: "https://github.com/Z-Ahmad/quantum-quill"
  },
  {
    title: "YelpCamp",
    description:
      "I created a full stack web application to provide a comprehensive list of campgrounds. It has features like authentication, authorization, CRUD operations, comments, ratings and more.",
    tags: ["Node.js", "ExpressJS", "Bootstrap", "MongoDB", "MapBox API"],
    imageUrl: yelpcampImg,
    projectUrl: "https://github.com/Z-Ahmad/YelpCamp"
  },
  {
    title: "Predicting Racial Disparities in Law Enforcement Interactions",
    description:
      "A comprehensive study that utilizes data science techniques to analyze and predict law enforcement incidents, particularly those involving racial disparities.",
    tags: ["R", "R Studio", "HTML", "CSS", "Jupyter Notebook"],
    imageUrl: ppbImg,
    projectUrl: "https://github.com/Z-Ahmad/Predicting-Police-Brutality/blob/main/TermProject.pdf"
  }
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "SvelteKit",
  "Node.js",
  "Express",
  "C/C++",
  "Java",
  "Git",
  "Tailwind",
  "Figma",
  "Framer Motion",
  "MongoDB",
  "mySQL",
  "Python",
  "Flask",
  "R",
  "Docker",
  "Linux",
] as const;
