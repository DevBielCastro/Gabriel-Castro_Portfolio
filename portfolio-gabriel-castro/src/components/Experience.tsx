import { TimelineItem } from "./TimelineItem";

export function Experience() {
  const experiences = [
    {
      date: "Mar 2025 - Presente",
      role: "Desenvolvedor Backend",
      company: "Fábrica de Software",
      description: [
        "Desenvolvimento e manutenção de APIs REST com Node.js/Express.",
        "Integração front-end/back-end, autenticação via JWT e tratamento centralizado de erros.",
        "Padronização de ambiente com Docker; participação em code reviews e sprints ágeis.",
        "Tecnologias: Node.js, Express, PostgreSQL, Docker, Git."
      ],
    },
    {
      date: "Jun 2016 - Presente",
      role: "Auxiliar Administrativo",
      company: "JA Batista Comércio de Alimentos",
      description: [
        "Controle de planilhas financeiras, suporte em processos licitatórios e gestão de informações entre cooperativas.",
      ],
    },
  ];

  return (
    <section id="experience" className="min-h-screen flex flex-col justify-center py-24 px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-secondary mb-12">
          Experiência Profissional
        </h2>

        <div className="relative">
          {experiences.map((exp, index) => (
            <TimelineItem
              key={index}
              date={exp.date}
              role={exp.role}
              company={exp.company}
              description={exp.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}