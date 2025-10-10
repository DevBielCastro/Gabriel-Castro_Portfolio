import { TimelineItem } from "./TimelineItem";
import { SectionWrapper } from "./SectionWrapper";

export function Experience() {
  const experiences = [
    {
      date: "Mar 2025 - Set 2025 (7 meses)",
      role: "Desenvolvedor Backend (Estágio)",
      company: "Fábrica de Software",
      description: [
        "Desenvolvi e mantive APIs REST com Node.js/Express para gerenciar o fluxo de dados de produtos e pedidos.",
        "Implementei um sistema de autenticação com JWT e centralizei o tratamento de erros, aumentando a segurança e a resiliência da aplicação.",
        "Utilizei Docker para criar e manter ambientes de desenvolvimento padronizados, simplificando o processo de setup para a equipe.",
      ],
    },
    {
      date: "Jun 2016 - Out 2025 (9+ anos)",
      role: "Auxiliar Administrativo",
      company: "JA Batista Comércio de Alimentos",
      description: [
        "Responsável pela gestão de planilhas financeiras e suporte em processos organizacionais, desenvolvendo habilidades de organização e comunicação.",
      ],
    },
  ];

  return (
    <SectionWrapper id="experience">
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="text-4xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-secondary to-accent">
          Experiência Profissional
        </h2>
        <div className="relative">
          {experiences.map((exp, index) => (
            <TimelineItem key={index} {...exp} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}