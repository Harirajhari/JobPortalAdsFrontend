import React, { useState, useEffect } from 'react';
import { 
  MessageCircle, Twitter, Youtube, Linkedin, Instagram, Mail, 
  ChevronLeft, ChevronRight, Pause, Play 
} from 'lucide-react';

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
    notification.className = 'fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-8 py-4 bg-white text-gray-800 font-semibold rounded-lg shadow-xl z-50 animate-fade-in';
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
      notification.classList.add('animate-fade-out');
      setTimeout(() => notification.remove(), 300);
    }, 2000);
  };

  const CurrentIcon = slides[currentSlide].icon;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 sm:p-8">
      <div className="relative w-full max-w-4xl h-[500px] rounded-2xl overflow-hidden shadow-2xl">
        {/* Slide Content */}
        <div 
          className="flex flex-col items-center justify-center h-full p-8 text-center text-white transition-colors duration-500"
          style={{ backgroundColor: slides[currentSlide].color }}
        >
          <div className="flex items-center justify-center w-20 h-20 mb-8 bg-white/20 rounded-full backdrop-blur-sm transition-all duration-500 hover:scale-110 hover:rotate-6">
            <CurrentIcon className="w-12 h-12 transition-transform duration-500 hover:scale-125" />
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 drop-shadow-md">
            {slides[currentSlide].title}
          </h2>
          
          <p className="text-lg sm:text-xl mb-8 max-w-2xl opacity-90">
            {slides[currentSlide].description}
          </p>
          
          <button 
            onClick={handleConnect}
            className="px-8 py-3 bg-white/90 hover:bg-white text-gray-800 font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 uppercase tracking-wider"
            style={{ color: slides[currentSlide].color }}
          >
            Connect Now
          </button>
        </div>

        {/* Navigation Controls */}
        <button 
          onClick={prevSlide}
          disabled={isTransitioning}
          className="absolute top-1/2 left-4 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 hover:scale-110 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        
        <button 
          onClick={nextSlide}
          disabled={isTransitioning}
          className="absolute top-1/2 right-4 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 hover:scale-110 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
                index === currentSlide ? 'bg-white scale-125' : 'bg-white/40'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Auto-play Toggle */}
        <button
          onClick={() => setIsAutoPlay(!isAutoPlay)}
          className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 hover:scale-110 transition-all duration-300"
          aria-label={isAutoPlay ? 'Pause slideshow' : 'Play slideshow'}
        >
          {isAutoPlay ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
        </button>

        {/* Progress Bar */}
        {isAutoPlay && (
          <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
            <div 
              className="h-full bg-white animate-progress"
              style={{ animationDuration: '5s' }}
              key={currentSlide}
            />
          </div>
        )}
      </div>

      {/* Animation styles */}
      <style jsx global>{`
        @keyframes progress {
          from { width: 0%; }
          to { width: 100%; }
        }
        .animate-progress {
          animation: progress linear forwards;
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translate(-50%, -45%); }
          to { opacity: 1; transform: translate(-50%, -50%); }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }
        @keyframes fade-out {
          from { opacity: 1; transform: translate(-50%, -50%); }
          to { opacity: 0; transform: translate(-50%, -55%); }
        }
        .animate-fade-out {
          animation: fade-out 0.3s ease-in forwards;
        }
      `}</style>
    </div>
  );
};

export default SocialMediaCarousel;