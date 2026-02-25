import { useState } from "react";

import { Sidebar } from "./components/Sidebar";
import { Header } from "./components/Header";

import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  function toggleSidebar() {
    setIsSidebarOpen((prev) => !prev);
  }

  return (
    <div className="min-h-screen bg-background text-secondary">
      {/* Sidebar fixa */}
      <Sidebar isSidebarOpen={isSidebarOpen} />

      {/* ✅ CONTEÚDO (Header + Seções) deslocado no desktop pra não ficar atrás da Sidebar */}
      <div className="md:ml-72">
        <Header onToggleSidebar={toggleSidebar} />

        <main>
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Contact />
        </main>
      </div>
    </div>
  );
}
