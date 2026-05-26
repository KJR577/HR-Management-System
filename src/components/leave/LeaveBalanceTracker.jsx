import { useState } from "react";
import Avatar from "../shared/Avatar";
import "./LeaveBalanceTracker.css";

const DEPARTMENTS = ["All Departments", "Development", "Sales", "Product"];

function ProgressBar({ used, total, color }) {
  const pct = Math.round((used / total) * 100);
  return (
    <div className="progress-wrap">
      <span className="progress-label">
        {String(used).padStart(2, "0")}{" "}
        <span className="progress-total">/ {total}</span>
      </span>
      <div className="progress-track">
        <div
          className="progress-fill"
          style={{ width: `${pct}%`, background: color }}
        />
      </div>
    </div>
  );
}

// Added EMP ID
const COLUMNS = ["EMP ID", "EMPLOYEE", "CASUAL LEAVE", "SICK LEAVE", "EARNED LEAVE"];

export default function LeaveBalanceTracker({ balances }) {
  const [dept, setDept] = useState("All Departments");

  // Filter logic
  const filteredBalances = dept === "All Departments" 
    ? balances 
    : balances.filter((emp) => emp.dept === dept);

  return (
    <section className="card leave-tracker">
      <div className="card-header">
        <h2 className="card-title">Leave Balance Tracker</h2>
        <select
          className="dept-select"
          value={dept}
          onChange={(e) => setDept(e.target.value)}
        >
          {DEPARTMENTS.map((d) => (
            <option key={d}>{d}</option>
          ))}
        </select>
      </div>

      <div className="lbt-table-head">
        {COLUMNS.map((col) => (
          <span key={col} className="lbt-th">{col}</span>
        ))}
      </div>

      {/* Map over filteredBalances instead of balances */}
      {filteredBalances.map((emp, i) => (
        <div key={emp.id}>
          <div className="lbt-row">
            {/* New Emp ID Column */}
            <span className="lbt-empid">{emp.empId}</span> 
            
            <div className="lbt-employee">
              <Avatar
                initials={emp.initials}
                bg={emp.avatarBg}
                color={emp.initialsColor}
              />
              <span>{emp.name}</span>
            </div>
            <ProgressBar used={emp.casual.used} total={emp.casual.total} color="#4545CD" />
            <ProgressBar used={emp.sick.used}   total={emp.sick.total}   color="#E74C3C" />
            <ProgressBar used={emp.earned.used} total={emp.earned.total} color="#27AE60" />
          </div>
          {i < filteredBalances.length - 1 && <div className="lbt-divider" />}
        </div>
      ))}
      
      {/* Fallback if filter is empty */}
      {filteredBalances.length === 0 && (
        <div style={{ padding: '20px', textAlign: 'center', color: '#888' }}>
          No employees found in this department.
        </div>
      )}
    </section>
  );
}