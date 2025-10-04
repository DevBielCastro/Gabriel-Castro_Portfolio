"use client";

import React from "react";
import { skillsData } from "@/lib/data";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Minhas <span className="text-blue-500">Habilidades</span>
        </motion.h2>
        
        {/* Painel com efeito de vidro */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto p-8 rounded-lg shadow-lg
                     bg-white/50 dark:bg-slate-800/50
                     backdrop-blur-sm 
                     border border-black/5 dark:border-white/10"
        >
          <ul className="flex flex-wrap justify-center gap-3">
            {skillsData.map((skill, index) => (
              <motion.li
                key={index}
                className="bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 
                           font-medium px-4 py-2 rounded-lg
                           border border-black/5 dark:border-white/10
                           hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors"
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{
                  once: true,
                }}
                custom={index}
              >
                {skill}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

