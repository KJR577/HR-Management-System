import React, { useState } from "react";
import JobFilter from "./JobFilter";
import JobCard from "./JobCard";
import "./JobOpenings.css";

// ✅ Receive jobs from parent (Recruitment.jsx)
const JobOpenings = ({ jobOpenings, setJobOpenings }) => {
  const [filters, setFilters] = useState({
    search: "",
    department: "All",
    jobType: "All",
    workMode: "All",
    status: "All",
  });
  const [selectedJob, setSelectedJob] = useState(null);

  // Filter logic
  const filtered = jobOpenings.filter((j) => {
    const s = filters.search.toLowerCase();
    return (
      (s === "" || j.title.toLowerCase().includes(s) || j.department.toLowerCase().includes(s)) &&
      (filters.department === "All" || j.department === filters.department) &&
      (filters.jobType === "All" || j.jobType === filters.jobType) &&
      (filters.workMode === "All" || j.workMode === filters.workMode) &&
      (filters.status === "All" || j.status === filters.status)
    );
  });

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this job?")) {
      setJobOpenings((prev) => prev.filter((j) => j.id !== id));
    }
  };

  const handleEdit = (job) => {
    alert(`Edit job: ${job.title}\n(Connect to your edit form here)`);
  };

  const handleView = (job) => {
    setSelectedJob(job);
  };

  // ✅ Stats — auto calculated from live jobOpenings
  const total  = jobOpenings.length;
  const active = jobOpenings.filter((j) => j.status === "Active").length;
  const closed = jobOpenings.filter((j) => j.status === "Closed").length;
  const draft  = jobOpenings.filter((j) => j.status === "Draft").length;

  return (
    <div className="job-openings-wrapper">

      {/* Stats Row */}
      <div className="job-stats-row">
        <div className="job-stat-card">
          <span className="job-stat-value">{total}</span>
          <span className="job-stat-label">Total Posted</span>
        </div>
        <div className="job-stat-card">
          <span className="job-stat-value active">{active}</span>
          <span className="job-stat-label">Active</span>
        </div>
        <div className="job-stat-card">
          <span className="job-stat-value closed">{closed}</span>
          <span className="job-stat-label">Closed</span>
        </div>
        <div className="job-stat-card">
          <span className="job-stat-value draft">{draft}</span>
          <span className="job-stat-label">Draft</span>
        </div>
      </div>

      {/* Filter Bar */}
      <JobFilter filters={filters} setFilters={setFilters} />

      {/* Results count */}
      <p className="job-results-count">
        Showing <strong>{filtered.length}</strong> of <strong>{total}</strong> jobs
      </p>

      {/* Job Cards Grid */}
      {filtered.length > 0 ? (
        <div className="job-cards-grid">
          {filtered.map((job) => (
            <JobCard
              key={job.id}
              job={job}
              onEdit={handleEdit}
              onDelete={handleDelete}
              onView={handleView}
            />
          ))}
        </div>
      ) : (
        <div className="job-empty-state">
          <div className="empty-icon">📂</div>
          <h3>No jobs found</h3>
          <p>Try changing your filters or search term</p>
        </div>
      )}

      {/* View Modal */}
      {selectedJob && (
        <div className="job-view-overlay" onClick={() => setSelectedJob(null)}>
          <div className="job-view-modal" onClick={(e) => e.stopPropagation()}>
            <div className="job-view-header">
              <h2>{selectedJob.title}</h2>
              <button onClick={() => setSelectedJob(null)}>✕</button>
            </div>
            <div className="job-view-body">
              <div className="job-view-grid">
                <div><span>Department</span><strong>{selectedJob.department}</strong></div>
                <div><span>Job Type</span><strong>{selectedJob.jobType}</strong></div>
                <div><span>Work Mode</span><strong>{selectedJob.workMode}</strong></div>
                <div><span>Experience</span><strong>{selectedJob.experience}</strong></div>
                <div><span>Openings</span><strong>{selectedJob.openings}</strong></div>
                <div><span>Applicants</span><strong>{selectedJob.applicants}</strong></div>
                <div><span>Salary</span><strong>{selectedJob.currency} {Number(selectedJob.salaryMin).toLocaleString()} – {Number(selectedJob.salaryMax).toLocaleString()}</strong></div>
                <div><span>Deadline</span><strong>{selectedJob.deadline}</strong></div>
                <div><span>Status</span><strong>{selectedJob.status}</strong></div>
                <div><span>Hiring Manager</span><strong>{selectedJob.hiringManager}</strong></div>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default JobOpenings;