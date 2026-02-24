import { FaReact, FaNodeJs, FaDocker, FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import { SiPostgresql, SiTypescript } from "react-icons/si";
import profilePic from '../assets/profile.jpg';

interface SidebarProps {
  isSidebarOpen: boolean;
}

export function Sidebar({ isSidebarOpen }: SidebarProps) {
  const technologies = [
    { icon: <FaReact size={20} />, name: "React" },
    { icon: <FaNodeJs size={20} />, name: "Node.js" },
    { icon: <SiTypescript size={20} />, name: "TypeScript" },
    { icon: <FaDocker size={20} />, name: "Docker" },
    { icon: <SiPostgresql size={20} />, name: "PostgreSQL" },
  ];

  return (
    <aside className={`fixed left-0 top-16 w-64 h-full bg-background border-r border-primary/20 p-6 flex flex-col z-40
                       transform transition-transform duration-300 ease-in-out
                       ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
                       md:translate-x-0`}>
      <div className="flex flex-col items-center">
        <img 
          src={profilePic}
          alt="Gabriel Castro"
          className="w-28 h-28 rounded-full border-2 border-accent mb-4 object-cover"
        />
        <h2 className="text-2xl font-bold text-secondary">Gabriel Castro</h2>
        <p className="text-sm text-secondary/70 mb-4">Desenvolvedor Front-end</p>
      </div>

      <div className="flex justify-center space-x-4">
        <a href="https://github.com/DevBielCastro" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-accent transition-colors">
          <FaGithub size={28} />
        </a>
        <a href="https://www.linkedin.com/in/gabriel-castro-9a9745209/" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-accent transition-colors">
          <FaLinkedin size={28} />
        </a>
      </div>

      {/* Botão de Download do CV */}
      <div className="mt-6 w-full">
        <a 
          href="/Gabriel-Castro-CV.pdf" 
          download
          className="flex items-center justify-center gap-2 w-full bg-accent text-background font-bold py-2 px-4 rounded-md hover:bg-accent/80 transition-colors"
        >
          <FaDownload />
          Baixar CV
        </a>
      </div>

      <div className="mt-8 mb-8 border-t border-primary/30"></div>

      <div>
        <h3 className="text-lg font-semibold text-secondary mb-4">Top Skills</h3>
        <ul className="space-y-3">
          {technologies.map((tech) => (
            <li key={tech.name} className="flex items-center space-x-3 text-secondary/80">
              <span className="text-accent">{tech.icon}</span>
              <span>{tech.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );

}
