import React from 'react';
import { Mail } from 'lucide-react';
import './Newsletter.css';

const Newsletter = () => {
  return (
    <section className="newsletter-section">
      <div className="newsletter-container">
        <div className="newsletter-content">
          <div className="newsletter-icon">
            <Mail size={40} />
          </div>
          <h2>Subscribe to Our Newsletter</h2>
          <p>Get the latest job postings and career tips delivered to your inbox</p>
          <form className="newsletter-form">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              required 
            />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;