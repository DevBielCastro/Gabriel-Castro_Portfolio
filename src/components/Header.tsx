import { FaBars, FaTimes } from 'react-icons/fa';

interface HeaderProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (isOpen: boolean) => void;
}

export function Header({ isSidebarOpen, setIsSidebarOpen }: HeaderProps) {
  const navLinks = [
    { href: "#about", label: "Sobre" },
    { href: "#experience", label: "Experiência" },
    { href: "#projects", label: "Projetos" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contato" },
  ];

  return (
    <header className="bg-background/80 fixed top-0 w-full h-16 flex items-center justify-between px-4 md:px-8 backdrop-blur-sm z-50">
      <div>
        <h1 className="text-lg md:text-xl font-bold text-secondary">
          Gabriel Castro — <span className="text-accent">Front-end Developer</span>
        </h1>
      </div>
      {/* Navegação para Desktop - esconde em telas pequenas */}
      <nav className="hidden md:block">
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
      {/* Botão do Menu Hambúrguer - aparece apenas em telas pequenas */}
      <div className="md:hidden">
        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="text-secondary text-2xl">
          {isSidebarOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </header>
  );

}
