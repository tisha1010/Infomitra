// import React from "react";
// import { NavLink } from "react-router-dom";
// import { 
//   FaHome, 
//   FaFileAlt, 
//   FaRegLightbulb, 
//   FaUpload, 
//   FaRobot, 
//   FaBook, 
//   FaEnvelope 
// } from "react-icons/fa";
// import "../App.css";

// function Navbar() {
//   return (
//     <nav className="navbar-clean">
//       <div className="logo">INFOMITRA</div>

//       <ul className="nav-links-clean">
//         <li>
//           <NavLink
//             to="/"
//             end
//             className={({ isActive }) =>
//               isActive ? "nav-link active" : "nav-link"
//             }
//           >
//             <FaHome style={{ marginRight: "3px" }} />
//             Home
//           </NavLink>
//         </li>
//         <li>
//           <NavLink
//             to="/document"
//             className={({ isActive }) =>
//               isActive ? "nav-link active" : "nav-link"
//             }
//           >
//             <FaFileAlt style={{ marginRight: "3px" }} />
//             Document
//           </NavLink>
//         </li>
//         <li>
//           <NavLink
//             to="/scheme"
//             className={({ isActive }) =>
//               isActive ? "nav-link active" : "nav-link"
//             }
//           >
//             <FaRegLightbulb style={{ marginRight: "3px" }} />
//             Scheme
//           </NavLink>
//         </li>
//         <li>
//           <NavLink
//             to="/upload"
//             className={({ isActive }) =>
//               isActive ? "nav-link active" : "nav-link"
//             }
//           >
//             <FaUpload style={{ marginRight: "3px" }} />
//             Upload
//           </NavLink>
//         </li>
//         <li>
//           <NavLink
//             to="/chatbot"
//             className={({ isActive }) =>
//               isActive ? "nav-link active" : "nav-link"
//             }
//           >
//             <FaRobot style={{ marginRight: "3px" }} />
//             Chatbot
//           </NavLink>
//         </li>
//         <li>
//           <NavLink
//             to="/Guide"
//             className={({ isActive }) =>
//               isActive ? "nav-link active" : "nav-link"
//             }
//           >
//             <FaBook style={{ marginRight: "3px" }} />
//             Guide
//           </NavLink>
//         </li>
//         <li>
//           <NavLink
//             to="/contact"
//             className={({ isActive }) =>
//               isActive ? "nav-link active" : "nav-link"
//             }
//           >
//             <FaEnvelope style={{ marginRight: "3px" }} />
//             Contact
//           </NavLink>
//         </li>
//       </ul>

//       <div className="nav-right">
//         <select id="language-select">
//           <option value="en">English</option>
//           <option value="hi">Hindi</option>
//           <option value="gu">Gujarati</option>
//         </select>

//         <NavLink to="/" className="cta-button">
//           Get Started
//         </NavLink>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;


import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { 
  FaHome, 
  FaFileAlt, 
  FaRegLightbulb, 
  FaUpload, 
  FaRobot, 
  FaBook, 
  FaEnvelope 
} from "react-icons/fa";
import "../App.css";

function Navbar({ isLoggedIn , user }) {
  const navigate = useNavigate();

  // const handleGetStarted = () => {
  //   if (isLoggedIn) {
  //     navigate('/profile'); // if logged in, go to profile
  //   } else {
  //     navigate('/login'); // if not, go to login
  //   }
  // };

  return (
    <nav className="navbar-clean">
      <div className="logo">INFOMITRA</div>

      <ul className="nav-links-clean">
        <li><NavLink to="/" end className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}><FaHome style={{ marginRight: "3px" }} />Home</NavLink></li>
        <li><NavLink to="/document" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}><FaFileAlt style={{ marginRight: "3px" }} />Document</NavLink></li>
        <li><NavLink to="/scheme" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}><FaRegLightbulb style={{ marginRight: "3px" }} />Scheme</NavLink></li>
        <li><NavLink to="/upload" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}><FaUpload style={{ marginRight: "3px" }} />Upload</NavLink></li>
        <li><NavLink to="/chatbot" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}><FaRobot style={{ marginRight: "3px" }} />Chatbot</NavLink></li>
        <li><NavLink to="/NextStepPage" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}><FaBook style={{ marginRight: "3px" }} />Guide</NavLink></li>
        <li><NavLink to="/contact" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}><FaEnvelope style={{ marginRight: "3px" }} />Contact</NavLink></li>
      </ul>

      <div className="nav-right">
        <select id="language-select">
          <option value="en">English</option>
          <option value="hi">Hindi</option>
          <option value="gu">Gujarati</option>
        </select>

        <button onClick={() => navigate('/register')} className="cta-button" style={{ marginLeft: '10px' }}>
          Register
        </button>

        {/* <button onClick={handleGetStarted} className="cta-button">
          Get Started
        </button> */}


         {isLoggedIn && user ? (
          <NavLink to="/profile" className="cta-button">
            {user.name.split(" ")[0]} {/* Shows first name */}
          </NavLink>
        ) : (
          <NavLink to="/login" className="cta-button">
            Get Started
          </NavLink>
        )}

      </div>
    </nav>
  );
}

export default Navbar;
