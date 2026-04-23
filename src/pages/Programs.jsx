import React from 'react';
import ProgramCard from '../components/ProgramCard';
import { programsData } from '../data/programs';

const Programs = () => {
  return (
    <div className="page programs-page">
      <div className="container">
        <h1 className="page-title">Our Programs</h1>
        <p className="page-subtitle">
          Discover a wide range of undergraduate and postgraduate programs designed to meet the demands of modern industries.
        </p>
        
        <div className="programs-all-grid">
          {programsData.map(program => (
            <ProgramCard key={program.id} program={program} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Programs;
