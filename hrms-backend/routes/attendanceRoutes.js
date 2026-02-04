const express = require("express");
const router = express.Router();
const Attendance = require("../models/Attendance");
const Employee = require("../models/Employee");

// Get all attendance records
router.get("/", async (req, res) => {
  try {
    const attendance = await Attendance.find().sort({ date: -1 });
    res.json(attendance);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching attendance", error: error.message });
  }
});

// Get attendance by employee ID
router.get("/:employeeId", async (req, res) => {
  try {
    const attendance = await Attendance.find({
      employeeId: req.params.employeeId,
    }).sort({ date: -1 });
    res.json(attendance);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching attendance", error: error.message });
  }
});

// Mark attendance
router.post("/", async (req, res) => {
  try {
    const { employeeId, date, status } = req.body;

    // Validation
    if (!employeeId || !date || !status) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check if employee exists
    const employee = await Employee.findOne({ employeeId });
    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    }

    const attendance = new Attendance({ employeeId, date, status });
    await attendance.save();
    res.status(201).json(attendance);
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error marking attendance", error: error.message });
  }
});

module.exports = router;
