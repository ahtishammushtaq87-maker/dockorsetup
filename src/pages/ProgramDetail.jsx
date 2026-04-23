import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { programsData } from '../data/programs';

const ProgramDetail = () => {
  // Get program ID from URL params
  const { id } = useParams();
  
  // Find the program with matching ID
  const program = programsData.find(p => p.id === parseInt(id));

  if (!program) {
    return (
      <div className="page not-found-page">
        <div className="container">
          <h1>Program Not Found</h1>
          <p>Sorry, the program you are looking for does not exist.</p>
          <Link to="/programs" className="back-link">Back to Programs</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="page program-detail-page">
      <div className="container">
        <Link to="/programs" className="back-link">← Back to All Programs</Link>
        
        <div className="program-detail-content">
          <h1 className="program-detail-title">{program.name}</h1>
          
          <div className="program-detail-info">
            <div className="info-card">
              <h3>Duration</h3>
              <p>{program.duration}</p>
            </div>
            
            <div className="info-card">
              <h3>Eligibility Criteria</h3>
              <p>{program.eligibility}</p>
            </div>
            
            <div className="info-card">
              <h3>Key Subjects</h3>
              <ul className="subjects-list">
                {program.subjects.map((subject, index) => (
                  <li key={index}>{subject}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramDetail;
