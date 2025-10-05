"use client";

import React from "react";
import { motion } from "framer-motion";
import { projectsData } from "@/lib/data";
import PageTitle from "../ui/PageTitle";
import ProjectCard from "../ui/ProjectCard";

const Projects = () => {
  return (
    <section id="projects">
      <PageTitle>Projetos em Destaque</PageTitle>
      <p className="mb-8 max-w-2xl text-slate-600 dark:text-slate-300">
        Aqui estão alguns dos projetos selecionados onde apliquei as minhas
        competências em backend e frontend.
      </p>

      {}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {projectsData.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

