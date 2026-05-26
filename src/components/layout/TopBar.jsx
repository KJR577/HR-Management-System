import { PAGE_TITLES } from "../../data/mockData";
import "./TopBar.css";

export default function TopBar({ activePage }) {
  const title = PAGE_TITLES[activePage] || "HRConnect";

  return (
    <header className="topbar">
      <h1 className="topbar-title">{title}</h1>
      <div className="topbar-actions">
        <button className="btn-report">
          <span>↓</span> Report
        </button>
      </div>
    </header>
  );
}
