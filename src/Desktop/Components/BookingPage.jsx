import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";
import "../Pages/BookingPage.css";
import ParticipantsModal from "../Components/ParticipantsModal"; // Import the modal

const BookingPage = () => {
  const { events = [] } = useOutletContext() || {};
  const [activeTab, setActiveTab] = useState("Upcoming");
  const [participants, setParticipants] = useState([]);
  const [selectedMeetingId, setSelectedMeetingId] = useState(null);

  // Extract meeting ID from event data
  const extractMeetingId = (event) => {
    return event.meetingId || event.eventLink?.split("meetingId=")[1];
  };

  // Fetch participants based on meeting ID
  const fetchParticipants = async (meetingId) => {
    try {
      const response = await fetch(
        `https://yourapi.com/meetings/${meetingId}/participants`
      );
      if (!response.ok) throw new Error("Failed to fetch participants");
      const data = await response.json();
      setParticipants(data);
    } catch (error) {
    
    }
  };

  // Open the participant modal
  const handleViewParticipants = async (event) => {
    const meetingId = extractMeetingId(event);
    if (!meetingId) return;
  
    setSelectedMeetingId(meetingId); // ✅ Open modal immediately
  
    try {
      const response = await fetch(`https://yourapi.com/meetings/${meetingId}/participants`);
      if (!response.ok) throw new Error("Failed to fetch participants");
  
      const data = await response.json();
      setParticipants(data); // ✅ Set participants (can be empty)
    } catch (error) {
     
      setParticipants([]); // ✅ Ensure participants array is always set
    }
  };
  
  
  
  // Filter events based on active tab
  const filterEvents = (status) =>
    events.filter((event) => event.status === status);

  const displayedEvents =
    activeTab === "Upcoming"
      ? events.filter((event) => {
          const eventDate = new Date(event.dateTime);
          const now = new Date();
          return event.status === "upcoming" && eventDate > now;
        })
      : activeTab === "Pending"
      ? filterEvents("pending")
      : activeTab === "Canceled"
      ? filterEvents("canceled")
      : events.filter((event) => {
          const eventDate = new Date(event.dateTime);
          const now = new Date();
          return event.status === "past" && eventDate < now;
        });

  return (
    <div className="booking-container">
      <h2 className="booking-title">Booking</h2>
      <p className="booking-subtitle">
        See upcoming and past events booked through your event type links.
      </p>

      <div className="booking-card">
        <div className="booking-tabs">
          {["Upcoming", "Pending", "Canceled", "Past"].map((tab) => (
            <span
              key={tab}
              className={activeTab === tab ? "active-tab" : ""}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </span>
          ))}
        </div>

        <div className="booking-list">
          {displayedEvents.length === 0 ? (
            <p className="no-events">
              No {activeTab.toLowerCase()} bookings available.
            </p>
          ) : (
            displayedEvents.map((event, index) => (
              <div key={index} className="booking-item">
                <div className="event-date-time">
                  <p className="event-date">
                    {new Date(event.dateTime).toDateString()}
                  </p>
                  <p className="event-time">
                    {new Date(event.dateTime).toLocaleTimeString()}
                  </p>
                </div>
                <div className="event-details">
                  <p className="event-title">{event.eventTitle || "Meeting"}</p>
                  <p className="event-team">You and team ..</p>
                </div>
                <div className="event-status">
                  <button
                    className={
                      event.status === "upcoming"
                        ? "accepted-btn"
                        : event.status === "pending"
                        ? "pending-btn"
                        : event.status === "canceled"
                        ? "canceled-btn"
                        : "past-btn"
                    }
                  >
                    {event.status.charAt(0).toUpperCase() +
                      event.status.slice(1)}
                  </button>
                </div>
                <div className="event-attendees">
                  <i
                    className="fas fa-users"
                    onClick={() => handleViewParticipants(event)}
                  ></i>{" "}
                  {event.attendees || 0} people
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Participants Modal */}
      {selectedMeetingId && (
  <ParticipantsModal
    participants={participants}
    onClose={() => {
      setSelectedMeetingId(null);
      setParticipants([]); // ✅ Clear participants on close
    }}
  />
)}


    </div>
  );
};

export default BookingPage;
