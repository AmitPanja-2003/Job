import React from "react";

const Profile = () => {
  return (
    <main className="w-3/4 bg-white p-6 ml-4 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold">Basic Details</h1>
      <div className="mt-4">
        <p><strong>Full Name:</strong> Amit Panja</p>
        <p><strong>Date of Birth:</strong> 27 November, 2003</p>
        <p><strong>Gender:</strong> Male</p>
        <p><strong>Current/Latest College:</strong> Chitkara University Institute of Engineering and Technology, Jhansla</p>
      </div>
      <div className="mt-6">
        <h2 className="text-xl font-semibold">Summary</h2>
        <p className="text-gray-500 text-sm">You have not added a profile summary yet. Go ahead and write something about yourself.</p>
        <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">+ Add new</button>
      </div>
      <div className="mt-6">
        <h2 className="text-xl font-semibold">Address</h2>
        <p><strong>Permanent Address:</strong> Vill Panpara P O Balpai P S Sabong, West Midnapore, West Bengal, India, 721155</p>
        <p><strong>Current Address:</strong> Chitkara University, Solan, Solan, Himachal Pradesh, India, 174103</p>
        <button className="mt-2 bg-gray-300 px-4 py-2 rounded">Edit Info</button>
      </div>
    </main>
  );
};

export default Profile;