import { TimelineItem } from "./TimelineItem";
import { SectionWrapper } from "./SectionWrapper";

export function Experience() {
  const experiences = [
    {
      date: "Mar 2025 - Set 2025 (7 meses)",
      role: "Desenvolvimento de APIs & Integração (Estágio)",
      company: "Fábrica de Software",
      description: [
        "Projetei e implementei APIs REST para gerenciamento de produtos e pedidos, garantindo contatos estáveis entre back-end e front-end.",
        "Desenvolvimento em Node.js/Express; integração com front-end React/Next.js e bancos relacionais.",
        "Implementei autenticação baseada em JWT, validação de entrada e tratamento centralizado de erros.",
        "Containerização com Docker e documentação das rotinas de integração; participação em fluxos de deploy e versionamento com Git.",
      ],
    },
    {
      date: "Jun 2016 - Out 2025 (9+ anos)",
      role: "Gestão de Dados, Processos & Relacionamento com Usuário",
      company: "JA Batista Comércio de Alimentos LTDA",
      description: [
        "Estruturei e mantive planilhas e relatórios de performance operacional e financeira para suporte à tomada de decisão.",
        "Realizei coleta de requisitos diretamente com clientes e fornecedores, transformando feedback em mudanças processuais e em requisitos de sistema.",
        "Mapeei e padronizei processos operacionais, criando checklists e documentação que reduziram retrabalho e erros.",
        "Automatizei rotinas manuais com fórmulas e modelos de dados, melhorando a eficiência das operações.",
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