import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";
import "../Pages/EventsPage.css";
import "/src/Mobile/MobileEvent.css"

const EventsPage = () => {
  const context = useOutletContext() || {};
  const { events = [], setEvents, setEditEvent, setShowAddEvent } = context;
  
  // State for notifications
  const [notification, setNotification] = useState({
    message: "",
    type: "", // "success" (green) or "error" (red)
    visible: false,
  });

  // Function to show notification
  const showNotification = (message, type) => {
    setNotification({ message, type, visible: true });
    setTimeout(() => {
      setNotification({ message: "", type: "", visible: false });
    }, 3000); // Hide after 3 seconds
  };

  if (!setEvents) {
    return <p>Error: Events data is not available in context!</p>;
  }

  const handleDelete = (index) => {
    const updatedEvents = events.filter((_, i) => i !== index);
    setEvents(updatedEvents);
    showNotification("Event deleted successfully!", "success");
  };

  const handleEdit = (event) => {
    setEditEvent({
      ...event,
      status: event?.status || "upcoming",
    });
    setShowAddEvent(true);
    showNotification(
      event ? "Editing event..." : "Creating new event...",
      "success"
    );
  };

  const handleCopy = (event) => {
    const eventDetails = `Event: ${event.eventTitle || event.eventTopic}
Host: ${event.hostName}
Date: ${event.dateTime}
Duration: ${event.duration}`;
    navigator.clipboard.writeText(eventDetails);
    showNotification("Event details copied to clipboard!", "success");
  };

  const toggleEventStatus = (index) => {
    const updatedEvents = [...events];
    const now = new Date();
    const eventDate = new Date(updatedEvents[index].dateTime);
    const currentStatus = updatedEvents[index].status;

    if (eventDate >= now) {
      updatedEvents[index].status =
        currentStatus === "upcoming" ? "canceled" : "upcoming";
      setEvents(updatedEvents);
      showNotification(
        `Event marked as ${updatedEvents[index].status}!`,
        updatedEvents[index].status === "upcoming" ? "success" : "error"
      );
    } else {
      showNotification("Cannot modify past events!", "error");
    }
  };

  return (
    <div className="events-page">
      {/* Notification Component */}
      {notification.visible && (
     <div
     className="notification"
     style={{
       backgroundColor: notification.type === "success" ? "#28a745" : "#dc3545",
       color: "white",
       padding: "15px 25px",
       position: "fixed",
       top: "6%",
       left: "50%",
       transform: "translate(-50%, -50%)",
    
       zIndex: 1000,
       boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
       minWidth: "200px",
       textAlign: "center",
     }}
   >
          {notification.message}
        </div>
      )}

      <div className="header-container">
        <h2 className="events-title">Event Types</h2>
        <button className="add-event-btn" onClick={() => handleEdit(null)}>
          + Add New Event
        </button>
      </div>

      <div className="events-container">
        {events.length === 0 ? (
          <p>No events found.</p>
        ) : (
          events.map((event, index) => (
            <div key={index} className="event-card">
              <div
                className="event-header"
                style={{ backgroundColor: event.backgroundColor || "#007bff" }}
              ></div>
              <div className="event-header-content">
                <h3>{event.eventTitle || "Untitled Event"}</h3>
                <i
                  className="fas fa-edit edit-icon"
                  onClick={() => handleEdit(event)}
                ></i>
              </div>
              <div className="event-details">
                <p>
                  <strong>{new Date(event.dateTime).toDateString()}</strong>
                </p>
                <p className="event-time">
                  {new Date(event.dateTime).toLocaleTimeString()}
                </p>
                <p>{event.duration}, Group meeting</p>
              </div>
              <div className="event-actions">
                <label className="switch">
                  <input
                    type="checkbox"
                    checked={event.status === "upcoming"}
                    onChange={() => toggleEventStatus(index)}
                    disabled={new Date(event.dateTime) < new Date()}
                  />
                  <span className="slider round"></span>
                </label>
                <i
                  className="fas fa-copy copy-icon"
                  onClick={() => handleCopy(event)}
                ></i>
                <i
                  className="fas fa-trash-alt delete-icon"
                  onClick={() => handleDelete(index)}
                ></i>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default EventsPage;