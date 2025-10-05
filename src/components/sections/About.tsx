"use client";

import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="mb-4 text-4xl font-bold">Sobre Mim</h1>
      <div className="space-y-4 text-slate-700 dark:text-slate-300">
        <p>
          Sou um Desenvolvedor Fullstack apaixonado por transformar desafios complexos em soluções de software eficientes e escaláveis. Com uma abordagem analítica e orientada por dados, o meu principal objetivo é criar APIs robustas e interfaces de utilizador intuitivas que agreguem valor real aos projetos e aos utilizadores finais.
        </p>
        <p>
          A minha jornada na tecnologia é impulsionada pela curiosidade e por um compromisso constante com a excelência. Tenho experiência sólida com o ecossistema JavaScript/TypeScript, incluindo a construção de aplicações modernas com <strong className="font-semibold text-slate-900 dark:text-white">React, Next.js, Node.js e Express</strong>. Além disso, estou familiarizado com a implementação de bases de dados SQL e NoSQL, e a aplicação de boas práticas de desenvolvimento como os princípios S.O.L.I.D. e Design Patterns.
        </p>
        <p>
          Acredito na colaboração e na melhoria contínua. Gosto de trabalhar em equipas ágeis, onde posso contribuir não apenas com código, mas também no refinamento de processos para entregar resultados de alta qualidade.
        </p>
        <p>
          Sinta-se à vontade para explorar os meus projetos e a minha trajetória profissional. Se tiver alguma pergunta ou oportunidade, não hesite em <a href="mailto:gabriel.castrogt10@gmail.com" className="font-semibold text-blue-600 underline hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">entrar em contacto</a>.
        </p>
      </div>
    </motion.section>
  );
};

export default About;

