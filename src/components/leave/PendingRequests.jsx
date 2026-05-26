import Avatar from "../shared/Avatar";
import LeaveTypeBadge from "../shared/LeaveTypeBadge";
import "./PendingRequests.css";

const COLUMNS = ["EMPLOYEE ID", "EMPLOYEE", "LEAVE TYPE", "DATE", "DURATION", "AUTHORIZATION"];

export default function PendingRequests({ requests, onApprove, onReject }) {
  const pendingCount = requests.filter((r) => r.status === "pending").length;

  return (
    <section className="card pending-requests">
      <div className="card-header">
        <h2 className="card-title">Pending Requests</h2>
        <span className="pending-badge">{pendingCount} pending</span>
      </div>

      {/* Table head */}
      <div className="pr-table-head">
        {COLUMNS.map((col) => (
          <span key={col} className="pr-th">{col}</span>
        ))}
      </div>

      {/* Rows */}
      {requests.map((req) => (
        <div key={req.id} className="pr-row-wrap">
          <div
            className="pr-row"
            style={{ opacity: req.status !== "pending" ? 0.5 : 1 }}
          >
            <span className="pr-cell pr-empid">{req.empId}</span>

            <div className="pr-cell pr-employee">
              <Avatar
                initials={req.initials}
                bg={req.avatarBg}
                color={req.initialsColor}
              />
              <span>{req.name}</span>
            </div>

            <div className="pr-cell">
              <LeaveTypeBadge type={req.leaveType} />
            </div>

            <span className="pr-cell pr-date">{req.date}</span>
            <span className="pr-cell pr-duration">{req.duration}</span>

            <div className="pr-cell pr-auth">
              {req.status === "pending" ? (
                <>
                  <button
                    className="btn-approve"
                    onClick={() => onApprove(req.id)}
                  >
                    Approve
                  </button>
                  <button
                    className="btn-reject"
                    onClick={() => onReject(req.id)}
                    aria-label="Reject"
                  >
                    ×
                  </button>
                </>
              ) : (
                <span
                  className={`status-chip status-chip--${req.status}`}
                >
                  {req.status === "approved" ? "✓ Approved" : "✕ Rejected"}
                </span>
              )}
            </div>
          </div>
          <div className="pr-divider" />
        </div>
      ))}
    </section>
  );
}
