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
              Olá! Sou <span className="font-semibold text-accent/90">Gabriel Castro</span>, desenvolvedor <span className="font-semibold">Fullstack</span> e estudante de <span className="font-semibold">Análise e Desenvolvimento de Sistemas (ADS)</span>, apaixonado por tecnologia e por transformar ideias em soluções digitais escaláveis e de alto desempenho.
            </p>
            <p>
              Com uma base sólida no ecossistema <span className="font-semibold">JavaScript/TypeScript</span>, foco na construção de aplicações modernas com <span className="font-semibold">React, Next.js e Node.js</span>, venho desenvolvendo projetos completos que unem performance, design e boas práticas de código. Entre eles, destaco sistemas de gestão como o <span className="text-accent/90 font-semibold">"Garçom Digital"</span> e a criação da identidade e plataforma da <span className="text-accent/90 font-semibold">"Neurostack"</span>.
            </p>
            <p>
              Atualmente, estou me aprimorando em arquitetura backend com <span className="font-semibold">Node.js</span>, integração de serviços e práticas de <span className="font-semibold">DevOps</span>, utilizando ferramentas como <span className="font-semibold">Docker, AWS, Google Cloud</span> e <span className="font-semibold">Vercel</span> para deploy e automação de ambientes. Busco minha <span className="font-semibold">primeira grande oportunidade profissional</span> para colaborar em projetos desafiadores, contribuir com equipes experientes e continuar evoluindo como desenvolvedor.
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