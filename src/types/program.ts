export type ProgramAccessMode = "app" | "readme";
export type ProgramGroup = "Inbound" | "Outbound" | "기타";

export interface ProgramLinkSet {
  accessNote: string;
  readmeLabel?: string;
  readmeUrl?: string;
  primaryLabel: string;
  primaryUrl: string;
  secondaryLabel: string;
  secondaryUrl: string;
  accessMode: ProgramAccessMode;
}

export interface Program {
  id: string;
  group: ProgramGroup;
  displayName: string;
  repositoryName: string;
  category: string;
  status: string;
  tagline: string;
  summary: string;
  usage: string[];
  highlights: string[];
  tags: string[];
  links: ProgramLinkSet;
}
