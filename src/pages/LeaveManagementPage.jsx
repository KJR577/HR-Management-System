import { useState } from "react";
import PendingRequests from "../components/leave/PendingRequests";
import LeaveBalanceTracker from "../components/leave/LeaveBalanceTracker";
import Toast from "../components/shared/Toast";
import { LEAVE_REQUESTS, LEAVE_BALANCES } from "../data/mockData";
import "./LeaveManagementPage.css";

export default function LeaveManagementPage() {
  const [requests, setRequests] = useState(LEAVE_REQUESTS);
  const [toast, setToast] = useState(null);

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(null), 2500);
  };

  const handleApprove = (id) => {
    const emp = requests.find((r) => r.id === id);
    setRequests((prev) =>
      prev.map((r) => (r.id === id ? { ...r, status: "approved" } : r))
    );
    showToast(`✅ Approved leave for ${emp.name}`);
  };

  const handleReject = (id) => {
    const emp = requests.find((r) => r.id === id);
    setRequests((prev) =>
      prev.map((r) => (r.id === id ? { ...r, status: "rejected" } : r))
    );
    showToast(`❌ Rejected leave for ${emp.name}`);
  };

  return (
    <div className="lm-page">
      <Toast message={toast} />

      <PendingRequests
        requests={requests}
        onApprove={handleApprove}
        onReject={handleReject}
      />

      <LeaveBalanceTracker balances={LEAVE_BALANCES} />
    </div>
  );
}
