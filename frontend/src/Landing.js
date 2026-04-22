// import React, { useEffect } from "react";
// import "./Landing.css";

// const Landing = ({ onFinish }) => {
//   // Auto redirect after 3s
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       onFinish();
//     }, 3000);

//     return () => clearTimeout(timer);
//   }, [onFinish]);

//   return (
//     <div className="landing-container">
//       <div className="landing-content">
//         {/* Logo Animation */}
//         <div className="logo-wrapper">
//           <div className="logo-circle">
//             <span className="logo-text">IM</span>
//           </div>
//         </div>

//         {/* Title */}
//         <h1 className="landing-title">Welcome to InfoMitra</h1>

//         {/* Subtitle */}
//         <p className="landing-subtitle">Clarity begins with InfoMitra</p>

//         {/* Loader */}
//         <div className="loader-wrapper">
//           <div className="loader-container">
//             <div className="loader"></div>
//             <div className="loader-icon">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 className="file-icon"
//               >
//                 <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
//                 <polyline points="14 2 14 8 20 8"></polyline>
//                 <line x1="16" y1="13" x2="8" y2="13"></line>
//                 <line x1="16" y1="17" x2="8" y2="17"></line>
//                 <polyline points="10 9 9 9 8 9"></polyline>
//               </svg>
//             </div>
//           </div>
//         </div>

//         {/* Redirect Text */}
//         <p className="landing-text">Redirecting to Home...</p>

//         {/* Features Preview */}
//         <div className="features-grid">
//           <div className="feature-card feature-delay-1">
//             <div className="feature-icon">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               >
//                 <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
//                 <polyline points="14 2 14 8 20 8"></polyline>
//                 <line x1="16" y1="13" x2="8" y2="13"></line>
//                 <line x1="16" y1="17" x2="8" y2="17"></line>
//               </svg>
//             </div>
//             <p className="feature-text">50+ Documents</p>
//           </div>

//           <div className="feature-card feature-delay-2">
//             <div className="feature-icon">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               >
//                 <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
//               </svg>
//             </div>
//             <p className="feature-text">AI Assistant</p>
//           </div>

//           <div className="feature-card feature-delay-3">
//             <div className="feature-icon">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               >
//                 <circle cx="12" cy="12" r="10"></circle>
//                 <line x1="2" y1="12" x2="22" y2="12"></line>
//                 <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
//               </svg>
//             </div>
//             <p className="feature-text">Multi-Language</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Landing;

import React, { useEffect } from "react";
import styles from "./Landing.module.css";

const Landing = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className={styles.landingContainer}>
      <div className={styles.landingContent}>
        <div className={styles.logoWrapper}>
          <div className={styles.logoCircle}>
            <span className={styles.logoText}>IM</span>
          </div>
        </div>

        <h1 className={styles.landingTitle}>Welcome to InfoMitra</h1>
        <p className={styles.landingSubtitle}>Clarity begins with InfoMitra</p>

        <div className={styles.loaderWrapper}>
          <div className={styles.loader}></div>
        </div>

        <p className={styles.landingText}>Redirecting to Home...</p>

        <div className={styles.featuresGrid}>
          <div className={styles.featureCard}>
            <p className={styles.featureText}>50+ Documents</p>
          </div>
          <div className={styles.featureCard}>
            <p className={styles.featureText}>AI Assistant</p>
          </div>
          <div className={styles.featureCard}>
            <p className={styles.featureText}>Multi-Language</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;

