import React from 'react';
import FacultyCard from '../components/FacultyCard';
import { facultyData } from '../data/faculty';

const Faculty = () => {
  return (
    <div className="page faculty-page">
      <div className="container">
        <h1 className="page-title">Our Faculty</h1>
        <p className="page-subtitle">
          Meet our world-class faculty members who are dedicated to providing quality education and mentorship.
        </p>
        
        <div className="faculty-grid">
          {facultyData.map(member => (
            <FacultyCard key={member.id} faculty={member} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faculty;
