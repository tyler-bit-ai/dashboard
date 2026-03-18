import type { Program } from "../types/program";

interface ProjectCardProps {
  isSelected: boolean;
  onSelect: (id: string) => void;
  program: Program;
}

export function ProjectCard({
  isSelected,
  onSelect,
  program,
}: ProjectCardProps) {
  return (
    <button
      type="button"
      className={`project-card${isSelected ? " selected" : ""}`}
      onClick={() => onSelect(program.id)}
    >
      <div className="card-header">
        <span className="card-category">{program.category}</span>
        <span className={`card-status mode-${program.links.accessMode}`}>
          {program.status}
        </span>
      </div>
      <h2>{program.displayName}</h2>
      <p className="card-tagline">{program.tagline}</p>
      <ul className="card-highlight-list">
        {program.highlights.slice(0, 2).map((highlight) => (
          <li key={highlight}>{highlight}</li>
        ))}
      </ul>
      <div className="card-footer">
        <span>{program.links.accessMode === "app" ? "Direct app access" : "README-led access"}</span>
        <span aria-hidden="true">View details</span>
      </div>
    </button>
  );
}
