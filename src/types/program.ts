export type ProgramAccessMode = "app" | "readme";

export interface ProgramLinkSet {
  accessNote: string;
  primaryLabel: string;
  primaryUrl: string;
  secondaryLabel: string;
  secondaryUrl: string;
  accessMode: ProgramAccessMode;
}

export interface Program {
  id: string;
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
