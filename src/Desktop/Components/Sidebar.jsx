import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../Pages/Sidebar.css"; // Import CSS
import "/src/Mobile/MobileSidebar.css"

const Sidebar = ({ profileImage, onCreateEvent }) => {
  const navigate = useNavigate();
  const [profileTitle, setProfileTitle] = useState(localStorage.getItem("profileTitle") || "User"); // ✅ Load username from localStorage
  const [activeTab, setActiveTab] = useState("events"); // ✅ Track active tab
  const [showSignOut, setShowSignOut] = useState(false); // ✅ Track sign-out button visibility
  const [showNotification, setShowNotification] = useState(false); // ✅ Track logout notification
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // ✅ Detect mobile screen
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // ✅ Toggle sidebar on mobile

  // ✅ Load profileTitle from localStorage on mount
  useEffect(() => {
    const storedProfileTitle = localStorage.getItem("profileTitle");
    if (storedProfileTitle) {
      setProfileTitle(storedProfileTitle);
    }
  }, [])

  // ✅ Listen for real-time username changes
  useEffect(() => {
    const handleStorageChange = () => {
      setProfileTitle(localStorage.getItem("profileTitle") || "User");
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const handleNavClick = (tab) => {
    setActiveTab(tab);
    navigate(`/dashboard/${tab}`);
    if (isMobile) setIsSidebarOpen(false);
  };

  const handleProfileClick = () => {
    setShowSignOut((prev) => !prev);
  };

  const handleSignOut = () => {
    localStorage.clear(); // ✅ Clear all stored user data
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
      navigate("/signin");
    }, 2000);
  };

  return (
    <>
      {/* ✅ Sidebar (Desktop & Mobile) */}
      <aside className={`sidebar ${isMobile ? (isSidebarOpen ? "open" : "closed") : ""}`}>
        
        {/* ✅ Logout Notification */}
        {showNotification && <div className="logout-notification">Logged out successfully!</div>}

        {/* ✅ Sidebar Logo */}
        <div className="logo_dashboard">
          <img src="/Images/logo.png" alt="Logo" />
        </div>

        <div className="Mobile-dashboard-nav">
          <div className="logo_dashboard2">
            <img src="/Images/logo.png" alt="Logo" />
          </div>

          {/* ✅ User Profile (Desktop & Mobile) */}
          <div className="user-profile2" onClick={handleProfileClick}>
            <img src={profileImage || "/Images/boyemoji.png"} alt="User" className="profile-pic" />
            <span className="profile-name2">{profileTitle}</span> {/* ✅ Display Updated Username */}
          </div>
        </div>

        {/* ✅ Navigation Menu */}
        <nav>
          <ul className="nav-events">
            <li className={activeTab === "events" ? "active" : ""} onClick={() => handleNavClick("events")}>
              <i className="fas fa-link"></i> Events
            </li>
            <li className={activeTab === "booking" ? "active" : ""} onClick={() => handleNavClick("booking")}>
              <i className="fa fa-calendar"></i> Booking
            </li>
            <li className={activeTab === "availability" ? "active" : ""} onClick={() => handleNavClick("availability")}>
              <i className="fas fa-clock"></i> Availability
            </li>
            <li className={activeTab === "settings" ? "active" : ""} onClick={() => handleNavClick("settings")}>
              <i className="fas fa-cog"></i> Settings
            </li>
          </ul>
        </nav>

        {/* ✅ User Profile (Desktop) */}
        <div className="user-profile" onClick={handleProfileClick}>
          <img src={profileImage || "/Images/boyemoji.png"} alt="User" className="profile-pic" />
          <span className="profile-name">{profileTitle}</span> {/* ✅ Display Username */}
        </div>

        {/* ✅ Create Event Button */}
        <button className="create_event" onClick={onCreateEvent}>+ Create Event</button>

        {/* ✅ Sign Out Button */}
        {showSignOut && (
          <button className="signout-button" onClick={handleSignOut}>
            <i className="fas fa-sign-out-alt"></i> Sign Out
          </button>
        )}
      </aside>
    </>
  );
};

export default Sidebar;
