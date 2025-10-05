import React from "react";
import { Project } from "@/types";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";

type ProjectCardProps = {
  project: Project;
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-lg dark:border-slate-800 dark:bg-slate-900/50">
      {/* Imagem do Projeto */}
      <div className="relative h-48 w-full">
        <Image
          src={project.imageUrl}
          alt={`Imagem do projeto ${project.title}`}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        {/* Cabeçalho do Card */}
        <header>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">
            {project.title}
          </h3>
          {project.role && (
            <p className="mt-1 text-sm font-semibold text-indigo-600 dark:text-indigo-400">
              {project.role}
            </p>
          )}
        </header>

        {/* Descrição e Mini-Case */}
        <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
          {project.description}
        </p>

        {project.impact && (
          <div className="mt-4 rounded-md bg-green-50 p-3 text-sm text-green-800 ring-1 ring-inset ring-green-600/20 dark:bg-green-500/10 dark:text-green-300 dark:ring-green-500/20">
            <span className="font-semibold">Impacto:</span> {project.impact}
          </div>
        )}

        {/* Stack de Tecnologias */}
        <div className="mt-auto pt-4">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            Tecnologias
          </p>
          <div className="flex flex-wrap items-center gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="inline-block rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Links no Rodapé */}
      <footer className="border-t border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-900">
        <div className="flex items-center justify-end gap-4">
          {project.liveUrl && project.liveUrl !== "#" && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-medium text-slate-600 transition-colors hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-400"
            >
              <ExternalLink size={16} className="mr-1.5" />
              Ver online
            </a>
          )}
          {project.repoUrl && project.repoUrl !== "#" && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-medium text-slate-600 transition-colors hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-400"
            >
              <Github size={16} className="mr-1.5" />
              Código
            </a>
          )}
        </div>
      </footer>
    </article>
  );
};

export default ProjectCard;
