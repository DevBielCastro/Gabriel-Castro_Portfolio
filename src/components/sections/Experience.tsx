"use client";

import React from "react";
import { motion } from "framer-motion";
import { experienceData } from "@/lib/data";
import PageTitle from "../ui/PageTitle";
import { Briefcase } from "lucide-react";

// Componente para um item de Experiência
const ExperienceItem = ({
  item,
  index,
}: {
  item: (typeof experienceData)[number];
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="flex gap-6"
    >
      {/* Ícone e Linha do Tempo */}
      <div className="flex flex-col items-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-200 dark:bg-slate-800">
          <Briefcase className="h-6 w-6 text-slate-600 dark:text-slate-300" />
        </div>
        {/* Linha vertical conectora (opcional) */}
        {index < experienceData.length - 1 && (
          <div className="h-full w-px bg-slate-200 dark:bg-slate-700"></div>
        )}
      </div>

      {/* Conteúdo da Experiência */}
      <div className="flex-1 pb-10">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              {item.title}
            </h3>
            <p className="mb-2 text-md text-slate-600 dark:text-slate-400">
              {item.company} &middot; {item.location}
            </p>
          </div>
          <span className="whitespace-nowrap rounded-full bg-slate-200 px-3 py-1 text-xs font-medium text-slate-700 dark:bg-slate-700 dark:text-slate-200">
            {item.date}
          </span>
        </div>
        <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-slate-700 dark:text-slate-300">
          {item.description.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

// Componente Principal da Secção
const Experience = () => {
  return (
    <section>
      <PageTitle>Experiência Profissional</PageTitle>
      <div className="flex flex-col">
        {experienceData.map((item, index) => (
          <ExperienceItem key={index} item={item} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Experience;

