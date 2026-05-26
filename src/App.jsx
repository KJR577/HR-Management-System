import { useState } from "react";
import Sidebar from "./components/layout/Sidebar";
import TopBar from "./components/layout/TopBar";
import LeaveManagementPage from "./pages/LeaveManagementPage";
import LoginInfoPage from "./pages/LoginInfoPage";
import { DashboardPage, EmployeePage, AttendancePage, PayrollPage, RecruitmentPage } from "./pages/PlaceholderPages";
import "./styles/App.css";

const PAGES = {
  dashboard: DashboardPage,
  employee: EmployeePage,
  attendance: AttendancePage,
  payroll: PayrollPage,
  leave: LeaveManagementPage,
  recruitment: RecruitmentPage,
  profile: LoginInfoPage,
};

export default function App() {
  const [activePage, setActivePage] = useState("leave");

  const PageComponent = PAGES[activePage] || LeaveManagementPage;

  return (
    <div className="app-shell">
      <Sidebar activePage={activePage} onNavigate={setActivePage} />
      <div className="app-main">
        <TopBar activePage={activePage} />
        <div className="app-content">
          <PageComponent />
        </div>
      </div>
    </div>
  );
}
