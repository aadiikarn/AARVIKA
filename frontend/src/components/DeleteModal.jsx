function DeleteModal({ employee, onConfirm, onCancel, loading }) {
  if (!employee) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="delete-modal">
        <div className="delete-icon">!</div>

        <div className="delete-content">
          <span className="modal-eyebrow">DELETE EMPLOYEE</span>

          <h2>Delete Employee?</h2>

          <p>
            Are you sure you want to delete{" "}
            <strong>{employee.name}</strong>?
            This action cannot be undone.
          </p>
        </div>

        <div className="delete-actions">
          <button
            type="button"
            className="modal-cancel-btn"
            onClick={onCancel}
            disabled={loading}
          >
            Cancel
          </button>

          <button
            type="button"
            className="modal-delete-btn"
            onClick={onConfirm}
            disabled={loading}
          >
            {loading ? "Deleting..." : "Delete Employee"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteModal;