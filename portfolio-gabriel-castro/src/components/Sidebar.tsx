import { FaReact, FaNodeJs, FaDocker, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiPostgresql, SiTypescript } from "react-icons/si";
import profilePic from '../assets/profile.jpg';

export function Sidebar() {
  const technologies = [
    { icon: <FaReact size={20} />, name: "React" },
    { icon: <FaNodeJs size={20} />, name: "Node.js" },
    { icon: <SiTypescript size={20} />, name: "TypeScript" },
    { icon: <FaDocker size={20} />, name: "Docker" },
    { icon: <SiPostgresql size={20} />, name: "PostgreSQL" },
  ];

  const softSkills = ["Comunicação", "Trabalho em Equipe", "Resolução de Problemas", "Proatividade"];

  return (
    <aside className="fixed left-0 top-16 w-64 h-full bg-background border-r border-primary/20 p-6 flex flex-col">
      <div className="flex flex-col items-center mb-8">
        <img 
          src={profilePic}
          alt="Gabriel Castro"
          className="w-28 h-28 rounded-full border-2 border-accent mb-4 object-cover"
        />
        <h2 className="text-2xl font-bold text-secondary">Gabriel Castro</h2>
        <p className="text-sm text-secondary/70">Desenvolvedor Fullstack</p>
      </div>

      <div className="flex justify-center space-x-4 mb-8">
        <a href="https://github.com/DevBielCastro" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-accent transition-colors">
          <FaGithub size={28} />
        </a>
        <a href="https://www.linkedin.com/in/gabriel-castro-9a9745209/" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-accent transition-colors">
          <FaLinkedin size={28} />
        </a>
      </div>

      <div className="mb-8">
        <h3 className="text-lg font-semibold text-secondary mb-4">Tecnologias</h3>
        <ul className="space-y-3">
          {technologies.map((tech) => (
            <li key={tech.name} className="flex items-center space-x-3 text-secondary/80">
              <span className="text-accent">{tech.icon}</span>
              <span>{tech.name}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-secondary mb-4">Soft Skills</h3>
        <div className="flex flex-wrap gap-2">
          {softSkills.map((skill) => (
            <span key={skill} className="bg-primary/50 text-secondary/90 text-xs font-medium px-2.5 py-1 rounded-full">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </aside>
  );
}