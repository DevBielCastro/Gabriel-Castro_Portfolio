"use client";

import React from "react";
import { motion } from "framer-motion";
import { educationData } from "@/lib/data";
import PageTitle from "../ui/PageTitle";
import { GraduationCap } from "lucide-react"; // Ícone de formação

// Componente para um item de Formação
const EducationItem = ({
  item,
  index,
}: {
  item: (typeof educationData)[number];
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="flex gap-6"
    >
      {/* Ícone */}
      <div className="flex flex-col items-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-200 dark:bg-slate-800">
          <GraduationCap className="h-6 w-6 text-slate-600 dark:text-slate-300" />
        </div>
      </div>

      {/* Conteúdo da Formação */}
      <div className="flex-1">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              {item.degree}
            </h3>
            <p className="mb-2 text-md text-slate-600 dark:text-slate-400">
              {item.institution} &middot; {item.location}
            </p>
          </div>
          <span className="whitespace-nowrap rounded-full bg-slate-200 px-3 py-1 text-xs font-medium text-slate-700 dark:bg-slate-700 dark:text-slate-200">
            {item.date}
          </span>
        </div>
        <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
};

// Componente Principal da Secção
const Education = () => {
  return (
    <section>
      <PageTitle>Formação Académica</PageTitle>
      <div className="flex flex-col gap-8">
        {educationData.map((item, index) => (
          <EducationItem key={index} item={item} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Education;

