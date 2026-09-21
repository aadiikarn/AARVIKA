import StatCard from "../components/StatCard";

function Dashboard({ employees }) {
  const totalEmployees = employees.length;

  const departments = new Set(
    employees.map((employee) => employee.department)
  ).size;

  const averageSalary =
    totalEmployees > 0
      ? employees.reduce(
          (total, employee) => total + Number(employee.salary || 0),
          0
        ) / totalEmployees
      : 0;

  return (
    <section className="dashboard-page">
      {/* Page Header */}
      <div className="page-heading">
        <div>
          <span className="page-eyebrow">OVERVIEW</span>

          <h2>Workforce Dashboard</h2>

          <p>
            Monitor your workforce and employee information from one place.
          </p>
        </div>
      </div>

      {/* Statistics */}
      <div className="stats-grid">
        <StatCard
          title="Total Employees"
          value={totalEmployees}
          subtitle="Currently registered"
          icon="👥"
        />

        <StatCard
          title="Departments"
          value={departments}
          subtitle="Active departments"
          icon="◈"
        />

        <StatCard
          title="Average Salary"
          value={`₹${Math.round(averageSalary).toLocaleString("en-IN")}`}
          subtitle="Across all employees"
          icon="₹"
        />
      </div>

      {/* Welcome Section */}
      <div className="dashboard-welcome">
        <div>
          <span className="welcome-eyebrow">AARVIKA</span>

          <h3>Simplifying Workforce Management</h3>

          <p>
            Keep employee records organized, accessible and easy to manage.
          </p>
        </div>

        <div className="welcome-symbol">A</div>
      </div>
    </section>
  );
}

export default Dashboard;