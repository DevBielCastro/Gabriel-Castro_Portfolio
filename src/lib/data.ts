// src/lib/data.ts

export const skillsData = [
  // ... sua lista de skills continua aqui ...
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "JavaScript",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "Prisma",
  "MongoDB",
  "PostgreSQL",
  "Python",
  "Git",
  "Framer Motion",
] as const;

export const projectsData = [
  {
    title: "Garçom Digital",
    description:
      "Aplicação web que moderniza o atendimento em restaurantes. Clientes podem ver o cardápio, fazer pedidos e pagar a conta diretamente pelo celular.",
    tags: ["React", "TypeScript", "Node.js", "Prisma", "PostgreSQL", "Tailwind"],
    imageUrl: "/garcom-digital.png",
    liveUrl: "#", 
    repoUrl: "https://github.com/DevBielCastro/Garcom-Digital",
  },
  {
    title: "NeuroStack",
    description:
      "Plataforma de e-learning focada em neurociência e tecnologia, oferecendo cursos, artigos e ferramentas interativas para estudantes e profissionais.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB", "Framer Motion"],
    imageUrl: "/neurostack.png",
    liveUrl: "#", 
    repoUrl: "#", 
  },
  {
    title: "Gabriel Mario Advocacia",
    description:
      "Landing page para um escritório de advocacia, focada em captar clientes e apresentar as áreas de atuação do escritório de forma clara e profissional.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    imageUrl: "/gabriel-mario-adv.png", // Adicione esta imagem na pasta /public
    liveUrl: "https://www.gabrielmarioadv.com.br/",
    repoUrl: "#",
  },
  {
    title: "Supletivo JP",
    description:
      "Site institucional para uma escola de supletivo, com informações sobre cursos, matrículas e contato, facilitando o acesso dos alunos às informações.",
    tags: ["React", "JavaScript", "Styled-Components"],
    imageUrl: "/supletivo-jp.png", // Adicione esta imagem na pasta /public
    liveUrl: "https://www.supletivojp.com.br/",
    repoUrl: "#",
  },
] as const;

