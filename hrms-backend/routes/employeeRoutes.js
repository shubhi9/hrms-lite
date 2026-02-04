const express = require("express");
const router = express.Router();
const Employee = require("../models/Employee");

// Get all employees
router.get("/", async (req, res) => {
  try {
    const employees = await Employee.find().sort({ createdAt: -1 });
    res.json(employees);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching employees", error: error.message });
  }
});

// Add new employee
router.post("/", async (req, res) => {
  try {
    const { employeeId, fullName, email, department } = req.body;

    // Validation
    if (!employeeId || !fullName || !email || !department) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check if employee already exists
    const existingEmployee = await Employee.findOne({ employeeId });
    if (existingEmployee) {
      return res.status(400).json({ message: "Employee ID already exists" });
    }

    const employee = new Employee({ employeeId, fullName, email, department });
    await employee.save();
    res.status(201).json(employee);
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error creating employee", error: error.message });
  }
});

// Delete employee
router.delete("/:id", async (req, res) => {
  try {
    const employee = await Employee.findByIdAndDelete(req.params.id);
    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    }
    res.json({ message: "Employee deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting employee", error: error.message });
  }
});

module.exports = router;
