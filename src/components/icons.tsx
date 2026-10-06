import type { Program, ProgramGroup } from "../types/program";

export const GROUP_ORDER: ProgramGroup[] = ["Inbound", "Outbound", "기타"];

const groupClass: Record<ProgramGroup, string> = {
  Inbound: "g-in",
  Outbound: "g-out",
  기타: "g-etc",
};

const groupPath: Record<ProgramGroup, string> = {
  Inbound: "M12 3v12m0 0-4-4m4 4 4-4M4 20h16",
  Outbound: "M7 17 17 7M8 7h9v9",
  기타: "m12 3 9 5-9 5-9-5zM3 13l9 5 9-5",
};

function Svg({ d }: { d: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d={d} />
    </svg>
  );
}

export const ExternalIcon = () => (
  <Svg d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" />
);
export const DocIcon = () => (
  <Svg d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8zM14 3v5h5M9 13h6M9 17h6" />
);
export const StarIcon = () => (
  <Svg d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z" />
);
export const ClockIcon = () => <Svg d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM12 7v5l3 2" />;
export const SearchIcon = () => <Svg d="M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14zM20 20l-3.5-3.5" />;
export const CloseIcon = () => <Svg d="M6 6l12 12M18 6 6 18" />;
export const CheckIcon = () => <Svg d="m5 12 5 5 9-10" />;
export const SunIcon = () => (
  <Svg d="M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
);
export const MoonIcon = () => <Svg d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />;
export const GridIcon = () => <Svg d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z" />;

export function GroupBadge({
  group,
  size = "md",
}: {
  group: ProgramGroup;
  size?: "sm" | "md";
}) {
  return (
    <span className={`group-icon ${size} ${groupClass[group]}`}>
      <Svg d={groupPath[group]} />
    </span>
  );
}

export const isLive = (program: Program) => program.status.toLowerCase() === "live";

export const primaryHref = (program: Program) =>
  program.links.accessMode === "app"
    ? program.links.primaryUrl
    : (program.links.readmeUrl ?? program.links.primaryUrl);
