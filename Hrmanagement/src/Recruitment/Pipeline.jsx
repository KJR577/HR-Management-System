import React, { useState } from "react";
import Applied from "./Applied";
import Screening from "./Screening";
import Interview from "./Interview";
import Selected from "./Selected";

const pipelineData = [
  { label: "Screening",  count: 2, total: 8, color: "#6366f1" },  // purple-blue
  { label: "Assessment", count: 1, total: 8, color: "#a855f7" },  // purple
  { label: "Interview",  count: 2, total: 8, color: "#06b6d4" },  // cyan
  { label: "Offer",      count: 1, total: 8, color: "#22c55e" },  // green
  { label: "Hired",      count: 1, total: 8, color: "#84cc16" },  // lime
  { label: "Rejected",   count: 1, total: 8, color: "#ef4444" },  // red
];

const stages = [
  { label: "Applied",   count: 4, color: "#6366f1", bg: "#eef2ff" },
  { label: "Screening", count: 2, color: "#a855f7", bg: "#faf5ff" },
  { label: "Interview", count: 2, color: "#06b6d4", bg: "#ecfeff" },
  { label: "Selected",  count: 2, color: "#22c55e", bg: "#f0fdf4" },
];

function Pipeline({ summary = false }) {
  const [activeStage, setActiveStage] = useState("Applied");

  // Overview bar chart
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
              <span
                className="pipeline-count"
                style={{ color: item.color, fontWeight: 700 }}
              >
                {item.count}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Pipelines tab stage switcher
  const renderStage = () => {
    switch (activeStage) {
      case "Applied":   return <Applied />;
      case "Screening": return <Screening />;
      case "Interview": return <Interview />;
      case "Selected":  return <Selected />;
      default:          return <Applied />;
    }
  };

  const activeColor = stages.find(s => s.label === activeStage)?.color || "#1e293b";
  const activeBg    = stages.find(s => s.label === activeStage)?.bg    || "#f1f5f9";

  return (
    <div className="pipeline-tab-wrapper">
      <h2 className="pipeline-main-title">Recruitment Pipeline</h2>
      <div className="pipeline-stage-selector">
        {stages.map((stage) => (
          <button
            key={stage.label}
            className={`stage-btn ${activeStage === stage.label ? "active" : ""}`}
            onClick={() => setActiveStage(stage.label)}
            style={
              activeStage === stage.label
                ? { background: stage.color, borderColor: stage.color, color: "#fff" }
                : { borderColor: "#e2e8f0", color: "#64748b" }
            }
          >
            {stage.label}
            <span
              className="stage-count"
              style={
                activeStage === stage.label
                  ? { background: "rgba(255,255,255,0.25)", color: "#fff" }
                  : { background: stage.bg, color: stage.color }
              }
            >
              {stage.count}
            </span>
          </button>
        ))}
      </div>

      {/* Colored heading line */}
      <div
        className="pipeline-stage-content"
        style={{ borderTop: `3px solid ${activeColor}` }}
      >
        {renderStage()}
      </div>

    </div>
  );
}

export default Pipeline;