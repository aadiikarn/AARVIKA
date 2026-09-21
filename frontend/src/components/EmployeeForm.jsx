import { useEffect, useState } from "react";

const initialForm = {
  name: "",
  department: "",
  role: "",
  salary: "",
  joinDate: "",
};

function EmployeeForm({ employee, onSubmit, onCancel, loading }) {
  const [formData, setFormData] = useState(initialForm);

  useEffect(() => {
    if (employee) {
      setFormData({
        name: employee.name || "",
        department: employee.department || "",
        role: employee.role || "",
        salary: employee.salary || "",
        joinDate: employee.joinDate
          ? employee.joinDate.substring(0, 10)
          : "",
      });
    } else {
      setFormData(initialForm);
    }
  }, [employee]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    onSubmit({
      ...formData,
      salary: Number(formData.salary),
    });
  };

  return (
    <form className="employee-form" onSubmit={handleSubmit}>
      <div className="form-header">
        <div>
          <span className="form-eyebrow">
            {employee ? "EDIT EMPLOYEE" : "NEW EMPLOYEE"}
          </span>

          <h2>
            {employee ? "Update Employee" : "Add Employee"}
          </h2>

          <p>
            {employee
              ? "Update the employee information below."
              : "Enter the employee details to add them to AARVIKA."}
          </p>
        </div>

        <button
          type="button"
          className="form-close"
          onClick={onCancel}
          aria-label="Close form"
        >
          ×
        </button>
      </div>

      <div className="form-grid">
        {/* Name */}
        <div className="form-group">
          <label htmlFor="name">Full Name</label>

          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter employee name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        {/* Department */}
        <div className="form-group">
          <label htmlFor="department">Department</label>

          <select
            id="department"
            name="department"
            value={formData.department}
            onChange={handleChange}
            required
          >
            <option value="">Select department</option>
            <option value="Engineering">Engineering</option>
            <option value="Design">Design</option>
            <option value="Marketing">Marketing</option>
            <option value="Sales">Sales</option>
            <option value="Finance">Finance</option>
            <option value="Human Resources">Human Resources</option>
            <option value="Operations">Operations</option>
          </select>
        </div>

        {/* Role */}
        <div className="form-group">
          <label htmlFor="role">Role</label>

          <input
            id="role"
            name="role"
            type="text"
            placeholder="e.g. Software Developer"
            value={formData.role}
            onChange={handleChange}
            required
          />
        </div>

        {/* Salary */}
        <div className="form-group">
          <label htmlFor="salary">Salary</label>

          <input
            id="salary"
            name="salary"
            type="number"
            min="0"
            placeholder="Enter salary"
            value={formData.salary}
            onChange={handleChange}
            required
          />
        </div>

        {/* Join Date */}
        <div className="form-group">
          <label htmlFor="joinDate">Joining Date</label>

          <input
            id="joinDate"
            name="joinDate"
            type="date"
            value={formData.joinDate}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="form-actions">
        <button
          type="button"
          className="cancel-btn"
          onClick={onCancel}
          disabled={loading}
        >
          Cancel
        </button>

        <button
          type="submit"
          className="submit-btn"
          disabled={loading}
        >
          {loading
            ? "Saving..."
            : employee
              ? "Update Employee"
              : "Add Employee"}
        </button>
      </div>
    </form>
  );
}

export default EmployeeForm;