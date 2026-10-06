import type { Program } from "../types/program";
import {
  DocIcon,
  ExternalIcon,
  GroupBadge,
  StarIcon,
  isLive,
  primaryHref,
} from "./icons";

interface ProjectCardProps {
  isFavorite: boolean;
  onDetail: (id: string) => void;
  onOpen: (id: string) => void;
  onToggleFavorite: (id: string) => void;
  program: Program;
}

export function ProjectCard({
  isFavorite,
  onDetail,
  onOpen,
  onToggleFavorite,
  program,
}: ProjectCardProps) {
  const isApp = program.links.accessMode === "app";

  return (
    <article className="project-card">
      <div className="card-top">
        <GroupBadge group={program.group} />
        <div className="card-titles">
          <h3>{program.displayName}</h3>
          <div className="card-category">{program.category}</div>
        </div>
        <button
          type="button"
          className="star-btn"
          aria-pressed={isFavorite}
          aria-label={`${program.displayName} 즐겨찾기`}
          onClick={() => onToggleFavorite(program.id)}
        >
          <StarIcon />
        </button>
      </div>
      <p className="card-tagline">{program.tagline}</p>
      <ul className="chip-list">
        {program.tags.slice(0, 3).map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
      <div className="card-footer">
        <span className={`badge ${isLive(program) ? "live" : "version"}`}>
          {program.status}
        </span>
        <button
          type="button"
          className="btn ghost"
          aria-label={`${program.displayName} 상세 보기`}
          onClick={() => onDetail(program.id)}
        >
          상세
        </button>
        <a
          className="btn primary"
          href={primaryHref(program)}
          target="_blank"
          rel="noreferrer"
          aria-label={`${program.displayName} ${isApp ? "열기" : "README 보기"}`}
          onClick={() => onOpen(program.id)}
        >
          {isApp ? "열기" : "README"}
          {isApp ? <ExternalIcon /> : <DocIcon />}
        </a>
      </div>
    </article>
  );
}
