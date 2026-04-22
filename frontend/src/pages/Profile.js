// import React from "react";
// import { useNavigate } from "react-router-dom";
// import "./Profile.css";

// const Profile = ({ user, setIsLoggedIn }) => {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("user");
//     setIsLoggedIn(false);
//     navigate("/login");
//   };

//   if (!user) {
//     navigate("/login");
//     return null;
//   }

//   return (
//     <div className="profile-container">
//       <div className="profile-header">
//         <h2>Welcome, {user.name}!</h2>
//         <button onClick={handleLogout} className="logout-btn">Logout</button>
//       </div>
//       <div className="profile-details">
//         <p><strong>Email:</strong> {user.email}</p>
//         <p><strong>Joined:</strong> {new Date(user.created_at).toLocaleDateString()}</p>
//       </div>
//     </div>
//   );
// };

// export default Profile;


// src/pages/Profile.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Profile.css';

const Profile = ({ user, setIsLoggedIn }) => {
  const navigate = useNavigate();
  const storedUser = user || JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    if (!storedUser) navigate('/login');
  }, [storedUser, navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setIsLoggedIn && setIsLoggedIn(false);
    navigate('/login');
  };

  if (!storedUser) return null;

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h2>Welcome, {storedUser.name}!</h2>
        <button onClick={handleLogout} className="logout-btn">Logout</button>
      </div>
      <div className="profile-details">
        <p><strong>Email:</strong> {storedUser.email}</p>
        <p><strong>Joined:</strong> {new Date(storedUser.created_at).toLocaleDateString()}</p>
      </div>
    </div>
  );
};

export default Profile;
