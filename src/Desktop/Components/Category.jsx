import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../Pages/Category.css";
import "/src/Mobile/MobileCategory.css";

const categories = [
  { name: "Sales", emoji: "💼" },
  { name: "Education", emoji: "📚" },
  { name: "Finance", emoji: " 💵" },
  { name: "Government & Politics", emoji: "⚖️" },
  { name: "Consulting", emoji: "👜" },
  { name: "Recruiting", emoji: "📝" },
  { name: "Tech", emoji: "🖥️" },
  { name: "Marketing", emoji: "✈️" },
];

const Category = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    
    if (!token) {
      setError("⚠️ Access denied. Please log in first.");
      setTimeout(() => navigate("/signin"), 2000);
    }
  }, [navigate]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setError("");
  };

  const API_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

  const handleContinue = () => {
    setError("");
  
    if (!username.trim()) {
      setError("⚠️ Please enter your username (Firstname).");
      return;
    }
  
    if (!selectedCategory) {
      setError("⚠️ Please select a category.");
      return;
    }
  
   
  
    // ✅ Store username in localStorage
    localStorage.setItem("profileTitle", username);
  
    // ✅ Store category (optional)
    localStorage.setItem("category", selectedCategory);
  
    // ✅ Redirect to dashboard events
    navigate("/dashboard/events");
  };
  
  
  

  return (
    <div className="category-wrapper">
      {error && <p className="error-alert">{error}</p>}

      <div className="logo-container">
        <img src="/Images/logo.png" alt="Logo" />
        
      </div>

      <div className="category-content">
        <h1>Your Preferences </h1>
        <input
          type="text"
          placeholder="Enter your username (Firstname)"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
            setError("");
          }}
          className="input-field"
        />

        <b>Select one category that best describes your CNNCT:</b>
        <div className="category-buttons">
          {categories.map((category) => (
            <button
              key={category.name}
              className={`category-button ${selectedCategory === category.name ? "active" : ""}`}
              onClick={() => handleCategoryClick(category.name)}
            >
              {category.emoji} {category.name}
            </button>
          ))}
        </div>

        <button className="continue-button" onClick={handleContinue} disabled={loading}>
          {loading ? "Checking..." : "Continue"}
        </button>
      </div>

      <div className="image-container">
        <img src="/Images/signupimg.png" alt="Signin" />
      </div>
    </div>
  );
};

export default Category;