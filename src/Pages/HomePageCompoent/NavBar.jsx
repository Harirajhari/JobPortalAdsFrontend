import React, { useState } from 'react';
import { 
  Home, 
  Briefcase, 
  LogIn, 
  UserPlus
} from 'lucide-react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [isHovered, setIsHovered] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-gray-800 to-blue-600 px-4 py-3 sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Logo and Mobile Menu Button */}
        <div className="w-full md:w-auto flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-white hover:text-yellow-300 transition-colors duration-300">
            JOB Portal
          </Link>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <div className={`${isMobileMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row items-center gap-4 md:gap-6 w-full md:w-auto`}>
          {/* Main Navigation */}
          <div className="flex flex-col md:flex-row flex-wrap justify-center gap-4 md:gap-6">
            <NavLink 
              to="/" 
              icon={<Home className="w-5 h-5" />}
              label="HOME"
              isHovered={isHovered === 'home'}
              onMouseEnter={() => setIsHovered('home')}
              onMouseLeave={() => setIsHovered(null)}
            />
            
            <NavLink 
              to="/job/" // Example job ID, adjust as needed
              icon={<Briefcase className="w-5 h-5" />}
              label="JOBS"
              isHovered={isHovered === 'jobs'}
              onMouseEnter={() => setIsHovered('jobs')}
              onMouseLeave={() => setIsHovered(null)}
            />
          </div>

          {/* Auth Buttons */}
          <div className="flex gap-3 border-t md:border-t-0 pt-4 md:pt-0 border-white/20 w-full md:w-auto justify-center">
            <AuthButton 
              to="/login"
              icon={<LogIn className="w-5 h-5" />}
              label="LOGIN"
              variant="outline"
            />
            <AuthButton 
              to="/signup"
              icon={<UserPlus className="w-5 h-5" />}
              label="SIGN UP"
              variant="solid"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

// Reusable NavLink Component
const NavLink = ({ to, icon, label, isHovered, onMouseEnter, onMouseLeave }) => (
  <Link 
    to={to}
    className={`flex items-center gap-2 text-white font-medium px-3 py-2 rounded-lg transition-all duration-300 hover:bg-white/10 hover:shadow-md ${
      isHovered ? 'bg-white/10 shadow-md' : ''
    } relative group`}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    <span className="group-hover:text-yellow-300 transition-colors duration-300">
      {icon}
    </span>
    <span className="hidden sm:inline-block">{label}</span>
    <span className="absolute bottom-0 left-1/2 h-0.5 bg-white w-0 transition-all duration-300 transform -translate-x-1/2 group-hover:w-4/5"></span>
  </Link>
);

// Reusable AuthButton Component
const AuthButton = ({ to, icon, label, variant = 'outline' }) => (
  <Link 
    to={to}
    className={`
      flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300
      ${variant === 'solid' 
        ? 'bg-yellow-400 text-gray-800 font-medium hover:bg-yellow-500 hover:shadow-md' 
        : 'border border-white text-white hover:bg-white/10 hover:shadow-md'}
      group
    `}
  >
    <span className={`
      transition-all duration-300 
      ${variant === 'solid' ? 'group-hover:scale-110' : 'group-hover:rotate-12'}
    `}>
      {icon}
    </span>
    <span className="hidden sm:inline-block">{label}</span>
  </Link>
);

export default NavBar;