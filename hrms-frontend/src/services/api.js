import axios from "axios";

// const API_URL = "http://localhost:5000/api";
const API_URL = "https://hrms-lite-backend-wwzl.onrender.com/api";

// Employee APIs
export const getEmployees = async () => {
  const response = await axios.get(`${API_URL}/employees`);
  return response.data;
};

export const addEmployee = async (employeeData) => {
  const response = await axios.post(`${API_URL}/employees`, employeeData);
  return response.data;
};

export const deleteEmployee = async (id) => {
  const response = await axios.delete(`${API_URL}/employees/${id}`);
  return response.data;
};

// Attendance APIs
export const getAttendance = async () => {
  const response = await axios.get(`${API_URL}/attendance`);
  return response.data;
};

export const getAttendanceByEmployee = async (employeeId) => {
  const response = await axios.get(`${API_URL}/attendance/${employeeId}`);
  return response.data;
};

export const markAttendance = async (attendanceData) => {
  const response = await axios.post(`${API_URL}/attendance`, attendanceData);
  return response.data;
};
