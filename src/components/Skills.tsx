import { FaReact, FaNodeJs, FaDocker, FaGitAlt, FaHtml5, FaCss3Alt, FaPython, FaAws, FaLinux } from "react-icons/fa";
import { SiPostgresql, SiTypescript, SiExpress, SiNextdotjs, SiTailwindcss, SiMongodb, SiVercel, SiVsco, SiGithubactions } from "react-icons/si";

export function Skills() {
  const skillsData = [
    {
      category: "Front-end",
      technologies: [
        { icon: <FaReact size={24} />, name: "React" },
        { icon: <SiNextdotjs size={24} />, name: "Next.js" },
        { icon: <SiTypescript size={24} />, name: "TypeScript" },
        { icon: <SiTailwindcss size={24} />, name: "Tailwind CSS" },
        { icon: <FaHtml5 size={24} />, name: "HTML5" },
        { icon: <FaCss3Alt size={24} />, name: "CSS3" },
      ],
    },
    {
      category: "Back-end",
      technologies: [
        { icon: <FaNodeJs size={24} />, name: "Node.js" },
        { icon: <SiExpress size={24} />, name: "Express.js" },
        { icon: <FaPython size={24} />, name: "Python & Django" },
        { icon: <SiPostgresql size={24} />, name: "PostgreSQL" },
        { icon: <SiMongodb size={24} />, name: "MongoDB" },
      ],
    },
    {
      category: "DevOps & Ferramentas",
      technologies: [
        { icon: <FaDocker size={24} />, name: "Docker" },
        { icon: <SiGithubactions size={24} />, name: "GitHub Actions" },
        { icon: <FaGitAlt size={24} />, name: "Git & GitHub" },
        { icon: <SiVercel size={24} />, name: "Vercel" },
        { icon: <FaAws size={24} />, name: "AWS" },
        { icon: <FaLinux size={24} />, name: "Linux" },
        { icon: <SiVsco size={24} />, name: "VS Code" },
      ],
    },
  ];

  return (
    <section id="skills" className="min-h-screen flex flex-col justify-center py-24 px-12">
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="text-4xl font-bold text-secondary mb-12 text-center md:text-left">
          Habilidades Técnicas
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((skillCategory) => (
            <div key={skillCategory.category} className="bg-primary/30 p-6 rounded-lg border border-transparent hover:border-accent/50 transition-colors">
              <h3 className="text-2xl font-semibold text-accent mb-6">{skillCategory.category}</h3>
              <div className="grid grid-cols-2 gap-4">
                {skillCategory.technologies.map((tech) => (
                  <div key={tech.name} className="flex items-center gap-3 bg-primary/50 p-3 rounded-md transition-transform hover:scale-105 hover:bg-primary">
                    <span className="text-secondary">{tech.icon}</span>
                    <span className="text-secondary/90 text-sm">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}