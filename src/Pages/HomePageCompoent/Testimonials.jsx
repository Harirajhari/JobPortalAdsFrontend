import React from 'react';
import { Star, User } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      role: "Software Engineer",
      rating: 5,
      comment: "Found my dream job in just 2 weeks! The platform is amazing.",
      avatarColor: "bg-blue-100 text-blue-600"
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "UX Designer",
      rating: 4,
      comment: "Great selection of jobs and easy to use interface.",
      avatarColor: "bg-purple-100 text-purple-600"
    },
    {
      id: 3,
      name: "Mike Johnson",
      role: "Product Manager",
      rating: 5,
      comment: "The best job portal I've used in my career. Highly recommend!",
      avatarColor: "bg-emerald-100 text-emerald-600"
    },
    {
      id: 4,
      name: "Sarah Williams",
      role: "Marketing Director",
      rating: 5,
      comment: "Exceptional service and support throughout my job search journey.",
      avatarColor: "bg-rose-100 text-rose-600"
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 relative inline-block">
            What Our Users Say
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-3 w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"></span>
          </h2>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what professionals like you are saying about their experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col h-full"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className={`${testimonial.avatarColor} w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0`}>
                  <User className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-5 h-5 ${i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300 fill-gray-300"}`}
                  />
                ))}
              </div>
              
              <p className="text-gray-600 italic mb-6 flex-grow">"{testimonial.comment}"</p>
              
              <div className="mt-auto pt-4 border-t border-gray-100">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500">Verified User</span>
                  <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
        </div>
      </div>
    </section>
  );
};

export default Testimonials;