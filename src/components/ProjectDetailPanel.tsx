import { useEffect, useRef } from "react";
import type { KeyboardEvent } from "react";
import type { Program } from "../types/program";
import { RichText } from "./RichText";
import {
  CheckIcon,
  CloseIcon,
  DocIcon,
  ExternalIcon,
  GroupBadge,
  StarIcon,
  isLive,
} from "./icons";

interface ProjectDetailPanelProps {
  isFavorite: boolean;
  onClose: () => void;
  onOpen: (id: string) => void;
  onToggleFavorite: (id: string) => void;
  open: boolean;
  program: Program;
}

export function ProjectDetailPanel({
  isFavorite,
  onClose,
  onOpen,
  onToggleFavorite,
  open,
  program,
}: ProjectDetailPanelProps) {
  const panelRef = useRef<HTMLElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const { links } = program;
  const isApp = links.accessMode === "app";
  const showReadmeLink = Boolean(links.readmeLabel && links.readmeUrl);
  const showSecondaryLink = links.secondaryUrl !== links.primaryUrl;

  useEffect(() => {
    if (!open) return;
    const trigger = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    return () => trigger?.focus();
  }, [open]);

  const onKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Escape") return onClose();
    if (event.key !== "Tab") return;
    const focusable = panelRef.current?.querySelectorAll<HTMLElement>("button, a[href]");
    if (!focusable?.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  };

  return (
    <>
      <div className="scrim" data-open={open} onClick={onClose} />
      <aside
        ref={panelRef}
        className="detail-panel"
        data-open={open}
        role="dialog"
        aria-modal="true"
        aria-labelledby="detail-title"
        onKeyDown={onKeyDown}
      >
        <div className="detail-head">
          <GroupBadge group={program.group} />
          <div className="card-titles">
            <h2 id="detail-title">{program.displayName}</h2>
            <div className="card-category">
              {program.group} · {program.category} ·{" "}
              <span className={`badge ${isLive(program) ? "live" : "version"}`}>
                {program.status}
              </span>
            </div>
          </div>
          <button
            type="button"
            className="star-btn"
            aria-pressed={isFavorite}
            aria-label="즐겨찾기"
            onClick={() => onToggleFavorite(program.id)}
          >
            <StarIcon />
          </button>
          <button
            ref={closeRef}
            type="button"
            className="star-btn"
            aria-label="닫기"
            onClick={onClose}
          >
            <CloseIcon />
          </button>
        </div>

        <div className="detail-body">
          <section>
            <h4>소개</h4>
            <p>
              <RichText text={program.summary} />
            </p>
          </section>
          <section>
            <h4>접근 방법</h4>
            <p>{links.accessNote}</p>
          </section>
          <section>
            <h4>사용 순서</h4>
            <ol className="steps">
              {program.usage.map((item) => (
                <li key={item}>
                  <span>
                    <RichText text={item} />
                  </span>
                </li>
              ))}
            </ol>
          </section>
          <section>
            <h4>주요 기능</h4>
            <ul className="highlight-list">
              {program.highlights.map((item) => (
                <li key={item}>
                  <CheckIcon />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
          <section>
            <h4>태그</h4>
            <ul className="chip-list">
              {program.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </section>
        </div>

        <div className="detail-foot">
          {showReadmeLink ? (
            <a
              className={`btn${isApp ? "" : " primary"}`}
              href={links.readmeUrl}
              target="_blank"
              rel="noreferrer"
              onClick={() => !isApp && onOpen(program.id)}
            >
              {links.readmeLabel}
              <DocIcon />
            </a>
          ) : null}
          {isApp ? (
            <a
              className="btn primary"
              href={links.primaryUrl}
              target="_blank"
              rel="noreferrer"
              onClick={() => onOpen(program.id)}
            >
              {links.primaryLabel}
              <ExternalIcon />
            </a>
          ) : null}
          {showSecondaryLink ? (
            <a className="btn" href={links.secondaryUrl} target="_blank" rel="noreferrer">
              {links.secondaryLabel}
              <ExternalIcon />
            </a>
          ) : null}
        </div>
      </aside>
    </>
  );
}
