import { ProjectCard } from "./ProjectCard";
import type { Program } from "../types/program";

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
  return (
    <section className="project-grid-panel" aria-label="Programs">
      <div className="section-heading">
        <p className="section-kicker">Program Index</p>
        <h2>프로그램 선택</h2>
        <p>
          카드를 누르면 오른쪽 패널에서 설명과 사용법을 먼저 읽고, 필요한 경우
          `Open README`를 먼저 확인한 뒤 앱 또는 저장소로 이동할 수 있습니다.
        </p>
      </div>
      <div className="project-grid">
        {programs.map((program) => (
          <ProjectCard
            key={program.id}
            isSelected={selectedId === program.id}
            onSelect={onSelect}
            program={program}
          />
        ))}
      </div>
    </section>
  );
}
