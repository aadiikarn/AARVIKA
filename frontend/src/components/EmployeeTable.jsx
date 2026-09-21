import { useMemo, useState } from "react";

function EmployeeTable({ employees, onEdit, onDelete }) {
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: "asc",
  });

  const handleSort = (key) => {
    setSortConfig((previous) => ({
      key,
      direction:
        previous.key === key && previous.direction === "asc"
          ? "desc"
          : "asc",
    }));
  };

  const getSortIcon = (key) => {
    if (sortConfig.key !== key) {
      return "↕";
    }

    return sortConfig.direction === "asc" ? "↑" : "↓";
  };

  const sortedEmployees = useMemo(() => {
    const sorted = [...employees];

    if (!sortConfig.key) {
      return sorted;
    }

    sorted.sort((a, b) => {
      let valueA;
      let valueB;

      switch (sortConfig.key) {
        case "name":
          valueA = a.name.toLowerCase();
          valueB = b.name.toLowerCase();
          break;

        case "department":
          valueA = a.department.toLowerCase();
          valueB = b.department.toLowerCase();
          break;

        case "salary":
          valueA = Number(a.salary);
          valueB = Number(b.salary);
          break;

        case "joinDate":
          valueA = new Date(a.joinDate).getTime();
          valueB = new Date(b.joinDate).getTime();
          break;

        default:
          return 0;
      }

      if (valueA < valueB) {
        return sortConfig.direction === "asc" ? -1 : 1;
      }

      if (valueA > valueB) {
        return sortConfig.direction === "asc" ? 1 : -1;
      }

      return 0;
    });

    return sorted;
  }, [employees, sortConfig]);

  if (employees.length === 0) {
    return (
      <div className="empty-state">
        <div className="empty-icon">👥</div>

        <h3>No employees found</h3>

        <p>
          Add your first employee to start managing your workforce.
        </p>
      </div>
    );
  }

  return (
    <div className="employee-table-wrapper">
      <table className="employee-table">
        <thead>
          <tr>
            <th>
              <button
                className="sort-button"
                onClick={() => handleSort("name")}
              >
                Employee
                <span>{getSortIcon("name")}</span>
              </button>
            </th>

            <th>
              <button
                className="sort-button"
                onClick={() => handleSort("department")}
              >
                Department
                <span>{getSortIcon("department")}</span>
              </button>
            </th>

            <th>Role</th>

            <th>
              <button
                className="sort-button"
                onClick={() => handleSort("salary")}
              >
                Salary
                <span>{getSortIcon("salary")}</span>
              </button>
            </th>

            <th>
              <button
                className="sort-button"
                onClick={() => handleSort("joinDate")}
              >
                Join Date
                <span>{getSortIcon("joinDate")}</span>
              </button>
            </th>

            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {sortedEmployees.map((employee) => (
            <tr key={employee._id}>
              <td>
                <div className="employee-name-cell">
                  <div className="employee-avatar">
                    {employee.name.charAt(0).toUpperCase()}
                  </div>

                  <div>
                    <strong>{employee.name}</strong>
                    <span>{employee._id.slice(-6)}</span>
                  </div>
                </div>
              </td>

              <td>
                <span className="department-badge">
                  {employee.department}
                </span>
              </td>

              <td>{employee.role}</td>

              <td>
                ₹{Number(employee.salary).toLocaleString("en-IN")}
              </td>

              <td>
                {new Date(employee.joinDate).toLocaleDateString("en-IN", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })}
              </td>

              <td>
                <div className="table-actions">
                  <button
                    className="edit-btn"
                    onClick={() => onEdit(employee)}
                    title="Edit employee"
                  >
                    ✎
                  </button>

                  <button
                    className="delete-btn"
                    onClick={() => onDelete(employee)}
                    title="Delete employee"
                  >
                    🗑
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeTable;