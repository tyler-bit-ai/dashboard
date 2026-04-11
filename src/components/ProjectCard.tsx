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
  const compactTagline =
    program.tagline.length > 70
      ? `${program.tagline.slice(0, 70).trim()}...`
      : program.tagline;

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
      <p className="card-tagline compact">{compactTagline}</p>
    </button>
  );
}
