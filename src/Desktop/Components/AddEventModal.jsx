import React, { useState } from "react";
import "../Pages/AddEventModal.css";

const AddEventModal = ({ onSave, onClose }) => {
  const [eventTopic, setEventTopic] = useState("");
  const [password, setPassword] = useState("");
  const [hostName, setHostName] = useState("");
  const [description, setDescription] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [duration, setDuration] = useState("1 hour");

  const handleSave = () => {
    onSave({ eventTopic, password, hostName, description, dateTime, duration });
  };

  return (
    <div className="modal-container1"> {/* ✅ Updated Class Name */}
      <h2 className="modal-title1">Add Event</h2> {/* ✅ Updated Class Name */}

      <div className="form-group1">
        <label className="form-label1">Event Topic</label>
        <input type="text" className="input-field1" placeholder="Set a conference topic" value={eventTopic} onChange={(e) => setEventTopic(e.target.value)} />
      </div>

      <div className="form-group1">
        <label className="form-label1">Password</label>
        <input type="password" className="input-field1" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>

      <div className="form-group1">
        <label className="form-label1">Host Name</label>
        <input type="text" className="input-field1" value={hostName} onChange={(e) => setHostName(e.target.value)} /> {/* ✅ Now Editable */}
      </div>

      <div className="form-group1">
        <label className="form-label1">Description</label>
        <textarea className="textarea-field1" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
      </div>

      <div className="row-group1">
        <div className="form-group1">
          <label className="form-label1">Date and Time</label>
          <input type="datetime-local" className="input-field1" value={dateTime} onChange={(e) => setDateTime(e.target.value)} />
        </div>

        <div className="form-group1">
          <label className="form-label1">Duration</label>
          <select className="select-field1" value={duration} onChange={(e) => setDuration(e.target.value)}>
            <option>1 hour</option>
            <option>2 hours</option>
          </select>
        </div>
      </div>

      <div className="button-group1">
        <button className="btn-cancel1" onClick={onClose}>Cancel</button>
        <button className="btn-save1" onClick={handleSave}>Save</button>
      </div>
    </div>
  );
};

export default AddEventModal;
