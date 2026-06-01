import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import LoginInfo from './pages/LoginInfo';
import PlaceholderPage from './pages/PlaceholderPage';
import './styles/global.css';
import Dashboard from './Dashboard/Dashboard';
import LeaveManagement from './Leave/LeaveManagement';
import Payroll from './Payroll/Payroll';
import Attendance from './Attendance/Attendance';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Redirect root to dashboard */}
        <Route path="/" element={<Navigate to="/dashboard" replace />} />

        {/* All pages share the sidebar Layout */}
        <Route element={<Layout />}>
          <Route path="/dashboard"   element={<Dashboard/>} />
          <Route path="/employee"    element={<PlaceholderPage />} />
          <Route path="/attendance"  element={<Attendance />} />
          <Route path="/payroll"     element={<Payroll />} />
          <Route path="/recruitment" element={<PlaceholderPage />} />
          <Route path="/login-info"  element={<LoginInfo />} />
          <Route path="/leave"       element={<LeaveManagement />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
