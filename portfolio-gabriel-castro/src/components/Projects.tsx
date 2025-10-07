import { ProjectCard } from "./ProjectCard";
import imgNeurostack from '../assets/project-neurostack.jpg';
import imgRestaurante from '../assets/project-restaurante.jpg';
import imgAdv from '../assets/project-adv.jpg';

export function Projects() {
  const projectData = [
    {
      image: imgNeurostack,
      title: "NeuroStack",
      description: "Plataforma e identidade visual para uma startup de tecnologia, focada em desenvolvimento de soluções web e inteligência artificial. O projeto inclui um site institucional e planejamento de chatbot.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      liveUrl: "https://www.neurostack.com.br/",
      githubUrl: "https://github.com/DevBielCastro/neurostack-site-pessoal",
    },
    {
      image: imgRestaurante,
      title: "Garçom Digital",
      description: "Sistema de gestão completo para restaurantes, com funcionalidades de cardápio digital via QR code, gerenciamento de pedidos e integração com pagamentos online (Mercado Pago).",
      tags: ["React", "Node.js", "PostgreSQL", "API REST"],
      // Sem liveUrl aqui, então o botão não vai aparecer
      githubUrl: "https://github.com/DevBielCastro/Sistema_Restaurante",
    },
    {
      image: imgAdv,
      title: "Gabriel Mário ADV",
      description: "Site institucional estático para um cliente, com foco em um design limpo, profissional e responsivo para apresentar informações de contato e serviços de advocacia.",
      tags: ["HTML5", "CSS3", "JavaScript"],
      liveUrl: "https://www.gabrielmarioadv.com.br/",
      githubUrl: "https://github.com/DevBielCastro/projetositegabrielmarioadv",
    },
  ];

  return (
    <section id="projects" className="min-h-screen flex flex-col justify-center py-24 px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-secondary mb-12">
          Meus Projetos
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}