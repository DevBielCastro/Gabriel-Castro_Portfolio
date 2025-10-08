import { FaGithub, FaLink } from "react-icons/fa";

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  githubUrl: string;
}

export function ProjectCard({ image, title, description, tags, liveUrl, githubUrl }: ProjectCardProps) {
  return (
    <article className="bg-primary/50 rounded-lg overflow-hidden flex flex-col group transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent/20">
      <div className="overflow-hidden">
        <img src={image} alt={`Imagem do projeto ${title}`} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
      </div>

      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-2xl font-bold text-secondary mb-2">{title}</h3>
        <p className="text-secondary/70 text-sm mb-4 flex-grow">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span key={tag} className="text-xs font-semibold bg-primary text-accent/80 px-3 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-center gap-4 pt-4 border-t border-primary/50">
          {liveUrl && (
            <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-secondary hover:text-accent transition-colors">
              <FaLink />
              Ver Online
            </a>
          )}
          <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-secondary hover:text-accent transition-colors">
            <FaGithub />
            GitHub
          </a>
        </div>
      </div>
    </article>
  );
}