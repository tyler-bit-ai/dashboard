import { ProjectCard } from "./ProjectCard";
import { GROUP_ORDER, GroupBadge } from "./icons";
import type { Program, ProgramGroup } from "../types/program";

interface ProjectGridProps {
  favorites: string[];
  group: ProgramGroup | "all";
  onDetail: (id: string) => void;
  onOpen: (id: string) => void;
  onToggleFavorite: (id: string) => void;
  programs: Program[];
}

export function ProjectGrid({
  favorites,
  group,
  onDetail,
  onOpen,
  onToggleFavorite,
  programs,
}: ProjectGridProps) {
  if (programs.length === 0) {
    return (
      <div className="empty-state">
        <strong>검색 결과가 없습니다</strong>
        다른 검색어를 입력하거나 필터를 해제해 보세요.
      </div>
    );
  }

  const groups = group === "all" ? GROUP_ORDER : [group];

  return (
    <div className="project-group-list">
      {groups.map((name) => {
        const items = programs.filter((program) => program.group === name);
        if (items.length === 0) return null;
        return (
          <section key={name} className="project-group-section" aria-label={name}>
            <div className="project-group-heading">
              <GroupBadge group={name} size="sm" />
              <h2>{name}</h2>
              <span>{items.length}개</span>
            </div>
            <div className="project-grid">
              {items.map((program) => (
                <ProjectCard
                  key={program.id}
                  isFavorite={favorites.includes(program.id)}
                  onDetail={onDetail}
                  onOpen={onOpen}
                  onToggleFavorite={onToggleFavorite}
                  program={program}
                />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
