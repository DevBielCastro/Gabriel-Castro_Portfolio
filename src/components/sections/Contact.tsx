"use client";

import React from "react";
import { motion } from "framer-motion";
import PageTitle from "../ui/PageTitle";
import { Linkedin, Mail } from "lucide-react";

const Contact = () => {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="text-center"
    >
      <PageTitle>Vamos Conversar</PageTitle>
      <p className="mx-auto mb-8 max-w-xl text-slate-600 dark:text-slate-300">
        Estou sempre aberto a novas oportunidades e colaborações. Se você tem
        um projeto em mente ou acredita que o meu perfil se encaixa na sua
        equipa, não hesite em entrar em contacto.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <a
          href="mailto:gabriel.castrogt10@gmail.com"
          className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
        >
          <Mail size={18} />
          Enviar um E-mail
        </a>
        <a
          href="https://www.linkedin.com/in/devbielcastro/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-md border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm transition-colors hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
        >
          <Linkedin size={18} />
          LinkedIn
        </a>
      </div>
    </motion.section>
  );
};

export default Contact;

