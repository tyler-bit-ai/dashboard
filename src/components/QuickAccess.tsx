import type { ReactNode } from "react";
import type { Program } from "../types/program";
import { ClockIcon, GroupBadge, StarIcon, primaryHref } from "./icons";

interface QuickAccessProps {
  favorites: Program[];
  onOpen: (id: string) => void;
  recent: Program[];
}

interface QuickBoxProps {
  empty: string;
  icon: ReactNode;
  items: Program[];
  onOpen: (id: string) => void;
  title: string;
}

function QuickBox({ empty, icon, items, onOpen, title }: QuickBoxProps) {
  return (
    <div className="quick-box">
      <div className="quick-heading">
        {icon}
        {title}
      </div>
      <div className="quick-list">
        {items.length === 0 ? (
          <span className="quick-empty">{empty}</span>
        ) : (
          items.map((program) => (
            <a
              key={program.id}
              className="pill"
              href={primaryHref(program)}
              target="_blank"
              rel="noreferrer"
              onClick={() => onOpen(program.id)}
            >
              <GroupBadge group={program.group} size="sm" />
              <span>{program.displayName}</span>
            </a>
          ))
        )}
      </div>
    </div>
  );
}

export function QuickAccess({ favorites, onOpen, recent }: QuickAccessProps) {
  return (
    <section className="quick" aria-label="빠른 접근">
      <QuickBox
        icon={<StarIcon />}
        title="즐겨찾기"
        items={favorites}
        onOpen={onOpen}
        empty="카드의 별을 눌러 자주 쓰는 도구를 고정하세요."
      />
      <QuickBox
        icon={<ClockIcon />}
        title="최근 사용"
        items={recent}
        onOpen={onOpen}
        empty="아직 연 프로그램이 없습니다."
      />
    </section>
  );
}
