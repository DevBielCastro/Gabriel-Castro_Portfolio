import { Project } from "@/types";

// Dados das Habilidades (Skills)
export const skillsData = [
  "TypeScript",
  "JavaScript",
  "Node.js",
  "Express",
  "Python",
  "Django",
  "PostgreSQL",
  "MongoDB",
  "Docker",
  "Git",
  "Tailwind CSS",
  "React",
  "Next.js",
  "Prisma",
] as const;

// Dados dos Projetos com Mini-Cases
export const projectsData: Project[] = [
  {
    id: "garcom-digital",
    title: "Garçom Digital",
    role: "Fullstack Developer",
    description:
      "Aplicação que moderniza o atendimento em restaurantes, permitindo que os clientes façam pedidos e pagamentos diretamente pelo telemóvel.",
    stack: ["React", "TypeScript", "Node.js", "MongoDB", "Tailwind CSS"],
    imageUrl: "/garcom-digital.png",
    liveUrl: "#",
    repoUrl: "https://github.com/DevBielCastro/Sistema_Restaurante",
    challenge:
      "Digitalizar o fluxo de um restaurante, desde o pedido à cozinha até ao pagamento, de forma a reduzir erros e otimizar o tempo dos funcionários.",
    solution:
      "Construí uma API REST com Node.js para gerir os pedidos e um front-end reativo com React e TypeScript para a interação do cliente.",
    impact:
      "O sistema oferece uma base para a redução do tempo de espera, diminuição de erros nos pedidos e uma melhor experiência geral para o cliente.",
  },
  {
    id: "neurostack",
    title: "NeuroStack - Gestor de Projetos",
    role: "Fullstack Developer",
    description:
      "Plataforma de gerenciamento de projetos e tarefas para equipes de desenvolvimento, com quadros Kanban, timelines e relatórios.",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Auth.js"],
    imageUrl: "/neurostack.png",
    liveUrl: "https://www.neurostack.com.br/",
    repoUrl: "https://github.com/DevBielCastro/neurostack-site-pessoal",
    challenge:
      "Criar um sistema de gestão de projetos que fosse ao mesmo tempo completo em funcionalidades e intuitivo para o utilizador final.",
    solution:
      "Desenvolvi uma arquitetura fullstack com Next.js para o front-end e back-end, Prisma para o ORM e PostgreSQL para a base de dados, focando numa UI reativa.",
    impact:
      "O resultado é uma ferramenta robusta que centraliza a gestão de tarefas, melhora a colaboração e fornece uma base escalável para futuras funcionalidades.",
  },
  {
    id: "gabriel-mario-adv",
    title: "Gabriel Mario Advocacia",
    role: "Frontend Developer",
    description:
      "Website institucional para um escritório de advocacia, com design moderno, responsivo e focado em apresentar os serviços e a equipe.",
    stack: ["HTML", "CSS", "JavaScript", "Responsivo"],
    imageUrl: "/gabriel-mario-adv.png",
    liveUrl: "https://www.gabrielmarioadv.com.br/",
    repoUrl: "https://github.com/DevBielCastro/projetositegabrielmarioadv",
    challenge:
      "Desenvolver uma presença online profissional para um escritório de advocacia, que transmitisse confiança e fosse acessível em todos os dispositivos.",
    solution:
      "Criei um site institucional totalmente responsivo com foco num design limpo, tipografia clara e carregamento rápido para garantir a melhor experiência ao utilizador.",
    impact:
      "O site fortaleceu a imagem digital do escritório, melhorou a captação de novos clientes e apresentou os serviços de forma clara e profissional.",
  },
  {
    id: "supletivo-jp",
    title: "Supletivo JP",
    role: "Web Developer",
    description:
      "Plataforma educacional para um curso supletivo, permitindo matrículas online, acesso a materiais e comunicação com a instituição.",
    stack: ["WordPress", "PHP", "MySQL", "Elementor"],
    imageUrl: "/supletivo-jp.png",
    liveUrl: "https://www.supletivojp.com.br/",
    repoUrl: "https://github.com/DevBielCastro/supletivojp",
    challenge:
      "Disponibilizar uma plataforma online para um curso, permitindo que os alunos se matriculem e acedam a materiais de forma fácil e centralizada.",
    solution:
      "Implementei e personalizei uma solução em WordPress, configurando formulários de matrícula, uma área de membros para o conteúdo e otimizando a navegação.",
    impact:
      "A plataforma automatizou o processo de matrícula, ampliou o alcance do curso e tornou o acesso aos materiais mais conveniente para os alunos.",
  },
];

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

