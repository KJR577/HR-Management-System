import { CURRENT_USER } from "../data/mockData";
import Avatar from "../components/shared/Avatar";

export default function LoginInfoPage() {
  return (
    <div className="card" style={{ maxWidth: "600px", margin: "0 auto" }}>
      <div className="card-header">
        <h2 className="card-title">Login Information</h2>
      </div>
      
      <div style={{ display: "flex", alignItems: "center", gap: "24px", marginBottom: "32px" }}>
        <Avatar 
          initials={CURRENT_USER.initials} 
          bg={CURRENT_USER.avatarBg} 
          color={CURRENT_USER.initialsColor} 
          size={80} 
        />
        <div>
          <h3 style={{ margin: 0, fontSize: "24px", color: "#2949a2" }}>{CURRENT_USER.name}</h3>
          <p style={{ margin: "4px 0 0", color: "#666", fontWeight: "500" }}>{CURRENT_USER.role}</p>
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <div style={{ padding: "16px", background: "#f8f9ff", borderRadius: "8px", border: "1px solid #eef0ff" }}>
          <span style={{ fontSize: "12px", color: "#888", textTransform: "uppercase", fontWeight: "700" }}>Employee ID</span>
          <div style={{ fontSize: "16px", fontWeight: "500", marginTop: "4px" }}>{CURRENT_USER.empId}</div>
        </div>
        
        <div style={{ padding: "16px", background: "#f8f9ff", borderRadius: "8px", border: "1px solid #eef0ff" }}>
          <span style={{ fontSize: "12px", color: "#888", textTransform: "uppercase", fontWeight: "700" }}>Email Address</span>
          <div style={{ fontSize: "16px", fontWeight: "500", marginTop: "4px" }}>{CURRENT_USER.email}</div>
        </div>
      </div>
      
      <button 
        style={{ 
          marginTop: "24px", 
          padding: "12px 24px", 
          background: "#ff4757", 
          color: "white", 
          border: "none", 
          borderRadius: "8px",
          fontWeight: "600",
          cursor: "pointer",
          width: "100%"
        }}
      >
        Sign Out
      </button>
    </div>
  );
}