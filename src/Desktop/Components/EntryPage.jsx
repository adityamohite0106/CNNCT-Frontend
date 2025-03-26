import { useNavigate } from "react-router-dom";
import "../Pages/EntryPage.css";
import "/src/Mobile/MobileEntryPage.css"

function Entrypage() {
  const navigate = useNavigate();
  return (
    <div className="container">
      {/* Header Section */}
      <header className="header">
        <div className="logo">
          <span>
            <img src="/Images/logo.png" alt="logopng" />
          </span>
       
        </div>
        <button className="signup-btn" onClick={() => navigate("/signup")}>
      Sign up free
    </button>

      </header>

      {/* Hero Section */}
      <section className="hero">
        {/* Left Content */}
        <div className="hero-content">
       <h1>CNNCT – Easy <br />
       Scheduling Ahead</h1> 
          <button className="signup-btn" onClick={() => navigate("/signup")}>
      Sign up free
    </button>
        </div>

        {/* Right Image */}
        <div className="hero-img">
          <img src="/Images/screen 1.png" alt="Analytics" />
        </div>
      </section>

      {/* Analytics Section */}
      <section className="analytics">
        <h1>Simplified scheduling for you and your team</h1>
      
        <div>CNNCT eliminates the back-and-forth of scheduling meetings so you can focus on what matters. Set your availability, <br /> share your link, and let others book time with you instantly.</div>
      </section>

      {/* Content Section */}
      <section className="content">
        <div className="content-text">
          <h2>Stay Organized with Your Calendar & Meetings</h2>
          <ul>
          <p>Seamless Event Scheduling</p>
<li>View all your upcoming meetings and appointments in one place.</li>

<li>Syncs with Google Calendar, Outlook, and iCloud to avoid conflicts.</li>
<li>Customize event types: one-on-ones, team meetings, group sessions, and webinars.</li>

          </ul>
        </div>
        <div className="content-card">
          <img src="/Images/contentimg.png" alt="Contentimg" />
        </div>
      </section>

      {/* Media and Content Section */}
      <section className="review">
        <div className="review-content">
          <h1>
            Here's what our <span style={{ color: "rgb(24, 119, 242)" }}>customer</span>{" "}
            <br /> has to says
          </h1>
          <button className="review-btn" onClick={() => navigate("/signup")}>Read Customers stories</button>
        </div>
        <div className="review-card1">
          Your reviews are valuable for us!
          <br />
          <span style={{ color: "rgb(24, 119, 242)" }}>– CNNCT</span>
        </div>
      </section>

      {/* Review Section */}
      <div className="review-section">
        <div className="review-card" style={{ backgroundColor: "#f5f5f5" }}>
          <p className="testimonial">Amazing tool! Saved me months</p>
          <p className="placeholder">
            "Incredible experience! I’ve never seen anything like it. This app
            makes everything so much easier, I couldn’t be happier with it!"
          </p>
          <div className="author-info">
            <div className="author-circle"></div>
            <div className="author-details">
              <p className="author-name">John Master</p>
              <p className="author-title">Director, CNNCT.com</p>
            </div>
          </div>
        </div>

        <div className="review-card">
          <p className="testimonial">Incredible service! Highly recommend</p>
          <p className="placeholder">
            "A game-changer for productivity! The features are so intuitive, it
            helped me streamline my daily tasks."
          </p>
          <div className="author-info">
            <div className="author-circle"></div>
            <div className="author-details">
              <p className="author-name">Jane Doe</p>
              <p className="author-title">CEO, Example.com</p>
            </div>
          </div>
        </div>

        <div className="review-card">
          <p className="testimonial">Changed the way we work! Great features</p>
          <p className="placeholder">
            "Absolutely love this app! It has everything I need in one place,
            saving me so much time."
          </p>
          <div className="author-info">
            <div className="author-circle"></div>
            <div className="author-details">
              <p className="author-name">Sam Smith</p>
              <p className="author-title">Manager, TechCorp</p>
            </div>
          </div>
        </div>

        <div className="review-card" style={{ backgroundColor: "#f5f5f5" }}>
          <p className="testimonial">Life-changing tool! Saves so much time</p>
          <p className="placeholder">
            "This tool is amazing! It’s helped me stay organized and efficient
            in ways I didn’t think were possible."
          </p>
          <div className="author-info">
            <div className="author-circle"></div>
            <div className="author-details">
              <p className="author-name">Lisa Brown</p>
              <p className="author-title">Developer, CodeInc</p>
            </div>
          </div>
        </div>
      </div>

      {/* Integrations Section */}
      <section className="integrations">
        <h2>All Link Apps and Integrations</h2>
        <div>
          <img src="/Images/Frame.png" alt="Frame" className="frameimg" />
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-upper">
          <div className="footer-buttons">
            <button className="login-btn"onClick={() => navigate("/signin")}>Log in</button>
            <button className="signup-btn" onClick={() => navigate("/signup")}>Sign up free</button>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h4>About CNNCT</h4>
              <ul>
                <li>Blog</li>
                <li>Press</li>
                <li>Social Good</li>
                <li>Contact</li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Careers</h4>
              <ul>
                <li>Getting Started</li>
                <li>Features and How-Tos</li>
                <li>FAQs</li>
                <li>Report a Violation</li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Legal</h4>
              <ul>
                <li>Terms and Conditions</li>
                <li>Privacy Policy</li>
                <li>Cookie Notice</li>
                <li>Trust Center</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-text">
            We acknowledge the Traditional Custodians of the land on which our
            office stands, The Wurundjeri people of the Kulin Nation, and pay
            our respects to Elders past, present, and emerging.
          </p>

          <div className="social-icons">
            <i className="fab fa-twitter"></i>
            <a href="https://www.instagram.com/aditya_mohite_patil" target="_blank" rel="noopener noreferrer" style={{color:"#000000"}}>
  <i className="fab fa-instagram"></i>
</a>
            <i className="fab fa-youtube"></i>
            <i className="fab fa-tiktok"></i>
            <i className="fas fa-fire"></i>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Entrypage;
