// Dados das Habilidades (Skills)
export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind CSS",
  "Prisma",
  "MongoDB",
  "Redux",
  "Express",
  "PostgreSQL",
  "Python",
  "Framer Motion",
] as const;

// Dados dos Projetos
export const projectsData = [
  {
    title: "Garçom Digital",
    description:
      "Aplicação web que moderniza o atendimento em restaurantes. Clientes podem ver o cardápio, fazer pedidos e pagar a conta diretamente pelo celular.",
    tags: ["React", "TypeScript", "Node.js", "MongoDB", "Tailwind CSS"],
    imageUrl: "/garcom-digital.png",
    liveUrl: "#",
    repoUrl: "https://github.com/DevBielCastro/Sistema_Restaurante",
  },
  {
    title: "NeuroStack",
    description:
      "Plataforma de gerenciamento de projetos e tarefas para equipes de desenvolvimento, com quadros Kanban, timelines e relatórios.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Auth.js"],
    imageUrl: "/neurostack.png",
    liveUrl: "https://www.neurostack.com.br/",
    repoUrl: "https://github.com/DevBielCastro/neurostack-site-pessoal",
  },
  {
    title: "Gabriel Mario Advocacia",
    description:
      "Website institucional para um escritório de advocacia, com design moderno, responsivo e focado em apresentar os serviços e a equipe.",
    tags: ["HTML", "CSS", "JavaScript", "Responsivo"],
    imageUrl: "/gabriel-mario-adv.png",
    liveUrl: "https://www.gabrielmarioadv.com.br/",
    repoUrl: "#",
  },
  {
    title: "Supletivo JP",
    description:
      "Plataforma educacional para um curso supletivo, permitindo matrículas online, acesso a materiais e comunicação com a instituição.",
    tags: ["WordPress", "PHP", "MySQL", "Elementor"],
    imageUrl: "/supletivo-jp.png",
    liveUrl: "https://www.supletivojp.com.br/",
    repoUrl: "#",
  },
] as const;

// Dados de Experiência Profissional
export const experienceData = [
  {
    title: "Desenvolvedor Backend",
    company: "A Fábrica de Software",
    location: "João Pessoa, PB",
    description: [
      "Criação e integração de APIs robustas e escaláveis, alinhadas às demandas dos clientes e metas da empresa.",
      "Atuação na manutenção e modernização de sistemas legados, ampliando a visão sobre desafios de infraestrutura.",
      "Colaboração com equipes multidisciplinares em ambiente ágil, contribuindo para o refinamento de processos e entrega de resultados.",
      "Resolução de problemas com abordagem analítica e orientada por dados, buscando inovações que agreguem valor.",
    ],
    date: "Mar 2025 - Presente",
  },
  {
    title: "Auxiliar Administrativo",
    company: "JA Batista Comercio de Alimentos",
    location: "João Pessoa, PB",
    description: [
      "Criação e controle de planilhas financeiras para acompanhamento detalhado das contas de clientes.",
      "Responsável pelo ciclo completo de participação em licitações e chamamentos públicos.",
      "Gestão do fluxo de informações e planilhas de comissões junto a 7 cooperativas parceiras.",
    ],
    date: "Jun 2016 - Presente",
  },
] as const;

// Dados de Formação Acadêmica
export const educationData = [
  {
    degree: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
    institution: "UNIPÊ - Centro Universitário de João Pessoa",
    location: "João Pessoa, PB",
    description:
      "Curso focado no desenvolvimento de software, abrangendo desde a lógica de programação e algoritmos até a construção de sistemas web e mobile, com ênfase em tecnologias de mercado.",
    date: "2024 - 2026 (Em andamento)",
  },
] as const;

