"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <motion.section
      id="home"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex items-center pt-24 pb-12"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Coluna do Texto */}
          <div className="md:w-1/2 text-center md:text-left">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold leading-tight mb-4"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Gabriel Castro
            </motion.h1>
            <motion.h2 
              className="text-2xl md:text-3xl font-light text-blue-500 mb-6"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Desenvolvedor Fullstack
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto md:mx-0 mb-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Apaixonado por transformar ideias em soluções de software eficientes e escaláveis, com foco em criar experiências de usuário memoráveis.
            </motion.p>
            <motion.div 
              className="flex justify-center md:justify-start gap-4"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <a href="https://github.com/DevBielCastro" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-gray-800 dark:bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors">
                <Github size={20} />
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/gabriel-castro-ara/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-gray-800 dark:border-gray-600 text-gray-800 dark:text-white font-semibold py-3 px-6 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors">
                <Linkedin size={20} />
                LinkedIn
              </a>
            </motion.div>
          </div>

          {/* Coluna da Imagem */}
          <motion.div 
            className="md:w-1/3"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5, type: "spring" }}
          >
            <div className="relative w-72 h-72 lg:w-96 lg:h-96 mx-auto">
              <Image
                src="/profile-photo.jpg"
                alt="Foto de Gabriel Castro"
                fill
                className="rounded-full object-cover border-4 border-white dark:border-slate-700 shadow-lg"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;

