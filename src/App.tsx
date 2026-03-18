import { useState } from "react";
import { programs } from "./data/programs";
import { ProjectDetailPanel } from "./components/ProjectDetailPanel";
import { ProjectGrid } from "./components/ProjectGrid";
import "./styles/global.css";
import "./styles/components.css";

function App() {
  const [selectedId, setSelectedId] = useState<string>(programs[0]?.id ?? "");
  const selectedProgram =
    programs.find((program) => program.id === selectedId) ?? programs[0];

  return (
    <main className="app-shell">
      <section className="hero">
        <p className="eyebrow">Published Program Hub</p>
        <h1>한 번에 보고, 바로 들어가는 프로그램 대시보드</h1>
        <p className="hero-copy">
          지금까지 만든 프로그램을 한 화면에 모아두고, 웹이 있는 프로젝트는
          바로 열고 그렇지 않은 프로젝트는 README 중심으로 탐색할 수 있게
          구성했습니다.
        </p>
        <div className="hero-meta">
          <span>{programs.length} programs tracked</span>
          <span>GitHub Pages ready</span>
          <span>Metadata-first architecture</span>
        </div>
      </section>

      <section className="content-layout">
        <ProjectGrid
          programs={programs}
          selectedId={selectedProgram.id}
          onSelect={setSelectedId}
        />
        <ProjectDetailPanel program={selectedProgram} />
      </section>
    </main>
  );
}

export default App;
