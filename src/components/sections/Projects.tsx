"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { projectsData } from "@/lib/data";
import { ExternalLink, Github } from "lucide-react";
import PageTitle from "../ui/PageTitle";

// Sub-componente para o Card de Projeto
const ProjectCard = ({
  project,
  index,
}: {
  project: (typeof projectsData)[number];
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-lg border border-black/5 bg-slate-100 transition-shadow hover:shadow-xl dark:border-white/10 dark:bg-slate-800/50"
    >
      <div className="relative h-48 w-full">
        <Image
          src={project.imageUrl}
          alt={`Imagem do projeto ${project.title}`}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
          {project.title}
        </h3>
        <p className="flex-1 text-sm text-slate-600 dark:text-slate-300">
          {project.description}
        </p>

        {/* Tags de Tecnologia */}
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-slate-200 px-2 py-1 text-xs font-medium text-slate-700 dark:bg-slate-700 dark:text-slate-200"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Links no Rodapé do Card */}
      <div className="mt-auto border-t border-black/5 p-4 dark:border-white/10">
        <div className="flex items-center justify-end space-x-4">
          {project.liveUrl !== "#" && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-sm text-slate-600 transition-colors hover:text-blue-500 dark:text-slate-300 dark:hover:text-blue-400"
            >
              <ExternalLink size={16} className="mr-1" />
              Ver online
            </a>
          )}
          {project.repoUrl !== "#" && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-sm text-slate-600 transition-colors hover:text-blue-500 dark:text-slate-300 dark:hover:text-blue-400"
            >
              <Github size={16} className="mr-1" />
              Código
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

// Componente Principal da Secção
const Projects = () => {
  return (
    <section>
      <PageTitle>Projetos</PageTitle>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {projectsData.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Projects;

