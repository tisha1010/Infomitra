// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Login.css";

// const Register = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [message, setMessage] = useState("");
//   const navigate = useNavigate();

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch("http://localhost:8000/api/register", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ name, email, password }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         setMessage("Registration successful! Please login.");
//         setTimeout(() => navigate("/login"), 1500);
//       } else {
//         setMessage(data.error || "Registration failed");
//       }
//     } catch (err) {
//       setMessage("Server error, try again later.");
//     }
//   };

//   return (
//     <div className="login-container">
//       <form onSubmit={handleRegister} className="login-form">
//         <h2>Register</h2>
//         {message && <p>{message}</p>}

//         <input
//           type="text"
//           placeholder="Full Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           required
//         />

//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />

//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />

//         <button type="submit">Register</button>
//       </form>
//     </div>
//   );
// };

// export default Register;


// src/pages/Register.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setMessage('');
    try {
      const res = await fetch('http://localhost:8000/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      });
      const data = await res.json();
      if (res.ok) {
        setMessage('Registration successful — redirecting to login...');
        setTimeout(() => navigate('/login'), 1200);
      } else {
        setMessage(data.error || 'Registration failed');
      }
    } catch (err) {
      console.error(err);
      setMessage('Server error, try again later.');
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleRegister} className="login-form">
        <h2>Register</h2>
        {message && <p className="error">{message}</p>}
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Full Name" required />
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
