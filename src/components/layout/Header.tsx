// src/components/layout/Header.tsx
import React from 'react';
import { ThemeSwitcher } from './ThemeSwitcher'; // 1. Importa o botão de tema

const Header = () => {
  return (
    // Adiciona um fundo semi-transparente e efeito de blur
    <header className="fixed top-0 left-0 w-full bg-gray-50/80 dark:bg-gray-900/80 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">
          Gabriel<span className="text-blue-500">.</span>
        </div>
        <nav>
          <ul className="flex items-center space-x-6 md:space-x-8">
            <li><a href="#projects" className="hover:text-blue-500 transition-colors">Projetos</a></li>
            <li><a href="#skills" className="hover:text-blue-500 transition-colors">Skills</a></li>
            <li><a href="#contact" className="hover:text-blue-500 transition-colors">Contato</a></li>
            <li><ThemeSwitcher /></li> {/* 2. Adiciona o componente do botão aqui */}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

