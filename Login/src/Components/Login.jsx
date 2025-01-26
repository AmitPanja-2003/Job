import React, { useState } from "react";
import { Link } from "react-router-dom"; 
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send the data to the server)
    console.log("Email:", email);
    console.log("Password:", password);
    // You can add more logic here to process the login
  };

  return (
    <div className="flex h-screen w-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
      {/* Left Side - Text Section */}
      <div className="w-1/2 flex items-center justify-center p-10 bg-opacity-50 text-white h-full">
        <div>
          <h1 className="text-4xl font-bold mb-4">Welcome to Job Portal</h1>
          <p className="text-lg">Find your dream job or hire top talent with ease.</p>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="w-1/2 flex items-center justify-center h-full">
        <div className="bg-white p-10 rounded-lg shadow-lg w-96">
          <h2 className="text-2xl font-bold mb-5 text-center">Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your password"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700"
            >
              Login
            </button>
          </form>
          <p className="text-sm text-center text-gray-600 mt-4">
            Don't have an account? <Link to="/signup" className="text-blue-600">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
