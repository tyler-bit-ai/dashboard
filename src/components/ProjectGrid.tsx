import { ProjectCard } from "./ProjectCard";
import type { Program, ProgramGroup } from "../types/program";

interface ProjectGridProps {
  onSelect: (id: string) => void;
  programs: Program[];
  selectedId: string;
}

export function ProjectGrid({
  onSelect,
  programs,
  selectedId,
}: ProjectGridProps) {
  const groupOrder: ProgramGroup[] = ["Inbound", "Outbound", "기타"];
  const groupedPrograms = groupOrder
    .map((group) => ({
      group,
      items: programs.filter((program) => program.group === group),
    }))
    .filter(({ items }) => items.length > 0);

  return (
    <section className="project-grid-panel" aria-label="Programs">
      <div className="project-group-list">
        {groupedPrograms.map(({ group, items }) => (
          <section
            key={group}
            className="project-group-section"
            aria-label={`${group} programs`}
          >
            <div className="project-group-heading">
              <h3>{group}</h3>
            </div>
            <div className="project-grid">
              {items.map((program) => (
                <ProjectCard
                  key={program.id}
                  isSelected={selectedId === program.id}
                  onSelect={onSelect}
                  program={program}
                />
              ))}
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}
