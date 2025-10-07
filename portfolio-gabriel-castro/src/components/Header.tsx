export function Header() {
  const navLinks = [
    { href: "#about", label: "Sobre" },
    { href: "#experience", label: "Experiência" },
    { href: "#projects", label: "Projetos" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contato" },
  ];

  return (
    <header className="bg-background/80 fixed top-0 w-full h-16 flex items-center justify-between px-8 backdrop-blur-sm z-50">
      <div>
        <h1 className="text-xl font-bold text-secondary">
          Gabriel Castro — <span className="text-accent">Fullstack Developer</span>
        </h1>
      </div>
      <nav>
        <ul className="flex items-center space-x-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-secondary hover:text-accent transition-colors duration-300">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}