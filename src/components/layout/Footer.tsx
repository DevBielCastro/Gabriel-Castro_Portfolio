import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 dark:border-white/10">
      <div className="container mx-auto px-4 py-6 text-center text-gray-500 dark:text-gray-400">
        <small className="mb-2 block text-xs">
          &copy; {currentYear} Gabriel Castro. Todos os direitos reservados.
        </small>
        <p className="text-xs">
          <span className="font-semibold">Desenvolvido com</span> React & Next.js, TypeScript, Tailwind CSS, e Framer Motion.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
