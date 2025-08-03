import React from 'react';
import { Search, Briefcase, Shield, Bell } from 'lucide-react';
import './FeaturesSection.css';

const FeaturesSection = () => {
  const features = [
    {
      icon: <Search size={40} />,
      title: "Search a Jobs",
      description: "Proin gravida nibh vel velit auctr akshay Aenean sollicitudin..."
    },
    {
      icon: <Briefcase size={40} />,
      title: "Apply a Good Job",
      description: "Proin gravida nibh vel velit auctr akshay Aenean sollicitudin..."
    },
    {
      icon: <Shield size={40} />,
      title: "Job Security",
      description: "Proin gravida nibh vel velit auctr akshay Aenean sollicitudin..."
    },
    {
      icon: <Bell size={40} />,
      title: "Job Notifications",
      description: "Proin gravida nibh vel velit auctr akshay Aenean sollicitudin..."
    }
  ];

  return (
    <section className="features-section">
      <div className="section-header">
        <h2>OFFERING THE BEST DEALS</h2>
      </div>
      <div className="features-container">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;