import "./PlaceholderPage.css";

function PlaceholderPage({ title, icon }) {
  return (
    <div className="placeholder-page">
      <div className="placeholder-icon">{icon}</div>
      <h2 className="placeholder-title">{title}</h2>
      <p className="placeholder-sub">This module is coming soon.</p>
    </div>
  );
}

export function DashboardPage()   { return <PlaceholderPage title="Dashboard"   icon="⊞" />; }
export function EmployeePage()    { return <PlaceholderPage title="Employee"    icon="👤" />; }
export function AttendancePage()  { return <PlaceholderPage title="Attendance"  icon="📅" />; }
export function PayrollPage()     { return <PlaceholderPage title="Payroll"     icon="💳" />; }
export function RecruitmentPage() { return <PlaceholderPage title="Recruitment" icon="👥" />; }

export default PlaceholderPage;
