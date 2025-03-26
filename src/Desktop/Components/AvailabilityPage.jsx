import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import "../Pages/AvailabilityPage.css"; // Custom styles
import "/src/Mobile/MobileAvailabilityPage.css"

const AvailabilityPage = () => {
  const [view, setView] = useState("availability"); // Toggle between views
  const [events, setEvents] = useState([
    { title: "Meeting-2", start: "2025-03-25T10:00:00", color: "gray" },
    { title: "Meeting", start: "2025-03-28T09:00:00", color: "lightblue" },
    { title: "Meeting-2", start: "2025-03-28T14:00:00", color: "lightpurple" },
  ]);

  return (
    <div className="availability-container">
      <h2>Availability</h2>
      <p>Configure times when you are available for bookings</p>

      {/* Toggle Button */}
      <div className="toggle-buttons">
        <button
          className={view === "availability" ? "active" : ""}
          onClick={() => setView("availability")}
        >
          📋 Availability
        </button>
        <button
          className={view === "calendar" ? "active" : ""}
          onClick={() => setView("calendar")}
        >
          📅 Calendar View
        </button>
      </div>

      {view === "availability" ? (
        <div className="availability-settings">
          <div className="availability-header">
           
            <span>Time Zone: Indian Time Standard </span>
          </div>

          <div className="weekly-hours">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <div key={day} className="day-row">
                <input type="checkbox" defaultChecked={day !== "Sun"} />
                <span className="day-name">{day}</span>
                {day === "Sun" ? (
                  <span className="unavailable-text">Unavailable</span>
                ) : (
                  <div className="time-slots">
                    <input type="time" /> - <input type="time" />
                    <button>➕</button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="calendar-container">
          <FullCalendar
            plugins={[timeGridPlugin, interactionPlugin]}
            initialView="timeGridWeek"
            headerToolbar={{
              left: "prev,today,next",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay",
            }}
            events={events}
            editable={true}
            selectable={true}
            slotMinTime="09:00:00"
            slotMaxTime="17:00:00"
          />
        </div>
      )}
    </div>
  );
};

export default AvailabilityPage;
