import React from 'react';

const Admission = () => {
  return (
    <div className="page admission-page">
      <div className="container">
        <h1 className="page-title">Admission Information</h1>
        
        <div className="admission-section">
          <h2>Admission Criteria</h2>
          <div className="criteria-list">
            <div className="criteria-item">
              <h3>Academic Requirements</h3>
              <ul>
                <li>Minimum 50% marks in Intermediate/A Levels or equivalent</li>
                <li>For MS Programs: Minimum 50% CGPA in BS/Master degree</li>
                <li>Subject-specific prerequisites for certain programs</li>
              </ul>
            </div>
            
            <div className="criteria-item">
              <h3>Additional Requirements</h3>
              <ul>
                <li>University Admission Test (UMT LAT) or valid SAT/ GMAT/GRE scores</li>
                <li>Two letters of recommendation</li>
                <li>Statement of Purpose (SOP)</li>
                <li>Copy of CNIC/Passport</li>
                <li>Recent photographs</li>
              </ul>
            </div>
            
            <div className="criteria-item">
              <h3>International Students</h3>
              <ul>
                <li>Equivalance certificate from IBCC</li>
                <li>IELTS/TOEFL score (if medium of instruction was not English)</li>
                <li>Valid student visa</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="admission-section">
          <h2>Admission Process</h2>
          <div className="steps-container">
            <div className="step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Application Submission</h3>
                <p>Complete online application form and submit required documents.</p>
              </div>
            </div>
            
            <div className="step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Entrance Test</h3>
                <p>Appear in UMT Admission Test or submit standardized test scores.</p>
              </div>
            </div>
            
            <div className="step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Interview/Evaluation</h3>
                <p>Shortlisted candidates will be called for interview or portfolio review.</p>
              </div>
            </div>
            
            <div className="step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h3>Selection & Offer Letter</h3>
                <p>Selected candidates will receive admission offer letter.</p>
              </div>
            </div>
            
            <div className="step">
              <div className="step-number">5</div>
              <div className="step-content">
                <h3>Fee Submission & Enrollment</h3>
                <p>Submit admission fee and complete enrollment process.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="admission-section">
          <h2>Important Dates</h2>
          <div className="dates-table">
            <table>
              <thead>
                <tr>
                  <th>Event</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Applications Open</td>
                  <td>May 15, 2025</td>
                </tr>
                <tr>
                  <td>Last Date to Apply</td>
                  <td>July 31, 2025</td>
                </tr>
                <tr>
                  <td>Admission Test Dates</td>
                  <td>August 15-20, 2025</td>
                </tr>
                <tr>
                  <td>Result Announcement</td>
                  <td>August 30, 2025</td>
                </tr>
                <tr>
                  <td>Fee Submission Deadline</td>
                  <td>September 10, 2025</td>
                </tr>
                <tr>
                  <td>Classes Commence</td>
                  <td>September 20, 2025</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admission;
