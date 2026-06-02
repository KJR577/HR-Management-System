import '../styles/LoginInfoe.css';

export default function LoginInfo() {
  return (
    <div className="login-info-wrapper">
      <div className="login-info-card">
        <h2 className="card-heading">Login Information</h2>

        {/* User profile row */}
        <div className="profile-row">
          <div className="profile-avatar">JS</div>
          <div className="profile-details">
            <span className="profile-name">Jose</span>
            <span className="profile-role">Employee</span>
          </div>
        </div>

        {/* Fields */}
        <div className="info-field">
          <label className="field-label">EMPLOYEE ID</label>
          <div className="field-value">EP001</div>
        </div>

        <div className="info-field">
          <label className="field-label">EMAIL ADDRESS</label>
          <div className="field-value">joseemployee577@gmail.com</div>
        </div>

        {/* Sign out */}
        <button className="signout-btn">Sign Out</button>
      </div>
    </div>
  );
}
