import { useMemo, useState } from "react";

import SearchBar from "../components/SearchBar";
import EmployeeTable from "../components/EmployeeTable";
import EmployeeForm from "../components/EmployeeForm";
import DeleteModal from "../components/DeleteModal";
import Loading from "../components/Loading";
import Toast from "../components/Toast";

import {
  createEmployee,
  updateEmployee,
  deleteEmployee as deleteEmployeeApi,
} from "../services/employeeService";

function Employees({ employees, refreshEmployees }) {
  const [search, setSearch] = useState("");

  const [showForm, setShowForm] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const [employeeToDelete, setEmployeeToDelete] = useState(null);

  const [formLoading, setFormLoading] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);

  const [error, setError] = useState("");
  const [initialLoading, setInitialLoading] = useState(false);

  const [toast, setToast] = useState({
    message: "",
    type: "success",
  });

  // Search employees
  const filteredEmployees = useMemo(() => {
    const searchText = search.toLowerCase().trim();

    if (!searchText) {
      return employees;
    }

    return employees.filter((employee) => {
      return (
        employee.name?.toLowerCase().includes(searchText) ||
        employee.department?.toLowerCase().includes(searchText) ||
        employee.role?.toLowerCase().includes(searchText)
      );
    });
  }, [employees, search]);

  // Show toast
  const showToast = (message, type = "success") => {
    setToast({
      message,
      type,
    });

    setTimeout(() => {
      setToast({
        message: "",
        type: "success",
      });
    }, 3000);
  };

  // Add employee
  const handleAdd = () => {
    setSelectedEmployee(null);
    setError("");
    setShowForm(true);
  };

  // Edit employee
  const handleEdit = (employee) => {
    setSelectedEmployee(employee);
    setError("");
    setShowForm(true);
  };

  // Delete employee
  const handleDelete = (employee) => {
    setEmployeeToDelete(employee);
    setError("");
  };

  // Create / Update employee
  const handleSubmit = async (employeeData) => {
    try {
      setFormLoading(true);
      setError("");

      if (selectedEmployee) {
        await updateEmployee(
          selectedEmployee._id,
          employeeData
        );

        await refreshEmployees();

        setShowForm(false);
        setSelectedEmployee(null);

        showToast("Employee updated successfully.");
      } else {
        await createEmployee(employeeData);

        await refreshEmployees();

        setShowForm(false);
        setSelectedEmployee(null);

        showToast("Employee added successfully.");
      }
    } catch (err) {
      console.error(err);

      setError(
        err.response?.data?.message ||
          "Unable to save employee."
      );
    } finally {
      setFormLoading(false);
    }
  };

  // Delete employee
  const handleConfirmDelete = async () => {
    if (!employeeToDelete) {
      return;
    }

    try {
      setDeleteLoading(true);
      setError("");

      await deleteEmployeeApi(employeeToDelete._id);

      await refreshEmployees();

      setEmployeeToDelete(null);

      showToast("Employee deleted successfully.");
    } catch (err) {
      console.error(err);

      setError(
        err.response?.data?.message ||
          "Unable to delete employee."
      );
    } finally {
      setDeleteLoading(false);
    }
  };

  return (
    <section className="employees-page">
      {/* Header */}
      <div className="page-heading employees-heading">
        <div>
          <span className="page-eyebrow">WORKFORCE</span>

          <h2>Employee Management</h2>

          <p>
            Manage employee records, roles, departments and salaries.
          </p>
        </div>

        <button
          className="add-employee-btn"
          onClick={handleAdd}
        >
          <span>+</span>
          Add Employee
        </button>
      </div>

      {/* Error */}
      {error && (
        <div className="error-state">
          <span>!</span>

          <div>
            <strong>Something went wrong</strong>
            <p>{error}</p>
          </div>

          <button
            onClick={async () => {
              setError("");
              setInitialLoading(true);

              try {
                await refreshEmployees();
              } finally {
                setInitialLoading(false);
              }
            }}
          >
            Retry
          </button>
        </div>
      )}

      {/* Employee Panel */}
      <div className="employee-panel">
        <div className="employee-panel-header">
          <div>
            <h3>All Employees</h3>

            <p>
              {employees.length} employee
              {employees.length !== 1 ? "s" : ""} registered
            </p>
          </div>

          <SearchBar
            value={search}
            onChange={setSearch}
          />
        </div>

        {initialLoading ? (
          <Loading message="Loading employees..." />
        ) : (
          <EmployeeTable
            employees={filteredEmployees}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        )}
      </div>

      {/* Add / Edit Form */}
      {showForm && (
        <div className="form-overlay">
          <div className="form-modal">
            <EmployeeForm
              employee={selectedEmployee}
              onSubmit={handleSubmit}
              onCancel={() => {
                setShowForm(false);
                setSelectedEmployee(null);
              }}
              loading={formLoading}
            />
          </div>
        </div>
      )}

      {/* Delete Modal */}
      {employeeToDelete && (
        <DeleteModal
          employee={employeeToDelete}
          onConfirm={handleConfirmDelete}
          onCancel={() => setEmployeeToDelete(null)}
          loading={deleteLoading}
        />
      )}

      {/* Toast */}
      <Toast
        message={toast.message}
        type={toast.type}
        onClose={() =>
          setToast({
            message: "",
            type: "success",
          })
        }
      />
    </section>
  );
}

export default Employees;