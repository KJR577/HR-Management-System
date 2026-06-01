import React from "react";

// Mock Data
// Note: attendance keys (0 to 5) map directly to the 6 dynamically generated working days.
const employeesData = [
  { id: 1, initials: "RA", name: "Rahul Anthony", color: "#9B8EC4", attendance: { 0: "P", 1: "P", 2: "P", 3: "P", 4: "P", 5: "P" }, totalHours: "248/252" },
  { id: 2, initials: "KD", name: "Kavin Diyopal", color: "#4B5563", attendance: { 0: "P", 1: "P", 2: "P", 3: "P", 4: "A", 5: "P" }, totalHours: "198/252" },
  { id: 3, initials: "KJ", name: "Kenvin Jose", color: "#E07070", attendance: { 0: "P", 1: "P", 2: "A", 3: "P", 4: "P", 5: "P" }, totalHours: "200/252" },
  { id: 4, initials: "TL", name: "Tony Leonard", color: "#2DD4BF", attendance: { 0: "P", 1: "P", 2: "P", 3: "P", 4: "P", 5: "P" }, totalHours: "220/252" },
];

// Automatically handles moving forward through time while skipping weekends
function getLast6WorkingDays() {
  const days = [];
  const current = new Date();
  
  // Find the most recent working day (skipping Sat/Sun if today is a weekend)
  while (current.getDay() === 0 || current.getDay() === 6) {
    current.setDate(current.getDate() - 1);
  }

  // Collect 6 working days moving backwards
  while (days.length < 6) {
    const dow = current.getDay();
    if (dow !== 0 && dow !== 6) {
      days.unshift(new Date(current)); // Insert at the beginning to keep chronological order
    }
    current.setDate(current.getDate() - 1);
  }
  return days;
}

// Formats the date dynamically into "DD MMM YY" (e.g., "22 MAY 26")
function formatDay(date) {
  const d = date.getDate();
  const month = date.toLocaleString("en-US", { month: "short" }).toUpperCase();
  const year = String(date.getFullYear()).slice(2);
  return `${d} ${month} ${year}`;
}

// Minimalistic Lucide-style SVG Icons
const EmployeeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const PresentIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#a855f7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

const CalendarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

export default function AttendanceManagement() {
  // Generates the accurate shifting dates on render
  const workingDays = getLast6WorkingDays();

  return (
    <div style={{
      minHeight: "100vh",
      background: "#dce3f0",
      padding: "32px 28px",
      fontFamily: "'Segoe UI', -apple-system, BlinkMacSystemFont, sans-serif",
      boxSizing: "border-box",
    }}>
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        <h1 style={{ fontSize: 32, fontWeight: 900, color: "#1a3060", marginBottom: 28, marginTop: 0 }}>
          Attendance Management
        </h1>

        {/* Stats Cards Row */}
        <div style={{ display: "flex", gap: 18, marginBottom: 32 }}>
          <div style={card}>
            <div style={iconWrap}><EmployeeIcon /></div>
            <div style={cardBody}>
              <span style={cardLabel}>Total no of Employee</span>
              <div style={{ ...cardNum, color: "#22c55e" }}>4</div>
              <span style={cardSub}>Employee</span>
            </div>
          </div>

          <div style={card}>
            <div style={iconWrap}><PresentIcon /></div>
            <div style={cardBody}>
              <span style={cardLabel}>Total no of Employee</span>
              <div style={{ ...cardNum, color: "#a855f7" }}>2</div>
              <span style={cardSub}>Present</span>
            </div>
          </div>

          <div style={card}>
            <div style={iconWrap}><CalendarIcon /></div>
            <div style={cardBody}>
              <span style={cardLabel}>Total no of Employee</span>
              <div style={{ ...cardNum, color: "#f97316" }}>2</div>
              <span style={cardSub}>Absent</span>
            </div>
          </div>
        </div>

        {/* Table Section */}
        <div style={{
          background: "#fff",
          borderRadius: 14,
          border: "1px solid #dde3f0",
          boxShadow: "0 2px 12px rgba(30,60,150,0.07)",
          overflow: "hidden",
        }}>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 600 }}>
              <thead>
                <tr style={{ borderBottom: "1px solid #e8ecf5", background: "#f9faff" }}>
                  <th style={th("left")}>EMPLOYEE</th>
                  {/* Headers update dynamically */}
                  {workingDays.map((d, i) => (
                    <th key={i} style={th("center")}>{formatDay(d)}</th>
                  ))}
                  <th style={{ ...th("center"), lineHeight: 1.4 }}>TOTAL HOURS/<br />MONTH</th>
                </tr>
              </thead>
              <tbody>
                {employeesData.map((emp, idx) => (
                  <tr key={emp.id} style={{
                    borderBottom: idx < employeesData.length - 1 ? "1px solid #e8ecf5" : "none",
                  }}>
                    {/* Employee Identity */}
                    <td style={{ ...td, paddingLeft: 20 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                        <div style={{
                          width: 38, height: 38, borderRadius: "50%",
                          background: emp.color, color: "#fff",
                          display: "flex", alignItems: "center", justifyContent: "center",
                          fontWeight: 700, fontSize: 13, flexShrink: 0,
                        }}>
                          {emp.initials}
                        </div>
                        <span style={{ fontWeight: 500, color: "#1f2937", fontSize: 15 }}>
                          {emp.name}
                        </span>
                      </div>
                    </td>

                    {/* Shifting Attendance Status Matrix */}
                    {workingDays.map((_, i) => (
                      <td key={i} style={{ ...td, textAlign: "center" }}>
                        <span style={{
                          fontWeight: 600,
                          fontSize: 15,
                          color: emp.attendance[i] === "A" ? "#f97316" : "#4b5563",
                        }}>
                          {emp.attendance[i] || "-"}
                        </span>
                      </td>
                    ))}

                    {/* Hours Summary */}
                    <td style={{ ...td, textAlign: "center", fontWeight: 600, color: "#374151", fontSize: 15 }}>
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

// Layout Configuration Objects
const card = {
  flex: 1,
  background: "#fff",
  borderRadius: 14,
  border: "1px solid #dde3f0",
  boxShadow: "0 2px 10px rgba(30,60,150,0.07)",
  padding: "22px 20px",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: 16,
  minWidth: 0,
};

const iconWrap = {
  flexShrink: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const cardBody = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  flex: 1,
};

const cardLabel = { fontSize: 12, color: "#4a6cf7", fontWeight: 500, marginBottom: 2 };
const cardNum = { fontSize: 34, fontWeight: 800, lineHeight: 1.1, margin: "2px 0" };
const cardSub = { fontSize: 13, color: "#374151", fontWeight: 500 };

const th = (align) => ({
  padding: "16px 10px",
  textAlign: align,
  fontSize: 12,
  fontWeight: 700,
  color: "#6b7280",
  textTransform: "uppercase",
  letterSpacing: "0.04em",
  whiteSpace: "nowrap",
});

const td = {
  padding: "16px 10px",
  fontSize: 15,
  color: "#374151",
};