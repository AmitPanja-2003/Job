import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [gender, setGender] = useState("");
  const navigate = useNavigate();

  const handleSignup = () => {
    // Add user signup logic
    alert(`Signup Successful as ${role}`);
    navigate("/dashboard");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 w-full h-full">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96 w-[600px] max-w-lg">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Sign Up</h2>
        
        <input
          type="text"
          placeholder="Full Name"
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        
        <input
          type="tel"
          placeholder="Phone Number"
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        
        <div className="mb-4">
          <h3 className="text-lg font-medium text-gray-700 mb-2">Select Your Gender</h3>
          <div className="flex space-x-4">
            <label className="flex items-center">
              <input type="radio" name="gender" value="Male" className="mr-2" onChange={(e) => setGender(e.target.value)} /> Male
            </label>
            <label className="flex items-center">
              <input type="radio" name="gender" value="Female" className="mr-2" onChange={(e) => setGender(e.target.value)} /> Female
            </label>
            <label className="flex items-center">
              <input type="radio" name="gender" value="Other" className="mr-2" onChange={(e) => setGender(e.target.value)} /> Other
            </label>
          </div>
        </div>
        
        <div className="mb-4">
          <h3 className="text-lg font-medium text-gray-700 mb-2">Select Your Role</h3>
          <select
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="" disabled selected>Select Role</option>
            <option value="Admin">Admin</option>
            <option value="Job Seeker">Job Seeker</option>
            <option value="Company">Company</option>
          </select>
        </div>
        
        <button
          className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition duration-300"
          onClick={handleSignup}
        >
          Sign Up
        </button>
        
        <p className="mt-4 text-center text-gray-600">
          Already have an account?{" "}
          <span
            className="text-blue-600 cursor-pointer hover:text-blue-800"
            onClick={() => navigate("/")}
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
}

export default Signup;
