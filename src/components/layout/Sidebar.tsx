"use client";

import React, { memo, useCallback } from "react";
import Image from "next/image";
import { Github, Linkedin, Mail } from "lucide-react";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { skillsData } from "@/lib/data";

const SIDEBAR_DATA = {
  name: "Gabriel Castro",
  title: "Desenvolvedor Fullstack",
  image: {
    url: "/profile-photo.jpg",
    alt: "Foto de perfil de Gabriel Castro",
    dimensions: 128,
  },
  nav: [
    { name: "Sobre Mim", href: "#about" },
    { name: "Projetos", href: "#projects" },
    { name: "Experiência", href: "#experience" },
    { name: "Formação", href: "#education" },
    { name: "Contato", href: "#contact" },
  ],
  social: [
    { icon: Github, href: "https://github.com/DevBielCastro", label: "GitHub" },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/devbielcastro/",
      label: "LinkedIn",
    },
    {
      icon: Mail,
      href: "mailto:gabriel.castrogt10@gmail.com",
      label: "E-mail",
    },
  ],
} as const;

const SkillChip = memo(({ skill }: { skill: string }) => (
  <span className="rounded-full bg-slate-200 px-3 py-1 text-xs font-medium text-slate-700 transition-colors dark:bg-slate-800 dark:text-slate-200">
    {skill}
  </span>
));
SkillChip.displayName = "SkillChip";

const NavItem = memo(
  ({ item }: { item: (typeof SIDEBAR_DATA.nav)[number] }) => (
    <li>
      <a
        href={item.href}
        className="block rounded-md px-4 py-2 text-slate-600 transition-colors hover:bg-brand-50 hover:text-brand-600 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-50"
        aria-label={`Navegar para ${item.name}`}
      >
        {item.name}
      </a>
    </li>
  )
);
NavItem.displayName = "NavItem";

const SocialLink = memo(
  ({ item }: { item: (typeof SIDEBAR_DATA.social)[number] }) => {
    const Icon = item.icon;
    const isExternal = item.href.startsWith("http");
    return (
      <a
        href={item.href}
        aria-label={`Visitar ${item.label}`}
        {...(isExternal && { target: "_blank", rel: "noopener noreferrer" })}
        className="rounded-full p-2 text-slate-500 transition-colors hover:bg-slate-100 hover:text-brand-500 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-brand-500"
      >
        <Icon size={20} aria-hidden="true" />
      </a>
    );
  }
);
SocialLink.displayName = "SocialLink";

const Sidebar = memo(() => {
  const renderSkills = useCallback(
    () =>
      skillsData
        .slice(0, 7)
        .map((skill) => <SkillChip key={skill} skill={skill} />),
    []
  );

  return (
    <aside className="fixed top-0 left-0 z-50 flex h-screen w-80 flex-col justify-between border-r border-slate-200 bg-surface-light p-8 dark:border-slate-800 dark:bg-surface-dark overflow-y-auto">
      <div className="flex flex-col space-y-8">
        <section aria-labelledby="profile-heading">
          <div className="flex flex-col items-center text-center">
            <div className="relative mb-4">
              <Image
                src={SIDEBAR_DATA.image.url}
                alt={SIDEBAR_DATA.image.alt}
                width={SIDEBAR_DATA.image.dimensions}
                height={SIDEBAR_DATA.image.dimensions}
                quality={90}
                priority
                className="h-32 w-32 rounded-full border-4 border-white object-cover shadow-lg transition-transform hover:scale-105 dark:border-surface-dark"
              />
            </div>

            <h1
              id="profile-heading"
              className="mb-2 text-2xl font-bold text-slate-900 dark:text-white"
            >
              {SIDEBAR_DATA.name}
            </h1>
            <p className="mb-6 text-md text-slate-600 dark:text-slate-400">
              {SIDEBAR_DATA.title}
            </p>
          </div>

          <div
            className="flex flex-wrap justify-center gap-2"
            aria-label="Habilidades técnicas"
          >
            {renderSkills()}
          </div>
        </section>

        <nav aria-label="Navegação principal">
          <ul className="space-y-2">
            {SIDEBAR_DATA.nav.map((item) => (
              <NavItem key={item.name} item={item} />
            ))}
          </ul>
        </nav>
      </div>

      <div className="flex flex-col items-center space-y-4">
        <div
          className="flex space-x-2"
          aria-label="Links para redes sociais"
        >
          {SIDEBAR_DATA.social.map((item) => (
            <SocialLink key={item.label} item={item} />
          ))}
        </div>

        <ThemeSwitcher />
      </div>
    </aside>
  );
});

Sidebar.displayName = "Sidebar";
export default Sidebar;

