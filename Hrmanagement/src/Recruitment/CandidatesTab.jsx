import React, { useState } from "react";
import CandidateFilter from "./CandidateFilter";
import CandidateCard from "./CandidateCard";
import CandidateProfile from "./CandidateProfile";
import "./Candidates.css";

const CandidatesTab = ({ candidates, setCandidates }) => {
  const [filters, setFilters] = useState({
    search: "", status: "All", department: "All", experience: "All",
  });
  const [selectedCandidate, setSelectedCandidate] = useState(null);

  const handleUpdateStatus = (id, newStatus) => {
    setCandidates((prev) =>
      prev.map((c) => c.id === id ? { ...c, status: newStatus } : c)
    );
  };

  // ✅ Save interview details onto the candidate object
  const handleScheduleInterview = (id, interviewDetails) => {
    setCandidates((prev) =>
      prev.map((c) =>
        c.id === id
          ? { ...c, interview: interviewDetails, status: "Interview" }
          : c
      )
    );
  };

  const filtered = candidates.filter((c) => {
    const s = filters.search.toLowerCase();
    return (
      (s === "" || c.name.toLowerCase().includes(s) ||
        c.role.toLowerCase().includes(s) ||
        c.email.toLowerCase().includes(s)) &&
      (filters.status === "All" || c.status === filters.status) &&
      (filters.department === "All" || c.department === filters.department) &&
      (filters.experience === "All" || c.experience === filters.experience)
    );
  });

  const stats = [
    { label: "Total",     value: candidates.length,                                       color: "#1e293b" },
    { label: "Screening", value: candidates.filter(c => c.status === "Screening").length, color: "#1d4ed8" },
    { label: "Interview", value: candidates.filter(c => c.status === "Interview").length, color: "#0e7490" },
    { label: "Offer",     value: candidates.filter(c => c.status === "Offer").length,     color: "#a16207" },
    { label: "Hired",     value: candidates.filter(c => c.status === "Hired").length,     color: "#15803d" },
    { label: "Rejected",  value: candidates.filter(c => c.status === "Rejected").length,  color: "#dc2626" },
  ];

  return (
    <div className="candidates-wrapper">
      <div className="cand-stats-row">
        {stats.map((s) => (
          <div className="cand-stat-card" key={s.label}>
            <span className="cand-stat-value" style={{ color: s.color }}>{s.value}</span>
            <span className="cand-stat-label">{s.label}</span>
          </div>
        ))}
      </div>

      <CandidateFilter filters={filters} setFilters={setFilters} />

      <p className="cand-results-count">
        Showing <strong>{filtered.length}</strong> of <strong>{candidates.length}</strong> candidates
      </p>

      {filtered.length > 0 ? (
        <div className="cand-cards-grid">
          {filtered.map((c) => (
            <CandidateCard key={c.id} candidate={c} onView={setSelectedCandidate} />
          ))}
        </div>
      ) : (
        <div className="cand-empty-state">
          <div style={{ fontSize: 48, marginBottom: 16 }}>👤</div>
          <h3>No candidates found</h3>
          <p>Try changing your filters or search term</p>
        </div>
      )}

      {selectedCandidate && (
        <CandidateProfile
          candidate={candidates.find(c => c.id === selectedCandidate.id)}
          onClose={() => setSelectedCandidate(null)}
          onUpdateStatus={handleUpdateStatus}
          onScheduleInterview={handleScheduleInterview}
        />
      )}
    </div>
  );
};

export default CandidatesTab;