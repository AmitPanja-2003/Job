import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="w-1/4 bg-white p-4 rounded-lg shadow-lg">
      <div className="text-center">
        <img
          src="/path-to-your-image.jpg"
          alt="Profile"
          className="w-24 h-24 rounded-full mx-auto"
        />
        <h2 className="text-lg font-semibold mt-2">Amit Panja</h2>
        <p className="text-sm text-gray-600">Superset ID: 5815777</p>
        <p className="text-xs text-blue-500 mt-1">
          Your profile has been submitted for verification
        </p>
      </div>
      <nav className="mt-4">
        <ul className="space-y-2">
          <li className="p-2 bg-gray-200 rounded">
            <Link to="/profile">Basic Details</Link>
          </li>
          <li className="p-2 hover:bg-gray-200 rounded">
            <Link to="/education">Education Details</Link>
          </li>
          <li className="p-2 hover:bg-gray-200 rounded">
            Internship & Work Ex
          </li>
          <li className="p-2 hover:bg-gray-200 rounded">
            Skills, Subjects & Languages
          </li>
          <li className="p-2 hover:bg-gray-200 rounded">Projects</li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
