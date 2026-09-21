function Topbar({ activePage }) {
  return (
    <header className="topbar">
      <div className="topbar-left">
        <div>
          <span className="topbar-label">AARVIKA</span>

          <h1>
            {activePage === "employees"
              ? "Employee Management"
              : "Dashboard"}
          </h1>
        </div>
      </div>

      <div className="topbar-right">
        <button
          className="notification-btn"
          aria-label="Notifications"
        >
          🔔
        </button>

        <div className="admin-profile">
          <div className="admin-avatar">A</div>

          <div className="admin-info">
            <strong>Admin</strong>
            <span>Administrator</span>
          </div>

          <span className="profile-arrow">⌄</span>
        </div>
      </div>
    </header>
  );
}

export default Topbar;