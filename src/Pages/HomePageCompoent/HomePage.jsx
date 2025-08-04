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
import Footer from './Footer';

// Career Navigation Component

const CareerNavigation = () => {
  return (
    <section
  className="relative bg-center bg-cover min-h-screen flex items-center justify-center text-white"
>
      <div className="absolute inset-0 bg-black bg-opacity-70 z-0" />
      <div className="relative z-10 max-w-6xl px-6 py-20 text-center md:text-left space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Navigate Your <span className="text-indigo-400">Career</span> with Us!
        </h1>
        <p className="text-lg text-gray-200 max-w-xl">
          Explore our extensive job listings and discover opportunities tailored just for you.
        </p>
        <p className="text-md text-gray-300 max-w-xl">
          Start your journey today and turn your dream job into a reality!
        </p>
        <a
          href="/job"
          className="inline-block bg-indigo-500 hover:bg-indigo-600 text-white font-medium px-8 py-3 rounded-full shadow-lg transition-all duration-300 hover:-translate-y-1"
        >
          Find a Job
        </a>
      </div>
    </section>
  );
};

// Main HomePage Component
const HomePage = () => {
  return (
    <div className="home-page">
      {/* Navigation Bar */}

      {/* Career Navigation/Hero Section */}
      <CareerNavigation />
      
      {/* Other Sections */}
      <HowItWorks />
      <FeaturesSection />
      <JobSearch />
      <SocialMediaCarousel />
      <Testimonials />
      <Newsletter />

      <Footer />
    </div>
  );
};

export default HomePage;