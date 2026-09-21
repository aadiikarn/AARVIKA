import "./Sidebar.css";

function Sidebar({ activePage, setActivePage }) {
  return (
    <aside className="sidebar">
      {/* Brand */}
      <div className="sidebar-brand">
        <div className="brand-logo">A</div>

        <div>
          <h2>AARVIKA</h2>
          <span>Workforce Management</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="sidebar-nav">
        <p className="nav-label">MAIN MENU</p>

        <button
          className={`nav-item ${activePage === "dashboard" ? "active" : ""}`}
          onClick={() => setActivePage("dashboard")}
        >
          <span className="nav-icon">⌂</span>
          <span>Dashboard</span>
        </button>

        <button
          className={`nav-item ${activePage === "employees" ? "active" : ""}`}
          onClick={() => setActivePage("employees")}
        >
          <span className="nav-icon">◉</span>
          <span>Employees</span>
        </button>
      </nav>

      {/* Bottom */}
      <div className="sidebar-bottom">
        <div className="sidebar-help">
          <div className="help-icon">?</div>

          <div>
            <strong>Need Help?</strong>
            <span>Contact Admin</span>
          </div>
        </div>

        <div className="sidebar-version">
          AARVIKA v1.0
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;