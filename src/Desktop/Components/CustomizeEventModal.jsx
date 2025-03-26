import React, { useState, useEffect } from "react";
import "../Pages/CustomizeEventModal.css";

const CustomizeEventModal = ({ eventData, onSave, onClose }) => {
  const [backgroundColor, setBackgroundColor] = useState("#000000");
  const [eventTitle, setEventTitle] = useState("");
  const [eventLink, setEventLink] = useState("");
  const [emails, setEmails] = useState("");

  useEffect(() => {
    if (eventData) {
      setBackgroundColor(eventData.backgroundColor || "#000000");
      setEventTitle(eventData.eventTopic || "");
      setEventLink(eventData.eventLink || "");
      setEmails(eventData.emails || "");
    }
  }, [eventData]); // Re-run when eventData changes

  const handleSave = () => {
    onSave({ ...eventData, backgroundColor, eventTitle, eventLink, emails });
  };

  return (
    <div className="modal-container">
      <h2 className="modal-title">Customize Event</h2>
      
      <div className="event-banner" style={{ backgroundColor }}>
        <p>{eventTitle || "Event Name"}</p>
        <img src="/Images/boyemoji.png"  alt="emoji" />
      </div>

      <div className="input-group2">
        <label className="custom-bg">Custom Background Color</label>
        <br />
        <input 
          type="color" 
          className="color-picker" 
          value={backgroundColor} 
          onChange={(e) => setBackgroundColor(e.target.value)} 
        />
      </div>

      <div className="input-group2">
        <label>Event Link</label>
        <input 
          type="text" 
          className="input-field" 
          placeholder="Enter URL Here" 
          value={eventLink} 
          onChange={(e) => setEventLink(e.target.value)} 
        />
      </div>

      <div className="input-group2">
        <label>Add Emails</label>
        <input 
          type="text" 
          className="input-field" 
          placeholder="Add member Emails" 
          value={emails} 
          onChange={(e) => setEmails(e.target.value)} 
        />
      </div>

      <div className="button-group">
        <button className="btn-cancel" onClick={onClose}>Cancel</button>
        <button className="btn-save" onClick={handleSave}>Save</button>
      </div>
    </div>
  );
};

export default CustomizeEventModal;
