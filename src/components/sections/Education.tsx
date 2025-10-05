"use client";

import React from "react";
import { motion } from "framer-motion";
import { educationData } from "@/lib/data";
import PageTitle from "../ui/PageTitle";
import { GraduationCap } from "lucide-react";

// Componente para o Card de Formação
const EducationCard = ({
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
      className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-slate-800 dark:bg-slate-900/50"
    >
      <div className="flex flex-col items-start gap-2 sm:flex-row sm:justify-between">
        <div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">
            {item.degree}
          </h3>
          <p className="mb-2 text-md font-semibold text-indigo-600 dark:text-indigo-400">
            {item.institution} &middot; {item.location}
          </p>
        </div>
        <span className="whitespace-nowrap rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300">
          {item.date}
        </span>
      </div>
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
        {item.description}
      </p>
    </motion.div>
  );
};

const Education = () => {
  return (
    <section id="education">
      <PageTitle>Formação Académica</PageTitle>
      <div className="mt-8 flex flex-col gap-8">
        {educationData.map((item, index) => (
          <EducationCard key={index} item={item} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Education;

