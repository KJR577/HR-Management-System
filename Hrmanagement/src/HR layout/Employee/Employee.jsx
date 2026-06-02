import { useState } from "react";
import "./Employee.css";

const employees = [
  {
    id: "EMP-001",
    initials: "RA",
    name: "Rahul Anthony",
    designation: "Software Engineer",
    department: "Engineering",
    status: "Active",
    avatarBg: "#b39ddb",
    salary: "₹ 70,000",
    totalProjects: 5,
    performance: "4.5/5",
    performanceLabel: "Good",
    leaveBalance: 10,
  },
  {
    id: "EMP-002",
    initials: "KD",
    name: "Kavin Diyopal",
    designation: "Product Manager",
    department: "Product",
    status: "Inactive",
    avatarBg: "#4dd0e1",
    salary: "₹ 85,000",
    totalProjects: 3,
    performance: "3.8/5",
    performanceLabel: "Average",
    leaveBalance: 6,
  },
  {
    id: "EMP-003",
    initials: "KJ",
    name: "Kenvin Jose",
    designation: "UX Designer",
    department: "Design",
    status: "On Leave",
    avatarBg: "#ffcc80",
    salary: "₹ 65,000",
    totalProjects: 7,
    performance: "4.2/5",
    performanceLabel: "Good",
    leaveBalance: 2,
  },
  {
    id: "EMP-004",
    initials: "TL",
    name: "Tony Leonard",
    designation: "Marketing Lead",
    department: "Marketing",
    status: "Inactive",
    avatarBg: "#f48fb1",
    salary: "₹ 72,000",
    totalProjects: 4,
    performance: "3.5/5",
    performanceLabel: "Average",
    leaveBalance: 8,
  },
  {
    id: "EMP-005",
    initials: "AK",
    name: "Aravinthan",
    designation: "Backend Developer",
    department: "Engineering",
    status: "Active",
    avatarBg: "#ef9a9a",
    salary: "₹ 75,000",
    totalProjects: 6,
    performance: "4.7/5",
    performanceLabel: "Excellent",
    leaveBalance: 12,
  },
];

function getStatusClass(status) {
  if (status === "Active") return "status-active";
  if (status === "Inactive") return "status-inactive";
  if (status === "On Leave") return "status-on-leave";
  return "";
}

function getDeptStyle(dept) {
  const map = {
    Engineering: { background: "#ede7f6", color: "#7c4dff" },
    Product: { background: "#ede7f6", color: "#7c4dff" },
    Design: { background: "#ede7f6", color: "#7c4dff" },
    Marketing: { background: "#ede7f6", color: "#7c4dff" },
  };
  return map[dept] || { background: "#ede7f6", color: "#7c4dff" };
}

/* ─────────────── EMPLOYEE LIST VIEW ─────────────── */
function EmployeeList({ onSelectEmployee }) {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const filtered = employees.filter((emp) => {
    const matchSearch = emp.name.toLowerCase().includes(search.toLowerCase());
    const matchFilter =
      filter === "All" ||
      emp.status === filter ||
      emp.department === filter;
    return matchSearch && matchFilter;
  });

  return (
    <div className="page-wrapper">
      {/* Top bar */}
      <div className="topbar">
        <h2 className="page-title">Employee Details</h2>
        <div className="topbar-actions">
          <div className="search-wrap">
            <svg className="search-svg" viewBox="0 0 20 20" fill="none">
              <circle cx="9" cy="9" r="6" stroke="#888" strokeWidth="1.8" />
              <path d="M14 14l3 3" stroke="#888" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
            <input
              className="search-input"
              placeholder="Search here..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <select
            className="filter-select"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
            <option value="On Leave">On Leave</option>
            <option value="Engineering">Engineering</option>
            <option value="Design">Design</option>
            <option value="Product">Product</option>
            <option value="Marketing">Marketing</option>
          </select>
        </div>
      </div>

      <div className="divider" />

      {/* Column headers */}
      <div className="col-header">
        <div className="col-avatar-space" />
        <div className="col-name">NAME</div>
        <div className="col-desig">DESIGNATION</div>
        <div className="col-dept">DEPARTMENT</div>
        <div className="col-status">STATUS</div>
      </div>

      {/* Rows */}
      <div className="emp-list">
        {filtered.length === 0 && (
          <p className="no-results">No employees found.</p>
        )}
        {filtered.map((emp) => (
          <div
            key={emp.id}
            className="emp-row"
            onClick={() => onSelectEmployee(emp)}
          >
            <div
              className="avatar"
              style={{ backgroundColor: emp.avatarBg }}
            >
              {emp.initials}
            </div>
            <div className="col-name emp-name">{emp.name}</div>
            <div className="col-desig emp-desig">{emp.designation}</div>
            <div className="col-dept">
              <span className="dept-badge" style={getDeptStyle(emp.department)}>
                {emp.department}
              </span>
            </div>
            <div className="col-status">
              <span className={`status-badge ${getStatusClass(emp.status)}`}>
                {emp.status}
              </span>
              <span className="row-chevron">›</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─────────────── EMPLOYEE DETAIL VIEW ─────────────── */
function EmployeeDetail({ emp, onBack }) {
  return (
    <div className="page-wrapper">
      {/* Top bar */}
      <div className="topbar">
        <h2 className="page-title">Employee Details</h2>
        <button className="back-btn" onClick={onBack}>
          <svg viewBox="0 0 20 20" fill="none" width="16" height="16">
            <path d="M13 4l-6 6 6 6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Back
        </button>
      </div>

      <div className="divider" />

      {/* Card */}
      <div className="detail-card">
        {/* Profile row */}
        <div className="profile-row">
          <div className="avatar avatar-lg" style={{ backgroundColor: emp.avatarBg }}>
            {emp.initials}
          </div>
          <div className="profile-text">
            <h3 className="profile-name">{emp.name}</h3>
            <span className="profile-desig">{emp.designation}</span>
          </div>
          <span className={`status-badge ${getStatusClass(emp.status)}`} style={{ marginLeft: "auto" }}>
            {emp.status}
          </span>
        </div>

        <div className="card-divider" />

        {/* Info chips */}
        <div className="info-grid">
          <div className="info-col">
            <span className="info-label">Department</span>
            <span className="dept-badge" style={getDeptStyle(emp.department)}>
              {emp.department}
            </span>
          </div>
          <div className="info-col">
            <span className="info-label">Employee ID</span>
            <span className="id-chip">{emp.id}</span>
          </div>
          <div className="info-col">
            <span className="info-label">Salary</span>
            <span className="salary-chip">{emp.salary}</span>
          </div>
        </div>

        {/* Stat cards */}
        <div className="stats-grid">
          <div className="stat-box">
            <span className="stat-title">Total Projects</span>
            <span className="stat-num purple">{emp.totalProjects}</span>
            <span className="stat-sub">Last Year</span>
          </div>
          <div className="stat-box">
            <span className="stat-title">Performance</span>
            <span className="stat-num green">{emp.performance}</span>
            <span className="stat-sub">{emp.performanceLabel}</span>
          </div>
          <div className="stat-box">
            <span className="stat-title">Leave balance</span>
            <span className="stat-num red">{emp.leaveBalance}</span>
            <span className="stat-sub">Days</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────── ROOT COMPONENT ─────────────── */
export default function EmployeeDetails() {
  const [selected, setSelected] = useState(null);

  if (selected) {
    return (
      <EmployeeDetail
        emp={selected}
        onBack={() => setSelected(null)}
      />
    );
  }

  return <EmployeeList onSelectEmployee={(emp) => setSelected(emp)} />;
}