import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: "Post a Job",
      description: "Easily create attractive job postings and select a package that fits your specific needs. Our intuitive platform guides you every step of the way.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      ),
    },
    {
      id: 2,
      title: "Advertise & Reach",
      description: "Your job listings are automatically advertised to our network of qualified candidates. We help you reach the right talent, fast.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
    },
    {
      id: 3,
      title: "Recruit & Hire",
      description: "Review, rate, and comment on applications through our simple dashboard. Find your perfect match and make your next great hire.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-base font-semibold text-blue-600 uppercase tracking-wide">
            Our Process
          </p>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900">
            How It Works
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            WorkScout simplifies your hiring journey with a straightforward, effective three-step process designed to help you find top talent effortlessly.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8">
          {/* Vertical divider lines for large screens */}
          <div className="hidden md:block absolute inset-y-0 left-1/2 w-0.5 bg-gray-200 transform -translate-x-1/2"></div>
          <div className="hidden md:block absolute inset-y-0 left-1/2 w-0.5 bg-gray-200 transform translate-x-[calc(100%+12px)]"></div>

          {steps.map((step) => (
            <div
              key={step.id}
              className="relative flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-200"
            >
              {/* Step number icon */}
              <div className="relative flex items-center justify-center w-16 h-16 mb-6">
                <div className="absolute inset-0 rounded-full bg-blue-100 opacity-50 animate-ping-slow"></div>
                <div className="relative w-12 h-12 bg-white rounded-full border-2 border-blue-500 flex items-center justify-center text-blue-600 font-bold text-xl">
                  {step.id}
                </div>
              </div>

              {/* Icon and content */}
              <div className="flex flex-col items-center">
                <div className="p-4 bg-gray-100 rounded-full mb-4">
                  {step.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;