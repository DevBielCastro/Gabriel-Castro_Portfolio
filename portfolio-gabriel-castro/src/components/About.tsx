import aboutPhoto from '../assets/about-photo.jpg';

export function About() {
  return (
    <section id="about" className="min-h-screen flex flex-col justify-center py-24 px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-secondary mb-12">
          Sobre Mim
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-16">
          {/* Coluna de Texto */}
          <div className="md:w-2/3 text-lg text-secondary/80 space-y-6">
            <p>
              Olá! Sou Gabriel Castro, um desenvolvedor Fullstack e estudante de Análise e Desenvolvimento de Sistemas (ADS) apaixonado por transformar ideias em soluções tecnológicas robustas e eficientes.
            </p>
            <p>
              Com uma base sólida no ecossistema JavaScript/TypeScript, meu foco está na construção de aplicações modernas utilizando React, Next.js e Node.js. Tenho experiência prática desenvolvendo projetos complexos, desde sistemas de gestão como o <span className="text-accent/90 font-semibold">"Garçom Digital"</span> até a concepção da identidade e plataforma da <span className="text-accent/90 font-semibold">"Neurostack"</span>.
            </p>
            <p>
              Estou sempre explorando novas tecnologias, incluindo DevOps com Docker e desenvolvimento backend com Python. Atualmente, busco minha primeira oportunidade de estágio para aplicar meu conhecimento, colaborar com equipes experientes e contribuir para projetos desafiadores.
            </p>
          </div>

          {/* Coluna da Imagem */}
          <div className="md:w-1/3 flex justify-center">
            <img 
              src={aboutPhoto} 
              alt="Gabriel Castro em um ambiente profissional"
              className="rounded-lg w-80 h-96 object-cover shadow-2xl shadow-primary/30 transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
}