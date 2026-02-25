import profilePic from "../assets/profile.jpg";
import { FaGithub, FaLinkedin, FaDownload, FaReact } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiTailwindcss } from "react-icons/si";
import { TbApi } from "react-icons/tb";

interface SidebarProps {
  isSidebarOpen: boolean;
}

export function Sidebar({ isSidebarOpen }: SidebarProps) {
  const technologies = [
    { icon: <FaReact size={18} />, name: "React" },
    { icon: <SiNextdotjs size={18} />, name: "Next.js" },
    { icon: <SiTypescript size={18} />, name: "TypeScript" },
    { icon: <SiTailwindcss size={18} />, name: "Tailwind CSS" },
    { icon: <TbApi size={18} />, name: "APIs REST" },
  ];

  return (
    <aside
      className={`fixed left-0 top-0 h-screen w-72 bg-background/95 border-r border-primary/30 p-6 z-50 transition-transform duration-300
      ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
    >
      <div className="flex flex-col items-center text-center">
        <img
          src={profilePic}
          alt="Foto de perfil de Gabriel Castro"
          className="w-28 h-28 rounded-full object-cover border-2 border-accent shadow-lg shadow-accent/10"
          loading="lazy"
        />

        <h2 className="mt-4 text-2xl font-bold text-secondary">Gabriel Castro</h2>
        <p className="text-secondary/70 text-sm mt-1">Desenvolvedor Front-end</p>

        <div className="mt-4 flex items-center gap-4">
          <a
            href="https://github.com/DevBielCastro"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary/80 hover:text-accent transition-colors"
            aria-label="GitHub"
            title="GitHub"
          >
            <FaGithub size={22} />
          </a>

          <a
            href="https://www.linkedin.com/in/gabriel-castro-9a9745209/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary/80 hover:text-accent transition-colors"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <FaLinkedin size={22} />
          </a>
        </div>

        {/* Botão de Download do CV */}
        <a
          href="/cv.pdf"
          download
          className="mt-5 w-full inline-flex items-center justify-center gap-2 bg-accent text-background font-bold py-3 px-4 rounded-md hover:bg-accent/90 transition-colors"
        >
          <FaDownload />
          Baixar CV
        </a>
      </div>

      <div className="mt-10">
        <h3 className="text-secondary font-semibold mb-4">Top Skills</h3>

        <ul className="space-y-3">
          {technologies.map((tech) => (
            <li
              key={tech.name}
              className="flex items-center gap-3 text-secondary/80"
            >
              <span className="text-accent">{tech.icon}</span>
              <span className="text-sm">{tech.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
