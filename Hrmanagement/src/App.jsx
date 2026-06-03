import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './HR layout/components/Layout.jsx';
import LoginInfo from './HR layout/pages/LoginInfo.jsx';
import PlaceholderPage from './HR layout/pages/PlaceholderPage.jsx';
import './HR layout/styles/global.css';
import QuickActions from './Login/QuickActions.jsx';
import AdminLogin from './MarkAttendance/AdminLogin.jsx';

import EmployeeLayout from './Employee layout/Empcomponentse/Layoute.jsx';
import EmployeeLoginInfo from './Employee layout/Emppages/Logininfoe.jsx';

import Dashboard from './HR layout/Dashboard/Dashboard.jsx';
import EmployeeDetails from './HR layout/Employee/Employee.jsx';
import LeaveManagement from './HR layout/Leave/LeaveManagement.jsx';
import Payroll from './HR layout/Payroll/Payroll.jsx';
import AttendanceManagement from './HR layout/Attendance/AttendanceManagement.jsx';
import Recruitment from './HR layout/Recruitment/Recruitment.jsx';
import Login from './Login/Login.jsx';

import EmployeeDashboard from './Employee layout/Empdashboard/EmployeeDashboard.jsx';
import EmployeeProfile from './Employee layout/Employeemodule/EmployeeProfile.jsx';
import EmployeeLeave from './Employee layout/Empleave/Leave.jsx';
import EmployeeRecruitmentModule from './Employee layout/Emprecruitment/RecruitmentModule.jsx';
import EmployeeLogin from './MarkAttendance/EmployeeLogin.jsx';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Redirect root to login */}
        <Route path="/" element={<Navigate to="/quick-actions" replace />} />

        {/* Login page without Layout */}
        <Route path="/quick-actions" element={<QuickActions />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/attendancelogin" element={<EmployeeLogin />} />

        {/* Protected/Main pages with Layout */}
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/employee" element={<EmployeeDetails />} />
          <Route path="/attendance" element={<AttendanceManagement />} />
          <Route path="/payroll" element={<Payroll />} />
          <Route path="/leave" element={<LeaveManagement />} />
          <Route path="/recruitment" element={<Recruitment />} />
          <Route path="/login-info" element={<LoginInfo />} />
        </Route>
          <Route element={<EmployeeLayout />}>
          <Route path="/employee-dashboard" element={<EmployeeDashboard />} />
          <Route path="/employee-profile" element={<EmployeeProfile />} />
          <Route path="/employee-leave" element={<EmployeeLeave />} />
          <Route path="/employee-recruitment" element={<EmployeeRecruitmentModule />} />
          <Route path="/emplogin-info" element={<EmployeeLoginInfo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}