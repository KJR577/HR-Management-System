import { NAV_ITEMS, CURRENT_USER } from "../../data/mockData";
import "./Sidebar.css";

export default function Sidebar({ activePage, onNavigate }) {
  return (
    <aside className="sidebar">
      {/* Logo */}
      <div className="sidebar-logo">
        <div className="logo-box">
          <span>HR</span>
        </div>
        <div className="logo-text">
          <span className="logo-title">HRConnect</span>
          <span className="logo-sub">Management</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="sidebar-nav">
        {NAV_ITEMS.map((item) => (
          <button
            key={item.id}
            className={`nav-item ${activePage === item.id ? "nav-item--active" : ""}`}
            onClick={() => onNavigate(item.id)}
          >
            <span className="nav-icon">{item.icon}</span>
            <span className="nav-label">{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="sidebar-divider" />

      {/* User Profile */}
       
       <div 
        className={`sidebar-user ${activePage === "profile" ? "sidebar-user--active" : ""}`}
        onClick={() => onNavigate("profile")}
        style={{ cursor: "pointer", padding: "12px 20px", transition: "background 0.2s" }}
      >
        <div
          className="user-avatar"
          style={{
            background: CURRENT_USER.avatarBg,
            color: CURRENT_USER.initialsColor,
          }}
        >
          {CURRENT_USER.initials}
        </div>
        <div className="user-info">
          <span className="user-name">{CURRENT_USER.name}</span>
          <span className="user-role">{CURRENT_USER.role}</span>
        </div>
      </div>
        

      
    </aside>
  );
}
