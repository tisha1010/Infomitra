// ////////////////////////////////////////////////
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Login.css";

// const Login = ({ setIsLoggedIn, setUser }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch("http://localhost:8000/api/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email, password }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         localStorage.setItem("token", data.token);
//         localStorage.setItem("user", JSON.stringify(data.user));

//         setIsLoggedIn(true);
//         setUser(data.user);

//         navigate("/profile");
//       } else {
//         setError(data.error || "Login failed");
//       }
//     } catch (err) {
//       setError("Server error, please try again later.");
//     }
//   };

//   return (
//     <div className="login-container">
//       <form onSubmit={handleLogin} className="login-form">
//         <h2>Login</h2>
//         {error && <p className="error">{error}</p>}

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

//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;


// src/pages/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = ({ setIsLoggedIn, setUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const res = await fetch('http://localhost:8000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (res.ok) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
        setIsLoggedIn && setIsLoggedIn(true);
        setUser && setUser(data.user);
        navigate('/profile');
      } else {
        setError(data.error || 'Login failed');
      }
    } catch (err) {
      console.error('Login error', err);
      setError('Server error, please try again later.');
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin} className="login-form">
        <h2>Login</h2>
        {error && <p className="error">{error}</p>}
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
