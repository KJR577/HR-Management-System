import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import LoginInfo from './pages/LoginInfo';
import PlaceholderPage from './pages/PlaceholderPage';
import './styles/global.css';
import Dashboard from './Dashboard/Dashboard';
import AttendanceManagement from './Attandence/AttendanceManagement';

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
          <Route path="/attendance"  element={<AttendanceManagement />} />
          <Route path="/payroll"     element={<PlaceholderPage />} />
          <Route path="/leave"       element={<PlaceholderPage />} />
          <Route path="/recruitment" element={<PlaceholderPage />} />
          <Route path="/login-info"  element={<LoginInfo />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
