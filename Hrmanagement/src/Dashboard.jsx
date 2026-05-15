import { useState } from "react";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=DM+Sans:wght@400;500;600&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  html, body, #root {
    height: 100%;
    width: 100%;
  }

  .hr-app {
    font-family: 'DM Sans', sans-serif;
    display: flex;
    width: 100%;
    height: 100vh;
    background: #eef1f8;
    overflow: hidden;
  }

  /* ── SIDEBAR ── */
  .sidebar {
    width: 220px;
    min-width: 220px;
    height: 100vh;
    background: linear-gradient(170deg, #0f1f4b 0%, #1a2f6b 60%, #162558 100%);
    display: flex;
    flex-direction: column;
    padding: 22px 14px;
    gap: 4px;
    flex-shrink: 0;
    overflow: hidden;
  }

  .logo-area {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 0 6px 18px;
    border-bottom: 1px solid rgba(255,255,255,0.08);
    margin-bottom: 6px;
    flex-shrink: 0;
  }

  .logo-icon {
    width: 38px;
    height: 38px;
    background: white;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-weight: 800;
    font-size: 13px;
    color: #1a2f6b;
    letter-spacing: -0.5px;
    flex-shrink: 0;
  }

  .logo-text { line-height: 1.2; }
  .logo-title {
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-weight: 700;
    font-size: 14px;
    color: white;
  }
  .logo-sub { font-size: 11px; color: rgba(255,255,255,0.45); font-weight: 400; }

  .nav-item {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 9px 12px;
    border-radius: 9px;
    cursor: pointer;
    color: rgba(255,255,255,0.55);
    font-size: 13.5px;
    font-weight: 500;
    transition: all 0.18s ease;
    user-select: none;
    white-space: nowrap;
    flex-shrink: 0;
  }

  .nav-item:hover { background: rgba(255,255,255,0.07); color: rgba(255,255,255,0.85); }
  .nav-item.active {
    background: rgba(255,255,255,0.13);
    color: white;
    font-weight: 600;
  }

  .nav-icon { font-size: 16px; width: 20px; text-align: center; flex-shrink: 0; }

  .sidebar-footer {
    margin-top: auto;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 10px 8px;
    border-radius: 10px;
    background: rgba(255,255,255,0.06);
    flex-shrink: 0;
  }

  .avatar {
    width: 34px; height: 34px;
    border-radius: 50%;
    background: linear-gradient(135deg, #7eb3ff, #a78bfa);
    display: flex; align-items: center; justify-content: center;
    font-weight: 700; font-size: 12px; color: white;
    flex-shrink: 0;
  }

  .user-name { font-size: 13px; font-weight: 600; color: white; }
  .user-role { font-size: 11px; color: rgba(255,255,255,0.4); }

  /* ── MAIN CONTENT ── */
  .main {
    flex: 1;
    min-width: 0;
    height: 100vh;
    overflow-y: auto;
    padding: 24px 28px;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .page-header { flex-shrink: 0; }

  .page-title {
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: clamp(22px, 2.4vw, 32px);
    font-weight: 800;
    color: #111827;
    line-height: 1;
  }

  .page-date { font-size: 13px; color: #6b7280; margin-top: 4px; }

  /* ── STAT GRIDS ── */
  .stat-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 14px;
    flex-shrink: 0;
  }

  .stat-grid-2 {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 220px));
    gap: 14px;
    flex-shrink: 0;
  }

  .stat-card {
    background: white;
    border-radius: 14px;
    padding: 16px 18px;
    box-shadow: 0 1px 4px rgba(0,0,0,0.06);
    display: flex;
    flex-direction: column;
    gap: 5px;
    min-width: 0;
  }

  .stat-header { display: flex; align-items: center; gap: 7px; }
  .stat-label { font-size: 12px; color: #6b7280; font-weight: 500; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
  .stat-icon { font-size: 17px; flex-shrink: 0; }

  .stat-value {
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: clamp(22px, 2.6vw, 34px);
    font-weight: 800;
    line-height: 1.1;
  }

  .stat-value.blue   { color: #3b82f6; }
  .stat-value.green  { color: #22c55e; }
  .stat-value.red    { color: #ef4444; }
  .stat-value.orange { color: #f59e0b; }

  .stat-sub { font-size: 11.5px; color: #9ca3af; }

  /* ── BOTTOM ROW ── */
  .bottom-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    flex: 1;
    min-height: 0;
  }

  .panel {
    background: white;
    border-radius: 16px;
    padding: 20px 22px;
    box-shadow: 0 1px 4px rgba(0,0,0,0.06);
    display: flex;
    flex-direction: column;
    min-height: 0;
    overflow: hidden;
  }

  .panel-title {
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: clamp(14px, 1.3vw, 18px);
    font-weight: 800;
    color: #3b82f6;
    margin-bottom: 14px;
    flex-shrink: 0;
  }

  .panel-scroll {
    overflow-y: auto;
    flex: 1;
    min-height: 0;
  }

  /* ── DEPT BARS ── */
  .dept-row { display: flex; align-items: center; gap: 10px; margin-bottom: 12px; }
  .dept-row:last-child { margin-bottom: 0; }
  .dept-name { font-size: 12.5px; color: #374151; width: 72px; flex-shrink: 0; }
  .dept-bar-track {
    flex: 1;
    height: 7px;
    background: #e5e7eb;
    border-radius: 99px;
    overflow: hidden;
    min-width: 0;
  }
  .dept-bar-fill { height: 100%; border-radius: 99px; }
  .dept-count { font-size: 12px; font-weight: 600; color: #374151; width: 24px; text-align: right; flex-shrink: 0; }

  /* ── ACTIVITY ── */
  .activity-item {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    padding: 10px 0;
    border-bottom: 1px solid #f3f4f6;
  }
  .activity-item:last-child { border-bottom: none; padding-bottom: 0; }

  .activity-dot {
    width: 11px; height: 11px;
    border-radius: 3px;
    flex-shrink: 0;
    margin-top: 3px;
  }

  .activity-text { font-size: 12.5px; color: #374151; line-height: 1.4; }
  .activity-time { font-size: 11px; color: #9ca3af; margin-top: 2px; }

  /* ── RESPONSIVE: tablet (≤ 1024px) ── */
  @media (max-width: 1024px) {
    .sidebar { width: 60px; min-width: 60px; padding: 18px 8px; }
    .logo-area { justify-content: center; padding: 0 0 14px; }
    .logo-text { display: none; }
    .nav-item { justify-content: center; padding: 10px; }
    .nav-item span:not(.nav-icon) { display: none; }
    .sidebar-footer { justify-content: center; }
    .user-name, .user-role { display: none; }
    .stat-grid { grid-template-columns: repeat(2, 1fr); }
    .bottom-row { grid-template-columns: 1fr; }
  }

  /* ── RESPONSIVE: mobile (≤ 640px) ── */
  @media (max-width: 640px) {
    .hr-app { flex-direction: column; height: auto; overflow: auto; }

    .sidebar {
      width: 100%; min-width: unset; height: auto;
      flex-direction: row;
      padding: 10px 12px;
      overflow-x: auto;
      align-items: center;
    }
    .logo-area {
      padding: 0 10px 0 0;
      border-bottom: none;
      border-right: 1px solid rgba(255,255,255,0.1);
      margin-bottom: 0; margin-right: 4px;
    }
    .logo-text { display: none; }
    .nav-item { flex-shrink: 0; padding: 8px 10px; }
    .nav-item span:not(.nav-icon) { display: none; }
    .sidebar-footer { margin-top: 0; margin-left: auto; }
    .user-name, .user-role { display: none; }

    .main { height: auto; overflow-y: visible; padding: 14px; }

    .stat-grid { grid-template-columns: repeat(2, 1fr); gap: 10px; }
    .stat-grid-2 { grid-template-columns: repeat(2, 1fr); }

    .bottom-row { grid-template-columns: 1fr; }
    .panel { padding: 16px; }
  }
`;

const departments = [
  { name: "Engineering", count: 45, max: 150, color: "#ef4444" },
  { name: "Product",     count: 20, max: 150, color: "#22c55e" },
  { name: "Design",      count: 15, max: 150, color: "#ef4444" },
  { name: "Analytics",   count: 20, max: 150, color: "#84cc16" },
  { name: "HR",          count: 15, max: 150, color: "#ef4444" },
  { name: "Marketing",   count: 35, max: 150, color: "#8b5cf6" },
];

const activities = [
  { color: "#ef4444", text: "Rohini Das moved to Offer stage", time: "10:14 AM" },
  { color: "#4f46e5", text: "Aanya Sharma checked in", time: "9:02 AM" },
  { color: "#eab308", text: "Priya Nair submitted leave request", time: "8:45 AM" },
  { color: "#22d3ee", text: "Vijay Kumar joined Engineering", time: "2 days ago" },
  { color: "#84cc16", text: "Senior React Developer posted", time: "3 days ago" },
];

const navItems = [
  { icon: "⊞", label: "Dashboard" },
  { icon: "👤", label: "Employee" },
  { icon: "📅", label: "Attendance" },
  { icon: "₹",  label: "Payroll" },
  { icon: "🗓️", label: "Leave" },
  { icon: "👥", label: "Recruitment" },
];

const topStats = [
  { icon: "👥", label: "Total employees", value: "150",    valueClass: "blue",   sub: "Across all departments" },
  { icon: "✅", label: "Active",           value: "120",    valueClass: "green",  sub: "75% of workforce" },
  { icon: "✈️", label: "On leave",          value: "20",     valueClass: "red",    sub: "Currently away" },
  { icon: "💲", label: "Monthly payroll",   value: "₹ 1cr", valueClass: "orange", sub: "Total compensation" },
];

const secondStats = [
  { icon: "💼", label: "Open positions", value: "4", valueClass: "blue", sub: "Actively hiring" },
  { icon: "📋", label: "Pending leaves",  value: "8", valueClass: "red",  sub: "Awaiting approval" },
];

export default function Dashboard() {
  const [activeNav, setActiveNav] = useState("Dashboard");

  return (
    <>
      <style>{styles}</style>
      <div className="hr-app">

        {/* ── Sidebar ── */}
        <aside className="sidebar">
          <div className="logo-area">
            <div className="logo-icon">HR</div>
            <div className="logo-text">
              <div className="logo-title">HRConnect</div>
              <div className="logo-sub">Management</div>
            </div>
          </div>

          {navItems.map(({ icon, label }) => (
            <div
              key={label}
              className={`nav-item ${activeNav === label ? "active" : ""}`}
              onClick={() => setActiveNav(label)}
              title={label}
            >
              <span className="nav-icon">{icon}</span>
              <span>{label}</span>
            </div>
          ))}

          <div className="sidebar-footer">
            <div className="avatar">RK</div>
            <div>
              <div className="user-name">Rakesh</div>
              <div className="user-role">HR Admin</div>
            </div>
          </div>
        </aside>

        {/* ── Main ── */}
        <main className="main">

          {/* Header */}
          <div className="page-header">
            <div className="page-title">Overview</div>
            <div className="page-date">Wednesday, May 09, 2026</div>
          </div>

          {/* 4-col stat row */}
          <div className="stat-grid">
            {topStats.map(({ icon, label, value, valueClass, sub }) => (
              <div className="stat-card" key={label}>
                <div className="stat-header">
                  <span className="stat-icon">{icon}</span>
                  <span className="stat-label">{label}</span>
                </div>
                <div className={`stat-value ${valueClass}`}>{value}</div>
                <div className="stat-sub">{sub}</div>
              </div>
            ))}
          </div>

          {/* 2-col stat row */}
          <div className="stat-grid-2">
            {secondStats.map(({ icon, label, value, valueClass, sub }) => (
              <div className="stat-card" key={label}>
                <div className="stat-header">
                  <span className="stat-icon">{icon}</span>
                  <span className="stat-label">{label}</span>
                </div>
                <div className={`stat-value ${valueClass}`}>{value}</div>
                <div className="stat-sub">{sub}</div>
              </div>
            ))}
          </div>

          {/* Bottom panels */}
          <div className="bottom-row">

            <div className="panel">
              <div className="panel-title">Headcount by department</div>
              <div className="panel-scroll">
                {departments.map(({ name, count, max, color }) => (
                  <div className="dept-row" key={name}>
                    <span className="dept-name">{name}</span>
                    <div className="dept-bar-track">
                      <div
                        className="dept-bar-fill"
                        style={{ width: `${(count / max) * 100}%`, background: color }}
                      />
                    </div>
                    <span className="dept-count">{count}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="panel">
              <div className="panel-title">Recent activity</div>
              <div className="panel-scroll">
                {activities.map(({ color, text, time }, i) => (
                  <div className="activity-item" key={i}>
                    <div className="activity-dot" style={{ background: color }} />
                    <div>
                      <div className="activity-text">{text}</div>
                      <div className="activity-time">{time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </main>
      </div>
    </>
  );
}


