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
        <p className="eyebrow">Program Dashboard</p>
        <h1>프로그램 모음</h1>
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
