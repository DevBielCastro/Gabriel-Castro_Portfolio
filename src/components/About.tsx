import aboutPhoto from "../assets/about-photo.jpg";
import { SectionWrapper } from "./SectionWrapper";

export function About() {
  return (
    <SectionWrapper id="about">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-secondary">Sobre mim</h2>

        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-2/3 text-lg text-secondary/80 space-y-6">
            <p>
              <span className="text-accent font-semibold">
                Construo interfaces de produto
              </span>{" "}
              com foco em <span className="font-semibold">UI</span>,{" "}
              <span className="font-semibold">performance</span> e{" "}
              <span className="font-semibold">integrações com APIs</span>.
            </p>

            <p>
              Sou <span className="text-accent/90 font-semibold">Desenvolvedor Front-end</span>{" "}
              em formação, focado em criar interfaces{" "}
              <span className="text-accent/90 font-semibold">
                modernas, responsivas e acessíveis
              </span>{" "}
              com <span className="text-accent/90 font-semibold">React/Next.js</span> e{" "}
              <span className="text-accent/90 font-semibold">TypeScript</span>. Gosto de
              transformar ideias em experiências fluidas, com atenção a detalhes de UI,
              performance e boas práticas.
            </p>

            <p>
              No dia a dia, busco escrever código limpo e manutenível com{" "}
              <span className="font-semibold">componentização</span>,{" "}
              <span className="font-semibold">reuso</span> e{" "}
              <span className="font-semibold">padrões consistentes</span> (ex.: commits
              convencionais). Também tenho base em{" "}
              <span className="font-semibold">back-end (Node/REST/JWT)</span> para integrar
              melhor com APIs e entender o fluxo completo do produto.
            </p>

            <p className="text-secondary/90">
              🎯 Estou em busca de uma oportunidade como{" "}
              <span className="font-semibold">Estágio/Jr Front-end</span> para evoluir em
              time, contribuir com entregas reais e crescer junto com o produto.
            </p>
          </div>

          <div className="md:w-1/3 flex justify-center">
            <img
              src={aboutPhoto}
              alt="Gabriel Castro em um ambiente profissional"
              className="rounded-2xl w-80 h-96 object-cover shadow-2xl shadow-primary/30 transform hover:scale-[1.03] transition-transform duration-300"
              loading="lazy"
            />
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
          <div className="bg-primary/30 p-6 rounded-2xl border border-primary/30">
            <h3 className="text-2xl font-semibold text-accent mb-4">Formação</h3>
            <p className="text-secondary font-bold">
              Tecnólogo em Análise e Desenvolvimento de Sistemas
            </p>
            <p className="text-secondary/90">UNIPÊ – Centro Universitário de João Pessoa</p>
            <p className="text-secondary/90 text-sm mt-1">Conclusão prevista: Dez/2026</p>
          </div>

          <div className="bg-primary/30 p-6 rounded-2xl border border-primary/30">
            <h3 className="text-2xl font-semibold text-accent mb-4">Idiomas</h3>
            <p className="text-secondary font-bold">
              Português: <span className="font-normal text-secondary/90">Nativo</span>
            </p>
            <p className="text-secondary font-bold">
              Inglês:{" "}
              <span className="font-normal text-secondary/90">
                Intermediário (leitura técnica)
              </span>
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
