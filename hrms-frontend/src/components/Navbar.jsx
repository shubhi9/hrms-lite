import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold">HRMS Lite</h1>
          </div>
          <div className="flex space-x-4">
            <Link
              to="/employees"
              className="px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              Employees
            </Link>
            <Link
              to="/attendance"
              className="px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              Attendance
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
