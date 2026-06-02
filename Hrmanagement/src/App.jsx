import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './HR layout/components/Layout';
import LoginInfo from './HR layout/pages/LoginInfo';
import PlaceholderPage from './HR layout/pages/PlaceholderPage';
import './HR layout/styles/global.css';

import Emplayout from './Employee layout/Empcomponentse/Layoute'
import Emplogininfo from './Employee layout/Emppages/Logininfoe'

import Dashboard from './HR layout/Dashboard/Dashboard';
import EmployeeDetails from './HR layout/Employee/Employee';
import LeaveManagement from './HR layout/Leave/LeaveManagement';
import Payroll from './HR layout/Payroll/Payroll';
import AttendanceManagement from './HR layout/Attendance/AttendanceManagement';
import Recruitment from './HR layout/Recruitment/Recruitment';
import Login from './Login/login';

import EmployeeDashboard from './Employee layout/Empdashboard/EmployeeDashboard';
import EmployeeRecruitment from './Employee layout/Employeemodule/EmployeeProfile';
import EmployeeLeave from './Employee layout/Empleave/Leave';
import Employeerecritment from './Employee layout/Emprecruitment/RecruitmentModule'; 


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Redirect root to login */}
        <Route path="/" element={<Navigate to="/login" replace />} />

        {/* Login page without Layout */}
        <Route path="/login" element={<Login />} />

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
          <Route element={<Emplayout />}>
          <Route path="/employee-dashboard" element={<EmployeeDashboard />} />
          <Route path="/employee-profile" element={<EmployeeRecruitment />} />
          <Route path="/employee-leave" element={<EmployeeLeave />} />
          <Route path="/employee-recruitment" element={<Employeerecritment />} />
          <Route path="/emplogin-info" element={<Emplogininfo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}