import React from 'react';
import './FacilityDetails.css';

const FacilityDetails = ({ facility, onClose }) => {
  if (!facility) return null;

  return (
    <div className="facility-details-overlay">
      <div className="facility-details-container">
        <button className="close-button" onClick={onClose}>X</button>
        <h2>{facility.title}</h2>
        <p>{facility.description}</p>
        <img src={facility.image} alt={facility.title} />
      </div>
    </div>
  );
};

export default FacilityDetails;
