import React from 'react';
import ProgramCard from '../components/ProgramCard';
import { programsData } from '../data/programs';

const Home = () => {
  // Show top 4 programs as highlights
  const highlightedPrograms = programsData.slice(0, 4);

  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Welcome to University of Management and Technology by ahtisham</h1>
          <p className="hero-subtitle">
            Empowering minds, shaping futures through innovative education and research excellence.
          </p>
        </div>
      </section>

      <section className="intro-section">
        <div className="container">
          <h2>About UMT</h2>
          <p>
            The University of Management and Technology (UMT) is a premier institution committed to academic 
            excellence, groundbreaking research, and student success. With state-of-the-art facilities, 
            world-class faculty, and cutting-edge programs, UMT prepares students to become leaders 
            in their fields and make a positive impact on society.
          </p>
          <p>
            Our mission is to provide high-quality education that combines theoretical knowledge with 
            practical skills, fostering innovation, critical thinking, and ethical leadership among 
            our graduates.
          </p>
        </div>
      </section>

      <section className="programs-highlights">
        <div className="container">
          <h2>Featured Programs</h2>
          <div className="programs-grid">
            {highlightedPrograms.map(program => (
              <ProgramCard key={program.id} program={program} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
