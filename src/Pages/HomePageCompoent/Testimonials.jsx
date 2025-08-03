import React from 'react';
import { Star, User } from 'lucide-react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      role: "Software Engineer",
      rating: 5,
      comment: "Found my dream job in just 2 weeks! The platform is amazing."
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "UX Designer",
      rating: 4,
      comment: "Great selection of jobs and easy to use interface."
    },
    {
      id: 3,
      name: "Mike Johnson",
      role: "Product Manager",
      rating: 5,
      comment: "The best job portal I've used in my career. Highly recommend!"
    }
  ];

  return (
    <section className="testimonials-section">
      <div className="section-header">
        <h2>What Our Users Say</h2>
      </div>
      <div className="testimonials-container">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <div className="user-info">
              <div className="user-avatar">
                <User size={24} />
              </div>
              <div>
                <h4>{testimonial.name}</h4>
                <p>{testimonial.role}</p>
              </div>
            </div>
            <div className="rating">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  size={16} 
                  fill={i < testimonial.rating ? "#FFD700" : "#e9ecef"} 
                  color={i < testimonial.rating ? "#FFD700" : "#e9ecef"} 
                />
              ))}
            </div>
            <p className="comment">{testimonial.comment}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;