import React from 'react';
import { Link } from 'react-router-dom';

const ProgramCard = ({ program }) => {
  return (
    <div className="program-card">
      <h3>{program.name}</h3>
      <p><strong>Duration:</strong> {program.duration}</p>
      <p><strong>Eligibility:</strong> {program.eligibility}</p>
      <Link to={`/program/${program.id}`} className="program-details-link">
        View Details
      </Link>
    </div>
  );
};

export default ProgramCard;
