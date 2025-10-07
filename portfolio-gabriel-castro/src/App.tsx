import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Experience } from "./components/Experience";
import { Header } from "./components/Header";
import { Projects } from "./components/Projects";
import { Sidebar } from "./components/Sidebar";
import { Skills } from "./components/Skills";

function App() {
  return (
    <main className="min-h-screen bg-gray-900 text-gray-300">
      <Header />
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Contact />
        </div>
      </div>
    </main>
  );
}

export default App;