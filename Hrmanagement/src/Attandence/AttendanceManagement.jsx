import { useState, useMemo } from "react";
import "./Attendance.css";

// SVG Icons
const EmployeeIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="12" fill="#EEF2FF" />
    <circle cx="24" cy="18" r="6" stroke="#3B5BDB" strokeWidth="2" fill="none" />
    <path d="M12 36c0-6.627 5.373-10 12-10s12 3.373 12 10" stroke="#3B5BDB" strokeWidth="2" strokeLinecap="round" fill="none" />
    <rect x="20" y="30" width="8" height="6" rx="1" stroke="#3B5BDB" strokeWidth="1.5" fill="none" />
    <path d="M18 28l-2 2 2 2M30 28l2 2-2 2" stroke="#3B5BDB" strokeWidth="1.5" strokeLinecap="round" fill="none" />
  </svg>
);

const PresentIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="12" fill="#EEF2FF" />
    <circle cx="24" cy="16" r="5" stroke="#3B5BDB" strokeWidth="2" fill="none" />
    <circle cx="14" cy="20" r="4" stroke="#3B5BDB" strokeWidth="1.5" fill="none" />
    <circle cx="34" cy="20" r="4" stroke="#3B5BDB" strokeWidth="1.5" fill="none" />
    <path d="M8 36c0-4.418 2.686-7 6-7" stroke="#3B5BDB" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    <path d="M40 36c0-4.418-2.686-7-6-7" stroke="#3B5BDB" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    <path d="M14 36c0-5.523 4.477-9 10-9s10 3.477 10 9" stroke="#3B5BDB" strokeWidth="2" strokeLinecap="round" fill="none" />
  </svg>
);

const CalendarIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="12" fill="#EEF2FF" />
    <rect x="10" y="14" width="28" height="24" rx="3" stroke="#3B5BDB" strokeWidth="2" fill="none" />
    <path d="M10 20h28" stroke="#3B5BDB" strokeWidth="2" />
    <path d="M17 10v8M31 10v8" stroke="#3B5BDB" strokeWidth="2" strokeLinecap="round" />
    <circle cx="29" cy="32" r="6" fill="#EEF2FF" stroke="#3B5BDB" strokeWidth="1.5" />
    <path d="M26.5 32l2 2 3.5-3.5" stroke="#3B5BDB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const employeesData = [
  {
    id: 1,
    initials: "RA",
    name: "Rahul Anthony",
    color: "#9B8EC4",
    attendance: { "13": "P", "14": "P", "15": "P", "16": "P", "17": "P", "18": "P" },
    totalHours: "248/252",
  },
  {
    id: 2,
    initials: "KD",
    name: "Kavin Diyopal",
    color: "#6B7280",
    attendance: { "13": "P", "14": "P", "15": "P", "16": "P", "17": "A", "18": "P" },
    totalHours: "198/252",
  },
  {
    id: 3,
    initials: "KJ",
    name: "Kenvin Jose",
    color: "#E07070",
    attendance: { "13": "P", "14": "P", "15": "A", "16": "P", "17": "P", "18": "P" },
    totalHours: "200/252",
  },
  {
    id: 4,
    initials: "TL",
    name: "Tony Leonard",
    color: "#2DD4BF",
    attendance: { "13": "P", "14": "P", "15": "P", "16": "P", "17": "P", "18": "P" },
    totalHours: "220/252",
  },
];

const days = ["13", "14", "15", "16", "17", "18"];

export default function AttendanceManagement() {
  const [employees] = useState(employeesData);

  // Hardcoded counts exactly as requested
  const totalEmployees = employees.length;
  const presentCount = 2;
  const absentCount = 2;

  // Automatically fetches the current system month and year (e.g., "JUN 26")
  const currentMonthYear = useMemo(() => {
    return new Date().toLocaleDateString("en-US", {
      month: "short",
      year: "2-digit",
    }).toUpperCase();
  }, []);

  return (
    <div className="attendance-container">
      <div className="attendance-wrapper">
        {/* Header */}
        <h1 className="attendance-title">Attendance Management</h1>

        {/* Summary Cards */}
        <div className="cards-grid">
          {/* Card 1: Total Employees */}
          <div className="summary-card">
            <EmployeeIcon />
            <div className="card-content">
              <div className="card-label">Total no of Employee</div>
              <div className="card-value total-color">{totalEmployees}</div>
              <div className="card-subtext">Employee</div>
            </div>
          </div>

          {/* Card 2: Present Count (Set to 2) */}
          <div className="summary-card">
            <PresentIcon />
            <div className="card-content">
              <div className="card-label">Total no of Employee</div>
              <div className="card-value present-color">{presentCount}</div>
              <div className="card-subtext">Present</div>
            </div>
          </div>

          {/* Card 3: Absent Count (Set to 2) */}
          <div className="summary-card">
            <CalendarIcon />
            <div className="card-content">
              <div className="card-label">Total no of Employee</div>
              <div className="card-value absent-color">{absentCount}</div>
              <div className="card-subtext">Absent</div>
            </div>
          </div>
        </div>

        {/* Attendance Table */}
        <div className="table-container">
          <div className="table-responsive">
            <table className="attendance-table">
              <thead>
                <tr>
                  <th className="th-left">EMPLOYEE</th>
                  {days.map((d) => (
                    <th key={d} className="th-center">
                      {d} {currentMonthYear}
                    </th>
                  ))}
                  <th className="th-center th-total-hours">
                    {"TOTAL HOURS/\nMONTH"}
                  </th>
                </tr>
              </thead>
              <tbody>
                {employees.map((emp) => (
                  <tr key={emp.id} className="table-row">
                    <td className="td-left">
                      <div className="employee-info">
                        <div
                          className="employee-avatar"
                          style={{ backgroundColor: emp.color }}
                        >
                          {emp.initials}
                        </div>
                        <span className="employee-name">{emp.name}</span>
                      </div>
                    </td>
                    {days.map((d) => {
                      const status = emp.attendance[d];
                      return (
                        <td key={d} className="td-center">
                          <span
                            className={`status-text ${
                              status === "A" ? "status-absent" : "status-present"
                            }`}
                          >
                            {status || "-"}
                          </span>
                        </td>
                      );
                    })}
                    <td className="td-center total-hours-value">
                      {emp.totalHours}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}