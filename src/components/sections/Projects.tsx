"use client";

import React from "react";
import Image from "next/image";
import { projectsData } from "@/lib/data";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Meus <span className="text-blue-500">Projetos</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              {/* Card com efeito de vidro */}
              <div className="relative overflow-hidden rounded-lg shadow-lg 
                             bg-white/50 dark:bg-slate-800/50
                             backdrop-blur-sm 
                             border border-black/5 dark:border-white/10
                             h-full flex flex-col transition-all duration-300
                             hover:shadow-xl hover:-translate-y-1">

                <div className="relative w-full h-56">
                  <Image
                    src={project.imageUrl}
                    alt={`Imagem do projeto ${project.title}`}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 flex-grow">
                    {project.description}
                  </p>
                  
                  {/* Tags de Tecnologia */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-semibold px-2.5 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links no Rodapé do Card */}
                <div className="p-6 pt-0 mt-auto border-t border-black/5 dark:border-white/10 flex items-center justify-between">
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Clique para saber mais
                    </p>
                    <div className="flex items-center gap-4">
                        {/* CORREÇÃO APLICADA AQUI */}
                        {project.repoUrl && project.repoUrl !== "#" && (
                            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" aria-label="Ver código no GitHub" className="text-slate-600 dark:text-slate-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                                <Github size={22} />
                            </a>
                        )}
                        {project.liveUrl && (
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label="Ver projeto ao vivo" className="text-slate-600 dark:text-slate-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                                <ExternalLink size={22} />
                            </a>
                        )}
                    </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

