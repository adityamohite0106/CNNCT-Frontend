import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import AddEventModal from "./AddEventModal";
import CustomizeEventModal from "./CustomizeEventModal";
import "../Pages/Dashboard.css";

const Dashboard = () => {
  const [showAddEvent, setShowAddEvent] = useState(false);
  const [showCustomizeEvent, setShowCustomizeEvent] = useState(false);
  const [events, setEvents] = useState(() => {
    const storedEvents = JSON.parse(localStorage.getItem("events")) || [];
    const now = new Date();
    return storedEvents.map((event) => ({
      ...event,
      dateTime: event.dateTime ? new Date(event.dateTime).toISOString() : null,
      status:
        new Date(event.dateTime) < now ? "past" : event.status || "upcoming",
    }));
  });
  const [eventData, setEventData] = useState(null);
  const [editEvent, setEditEvent] = useState(null);

  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(events));
  }, [events]);

  const handleCreateEvent = () => {
    setEditEvent(null); // Reset for new event
    setShowAddEvent(true); // Open AddEventModal
  };

  const handleSaveEventDetails = (data) => {
    setEventData(data);
    setEvents((prevEvents) => [...prevEvents, data]);
    setShowAddEvent(false);
    setShowCustomizeEvent(true);
  };

  const handleSaveFinalEvent = (finalData) => {
    setEvents((prevEvents) =>
      prevEvents.map((event) =>
        event.eventTopic === finalData.eventTopic ? finalData : event
      )
    );
    setShowCustomizeEvent(false);
  };

  return (
    <div className="dashboard-container">
      <Sidebar
        profileImage="/Images/boyemoji.png"
        profileTitle="John Doe"
        onCreateEvent={handleCreateEvent}
      />

      <main className="main-content">
        <Outlet
          context={{
            events,
            setEvents,
            editEvent,
            setEditEvent,
            showAddEvent,
            setShowAddEvent,
          }}
        />
      </main>

      {showAddEvent && (
        <AddEventModal
          eventToEdit={editEvent}
          onSave={handleSaveEventDetails}
          onClose={() => setShowAddEvent(false)}
        />
      )}

      {showCustomizeEvent && (
        <CustomizeEventModal
          eventData={eventData}
          onSave={handleSaveFinalEvent}
          onClose={() => setShowCustomizeEvent(false)}
        />
      )}
    </div>
  );
};

export default Dashboard;
