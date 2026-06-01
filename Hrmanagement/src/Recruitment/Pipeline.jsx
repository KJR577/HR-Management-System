import React, { useState } from "react";
import Applied from "./Applied";
import Screening from "./Screening";
import Interview from "./Interview";
import Selected from "./Selected";

const pipelineData = [
  { label: "Screening",  count: 2, total: 8, color: "#6366f1" },
  { label: "Assessment", count: 1, total: 8, color: "#a855f7" },
  { label: "Interview",  count: 2, total: 8, color: "#06b6d4" },
  { label: "Offer",      count: 1, total: 8, color: "#22c55e" },
  { label: "Hired",      count: 1, total: 8, color: "#84cc16" },
  { label: "Rejected",   count: 1, total: 8, color: "#ef4444" },
];

const stages = [
  { label: "Applied",   count: 4 },
  { label: "Screening", count: 2 },
  { label: "Interview", count: 2 },
  { label: "Selected",  count: 2 },
];

function Pipeline({ summary = false }) {
  const [activeStage, setActiveStage] = useState("Applied");

  // ── Overview bar chart ──
  if (summary) {
    return (
      <div className="pipeline-card">
        <h3>Pipeline Summary</h3>
        <div className="pipeline-list">
          {pipelineData.map((item) => (
            <div key={item.label} className="pipeline-row">
              <span className="pipeline-label">{item.label}</span>
              <div className="pipeline-bar-bg">
                <div
                  className="pipeline-bar-fill"
                  style={{
                    width: `${(item.count / item.total) * 100}%`,
                    background: item.color,
                  }}
                />
              </div>
              <span className="pipeline-count">{item.count}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // ── Pipelines tab stage switcher ──
  const renderStage = () => {
    switch (activeStage) {
      case "Applied":   return <Applied />;
      case "Screening": return <Screening />;
      case "Interview": return <Interview />;
      case "Selected":  return <Selected />;
      default:          return <Applied />;
    }
  };

  return (
    <div className="pipeline-tab-wrapper">
      <h2 className="pipeline-main-title">Recruitment Pipeline</h2>
      <div className="pipeline-stage-selector">
        {stages.map((stage) => (
          <button
            key={stage.label}
            className={`stage-btn ${activeStage === stage.label ? "active" : ""}`}
            onClick={() => setActiveStage(stage.label)}
          >
            {stage.label} <span className="stage-count">{stage.count}</span>
          </button>
        ))}
      </div>
      {renderStage()}
    </div>
  );
}

export default Pipeline;