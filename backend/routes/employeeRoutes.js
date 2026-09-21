const express = require("express");

const {
  createEmployee,
  getEmployees,
  getEmployeeById,
  updateEmployee,
  deleteEmployee,
} = require("../controllers/EmployeeController");

const router = express.Router();

// Create employee
router.post("/", createEmployee);

// Get all employees
router.get("/", getEmployees);

// Get single employee
router.get("/:id", getEmployeeById);

// Update employee
router.put("/:id", updateEmployee);

// Delete employee
router.delete("/:id", deleteEmployee);

module.exports = router;