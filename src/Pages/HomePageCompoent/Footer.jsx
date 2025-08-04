import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, MessageCircle, Youtube, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8 border-b border-gray-700 pb-8">
          {/* Company Info Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">EnTaro Jobs</h3>
            <p className="text-gray-400">Connecting talent with opportunity</p>
            {/* Social Icons */}
            <div className="flex space-x-4">
              <a
                href="https://chat.whatsapp.com/KrCFWJ4LJPy9LXhWxynGzu?mode=ac_t"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
                aria-label="WhatsApp Community"
              >
                <MessageCircle size={24} />
              </a>
              <a
                href="https://x.com/HiringJobTeam?t=Nm5NOTgQDgId_c9XWhNSkw&s=08"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
                aria-label="Twitter Updates"
              >
                <Twitter size={24} />
              </a>
              <a
                href="https://youtube.com/@hiringjob-w4h?si=Klk5w9HtgEiXoc7T"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
                aria-label="YouTube Channel"
              >
                <Youtube size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/hiringjob-team-265740378/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
                aria-label="LinkedIn Network"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://www.instagram.com/hiring_job_team?igsh=dmJsbjVkeWZ3cmFj"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
                aria-label="Instagram Feed"
              >
                <Instagram size={24} />
              </a>
              <a
                href="mailto:hiringjobofficial@gmail.com"
                className="text-gray-400 hover:text-white transition-colors duration-300"
                aria-label="Email Us"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-white transition-colors duration-300">
                  Home
                </a>
              </li>
              <li>
                <a href="/jobs" className="hover:text-white transition-colors duration-300">
                  Jobs
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-white transition-colors duration-300">
                  About Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-center md:text-left space-y-4 md:space-y-0">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} EnTaro Jobs Portal. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start space-x-4">
            <a href="/privacy" className="text-sm text-gray-500 hover:text-white transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="/terms" className="text-sm text-gray-500 hover:text-white transition-colors duration-300">
              Terms of Service
            </a>
            <a href="/cookies" className="text-sm text-gray-500 hover:text-white transition-colors duration-300">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
