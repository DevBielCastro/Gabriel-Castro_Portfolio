interface TimelineItemProps {
  date: string;
  role: string;
  company: string;
  description: string[];
}

export function TimelineItem({ date, role, company, description }: TimelineItemProps) {
  return (
    <div className="relative pl-10 sm:pl-32 py-6 group">
      {/* Linha Vertical e Ponto */}
      <div className="absolute top-8 left-0 w-px h-full bg-primary/30 sm:ml-[6.5rem] group-last:hidden"></div>
      <div className="absolute top-8 left-[-0.3rem] sm:left-0 w-3 h-3 bg-accent border-2 border-primary rounded-full sm:ml-[6.2rem]"></div>

      <div className="flex flex-col sm:flex-row items-start">
        {/* Data (com altura e padding vertical ajustados) */}
        <time className="flex items-center justify-center text-xs font-semibold uppercase w-auto sm:w-32 h-8 mb-3 sm:mb-0 px-4 py-1 text-secondary/80 bg-primary/50 rounded-full sm:absolute sm:left-0 sm:translate-y-0.5">
          {date}
        </time>

        {/* Conteúdo Principal */}
        <div className="sm:ml-32">
          <h3 className="text-xl font-bold text-secondary">{role}</h3>
          <p className="text-accent/80 font-medium mt-1 mb-2">{company}</p>
          <ul className="list-disc list-inside text-secondary/70 space-y-1">
            {description.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}