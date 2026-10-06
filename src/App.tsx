import { useEffect, useRef, useState } from "react";
import { programs } from "./data/programs";
import { useStoredState } from "./hooks/useStoredState";
import { ProjectDetailPanel } from "./components/ProjectDetailPanel";
import { ProjectGrid } from "./components/ProjectGrid";
import { QuickAccess } from "./components/QuickAccess";
import {
  GROUP_ORDER,
  GridIcon,
  MoonIcon,
  SearchIcon,
  StarIcon,
  SunIcon,
  isLive,
} from "./components/icons";
import type { Program, ProgramGroup } from "./types/program";
import "./styles/global.css";
import "./styles/components.css";

type Theme = "light" | "dark";

const MAX_RECENT = 8;
const QUICK_RECENT = 5;

const systemTheme = (): Theme =>
  window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

const toPrograms = (ids: string[]) =>
  ids
    .map((id) => programs.find((program) => program.id === id))
    .filter((program): program is Program => Boolean(program));

function App() {
  const [group, setGroup] = useState<ProgramGroup | "all">("all");
  const [query, setQuery] = useState("");
  const [favoritesOnly, setFavoritesOnly] = useState(false);
  const [favorites, setFavorites] = useStoredState<string[]>("hub-favorites", []);
  const [recent, setRecent] = useStoredState<string[]>("hub-recent", []);
  const [theme, setTheme] = useStoredState<Theme>("hub-theme", systemTheme());
  const [selectedId, setSelectedId] = useState(programs[0]?.id ?? "");
  const [detailOpen, setDetailOpen] = useState(false);
  const searchRef = useRef<HTMLInputElement>(null);

  const selectedProgram =
    programs.find((program) => program.id === selectedId) ?? programs[0];

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement;
      if (event.key === "/" && !/INPUT|TEXTAREA/.test(target.tagName)) {
        event.preventDefault();
        searchRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const toggleFavorite = (id: string) =>
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [id, ...prev],
    );

  const markRecent = (id: string) =>
    setRecent((prev) => [id, ...prev.filter((item) => item !== id)].slice(0, MAX_RECENT));

  const openDetail = (id: string) => {
    setSelectedId(id);
    setDetailOpen(true);
  };

  const needle = query.trim().toLowerCase();
  const visible = programs.filter((program) => {
    if (group !== "all" && program.group !== group) return false;
    if (favoritesOnly && !favorites.includes(program.id)) return false;
    if (!needle) return true;
    return [
      program.displayName,
      program.repositoryName,
      program.tagline,
      program.category,
      program.tags.join(" "),
    ]
      .join(" ")
      .toLowerCase()
      .includes(needle);
  });

  const stats = [
    { value: programs.length, label: "전체 프로그램" },
    { value: programs.filter(isLive).length, label: "Live" },
    {
      value: programs.filter((program) => program.links.accessMode === "app").length,
      label: "웹 앱",
    },
  ];

  const tabs: { key: ProgramGroup | "all"; label: string; count: number }[] = [
    { key: "all", label: "전체", count: programs.length },
    ...GROUP_ORDER.map((name) => ({
      key: name,
      label: name,
      count: programs.filter((program) => program.group === name).length,
    })),
  ];

  return (
    <>
      <header className="topbar">
        <div className="topbar-inner">
          <div className="brand">
            <span className="logo">
              <GridIcon />
            </span>
            Program Hub
          </div>
          <label className="search">
            <span className="sr-only">프로그램 검색</span>
            <SearchIcon />
            <input
              ref={searchRef}
              type="search"
              placeholder="프로그램, 태그 검색"
              autoComplete="off"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
            <kbd aria-hidden="true">/</kbd>
          </label>
          <button
            type="button"
            className="icon-btn"
            aria-label={theme === "dark" ? "라이트 모드로 전환" : "다크 모드로 전환"}
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </button>
        </div>
      </header>

      <main className="app-shell">
        <section className="intro">
          <div>
            <h1>사내 프로그램 허브</h1>
            <p>원하는 도구를 검색해서 바로 열어보세요.</p>
          </div>
          <div className="stats" aria-label="요약">
            {stats.map(({ value, label }) => (
              <div key={label} className="stat">
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </section>

        <QuickAccess
          favorites={toPrograms(favorites)}
          recent={toPrograms(recent).slice(0, QUICK_RECENT)}
          onOpen={markRecent}
        />

        <div className="filter-bar">
          <div className="tabs" role="group" aria-label="그룹 필터">
            {tabs.map(({ key, label, count }) => (
              <button
                key={key}
                type="button"
                className="tab"
                aria-pressed={group === key}
                onClick={() => setGroup(key)}
              >
                {label}
                <small>{count}</small>
              </button>
            ))}
          </div>
          <button
            type="button"
            className="favorites-toggle"
            aria-pressed={favoritesOnly}
            onClick={() => setFavoritesOnly((prev) => !prev)}
          >
            <StarIcon />
            즐겨찾기만
          </button>
        </div>

        <div aria-live="polite">
          <ProjectGrid
            programs={visible}
            group={group}
            favorites={favorites}
            onDetail={openDetail}
            onOpen={markRecent}
            onToggleFavorite={toggleFavorite}
          />
        </div>
      </main>

      <ProjectDetailPanel
        program={selectedProgram}
        open={detailOpen}
        isFavorite={favorites.includes(selectedProgram.id)}
        onClose={() => setDetailOpen(false)}
        onOpen={markRecent}
        onToggleFavorite={toggleFavorite}
      />
    </>
  );
}

export default App;
