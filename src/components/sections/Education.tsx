"use client";

import React from "react";
import { motion } from "framer-motion";
import { educationData } from "@/lib/data";

const Education = () => {
  return (
    <section>
      <h1 className="mb-8 text-4xl font-bold">Formação Acadêmica</h1>
      <div>
        {educationData.map((item, index) => (
          <motion.div
            key={index}
            className="mb-8 rounded-lg border border-black/5 bg-slate-100 p-6 dark:border-white/10 dark:bg-slate-800/50"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                {item.degree}
              </h3>
              <time className="text-sm font-normal text-slate-500 dark:text-slate-400">
                {item.date}
              </time>
            </div>
            <p className="mb-2 text-base font-normal text-slate-600 dark:text-slate-300">
              {item.institution} &middot; {item.location}
            </p>
            <p className="text-slate-700 dark:text-slate-400">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
