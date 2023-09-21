"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import { projectsData } from "@/lib/data";
import Project from "./Project";

export default function Projects() {

  return (
    <section  id="projects" className="scroll-mt-28 mb-28">
      <div className="text-center">
      <SectionHeading>My projects</SectionHeading>
      </div>
      
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
