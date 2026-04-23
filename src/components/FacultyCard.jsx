import React from 'react';

const FacultyCard = ({ faculty }) => {
  return (
    <div className="faculty-card">
      <img src={faculty.image} alt={faculty.name} className="faculty-image" />
      <h3>{faculty.name}</h3>
      <p className="faculty-designation">{faculty.designation}</p>
      <p className="faculty-expertise"><strong>Expertise:</strong> {faculty.expertise}</p>
    </div>
  );
};

export default FacultyCard;
