import About from "@/components/sections/About";
import Education from "@/components/sections/Education";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import React from "react";

export default function Home() {
  return (
    <div className="flex flex-col gap-24 md:gap-32">
      <About />
      <Projects />
      <Experience />
      <Education />
    </div>
  );
}

