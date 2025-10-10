import { ProjectCard } from "./ProjectCard";
import { SectionWrapper } from "./SectionWrapper";
import imgNeurostack from '../assets/project-neurostack.jpg';
import imgRestaurante from '../assets/project-restaurante.jpg';
import imgAdv from '../assets/project-adv.jpg';

export function Projects() {
  const projectData = [
    {
      image: imgAdv,
      title: "Solução Web para Advocacia",
      description: "Desenvolvi um portal completo com painel de gerenciamento (Node.js, EJS), que permitiu ao cliente total autonomia para publicar e gerenciar artigos, fortalecendo sua presença digital.",
      tags: ["Node.js", "EJS", "JWT", "Full-Stack"],
      liveUrl: "https://www.gabrielmarioadv.com.br/",
      githubUrl: "https://github.com/DevBielCastro/projetositegabrielmarioadv",
    },
    {
      image: imgNeurostack,
      title: "Site Institucional NeuroStack",
      description: "Construí o website corporativo da NeuroStack com Next.js, focando em performance e design responsivo para apresentar o portfólio de serviços e otimizar a captação de clientes.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Front-end"],
      liveUrl: "https://www.neurostack.com.br/",
      githubUrl: "https://github.com/DevBielCastro/neurostack-site-pessoal",
    },
    {
      image: imgRestaurante,
      title: "Plataforma de Gestão para Restaurantes",
      description: "Criei a API REST para uma plataforma de gestão, cobrindo funcionalidades de cardápio digital, gerenciamento de pedidos e autenticação, utilizando Node.js, Express e PostgreSQL.",
      tags: ["Node.js", "Express", "PostgreSQL", "Back-end"],
      githubUrl: "https://github.com/DevBielCastro/Sistema_Restaurante",
    },
  ];

  return (
    <SectionWrapper id="projects">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-secondary to-accent">
          Projetos em Destaque
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}