import type { Program } from "../types/program";

interface ProjectDetailPanelProps {
  program: Program;
}

export function ProjectDetailPanel({ program }: ProjectDetailPanelProps) {
  const showReadmeLink = Boolean(program.links.readmeLabel && program.links.readmeUrl);
  const showSecondaryLink =
    program.links.secondaryUrl !== program.links.primaryUrl;

  return (
    <aside className="detail-panel" aria-label={`${program.displayName} detail`}>
      <div className="section-heading">
        <p className="section-kicker">Selected Program</p>
        <h2>{program.displayName}</h2>
        <p>{program.summary}</p>
      </div>

      <div className="detail-block">
        <span className="detail-label">Access</span>
        <p>{program.links.accessNote}</p>
      </div>

      <div className="detail-block">
        <span className="detail-label">Repository</span>
        <p>{program.repositoryName}</p>
      </div>

      <div className="detail-block">
        <span className="detail-label">How To Use</span>
        <ol className="usage-list">
          {program.usage.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      </div>

      <div className="detail-block">
        <span className="detail-label">Highlights</span>
        <ul className="chip-list">
          {program.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      </div>

      <div className="cta-stack">
        {showReadmeLink ? (
          <a
            className="cta readme"
            href={program.links.readmeUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={`${program.displayName} ${program.links.readmeLabel}`}
          >
            {program.links.readmeLabel}
          </a>
        ) : null}
        <a
          className="cta primary"
          href={program.links.primaryUrl}
          target="_blank"
          rel="noreferrer"
          aria-label={`${program.displayName} ${program.links.primaryLabel}`}
        >
          {program.links.primaryLabel}
        </a>
        {showSecondaryLink ? (
          <a
            className="cta secondary"
            href={program.links.secondaryUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={`${program.displayName} ${program.links.secondaryLabel}`}
          >
            {program.links.secondaryLabel}
          </a>
        ) : null}
      </div>
    </aside>
  );
}
