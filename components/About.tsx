'use client'

import React from 'react'
import SectionHeading from './SectionHeading';
import {motion} from 'framer-motion'
import { useSectionInView } from '@/lib/hooks';

export default function About() {
    const { ref } = useSectionInView("About");

  
  return (
    <motion.section 
      ref={ref}
      id="about" 
      className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
      initial={{opacity: 0, y: 100}}
      animate={{opacity: 1, y: 0}}
      transition={{delay: 0.175}}
    >
      <SectionHeading>About Me</SectionHeading>

      <p className="mb-3">
        {" "}
        I have always been fascinated by <span className="font-medium">technology</span>, building my first computer at 14 years old. Pursuing a{" "}
        <span className="italic">Bachelor's</span> in <span className="font-medium">Computer Science</span> at <span className="font-medium">UB</span> was a
        natural choice. During my studies, I explored the <span className="font-medium">numerous</span> fields of computer science, such as{" "}
        <span className="font-medium">software development</span>, <span className="font-medium">computer architecture</span>,{" "}
        <span className="font-medium">cyber security</span>, and <span className="font-medium">data structures & algorithms</span>. I dabbled in{" "}
        <span className="font-medium">data science</span> and <span className="font-medium">human computer interaction</span> as well. My core stack is{" "}
        <span className="font-medium">React, Next.js, Node.js, and MongoDB</span>. I am proficient in <span className="font-medium">Python</span> as well. I am
        always looking to learn new technologies. I am currently working for the <span className="underline">NYS Office of the Attorney General</span> as an{" "}
        <span className="font-medium">IT Specialist Programmer</span>.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I find joy in video games, weightlifting, and language learning. My goal is to become a polyglot,
        currently tackling <span className="font-medium">Urdu</span> and <span className="font-medium">Spanish</span>. I'm also exploring{" "}
        <span className="font-medium">music production</span> and <span className="font-medium">human anatomy</span>.
      </p>
    </motion.section>
  );
}
