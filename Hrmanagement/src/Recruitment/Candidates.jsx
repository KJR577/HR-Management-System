import React from "react";

const Candidates = ({ candidates }) => {
  // Show top 3 by score
  const top3 = [...candidates]
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);

  return (
    <div className="candidates-card">
      <h3>Top Candidates</h3>
      <div className="candidates-list">
        {top3.map((c, index) => (
          <div className="candidate-row" key={c.id}>
            <span className="candidate-rank">#{index + 1}</span>
            <div className="candidate-avatar" style={{ background: c.avatarBg, color: c.avatarText }}>
              {c.initials}
            </div>
            <div className="candidate-info">
              <p className="candidate-name">{c.name}</p>
              <p className="candidate-role">{c.role}</p>
            </div>
            <div className="candidate-score" style={{ background: "#dcfce7", color: "#15803d" }}>
              {c.score}
            </div>
            <div className="candidate-badge" style={{ background: c.badgeBg, color: c.badgeText }}>
              {c.status}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Candidates;