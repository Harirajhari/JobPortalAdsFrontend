import React, { useState } from 'react';
import { 
  Home, Briefcase, User, Users, BookOpen, Mail, LogIn, UserPlus,
  Search, LayoutGrid 
} from 'lucide-react';
import './HomePage.css';

// Import components
import HowItWorks from './HowItWorks';
import FeaturesSection from './FeaturesSection';
import JobSearch from './JobSearch';
import Testimonials from './Testimonials';
import Newsletter from './Newsletter';
import SocialMediaCarousel from './SocialMediaCarousel';
import NavBar from './NavBar';

// Career Navigation Component
const CareerNavigation = () => {
  return (
    <div className="career-navigation">
      <div className="content-container">
        <div className="text-content">
          <h1 className="title">Navigate Your Career with Us!</h1>
          <p className="description">
            Explore our extensive job listing and discover opportunities tailored just for you.
          </p>
          <p className="sub-description">
            Start your journey today and turn your dream job into a reality!
          </p>
          <button className="cta-button">Find a job</button>
        </div>

        <div className="stats-container">
          <div className="stat-card">
            
          </div>
          <div className="stat-card">
           
          </div>
          <div className="stat-card">
           
          </div>
          <div className="stat-card">

          </div>
          <div className="stat-card">
            
          </div> 
        </div>
      </div>
    </div>
  );
};

// Main HomePage Component
const HomePage = () => {
  return (
    <div className="home-page">
      {/* Navigation Bar */}
      <NavBar />
      
      {/* Career Navigation/Hero Section */}
      <CareerNavigation />
      
      {/* Other Sections */}
      <HowItWorks />
      <FeaturesSection />
      <JobSearch />
      <SocialMediaCarousel />
      <Testimonials />
      <Newsletter />
      
      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-info">
            <h3>EnTaro Jobs</h3>
            <p>Connecting talent with opportunity</p>
            <div className="social-icons">
              <a href="#"><i className="fab fa-facebook"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-linkedin"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
            </div>
          </div>

          <div className="footer-links">
            <div className="link-column">
              <h4>For Job Seekers</h4>
              <a href="/jobs">Browse Jobs</a>
              <a href="/resume">Resume Builder</a>
              <a href="/career-advice">Career Advice</a>
            </div>
            <div className="link-column">
              <h4>For Employers</h4>
              <a href="/post-job">Post a Job</a>
              <a href="/pricing">Pricing</a>
              <a href="/recruiting">Recruiting Solutions</a>
            </div>
            <div className="link-column">
              <h4>Company</h4>
              <a href="/about">About Us</a>
              <a href="/contact">Contact</a>
              <a href="/blog">Blog</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 EnTaro Jobs Portal. All rights reserved.</p>
          <div className="legal-links">
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
            <a href="/cookies">Cookie Policy</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;