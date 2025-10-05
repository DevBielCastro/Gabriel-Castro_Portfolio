"use client";

import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex min-h-[80vh] flex-col justify-center"
    >
      <div className="max-w-3xl">
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
          Gabriel Castro — {" "}
          <span className="text-indigo-600 dark:text-indigo-400">
            Desenvolvedor Fullstack
          </span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-slate-600 dark:text-slate-300">
          Construo aplicações web completas, desde APIs robustas com Node.js e TypeScript até interfaces reativas com React e Next.js. Atualmente, desenvolvo soluções na Fábrica de Software.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="inline-flex items-center rounded-md bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
          >
            Ver projetos
          </a>
          <a
            href="/Gabriel-Castro-CV.pdf"
            download
            className="inline-flex items-center rounded-md border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm transition-colors hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
            aria-label="Baixar meu CV em PDF"
          >
            Baixar CV
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;

