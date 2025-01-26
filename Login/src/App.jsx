import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import Profile from "./Components/Profile";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Dashboard from "./Components/Dashboard";
import EducationDetails from "./Components/EducationDetails";

const App = () => {
  return (
    <Router>
      <div className="bg-gray-100 min-h-screen">
        {/* <Navbar /> */}
        <div className="flex p-4">
          {/* <Sidebar /> */}
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/education" element={<EducationDetails />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;


// import React, { useState, useEffect } from "react";
// import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
// import Navbar from "./Components/Navbar";
// import Sidebar from "./Components/Sidebar";
// import Profile from "./Components/Profile";
// import Login from "./Components/Login";
// import Signup from "./Components/Signup";
// import Dashboard from "./Components/Dashboard";
// import EducationDetails from "./Components/EducationDetails";


// const App = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState(true);

//   // Simulating user authentication state persistence
//   useEffect(() => {
//     const storedUser = localStorage.getItem("isAuthenticated");
//     if (storedUser) {
//       setIsAuthenticated(true);
//     }
//   }, []);

//   const handleLogin = () => {
//     setIsAuthenticated(true);
//     localStorage.setItem("isAuthenticated", "true");
//   };

//   const handleLogout = () => {
//     setIsAuthenticated(false);
//     localStorage.removeItem("isAuthenticated");
//   };

//   return (
//     <Router>
//       <div className="bg-gray-100 min-h-screen">
//         <Navbar onLogout={handleLogout} />
//         <div className="flex p-4">
//           {isAuthenticated && <Sidebar />}
//           <Routes>
//             {/* If logged in, go to Profile; otherwise, show Login */}
//             <Route path="/" element={isAuthenticated ? <Navigate to="/profile" /> : <Login onLogin={handleLogin} />} />
//             <Route path="/profile" element={isAuthenticated ? <Profile /> : <Navigate to="/" />} />
//             <Route path="/education" element={isAuthenticated ? <EducationDetails /> : <Navigate to="/" />} />
//           </Routes>
//         </div>
//       </div>
//     </Router>
//   );
// };

// export default App;
