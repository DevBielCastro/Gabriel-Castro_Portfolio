import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Experience } from "./components/Experience";
import { Header } from "./components/Header";
import { Projects } from "./components/Projects";
import { Sidebar } from "./components/Sidebar";
import { Skills } from "./components/Skills";

function App() {
  return (
    <main className="min-h-screen bg-background text-gray-300">
      <Header />
      <Sidebar />
      {/* A mudança principal está aqui: pl-64 (padding-left) */}
      <div className="pl-64"> 
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </main>
  );
}

export default App;