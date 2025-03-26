import React from "react";
import "../Pages/ParticipantsModal.css";

const ParticipantsModal = ({ participants, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>Participants ({participants.length})</h3>

        {participants.length === 0 ? (
          <p className="no-participants">No Participants Found</p>
        ) : (
          <ul>
            {participants.map((p) => (
              <li key={p.id} className="participant-item">
                <img src={p.avatar} alt={p.name} className="avatar" />
                <span>{p.name}</span>
                <button className="accept-btn">✅ Accept</button>
                <button className="reject-btn">❌ Reject</button>
              </li>
            ))}
          </ul>
        )}

        <button className="close-btn" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default ParticipantsModal;
