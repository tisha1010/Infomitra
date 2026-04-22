// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Landing from './Landing';
// import Home from './pages/Home';
// import Document from './pages/Document';
// import Contact from './pages/Contact';
// import Upload from './pages/Upload';
// import Chatbot from './pages/Chatbot';
// import Guide from './pages/Guide';
// import Scheme from './pages/Scheme';
// import Navbar from './components/Navbar';
// import Profile from './pages/Profile';
// import Login from './pages/Login';
// import Register from './pages/Register';
// import './App.css';

// function App() {
//   const [showLanding, setShowLanding] = useState(true);
//   const [isLoggedIn, setIsLoggedIn] = useState(
//     !!localStorage.getItem('token')
//   );
 

//   const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || null);

//   const handleLandingFinish = () => {
//     setShowLanding(false);
//   };


  
//   if (showLanding) {
//     return <Landing onFinish={handleLandingFinish} />;
//   }

//   return (
//     <Router>
//       <Navbar isLoggedIn={isLoggedIn} user={user} setIsLoggedIn={setIsLoggedIn} />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/document" element={<Document />} />
//         <Route path="/scheme" element={<Scheme />} />
//         <Route path="/upload" element={<Upload />} />
//         <Route path="/chatbot" element={<Chatbot />} />
//         <Route path="/guide" element={<Guide />} />
//         <Route path="/contact" element={<Contact />} />
//         {/* <Route 
//           path="/profile" 
//           element={<Profile user={user} setIsLoggedIn={setIsLoggedIn} />} 
//         />
//         <Route 
//           path="/login" 
//           element={<Login setIsLoggedIn={setIsLoggedIn} setUser={setUser} />} 
//         /> */}

//         <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} setUser={setUser} />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/profile" element={<Profile user={user} setIsLoggedIn={setIsLoggedIn} />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './Landing';
import Home from './pages/Home';
import Document from './pages/Document';
import Contact from './pages/Contact';
import Upload from './pages/Upload';
import Chatbot from './pages/Chatbot';
import Scheme from './pages/Scheme';
import Navbar from './components/Navbar';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Register from './pages/Register';
import './App.css';
import NextStepPage from './pages/NextstepPage';

function App() {
  const [showLanding, setShowLanding] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  // Check localStorage for logged-in user on app load
  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");
    if (token && storedUser) {
      setIsLoggedIn(true);
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Handle landing page finish
  const handleLandingFinish = () => {
    setShowLanding(false);
  };

  if (showLanding) {
    return <Landing onFinish={handleLandingFinish} />;
  }

  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn} user={user} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/document" element={<Document />} />
        <Route path="/scheme" element={<Scheme />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/nextsteppage" element={<NextStepPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} setUser={setUser} />} />
        <Route path="/register" element={<Register setIsLoggedIn={setIsLoggedIn} setUser={setUser} />} />
        <Route path="/profile" element={<Profile user={user} setIsLoggedIn={setIsLoggedIn} />} />
      </Routes>
    </Router>
  );
}

export default App;
