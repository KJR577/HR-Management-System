import "./LeaveTypeBadge.css";

const PALETTE = {
  "Sick leave":    { bg: "#FFF0F0", color: "#C0392B" },
  "Casual leave":  { bg: "#EBF5FF", color: "#1A73E8" },
  "Annual leave":  { bg: "#EDFBF1", color: "#1E8449" },
};

export default function LeaveTypeBadge({ type }) {
  const p = PALETTE[type] || { bg: "#F5F5F5", color: "#555" };
  return (
    <span
      className="leave-type-badge"
      style={{ background: p.bg, color: p.color }}
    >
      {type}
    </span>
  );
}
