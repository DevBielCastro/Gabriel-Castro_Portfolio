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
    <div className="min-h-screen bg-background text-secondary overflow-x-hidden">
      {/* Sidebar fixa */}
      <Sidebar isSidebarOpen={isSidebarOpen} />

      {/* ✅ Wrapper do conteúdo com largura controlada */}
      <div className="md:ml-72 w-full">
        {/* ✅ garante que o header não use 100vw */}
        <div className="w-full max-w-full">
          <Header onToggleSidebar={toggleSidebar} />
        </div>

        <main className="w-full max-w-full">
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
