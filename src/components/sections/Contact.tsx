"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const Contact = () => {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="py-20 text-center"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Entre em Contato</h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
          Estou sempre aberto a novas oportunidades e colaborações. Sinta-se à vontade para entrar em contato.
        </p>
        <a
          href="mailto:gabrielcastro.dev@hotmail.com"
          className="inline-block bg-blue-500 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-600 transition-colors text-lg"
        >
          Mande um E-mail
        </a>
        <div className="flex justify-center gap-6 mt-10">
          <a href="https://github.com/DevBielCastro" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">
            <Github size={32} />
          </a>
          <a href="https://www.linkedin.com/in/gabriel-castro-ara/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">
            <Linkedin size={32} />
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
