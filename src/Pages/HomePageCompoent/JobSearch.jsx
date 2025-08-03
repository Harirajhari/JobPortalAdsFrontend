import React from 'react';
import './JobSearch.css'; // We'll create this CSS file next

const JobSearch = () => {
  return (
    <div className="job-search-container">
      <div className="hero-section">
        <div className="hero-content">
          <h1>Explore a faster, easier, and better job search</h1>
          <div className="features-list">
            <div className="feature-item">
              <div className="feature-icon">✓</div>
              <p>Unmatched quality of remote, hybrid, and flexible jobs</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">✓</div>
              <p>Premium skills tests, remote courses, career coaching, and more</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">✓</div>
              <p>Unmatched quality of remote, hybrid, and flexible jobs</p>
            </div>
          </div>
          <button className="browse-jobs-btn">Browse Jobs</button>
        </div>
        <div className="hero-images">
          <img 
            src="https://fjwp.s3.amazonaws.com/blog/wp-content/uploads/2021/03/01055833/successful-job-seekers.png" 
            alt="Successful job seekers" 
            className="main-image animate-float"
          />
          <img 
            src="https://fpcnational.com/wp-content/uploads/2020/07/job-seekers-scaled-1.jpg" 
            alt="Job seekers" 
            className="secondary-image animate-float-delay"
          />
        </div>
      </div>
    </div>
  );
};

export default JobSearch;