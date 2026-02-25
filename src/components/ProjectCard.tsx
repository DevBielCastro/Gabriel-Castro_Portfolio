import { FaGithub, FaLink, FaRegFileAlt } from "react-icons/fa";

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  githubUrl: string;
  caseUrl?: string;
}

export function ProjectCard({
  image,
  title,
  description,
  tags,
  liveUrl,
  githubUrl,
  caseUrl,
}: ProjectCardProps) {
  return (
    <div className="bg-primary/30 rounded-xl overflow-hidden border border-primary/30 hover:border-accent/50 transition-colors">
      <div className="h-44 w-full overflow-hidden">
        <img
          src={image}
          alt={`Preview do projeto ${title}`}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-semibold text-secondary mb-3">{title}</h3>

        <p className="text-secondary/75 text-sm leading-relaxed">{description}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-3 py-1 rounded-full bg-primary/50 text-accent border border-accent/20"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-5">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-secondary hover:text-accent transition-colors text-sm"
            >
              <FaLink />
              Ver Online
            </a>
          )}

          {caseUrl && (
            <a
              href={caseUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-secondary hover:text-accent transition-colors text-sm"
            >
              <FaRegFileAlt />
              Case/Detalhes
            </a>
          )}

          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-secondary hover:text-accent transition-colors text-sm"
          >
            <FaGithub />
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
