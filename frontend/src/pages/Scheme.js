// //////////////////////////////////category schemes
// import React, { useState } from 'react';
// // import { useParams } from 'react-router-dom';

// // Sample schemes
// const schemes = [
//   {
//     id: 1,
//     title: "PMGKAY — Pradhan Mantri Garib Kalyan Anna Yojana",
//     description: "Free / subsidised ration under PDS for poor / below poverty line people. Very widely used. This was one of the top schemes people said they benefited from in recent elections.",
//     steps: [], // Not provided in document
//     benefits: ["Free / subsidised ration"],
//   },
//   {
//     id: 2,
//     title: "Jan Dhan Yojana",
//     description: "Financial inclusion: opening zero-balance bank accounts etc. Widely adopted.",
//     steps: [],
//     benefits: ["Financial inclusion"],
//   },
//   {
//     id: 3,
//     title: "Pradhan Mantri Ujjwala Yojana (PMUY)",
//     description: "Free / subsidised LPG cylinders to poor households. Very popular.",
//     steps: [],
//     benefits: ["Free / subsidised LPG cylinders"],
//   },
//   {
//     id: 4,
//     title: "Awas Yojana (housing schemes for the poor)",
//     description: "Both central & state housing-schemes help many people. Free / subsidised housing.",
//     steps: [],
//     benefits: ["Free / subsidised housing"],
//   },
//   {
//     id: 5,
//     title: "Jyotigram Yojana",
//     description: "Ensuring reliable power supply in rural areas by separating feeders for farms & villages etc. Very well known in Gujarat.",
//     steps: [],
//     benefits: ["Reliable power supply in rural areas"],
//   },
//   {
//     id: 6,
//     title: "E-Dhara Kendra / E-Dhara project",
//     description: "Digitisation of land records, facilitating farmers and landowners getting accurate records, mutations etc.",
//     steps: [],
//     benefits: ["Digitisation of land records"],
//   },
//   {
//     id: 7,
//     title: "SAUNI (Saurashtra Narmada Avtaran Irrigation Project)",
//     description: "Big irrigation / water supply project for drought-prone regions in Saurashtra, uses overflow water etc.",
//     steps: [],
//     benefits: ["Irrigation / water supply"],
//   },
//   {
//     id: 8,
//     title: "Atal Bhujal Yojana",
//     description: "Groundwater management (community participation) – fairly impactful especially in areas with groundwater stress.",
//     steps: [],
//     benefits: ["Groundwater management"],
//   },
//   {
//     id: 9,
//     title: "Women & Child Development Schemes (various)",
//     description: "E.g. schemes under ICDS (Anganwadi etc.), support/grants for women widows, support schemes like Swayamsiddhi, Kishori Shakti, etc.",
//     steps: [],
//     benefits: ["Support for women & children"],
//   },
//   {
//     id: 10,
//     title: "Scholarship / Education Assistance Schemes",
//     description: "For SC/ST/DNT students, for post-matric or merit-based Students, assistance for uniforms etc. Many state schemes exist.",
//     steps: [],
//     benefits: ["Scholarship / education assistance"],
//   },
//   {
//     id: 11,
//     title: "PM-KISAN Samman Nidhi",
//     description: "₹6,000 per year in 3 instalments directly to farmers. Gujarat was one of the leading states in rolling this out.",
//     steps: [],
//     benefits: ["Financial assistance to farmers"],
//   },
//   {
//     id: 12,
//     title: "Pashupalan Sahay Yojana",
//     description: "Financial assistance for cattle fodder and healthcare to improve livestock productivity.",
//     steps: [],
//     benefits: ["Livestock support"],
//   },
//   {
//     id: 13,
//     title: "Indigenous Cow Unit Assistance Scheme (Desi Cow Yojana)",
//     description: "Financial assistance for setting up a unit of 2 indigenous cows. Helps promote Gir, Kankrej, Sahiwal, etc. Usually around ₹40,000–₹60,000 subsidy, depending on breed & unit size.",
//     steps: [],
//     benefits: ["Subsidy for indigenous cows"],
//   },
//   {
//     id: 14,
//     title: "Kanya Kelavani Yojana",
//     description: "Promotes girls’ education with campaigns, scholarships, and school enrolment drives.",
//     steps: [],
//     benefits: ["Girls’ education support"],
//   },
//   {
//     id: 15,
//     title: "Vahli Dikri Yojana",
//     description: "Financial assistance to parents of girl children: ₹4,000 at Class 1 admission, ₹6,000 at Class 9, ₹1,00,000 at age 18 for higher education/marriage.",
//     steps: [],
//     benefits: ["Financial assistance for girl children"],
//   },
//   {
//     id: 16,
//     title: "Mahila Swasthya Nidhi (via NHM Gujarat)",
//     description: "Health fund for women’s reproductive health, maternal care, and awareness programs in rural areas.",
//     steps: [],
//     benefits: ["Women’s health support"],
//   },
//   {
//     id: 17,
//     title: "Kuvarbai Nu Mameru Yojana",
//     description: "₹12,000 to ₹15,000 for marriage expenses of daughters from poor families.",
//     steps: [],
//     benefits: ["Marriage assistance for daughters"],
//   },
//   {
//     id: 18,
//     title: "Sukanya Samriddhi Yojana (Central, active in Gujarat)",
//     description: "Small savings scheme for girl child with tax-free returns.",
//     steps: [],
//     benefits: ["Savings for girl child"],
//   },
//   {
//     id: 19,
//     title: "Maa Annapurna Yojana",
//     description: "Subsidised meals / ration support for poor working women.",
//     steps: [],
//     benefits: ["Subsidised meals for working women"],
//   },
//   {
//     id: 20,
//     title: "Mahila Samruddhi Yojana",
//     description: "Financial aid & training for women entrepreneurs.",
//     steps: [],
//     benefits: ["Support for women entrepreneurs"],
//   },
//   {
//     id: 21,
//     title: "Bal Sakha Yojana",
//     description: "Free treatment for infants up to 1 year.",
//     steps: [],
//     benefits: ["Free infant treatment"],
//   },
//   {
//     id: 22,
//     title: "Mid-Day Meal Scheme",
//     description: "Nutrition for school children (automatic benefit).",
//     steps: [],
//     benefits: ["School nutrition"],
//   },
//   {
//     id: 23,
//     title: "ICDS Supplementary Nutrition Scheme",
//     description: "Free food, preschool at Anganwadis.",
//     steps: [],
//     benefits: ["Child nutrition and preschool"],
//   },
//   {
//     id: 24,
//     title: "Mukhya Mantri Matrushakti Yojana",
//     description: "Free nutrition kits to lactating mothers (indirectly benefits kids).",
//     steps: [],
//     benefits: ["Nutrition for mothers and kids"],
//   },
//   {
//     id: 25,
//     title: "National Child Labour Project (NCLP)",
//     description: "Stipend, free schooling for rescued child labourers.",
//     steps: [],
//     benefits: ["Support for rescued child labourers"],
//   },
//   {
//     id: 26,
//     title: "Scholarship Schemes for SC/ST/OBC/Minority Children",
//     description: "Financial help for education.",
//     steps: [],
//     benefits: ["Scholarships for disadvantaged children"],
//   },
// ];

// const categories = [
//   {
//     id: 1,
//     title: "Women Schemes",
//     description: "Schemes empowering women and families.",
//     category: "women",
//     schemes: [3, 9, 14, 15, 16, 17, 18, 19, 20],
//   },
//   {
//     id: 2,
//     title: "Farmers Scheme",
//     description: "Support for agriculture and rural development.",
//     category: "farmers",
//     schemes: [11, 12, 13],
//   },
//   {
//     id: 3,
//     title: "General Scheme",
//     description: "Universal schemes for all citizens.",
//     category: "general",
//     schemes: [1, 2, 4, 5, 6, 7, 8, 10],
//   },
//   {
//     id: 4,
//     title: "Children Schemes",
//     description: "Education and child welfare programs.",
//     category: "children",
//     schemes: [21, 22, 23, 24, 25, 26],
//   },
// ];

// const CardSection = ({ title, items, type }) => {
//   const [expanded, setExpanded] = useState(null);

//   const toggleCard = (id) => {
//     setExpanded(expanded === id ? null : id);
//   };

//   return (
//     <section style={{ padding: "40px 20px", fontFamily: "'Segoe UI', sans-serif", backgroundColor: "#f5f7fa" }}>
//       <h2 style={{ textAlign: "center", color: "#1e3a8a", marginBottom: "30px", fontWeight: "800" }}>{title}</h2>
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

// // const GovernmentInfo = () => {
// //   return (
// //     <>
// //       <CardSection title="Government Schemes" items={categories} type="schemes" />

// //     </>
// //   );
// // };

// // export default GovernmentInfo;

// const GovernmentInfo = () => {
//   return (
//     <>
//       {categories.map((cat) => {
//         // Map scheme IDs to actual scheme objects
//         const schemeItems = cat.schemes.map((id) => schemes.find((s) => s.id === id));

//         return (
//           <CardSection
//             key={cat.id}
//             title={cat.title}
//             items={schemeItems}
//             type="scheme"
//           />
//         );
//       })}
//     </>
//   );
// };
// export default GovernmentInfo;


import React, { useState } from "react";
import { ArrowLeft } from 'lucide-react';
import './Scheme.css';

// All schemes data
const schemes = [
 {
 id: 1,
 title: "PMGKAY — Pradhan Mantri Garib Kalyan Anna Yojana",
 description: "Free / subsidised ration under PDS for poor / below poverty line people. Very widely used.",
 benefits: ["Free / subsidised ration"],
 category: "general",
 },
 {
 id: 2,
 title: "Jan Dhan Yojana",
 description: "Financial inclusion: opening zero-balance bank accounts etc. Widely adopted.",
 benefits: ["Financial inclusion"],
 category: "general",
 },
 {
 id: 3,
 title: "Pradhan Mantri Ujjwala Yojana (PMUY)",
 description: "Free / subsidised LPG cylinders to poor households. Very popular.",
 benefits: ["Free / subsidised LPG cylinders"],
 category: "women",
 },
 {
 id: 4,
 title: "Awas Yojana (housing schemes for the poor)",
 description: "Both central & state housing-schemes help many people. Free / subsidised housing.",
 benefits: ["Free / subsidised housing"],
 category: "general",
 },
 {
 id: 5,
 title: "Jyotigram Yojana",
 description: "Ensuring reliable power supply in rural areas by separating feeders for farms & villages etc.",
 benefits: ["Reliable power supply in rural areas"],
 category: "general",
 },
 {
 id: 6,
 title: "E-Dhara Kendra / E-Dhara project",
 description: "Digitisation of land records, facilitating farmers and landowners getting accurate records.",
 benefits: ["Digitisation of land records"],
 category: "general",
 },
 {
 id: 7,
 title: "SAUNI (Saurashtra Narmada Avtaran Irrigation Project)",
 description: "Big irrigation / water supply project for drought-prone regions in Saurashtra.",
 benefits: ["Irrigation / water supply"],
 category: "general",
 },
 {
 id: 8,
 title: "Atal Bhujal Yojana",
 description: "Groundwater management (community participation) – fairly impactful especially in areas with groundwater stress.",
 benefits: ["Groundwater management"],
 category: "general",
 },
 {
 id: 9,
 title: "Women & Child Development Schemes (various)",
 description: "E.g. schemes under ICDS (Anganwadi etc.), support/grants for women widows, support schemes like Swayamsiddhi, Kishori Shakti, etc.",
 benefits: ["Support for women & children"],
 category: "women",
 },
 {
 id: 10,
 title: "Scholarship / Education Assistance Schemes",
 description: "For SC/ST/DNT students, for post-matric or merit-based Students, assistance for uniforms etc.",
 benefits: ["Scholarship / education assistance"],
 category: "general",
 },
 {
 id: 11,
 title: "PM-KISAN Samman Nidhi",
 description: "₹6,000 per year in 3 instalments directly to farmers. Gujarat was one of the leading states in rolling this out.",
 benefits: ["Financial assistance to farmers"],
 category: "farmers",
 },
 {
 id: 12,
 title: "Pashupalan Sahay Yojana",
 description: "Financial assistance for cattle fodder and healthcare to improve livestock productivity.",
 benefits: ["Livestock support"],
 category: "farmers",
 },
 {
 id: 13,
 title: "Indigenous Cow Unit Assistance Scheme (Desi Cow Yojana)",
 description: "Financial assistance for setting up a unit of 2 indigenous cows. Usually around ₹40,000–₹60,000 subsidy.",
 benefits: ["Subsidy for indigenous cows"],
 category: "farmers",
 },
 {
 id: 14,
 title: "Kanya Kelavani Yojana",
 description: "Promotes girls' education with campaigns, scholarships, and school enrolment drives.",
 benefits: ["Girls' education support"],
 category: "women",
 },
 {
 id: 15,
 title: "Vahli Dikri Yojana",
 description: "Financial assistance to parents of girl children: ₹4,000 at Class 1, ₹6,000 at Class 9, ₹1,00,000 at age 18.",
 benefits: ["Financial assistance for girl children"],
 category: "women",
 },
 {
 id: 16,
 title: "Mahila Swasthya Nidhi (via NHM Gujarat)",
 description: "Health fund for women's reproductive health, maternal care, and awareness programs in rural areas.",
 benefits: ["Women's health support"],
 category: "women",
 },
 {
 id: 17,
 title: "Kuvarbai Nu Mameru Yojana",
 description: "₹12,000 to ₹15,000 for marriage expenses of daughters from poor families.",
 benefits: ["Marriage assistance for daughters"],
 category: "women",
 },
 {
 id: 18,
 title: "Sukanya Samriddhi Yojana (Central, active in Gujarat)",
 description: "Small savings scheme for girl child with tax-free returns.",
 benefits: ["Savings for girl child"],
 category: "women",
 },
 {
 id: 19,
 title: "Maa Annapurna Yojana",
 description: "Subsidised meals / ration support for poor working women.",
 benefits: ["Subsidised meals for working women"],
 category: "women",
 },
 {
 id: 20,
 title: "Mahila Samruddhi Yojana",
 description: "Financial aid & training for women entrepreneurs.",
 benefits: ["Support for women entrepreneurs"],
 category: "women",
 },
 {
 id: 21,
 title: "Bal Sakha Yojana",
 description: "Free treatment for infants up to 1 year.",
 benefits: ["Free infant treatment"],
 category: "children",
 },
 {
 id: 22,
 title: "Mid-Day Meal Scheme",
 description: "Nutrition for school children (automatic benefit).",
 benefits: ["School nutrition"],
 category: "children",
 },
 {
 id: 23,
 title: "ICDS Supplementary Nutrition Scheme",
 description: "Free food, preschool at Anganwadis.",
 benefits: ["Child nutrition and preschool"],
 category: "children",
 },
 {
 id: 24,
 title: "Mukhya Mantri Matrushakti Yojana",
 description: "Free nutrition kits to lactating mothers (indirectly benefits kids).",
 benefits: ["Nutrition for mothers and kids"],
 category: "children",
 },
 {
 id: 25,
 title: "National Child Labour Project (NCLP)",
 description: "Stipend, free schooling for rescued child labourers.",
 benefits: ["Support for rescued child labourers"],
 category: "children",
 },
 {
 id: 26,
 title: "Scholarship Schemes for SC/ST/OBC/Minority Children",
 description: "Financial help for education.",
 benefits: ["Scholarships for disadvantaged children"],
 category: "children",
 },
];

// Categories data
const categories = [
 {
 id: 1,
 title: "Women Schemes",
 description: "Schemes empowering women and families.",
 category: "women",
 icon: "👩",
 color: "#ec4899",
 },
 {
 id: 2,
 title: "Farmers Scheme",
 description: "Support for agriculture and rural development.",
 category: "farmers",
 icon: "🌾",
 color: "#10b981",
 },
 {
 id: 3,
 title: "General Scheme",
 description: "Universal schemes for all citizens.",
 category: "general",
 icon: "🏛️",
 color: "#3b82f6",
 },
 {
 id: 4,
 title: "Children Schemes",
 description: "Education and child welfare programs.",
 category: "children",
 icon: "👶",
 color: "#0bf5ceff",
 },
];

const Scheme = () => {
 const [selectedCategory, setSelectedCategory] = useState(null);
 const [searchQuery, setSearchQuery] = useState("");
 const [expandedScheme, setExpandedScheme] = useState(null);

 // Filter schemes based on category and search
 const getFilteredSchemes = () => {
 let filtered = schemes;

 if (selectedCategory) {
 filtered = filtered.filter(scheme => scheme.category === selectedCategory);
 }

 if (searchQuery) {
 filtered = filtered.filter(scheme =>
 scheme.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
 scheme.description.toLowerCase().includes(searchQuery.toLowerCase())
 );
 }

 return filtered;
 };

 const handleBackToCategories = () => {
 setSelectedCategory(null);
 setSearchQuery("");
 setExpandedScheme(null);
 };

 const toggleScheme = (id) => {
 setExpandedScheme(expandedScheme === id ? null : id);
 };

 // Categories View
 if (!selectedCategory) {
 return (
 <div className="scheme-container">
 <section className="scheme-hero">
 <div className="container">
 <h1 className="scheme-hero-title">Government Schemes</h1>
 <p className="scheme-hero-subtitle">
 Explore various government welfare schemes designed to support different sections of society
 </p>
 </div>
 </section>

 <section className="categories-section">
 <div className="container">
 <div className="categories-grid">
 {categories.map((category) => (
 <div
 key={category.id}
 className="category-card"
 onClick={() => setSelectedCategory(category.category)}
 style={{ borderTopColor: category.color }}
 >
 <div className="category-icon" style={{ backgroundColor: category.color + '20' }}>
 <span style={{ fontSize: '3rem' }}>{category.icon}</span>
 </div>
 <h3 className="category-title" style={{ color: category.color }}>
 {category.title}
 </h3>
 <p className="category-description">{category.description}</p>
 <div className="category-count">
 {schemes.filter(s => s.category === category.category).length} Schemes
 </div>
 <button className="category-btn" style={{ backgroundColor: category.color }}>
 View Schemes
 </button>
 </div>
 ))}
 </div>
 </div>
 </section>
 </div>
 );
 }

 // Schemes List View
 const currentCategory = categories.find(cat => cat.category === selectedCategory);
 const filteredSchemes = getFilteredSchemes();

 return (
 <div className="scheme-container">
 <section className="scheme-hero" style={{ background: `linear-gradient(135deg, ${currentCategory.color} 0%, #1e3a8a 100%)` }}>
 <div className="container">
 <button className="back-btn" onClick={handleBackToCategories}>
 <ArrowLeft size={20} />
 Back to Categories
 </button>
 <h1 className="scheme-hero-title">{currentCategory.title}</h1>
 <p className="scheme-hero-subtitle">{currentCategory.description}</p>
 </div>
 </section>

 {/* <section className="search-section">
 <div className="container">
 <div className="search-box">
 <Search className="search-icon" size={20} />
 <input
 type="text"
 placeholder="Search schemes..."
 value={searchQuery}
 onChange={(e) => setSearchQuery(e.target.value)}
 className="search-input"
 />
 </div>
 </div>
 </section> */}

 <section className="schemes-list-section">
 <div className="container">
 <div className="schemes-count">
 Showing {filteredSchemes.length} scheme(s)
 </div>
 <div className="schemes-list">
 {filteredSchemes.map((scheme) => (
 <div
 key={scheme.id}
 className={`scheme-card ${expandedScheme === scheme.id ? 'expanded' : ''}`}
 onClick={() => toggleScheme(scheme.id)}
 >
 <div className="scheme-header">
 <h3 className="scheme-title">{scheme.title}</h3>
 <span className="expand-icon">{expandedScheme === scheme.id ? '−' : '+'}</span>
 </div>
 <p className="scheme-description">{scheme.description}</p>

 {expandedScheme === scheme.id && (
 <div className="scheme-details">
 <div className="benefits-section">
 <h4>Benefits:</h4>
 <ul>
 {scheme.benefits.map((benefit, idx) => (
 <li key={idx}>{benefit}</li>
 ))}
 </ul>
 </div>
 <button className="apply-btn" style={{ backgroundColor: currentCategory.color }}>
 Apply Now
 </button>
 </div>
 )}
 </div>
 ))}
 </div>
 </div>
 </section>
 </div>
 );
};

export default Scheme;

