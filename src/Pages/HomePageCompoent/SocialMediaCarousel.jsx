// SocialMediaCarousel.jsx
import React, { useState, useEffect } from 'react';
import { 
  MessageCircle, Twitter, Youtube, Linkedin, Instagram, Mail, 
  ChevronLeft, ChevronRight, Pause, Play 
} from 'lucide-react';
import './SocialMediaCarousel.css';

const SocialMediaCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const slides = [
    {
      id: 1,
      icon: MessageCircle,
      title: "WhatsApp Community",
      description: "Join our active community for real-time updates and discussions",
      color: "#25D366",
      link: "https://chat.whatsapp.com/KrCFWJ4LJPy9LXhWxynGzu?mode=ac_t"
    },
    {
      id: 2,
      icon: Twitter,
      title: "Twitter Updates",
      description: "Follow us for industry news and company announcements",
      color: "#1DA1F2",
      link: "https://x.com/HiringJobTeam?t=Nm5NOTgQDgId_c9XWhNSkw&s=08"
    },
    {
      id: 3,
      icon: Youtube,
      title: "YouTube Channel",
      description: "Subscribe for tutorials, interviews, and company insights",
      color: "#FF0000",
      link: "https://youtube.com/@hiringjob-w4h?si=Klk5w9HtgEiXoc7T"
    },
    {
      id: 4,
      icon: Linkedin,
      title: "LinkedIn Network",
      description: "Connect with us for professional content and opportunities",
      color: "#0077B5",
      link: "https://www.linkedin.com/in/hiringjob-team-265740378/"
    },
    {
      id: 5,
      icon: Instagram,
      title: "Instagram Feed",
      description: "Follow for behind-the-scenes and company culture",
      color: "#E1306C",
      link: "https://www.instagram.com/hiring_job_team?igsh=dmJsbjVkeWZ3cmFj"
    },
    {
      id: 6,
      icon: Mail,
      title: "Email Us",
      description: "Contact our team directly for inquiries and support",
      color: "#5F6368",
      link: "mailto:hiringjobofficial@gmail.com"
    }
  ];

  useEffect(() => {
    if (!isAutoPlay) return;
    
    const interval = setInterval(() => {
      goToSlide((currentSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide, isAutoPlay, slides.length]);

  const goToSlide = (index) => {
    if (isTransitioning || index === currentSlide) return;
    
    setIsTransitioning(true);
    setCurrentSlide(index);
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 600);
  };

  const nextSlide = () => {
    goToSlide((currentSlide + 1) % slides.length);
    setIsAutoPlay(false);
  };

  const prevSlide = () => {
    goToSlide((currentSlide - 1 + slides.length) % slides.length);
    setIsAutoPlay(false);
  };

  const handleConnect = () => {
    const currentLink = slides[currentSlide].link;
    if (currentLink && currentLink !== '#') {
      window.open(currentLink, '_blank', 'noopener,noreferrer');
    } else {
      showNotification('Link coming soon!');
    }
  };

  const showNotification = (message) => {
    const notification = document.createElement('div');
    notification.className = 'link-notification';
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
      notification.classList.add('fade-out');
      setTimeout(() => notification.remove(), 300);
    }, 2000);
  };

  const CurrentIcon = slides[currentSlide].icon;

  return (
    <div className="carousel-container">
      {/* Main Carousel */}
      <div className="carousel">
        {/* Slide Content */}
        <div className="slide-content" style={{ backgroundColor: slides[currentSlide].color }}>
          <div className="icon-wrapper">
            <CurrentIcon size={48} className="slide-icon" />
          </div>
          
          <h2 className="slide-title">{slides[currentSlide].title}</h2>
          <p className="slide-description">{slides[currentSlide].description}</p>
          
          <button 
            onClick={handleConnect}
            className="connect-button"
            style={{ backgroundColor: slides[currentSlide].color }}
          >
            Connect Now
          </button>
        </div>

        {/* Navigation Controls */}
        <button 
          onClick={prevSlide}
          disabled={isTransitioning}
          className="nav-button prev-button"
        >
          <ChevronLeft size={24} />
        </button>
        
        <button 
          onClick={nextSlide}
          disabled={isTransitioning}
          className="nav-button next-button"
        >
          <ChevronRight size={24} />
        </button>

        {/* Slide Indicators */}
        <div className="slide-indicators">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`indicator ${index === currentSlide ? 'active' : ''}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Auto-play Toggle */}
        <button
          onClick={() => setIsAutoPlay(!isAutoPlay)}
          className="autoplay-toggle"
          aria-label={isAutoPlay ? 'Pause slideshow' : 'Play slideshow'}
        >
          {isAutoPlay ? <Pause size={18} /> : <Play size={18} />}
        </button>

        {/* Progress Bar */}
        {isAutoPlay && (
          <div className="progress-track">
            <div 
              className="progress-bar"
              style={{ animationDuration: '5s' }}
              key={currentSlide}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default SocialMediaCarousel;