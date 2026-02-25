import { useEffect, useState } from "react";

type HeaderProps = {
  onToggleSidebar?: () => void;
};

export function Header({ onToggleSidebar }: HeaderProps) {
  const [active, setActive] = useState<string>("about");

  useEffect(() => {
    const ids = ["about", "experience", "projects", "skills", "contact"];

    function onScroll() {
      const scrollY = window.scrollY + 120;

      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i]);
        if (el && el.offsetTop <= scrollY) {
          setActive(ids[i]);
          break;
        }
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkClass = (id: string) =>
    `text-sm transition-colors ${
      active === id ? "text-accent font-semibold" : "text-secondary/70 hover:text-accent"
    }`;

  return (
    // ✅ NUNCA use w-screen/100vw aqui. Isso causa o corte.
    <header className="w-full max-w-full overflow-x-hidden px-6 pt-6">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 min-w-0">
          {/* Botão de menu no mobile (se você usa sidebar mobile) */}
          {onToggleSidebar && (
            <button
              type="button"
              onClick={onToggleSidebar}
              className="md:hidden text-secondary/80 hover:text-accent transition-colors"
              aria-label="Abrir menu"
              title="Abrir menu"
            >
              ☰
            </button>
          )}

          <h1 className="text-lg font-semibold text-secondary truncate">
            Gabriel Castro — <span className="text-accent">Desenvolvedor Front-end</span>
          </h1>
        </div>

        {/* ✅ Menu alinhado e sem estourar */}
        <nav className="hidden sm:flex items-center gap-6 flex-shrink-0">
          <a className={linkClass("about")} href="#about">
            Sobre
          </a>
          <a className={linkClass("experience")} href="#experience">
            Experiência
          </a>
          <a className={linkClass("projects")} href="#projects">
            Projetos
          </a>
          <a className={linkClass("skills")} href="#skills">
            Skills
          </a>
          <a className={linkClass("contact")} href="#contact">
            Contato
          </a>
        </nav>
      </div>
    </header>
  );
}
