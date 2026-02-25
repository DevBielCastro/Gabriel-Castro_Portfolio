import { ProjectCard } from "./ProjectCard";
import { SectionWrapper } from "./SectionWrapper";

import imgNeurostack from "../assets/project-neurostack.jpg";
import imgRestaurante from "../assets/project-restaurante.jpg";
import imgAdv from "../assets/project-adv.jpg";

export function Projects() {
  const projectData = [
    {
      image: imgAdv,
      title: "Solução Web para Advocacia",
      description:
        "Desenvolvi um portal com painel administrativo para publicar e gerenciar artigos, com autenticação e fluxo completo de gestão de conteúdo.",
      tags: ["Node.js", "EJS", "JWT", "Dashboard"],
      liveUrl: "https://www.gabrielmarioadv.com.br/",
      githubUrl: "https://github.com/DevBielCastro/projetositegabrielmarioadv",
      caseUrl: "https://github.com/DevBielCastro/projetositegabrielmarioadv#readme",
    },
    {
      image: imgNeurostack,
      title: "Site Institucional NeuroStack",
      description:
        "Construí o website corporativo da NeuroStack com Next.js, focando em performance e design responsivo para apresentar serviços e otimizar captação de clientes.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Front-end"],
      liveUrl: "https://www.neurostack.com.br/",
      githubUrl: "https://github.com/DevBielCastro/neurostack-site-pessoal",
      caseUrl: "https://github.com/DevBielCastro/neurostack-site-pessoal#readme",
    },
    {
      image: imgRestaurante,
      title: "Plataforma de Gestão para Restaurantes",
      description:
        "Criei uma API REST para gestão de pedidos e cardápio, com autenticação e estrutura modular, usando Node.js, Express e PostgreSQL.",
      tags: ["Node.js", "Express", "PostgreSQL", "API REST"],
      githubUrl: "https://github.com/DevBielCastro/Sistema_Restaurante",
      caseUrl: "https://github.com/DevBielCastro/Sistema_Restaurante#readme",
    },
  ];

  return (
    <SectionWrapper id="projects">
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="text-4xl font-bold mb-12 text-secondary">
          Projetos em Destaque
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projectData.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
