import Hero from "@/components/sections/Hero";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact"; // 1. Importa a seção de Contato

export default function Home() {
  return (
    <>
      <Hero />
      <Skills />
      <Projects />
      <Contact /> {/* 2. Adiciona a seção à página */}
    </>
  );
}

