/////////////////////corrected 
import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import "../App.css";
import { NavLink } from "react-router-dom";

const Home = () => {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    if (!query.trim()) return;
    setLoading(true);
    setResult(null);
    setError("");

    try {
      const response = await fetch("http://localhost:5000/api/query", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query, language: "en" }),
      });

      if (!response.ok) throw new Error("Failed to fetch data");

      const data = await response.json();
      setResult(data.response || "⚠️ No information found.");
    } catch (err) {
      setError("⚠️ Error fetching data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const features = [
    {
      title: "50+ Documents & Schemes",
      description: "Follow step-by-step instructions for government documents and schemes.",
      icon: "📄",
      route: "/document", // Standardized to 'route' for NavLink
    },
    {
      title: "Chatbot Assistance",
      description: "Ask questions in English, Hindi, or Gujarati anytime with our AI helper.",
      icon: "🤖",
      route: "/chatbot",
    },
    {
      title: "Popular Schemes",
      description: "Get details of top government schemes like PM Kisan, Ayushman Bharat, and more.",
      icon: "🎗️",
      route: "/scheme",
    },
    {
      title: "Popular Documents",
      description: "Access essential government documents with easy-to-follow guides.",
      icon: "💡",
      route: "/document",
    },
    {
      title: "Multilingual Support",
      description: "Get help in English, Hindi, and Gujarati. Breaking language barriers in government services.",
      icon: "🌐",
      route: "/chatbot", // Or change to "/guide" if preferred for language features
    },
    {
      title: "Step-by-Step Assistance",
      description: "Detailed guides and walkthroughs for completing government processes efficiently.",
      icon: "🪜",
      route: "/nextguide", // Changed from "/nextguide" to match your App.js route (adjust if needed)
    },
  ];

  return (
    <div className="home-container">
      {/* Hero Section */}
      <header className="hero-new">
        <div className="hero-content-new">
          <h1>INFOMITRA</h1>
          <p>Your smart assistant for government documents & schemes</p>
          <div className="search-bar-new">
            <input
              type="text"
              placeholder="Search Aadhaar, Ration Card, Scholarships..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
          </div>
        </div>
      </header>

      {/* Result Section */}
      <div className="result-section">
        {loading && <p className="loading">Fetching details...</p>}
        {error && <p className="error">{error}</p>}
        {result && (
          <div className="flash-card card">
            <h3>Result for "{query}"</h3>
            <ReactMarkdown>{result}</ReactMarkdown>
          </div>
        )}
      </div>

      {/* Feature Cards Section */}
      <section className="features-section">
        <h1 className="section-title">Explore INFOMITRA Features</h1>
        <div className="features-grid">
          {features.map((feature, index) => (
            <NavLink
              key={index}
              to={feature.route}
              className={({ isActive }) =>
                `feature-card card ${isActive ? 'active' : ''}`
              }
              style={{ textDecoration: 'none' }}
            >
              <div className="feature-card-inner">
                <h3>{feature.icon} {feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </NavLink>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer-new">
        <div className="footer-content">
          <h3>INFOMITRA</h3>
          <div className="footer-links">
            {/* Changed <a href> to <NavLink> for SPA navigation (prevents full page reloads) */}
            <NavLink to="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</NavLink>
            <NavLink to="/document" style={{ color: 'inherit', textDecoration: 'none' }}>Documents</NavLink>
            <NavLink to="/scheme" style={{ color: 'inherit', textDecoration: 'none' }}>Schemes</NavLink>
            <NavLink to="/upload" style={{ color: 'inherit', textDecoration: 'none' }}>Upload</NavLink>
            <NavLink to="/chatbot" style={{ color: 'inherit', textDecoration: 'none' }}>Chatbot</NavLink>
            <NavLink to="/nextsteppage" style={{ color: 'inherit', textDecoration: 'none' }}>Guide</NavLink>
            <NavLink to="/contact" style={{ color: 'inherit', textDecoration: 'none' }}>Contact Us</NavLink>
            {/* Add routes for these in App.js if they don't exist */}
            <NavLink to="/privacy" style={{ color: 'inherit', textDecoration: 'none' }}>Privacy Policy</NavLink>
            <NavLink to="/terms" style={{ color: 'inherit', textDecoration: 'none' }}>Terms of Service</NavLink>
          </div>
          <p className="copyright">&copy; 2025 INFOMITRA</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
