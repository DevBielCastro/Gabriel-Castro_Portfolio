"use client";

import React from "react";
import { motion } from "framer-motion";
import { experienceData } from "@/lib/data";
import PageTitle from "../ui/PageTitle";

const ExperienceCard = ({
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
      className="rounded-lg border border-slate-200 bg-surface-light p-6 shadow-soft-lg transition-shadow hover:shadow-xl dark:border-slate-800 dark:bg-surface-dark"
    >
      <div className="flex flex-col items-start gap-2 sm:flex-row sm:justify-between">
        <div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">
            {item.title}
          </h3>
          <p className="mb-2 text-md font-semibold text-brand-600 dark:text-brand-500">
            {item.company} &middot; {item.location}
          </p>
        </div>
        <span className="whitespace-nowrap rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300">
          {item.date}
        </span>
      </div>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-600 dark:text-slate-300">
        {item.description.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <section id="experience">
      <PageTitle>Experiência Profissional</PageTitle>
      <div className="mt-8 flex flex-col gap-8">
        {experienceData.map((item, index) => (
          <ExperienceCard key={index} item={item} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Experience;

