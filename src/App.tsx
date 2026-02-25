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

      {/* ✅ AQUI está a correção: padding-left no desktop (NÃO margin-left) */}
      <div className="w-full md:pl-72">
        <Header onToggleSidebar={toggleSidebar} />

        <main className="w-full">
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
