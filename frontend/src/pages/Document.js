// Improved and refactored version 4 categoried all displyed at once 
// import React, { useState } from "react";

// // Sample Schemes
// const documents = [
//   {
//     id: 1,
//     title: "Aadhaar Card",
//     description: "Unique ID issued to residents of India.",
//     eligibility: "Resident of India",
//     steps: ["Visit enrollment center", "Fill application form", "Provide biometric & documents"],
//     documentsRequired: ["Address proof", "ID proof"],
//   },
//   {
//     id: 2,
//     title: "PAN Card",
//     description: "Permanent Account Number for tax purposes.",
//     eligibility: "Resident or Non-Resident Indian",
//     steps: ["Apply online/offline", "Submit identity & address proof", "Receive PAN card by post"],
//     documentsRequired: ["Passport", "Voter ID", "Driving License"],
//   },
//   {
//     id: 3,
//     title: "Ration Card",
//     description: "Card for subsidized food and essential items.",
//     eligibility: "Residents under state quota",
//     steps: ["Apply at local office", "Submit income proof", "Receive card"],
//     documentsRequired: ["Proof of residence", "Income certificate"],
//   },
//   {
//     id: 4,
//     title: "Voter ID",
//     description: "Identity card for Indian voters.",
//     eligibility: "18+ years, Indian citizen",
//     steps: ["Apply online/offline", "Submit documents", "Receive card"],
//     documentsRequired: ["Proof of age", "Address proof"],
//   },
//   {
//     id: 5,
//     title: "Passport",
//     description: "International travel document.",
//     eligibility: "Indian citizen",
//     steps: ["Fill online application", "Submit identity & address proof", "Schedule appointment at Passport Seva Kendra"],
//     documentsRequired: ["Birth certificate", "Address proof", "Photo"],
//   },
//   {
//     id: 6,
//     title: "Driving License",
//     description: "License to legally drive vehicles.",
//     eligibility: "18+ for cars, 16+ for motorcycles",
//     steps: ["Apply online/offline", "Pass driving test", "Receive license"],
//     documentsRequired: ["Age proof", "Address proof", "Learner license"],
//   },
//   {
//     id: 7,
//     title: "Income Certificate",
//     description: "Certificate showing family income.",
//     eligibility: "Residents of India",
//     steps: ["Apply at local office", "Submit income proof", "Receive certificate"],
//     documentsRequired: ["Income proof", "ID proof", "Address proof"],
//   },
//   {
//     id: 8,
//     title: "Caste Certificate",
//     description: "Certificate to claim caste-based benefits.",
//     eligibility: "Residents belonging to SC/ST/OBC",
//     steps: ["Apply at local office", "Submit caste proof", "Receive certificate"],
//     documentsRequired: ["Caste proof", "Address proof", "ID proof"],
//   },
//   {
//     id: 9,
//     title: "Rural Job Card (MGNREGA)",
//     description: "Card for employment under MGNREGA scheme.",
//     eligibility: "Rural residents",
//     steps: ["Register at Gram Panchayat", "Receive Job Card"],
//     documentsRequired: ["ID proof", "Address proof", "Photo"],
//   },
//   {
//     id: 10,
//     title: "Senior Citizen Certificate",
//     description: "Certificate for senior citizen benefits.",
//     eligibility: "Age 60+",
//     steps: ["Apply at local authority", "Submit age proof", "Receive certificate"],
//     documentsRequired: ["Birth certificate", "ID proof"],
//   },
// ];


// const CardSection = ({ title, items, type }) => {
//   const [expanded, setExpanded] = useState(null);

//   const toggleCard = (id) => {
//     setExpanded(expanded === id ? null : id);
//   };

//   return (
//     <section style={{ padding: "40px 20px", fontFamily: "'Segoe UI', sans-serif", backgroundColor: "#f5f7fa" }}>
//       <h2 style={{ textAlign: "center", color: "#1e3a8a", marginBottom: "30px", fontWeight: "900" }}>{title}</h2>
//       <div
//         style={{
//           display: "flex",
//           flexWrap: "wrap",
//           gap: "20px",
//           justifyContent: "center",
//         }}
//       >
//         {items.map((item) => (
//           <div
//             key={item.id}
//             onClick={() => toggleCard(item.id)}
//             style={{
//               flex: "1 0 280px",
//               background: "#ffffff",
//               borderRadius: "20px",
//               padding: "20px",
//               boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
//               cursor: "pointer",
//               transition: "all 0.3s ease",
//               maxHeight: expanded === item.id ? "600px" : "150px",
//               overflow: "hidden",
//             }}
//           >
//             <h3 style={{ margin: "0 0 10px 0", color: "#1e40af", fontWeight: "600" }}>{item.title}</h3>
//             <p style={{ fontSize: "14px", color: "#475569" }}>{item.description}</p>

//             {expanded === item.id && (
//               <div style={{ marginTop: "15px", fontSize: "14px", color: "#334155" }}>
//                 {type === "document" && <p><strong>Eligibility:</strong> {item.eligibility}</p>}
//                 <p><strong>Steps:</strong></p>
//                 <ol style={{ paddingLeft: "20px", marginBottom: "10px" }}>
//                   {item.steps.map((step, i) => (
//                     <li key={i}>{step}</li>
//                   ))}
//                 </ol>
//                 {type === "document" && (
//                   <>
//                     <p><strong>Documents Required:</strong></p>
//                     <ul style={{ paddingLeft: "20px" }}>
//                       {item.documentsRequired.map((d, i) => (
//                         <li key={i}>{d}</li>
//                       ))}
//                     </ul>
//                   </>
//                 )}
//                 {type === "scheme" && (
//                   <>
//                     <p><strong>Benefits:</strong></p>
//                     <ul style={{ paddingLeft: "20px" }}>
//                       {item.benefits.map((b, i) => (
//                         <li key={i}>{b}</li>
//                       ))}
//                     </ul>
//                   </>
//                 )}
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// const DocumentCards = () => {
//   return (
//     <>

//       <CardSection title="Government Documents" items={documents} type="documents" />
//     </>
//   );
// };

// export default DocumentCards;

//////////////////////////////////////
///final version documents with UI 
// import React, { useState } from "react";
// import { Search, Filter, FileText, ExternalLink } from 'lucide-react';
// import './Document.css';

// // Sample Documents
// const documents = [
//   {
//     id: 1,
//     title: "PAN Card",
//     description: "Permanent Account Number for tax purposes",
//     eligibility: "All Indian citizens",
//     difficulty: "Easy",
//     applicationMode: "Online/Offline",
//     steps: ["Visit NSDL/UTIITSL website", "Fill Form 49A", "Upload documents", "Pay fee (₹93 + GST)", "Submit application"],
//     documentsRequired: ["Aadhaar Card", "Passport size photo", "+1 more"],
//     documentsRequiredFull: ["Aadhaar Card", "Passport size photo", "Address proof"],
//   },
//   {
//     id: 2,
//     title: "Aadhaar Card",
//     description: "12-digit unique identity number",
//     eligibility: "All residents of India",
//     difficulty: "Easy",
//     applicationMode: "Online/Offline",
//     steps: ["Visit enrollment center", "Fill application form", "Provide biometric & documents", "Collect acknowledgment slip"],
//     documentsRequired: ["Birth certificate", "Address proof", "+1 more"],
//     documentsRequiredFull: ["Birth certificate", "Address proof", "Proof of identity"],
//   },
//   {
//     id: 3,
//     title: "Passport",
//     description: "International travel document",
//     eligibility: "Indian citizens",
//     difficulty: "Medium",
//     applicationMode: "Online + Offline verification",
//     steps: ["Register on Passport Seva portal", "Fill online application", "Upload documents", "Pay fee", "Schedule appointment at PSK", "Visit PSK for verification"],
//     documentsRequired: ["Birth certificate", "Address proof", "+2 more"],
//     documentsRequiredFull: ["Birth certificate", "Address proof", "Aadhaar card", "Passport size photos"],
//   },
//   {
//     id: 4,
//     title: "Driving License",
//     description: "License to legally drive vehicles",
//     eligibility: "18+ for cars, 16+ for motorcycles",
//     difficulty: "Medium",
//     applicationMode: "Online/Offline",
//     steps: ["Apply for learner's license", "Pass written test", "Wait 30 days", "Apply for permanent license", "Pass driving test", "Receive license"],
//     documentsRequired: ["Age proof", "Address proof", "+1 more"],
//     documentsRequiredFull: ["Age proof", "Address proof", "Learner license", "Medical certificate"],
//   },
//   {
//     id: 5,
//     title: "Voter ID",
//     description: "Identity card for Indian voters",
//     eligibility: "18+ years, Indian citizen",
//     difficulty: "Easy",
//     applicationMode: "Online/Offline",
//     steps: ["Visit NVSP portal", "Fill Form 6", "Upload documents", "Submit application", "Field verification", "Receive card"],
//     documentsRequired: ["Proof of age", "Address proof", "+1 more"],
//     documentsRequiredFull: ["Proof of age", "Address proof", "Passport size photo"],
//   },
//   {
//     id: 6,
//     title: "Ration Card",
//     description: "Card for subsidized food and essential items",
//     eligibility: "Residents under state quota",
//     difficulty: "Easy",
//     applicationMode: "Online/Offline",
//     steps: ["Apply at local Food & Supply office", "Submit income proof", "Verification by authorities", "Receive card"],
//     documentsRequired: ["Proof of residence", "Income certificate", "+1 more"],
//     documentsRequiredFull: ["Proof of residence", "Income certificate", "Aadhaar card"],
//   },
//   {
//     id: 7,
//     title: "Income Certificate",
//     description: "Certificate showing family income",
//     eligibility: "Residents of India",
//     difficulty: "Easy",
//     applicationMode: "Online/Offline",
//     steps: ["Visit Tehsildar office or portal", "Fill application form", "Submit income proof", "Pay nominal fee", "Receive certificate"],
//     documentsRequired: ["Income proof", "ID proof", "+1 more"],
//     documentsRequiredFull: ["Income proof", "ID proof", "Address proof"],
//   },
//   {
//     id: 8,
//     title: "Caste Certificate",
//     description: "Certificate to claim caste-based benefits",
//     eligibility: "Residents belonging to SC/ST/OBC",
//     difficulty: "Medium",
//     applicationMode: "Online/Offline",
//     steps: ["Apply at Tehsildar office", "Submit caste proof", "Field verification", "Approval by competent authority", "Receive certificate"],
//     documentsRequired: ["Caste proof", "Address proof", "+1 more"],
//     documentsRequiredFull: ["Caste proof", "Address proof", "ID proof", "School leaving certificate"],
//   },
//   {
//     id: 9,
//     title: "Birth Certificate",
//     description: "Official record of birth",
//     eligibility: "All births in India",
//     difficulty: "Easy",
//     applicationMode: "Online/Offline",
//     steps: ["Register within 21 days of birth", "Visit local Municipal office", "Fill application", "Submit hospital records", "Receive certificate"],
//     documentsRequired: ["Hospital discharge summary", "Parents' ID proof", "+1 more"],
//     documentsRequiredFull: ["Hospital discharge summary", "Parents' ID proof", "Address proof"],
//   },
//   {
//     id: 10,
//     title: "Senior Citizen Certificate",
//     description: "Certificate for senior citizen benefits",
//     eligibility: "Age 60+",
//     difficulty: "Easy",
//     applicationMode: "Online/Offline",
//     steps: ["Apply at local authority", "Submit age proof", "Simple verification", "Receive certificate"],
//     documentsRequired: ["Birth certificate", "ID proof", "+1 more"],
//     documentsRequiredFull: ["Birth certificate", "ID proof", "Passport size photo"],
//   },
// ];

// const Document = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState("All Categories");
//   const [selectedDocument, setSelectedDocument] = useState(null);

//   const categories = ["All Categories", "Identity Documents", "Income & Employment", "Social Welfare"];

//   const getDifficultyColor = (difficulty) => {
//     switch (difficulty) {
//       case 'Easy':
//         return 'difficulty-easy';
//       case 'Medium':
//         return 'difficulty-medium';
//       case 'Hard':
//         return 'difficulty-hard';
//       default:
//         return 'difficulty-easy';
//     }
//   };

//   const filteredDocuments = documents.filter(doc => {
//     const matchesSearch = doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       doc.description.toLowerCase().includes(searchQuery.toLowerCase());
//     return matchesSearch;
//   });

//   return (
//     <div className="document-container">
//       {/* Hero Section */}
//       <section className="document-hero">
//         <div className="container">
//           <h1 className="document-hero-title">Government Documents</h1>
//           <p className="document-hero-subtitle">
//             Find comprehensive information about government documents, eligibility criteria, and application processes
//           </p>
//         </div>
//       </section>

//       {/* Search and Filter Section */}
//       <section className="document-search-section">
//         <div className="container">
//           <div className="search-filter-wrapper">
//             <div className="search-box">
//               <Search className="search-icon" size={20} />
//               <input
//                 type="text"
//                 placeholder="Search documents (e.g., PAN card, passport...)"
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 className="search-input"
//               />
//             </div>
//             <div className="filter-box">
//               <Filter className="filter-icon" size={20} />
//               <select
//                 value={selectedCategory}
//                 onChange={(e) => setSelectedCategory(e.target.value)}
//                 className="filter-select"
//               >
//                 {categories.map(cat => (
//                   <option key={cat} value={cat}>{cat}</option>
//                 ))}
//               </select>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Documents Grid */}
//       <section className="documents-grid-section">
//         <div className="container">
//           <div className="documents-grid">
//             {filteredDocuments.map((doc) => (
//               <div key={doc.id} className="document-card">
//                 <div className="document-card-header">
//                   <div className="document-icon">
//                     <FileText size={24} />
//                   </div>
//                   <span className={`difficulty-badge ${getDifficultyColor(doc.difficulty)}`}>
//                     {doc.difficulty}
//                   </span>
//                 </div>

//                 <h3 className="document-title">{doc.title}</h3>
//                 <p className="document-description">{doc.description}</p>

//                 <div className="document-details">
//                   <div className="detail-row">
//                     <span className="detail-label">Eligibility:</span>
//                     <span className="detail-value">{doc.eligibility}</span>
//                   </div>

//                   <div className="detail-section">
//                     <span className="detail-label">Required Documents:</span>
//                     <div className="document-tags">
//                       {doc.documentsRequired.map((docReq, idx) => (
//                         <span key={idx} className="doc-tag">{docReq}</span>
//                       ))}
//                     </div>
//                   </div>

//                   <div className="detail-row">
//                     <span className="application-mode-badge">{doc.applicationMode}</span>
//                   </div>
//                 </div>

//                 <button
//                   className="view-details-btn"
//                   onClick={() => setSelectedDocument(doc)}
//                 >
//                   View Details
//                   <ExternalLink size={16} />
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Document Detail Modal */}
//       {selectedDocument && (
//         <div className="modal-overlay" onClick={() => setSelectedDocument(null)}>
//           <div className="modal-content" onClick={(e) => e.stopPropagation()}>
//             <div className="modal-header">
//               <h2>{selectedDocument.title}</h2>
//               <button
//                 className="modal-close"
//                 onClick={() => setSelectedDocument(null)}
//               >
//                 ×
//               </button>
//             </div>

//             <div className="modal-body">
//               <p className="modal-description">{selectedDocument.description}</p>

//               <div className="modal-section">
//                 <h3>Eligibility</h3>
//                 <p>{selectedDocument.eligibility}</p>
//               </div>

//               <div className="modal-section">
//                 <h3>Application Steps</h3>
//                 <ol className="steps-list">
//                   {selectedDocument.steps.map((step, idx) => (
//                     <li key={idx}>{step}</li>
//                   ))}
//                 </ol>
//               </div>

//               <div className="modal-section">
//                 <h3>Required Documents</h3>
//                 <ul className="documents-list">
//                   {selectedDocument.documentsRequiredFull.map((doc, idx) => (
//                     <li key={idx}>{doc}</li>
//                   ))}
//                 </ul>
//               </div>

//               <div className="modal-section">
//                 <h3>Application Mode</h3>
//                 <p>{selectedDocument.applicationMode}</p>
//               </div>
//             </div>

//             <div className="modal-footer">
//               <button className="btn-primary">Apply Now</button>
//               <button className="btn-secondary" onClick={() => setSelectedDocument(null)}>
//                 Close
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Document;


import React, { useState } from "react";
import { Search, Filter, FileText, ExternalLink } from "lucide-react";
import "./Document.css";

// 🔹 Static Documents (your original list)
const documents = [
  {
    id: 1,
    title: "PAN Card",
    description: "Permanent Account Number for tax purposes",
    eligibility: "All Indian citizens",
    difficulty: "Easy",
    applicationMode: "Online/Offline",
    steps: ["Visit NSDL/UTIITSL website", "Fill Form 49A", "Upload documents", "Pay fee (₹93 + GST)", "Submit application"],
    documentsRequired: ["Aadhaar Card", "Passport size photo", "+1 more"],
    documentsRequiredFull: ["Aadhaar Card", "Passport size photo", "Address proof"],
  },
  {
    id: 2,
    title: "Aadhaar Card",
    description: "12-digit unique identity number",
    eligibility: "All residents of India",
    difficulty: "Easy",
    applicationMode: "Online/Offline",
    steps: ["Visit enrollment center", "Fill application form", "Provide biometric & documents", "Collect acknowledgment slip"],
    documentsRequired: ["Birth certificate", "Address proof", "+1 more"],
    documentsRequiredFull: ["Birth certificate", "Address proof", "Proof of identity"],
  },
  {
    id: 3,
    title: "Passport",
    description: "International travel document",
    eligibility: "Indian citizens",
    difficulty: "Medium",
    applicationMode: "Online + Offline verification",
    steps: ["Register on Passport Seva portal", "Fill online application", "Upload documents", "Pay fee", "Schedule appointment at PSK", "Visit PSK for verification"],
    documentsRequired: ["Birth certificate", "Address proof", "+2 more"],
    documentsRequiredFull: ["Birth certificate", "Address proof", "Aadhaar card", "Passport size photos"],
  },
  {
    id: 4,
    title: "Driving License",
    description: "License to legally drive vehicles",
    eligibility: "18+ for cars, 16+ for motorcycles",
    difficulty: "Medium",
    applicationMode: "Online/Offline",
    steps: ["Apply for learner's license", "Pass written test", "Wait 30 days", "Apply for permanent license", "Pass driving test", "Receive license"],
    documentsRequired: ["Age proof", "Address proof", "+1 more"],
    documentsRequiredFull: ["Age proof", "Address proof", "Learner license", "Medical certificate"],
  },
  {
    id: 5,
    title: "Voter ID",
    description: "Identity card for Indian voters",
    eligibility: "18+ years, Indian citizen",
    difficulty: "Easy",
    applicationMode: "Online/Offline",
    steps: ["Visit NVSP portal", "Fill Form 6", "Upload documents", "Submit application", "Field verification", "Receive card"],
    documentsRequired: ["Proof of age", "Address proof", "+1 more"],
    documentsRequiredFull: ["Proof of age", "Address proof", "Passport size photo"],
  },
  {
    id: 6,
    title: "Ration Card",
    description: "Card for subsidized food and essential items",
    eligibility: "Residents under state quota",
    difficulty: "Easy",
    applicationMode: "Online/Offline",
    steps: ["Apply at local Food & Supply office", "Submit income proof", "Verification by authorities", "Receive card"],
    documentsRequired: ["Proof of residence", "Income certificate", "+1 more"],
    documentsRequiredFull: ["Proof of residence", "Income certificate", "Aadhaar card"],
  },
  {
    id: 7,
    title: "Income Certificate",
    description: "Certificate showing family income",
    eligibility: "Residents of India",
    difficulty: "Easy",
    applicationMode: "Online/Offline",
    steps: ["Visit Tehsildar office or portal", "Fill application form", "Submit income proof", "Pay nominal fee", "Receive certificate"],
    documentsRequired: ["Income proof", "ID proof", "+1 more"],
    documentsRequiredFull: ["Income proof", "ID proof", "Address proof"],
  },
  {
    id: 8,
    title: "Caste Certificate",
    description: "Certificate to claim caste-based benefits",
    eligibility: "Residents belonging to SC/ST/OBC",
    difficulty: "Medium",
    applicationMode: "Online/Offline",
    steps: ["Apply at Tehsildar office", "Submit caste proof", "Field verification", "Approval by competent authority", "Receive certificate"],
    documentsRequired: ["Caste proof", "Address proof", "+1 more"],
    documentsRequiredFull: ["Caste proof", "Address proof", "ID proof", "School leaving certificate"],
  },
  {
    id: 9,
    title: "Birth Certificate",
    description: "Official record of birth",
    eligibility: "All births in India",
    difficulty: "Easy",
    applicationMode: "Online/Offline",
    steps: ["Register within 21 days of birth", "Visit local Municipal office", "Fill application", "Submit hospital records", "Receive certificate"],
    documentsRequired: ["Hospital discharge summary", "Parents' ID proof", "+1 more"],
    documentsRequiredFull: ["Hospital discharge summary", "Parents' ID proof", "Address proof"],
  },
  {
    id: 10,
    title: "Senior Citizen Certificate",
    description: "Certificate for senior citizen benefits",
    eligibility: "Age 60+",
    difficulty: "Easy",
    applicationMode: "Online/Offline",
    steps: ["Apply at local authority", "Submit age proof", "Simple verification", "Receive certificate"],
    documentsRequired: ["Birth certificate", "ID proof", "+1 more"],
    documentsRequiredFull: ["Birth certificate", "ID proof", "Passport size photo"],
  },
];

const Document = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [selectedDocument, setSelectedDocument] = useState(null);

  // 🔹 NEW: For global search results (from backend)
  const [globalResult, setGlobalResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const categories = ["All Categories", "Identity Documents", "Income & Employment", "Social Welfare"];

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case "Easy":
        return "difficulty-easy";
      case "Medium":
        return "difficulty-medium";
      case "Hard":
        return "difficulty-hard";
      default:
        return "difficulty-easy";
    }
  };

  // 🔹 Filter local docs
  const filteredDocuments = documents.filter((doc) => {
    const matchesSearch =
      doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  // 🔹 Search globally when Enter is pressed
  const handleGlobalSearch = async (e) => {
    if (e.key === "Enter" && searchQuery.trim() !== "" && filteredDocuments.length === 0) {
      setLoading(true);
      setGlobalResult(null);

      try {
        const res = await fetch("http://localhost:5000/api/query", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: searchQuery, language: "English" }),
        });

        const data = await res.json();
        setGlobalResult(data.response); // save Gemini/Mongo result
      } catch (error) {
        console.error("❌ Error fetching global search:", error);
        setGlobalResult("⚠️ Error fetching data from server.");
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="document-container">
      {/* Hero Section */}
      <section className="document-hero">
        <div className="container">
          <h1 className="document-hero-title">Government Documents</h1>
          <p className="document-hero-subtitle">
            Find comprehensive information about government documents, eligibility criteria, and application processes
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="document-search-section">
        <div className="container">
          <div className="search-filter-wrapper">
            <div className="search-box">
              <Search className="search-icon" size={20} />
              <input
                type="text"
                placeholder="Search documents (e.g., PAN card, passport...)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleGlobalSearch}
                className="search-input"
              />
            </div>
            <div className="filter-box">
              <Filter className="filter-icon" size={20} />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="filter-select"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Local Documents Grid */}
      <section className="documents-grid-section">
        <div className="container">
          <div className="documents-grid">
            {filteredDocuments.map((doc) => (
              <div key={doc.id} className="document-card">
                <div className="document-card-header">
                  <div className="document-icon">
                    <FileText size={24} />
                  </div>
                  <span className={`difficulty-badge ${getDifficultyColor(doc.difficulty)}`}>
                    {doc.difficulty}
                  </span>
                </div>

                <h3 className="document-title">{doc.title}</h3>
                <p className="document-description">{doc.description}</p>

                <div className="document-details">
                  <div className="detail-row">
                    <span className="detail-label">Eligibility:</span>
                    <span className="detail-value">{doc.eligibility}</span>
                  </div>

                  <div className="detail-section">
                    <span className="detail-label">Required Documents:</span>
                    <div className="document-tags">
                      {doc.documentsRequired.map((docReq, idx) => (
                        <span key={idx} className="doc-tag">
                          {docReq}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="detail-row">
                    <span className="application-mode-badge">{doc.applicationMode}</span>
                  </div>
                </div>

                <button className="view-details-btn" onClick={() => setSelectedDocument(doc)}>
                  View Details
                  <ExternalLink size={16} />
                </button>
              </div>
            ))}
          </div>

          {/* 🔹 Global Search Result
          {loading && <p className="loading-text">🔍 Searching globally...</p>}
          {globalResult && (
            <div className="global-result-card">
              <h2>Global Result for "{searchQuery}"</h2>
              <pre className="global-result-text">{globalResult}</pre>
            </div>
          )} */}

          {/* 🔹 Global Search Result */}
          {loading && <p className="loading-text">🔍 Searching globally...</p>}
          {globalResult && (
            <div className="global-result-card">
              <h2 className="global-result-title">
                🌍 Global Result for "{searchQuery}"
              </h2>

              <div className="global-result-content">
                {globalResult.split("\n").map((line, index) => {
                  if (
                    line.startsWith("⭐") ||
                    line.startsWith("✅") ||
                    line.startsWith("📘") ||
                    line.startsWith("📄")
                  ) {
                    return (
                      <h3 key={index} className="result-section-title">
                        {line.replace(/[*#]/g, "").trim()}
                      </h3>
                    );
                  } else if (line.startsWith("*")) {
                    return (
                      <li key={index} className="result-list-item">
                        {line.replace(/[*]/g, "").trim()}
                      </li>
                    );
                  } else if (line.trim() !== "") {
                    return (
                      <p key={index} className="result-paragraph">
                        {line.trim()}
                      </p>
                    );
                  } else {
                    return null;
                  }
                })}
              </div>
            </div>
          )}

        </div>
      </section>

      {/* Document Detail Modal */}
      {selectedDocument && (
        <div className="modal-overlay" onClick={() => setSelectedDocument(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>{selectedDocument.title}</h2>
              <button className="modal-close" onClick={() => setSelectedDocument(null)}>
                ×
              </button>
            </div>

            <div className="modal-body">
              <p className="modal-description">{selectedDocument.description}</p>

              <div className="modal-section">
                <h3>Eligibility</h3>
                <p>{selectedDocument.eligibility}</p>
              </div>

              <div className="modal-section">
                <h3>Application Steps</h3>
                <ol className="steps-list">
                  {selectedDocument.steps.map((step, idx) => (
                    <li key={idx}>{step}</li>
                  ))}
                </ol>
              </div>

              <div className="modal-section">
                <h3>Required Documents</h3>
                <ul className="documents-list">
                  {selectedDocument.documentsRequiredFull.map((doc, idx) => (
                    <li key={idx}>{doc}</li>
                  ))}
                </ul>
              </div>

              <div className="modal-section">
                <h3>Application Mode</h3>
                <p>{selectedDocument.applicationMode}</p>
              </div>
            </div>

            <div className="modal-footer">
              <button className="btn-primary">Apply Now</button>
              <button className="btn-secondary" onClick={() => setSelectedDocument(null)}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Document;
