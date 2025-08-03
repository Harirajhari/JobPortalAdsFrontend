import React from 'react';
import './HowItWorks.css'; // We'll create this CSS file next

const HowItWorks = () => {
  return (
    <div className="how-it-works">
      <div className="section-header">
        <h1>How It Works?</h1>
        <p className="subtitle">WorkScout helps you achieve your goals!</p>
      </div>

      <div className="steps-container">
        {/* Step 1 */}
        <div className="step-card step-1">
          <div className="card-inner">
            <div className="card-front">
              <div className="step-number">1</div>
              <img 
                src="https://tse4.mm.bing.net/th/id/OIP.D3kX9JCz8aJTcnAbUZ0jNwHaE8?pid=Api&P=0&h=180" 
                alt="Post a Job" 
                className="step-image"
              />
              <h2>Post a Job</h2>
            </div>
            <div className="card-back">
              <p>Select a package that suits your needs and submit your job details.</p>
            </div>
          </div>
        </div>

        {/* Step 2 */}
        <div className="step-card step-2">
          <div className="card-inner">
            <div className="card-front">
              <div className="step-number">2</div>
              <img 
                src="https://advertise.nurse.com/wp-content/uploads/2023/12/coldcallingnurses-scaled-e1701789132856.jpg" 
                alt="Advertise" 
                className="step-image"
              />
              <h2>Advertise</h2>
            </div>
            <div className="card-back">
              <p>Advertise your listings and find candidates interested in your job offer.</p>
            </div>
          </div>
        </div>

        {/* Step 3 */}
        <div className="step-card step-3">
          <div className="card-inner">
            <div className="card-front">
              <div className="step-number">3</div>
              <img 
                src="https://www.careersingovernment.com/templates/CareersinGov/assets/images/post-careers.jpg" 
                alt="Recruit" 
                className="step-image"
              />
              <h2>Recruit</h2>
            </div>
            <div className="card-back">
              <p>Allow candidates to apply to jobs via a form and rate or comment them.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;