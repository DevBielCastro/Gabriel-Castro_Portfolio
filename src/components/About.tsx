import aboutPhoto from '../assets/about-photo.jpg';
import { SectionWrapper } from './SectionWrapper';

export function About() {
  return (
    <SectionWrapper id="about">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-secondary to-accent">
          Resumo Profissional
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-2/3 text-lg text-secondary/80 space-y-6">
            <p>
              Desenvolvedor Full-Stack com foco na construção de <span className="text-accent/90 font-semibold">APIs REST eficientes com Node.js</span> e <span className="text-accent/90 font-semibold">interfaces dinâmicas com React/Next.js</span>. Minha experiência prática envolve transformar requisitos de negócio em software funcional e escalável.
            </p>
            <p>
              Utilizo <span className="font-semibold">Docker</span> para garantir ambientes de desenvolvimento consistentes e sigo práticas de <span className="font-semibold">Clean Code</span> para criar código de alta manutenibilidade. Busco ativamente minha primeira oportunidade de estágio para aplicar e expandir minhas habilidades, contribuindo para projetos inovadores.
            </p>
          </div>

          <div className="md:w-1/3 flex justify-center">
            <img 
              src={aboutPhoto} 
              alt="Gabriel Castro em um ambiente profissional"
              className="rounded-lg w-80 h-96 object-cover shadow-2xl shadow-primary/30 transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
            <div className="bg-primary/30 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold text-accent mb-4">Formação</h3>
                <p className="text-secondary font-bold">Tecnólogo em Análise e Desenvolvimento de Sistemas</p>
                <p className="text-secondary/80">UNIPÊ – Centro Universitário de João Pessoa</p>
                <p className="text-secondary/60 text-sm mt-1">Conclusão prevista: Dez/2026</p>
            </div>
            <div className="bg-primary/30 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold text-accent mb-4">Idiomas</h3>
                <p className="text-secondary font-bold">Português: <span className="font-normal text-secondary/80">Nativo</span></p>
                <p className="text-secondary font-bold">Inglês: <span className="font-normal text-secondary/80">Intermediário (leitura técnica)</span></p>
            </div>
        </div>
      </div>
    </SectionWrapper>
  );
}