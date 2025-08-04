import React from 'react';
import { Search, Briefcase, Shield, Bell } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: <Search size={28} />,
      title: "Search Jobs",
      description: "Find your perfect job opportunity with our advanced search filters and smart matching algorithm.",
      color: "text-blue-500",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-100"
    },
    {
      icon: <Briefcase size={28} />,
      title: "Apply Easily",
      description: "One-click applications with your saved profile. Apply to multiple jobs effortlessly and track progress.",
      color: "text-emerald-500",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-100"
    },
    {
      icon: <Shield size={28} />,
      title: "Job Security",
      description: "Verified employers and secure processes ensure your personal information stays protected.",
      color: "text-amber-500",
      bgColor: "bg-amber-50",
      borderColor: "border-amber-100"
    },
    {
      icon: <Bell size={28} />,
      title: "Job Notifications",
      description: "Get instant alerts for new opportunities that match your skills and career preferences.",
      color: "text-purple-500",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-100"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-6">
            <Briefcase className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Offering The Best Deals
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Discover amazing career opportunities with our comprehensive platform designed to connect talented professionals with leading companies.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mx-auto"></div>
        </div>

        {/* Features Grid - Different Layout */}
        <div className="space-y-8">
          {/* First Row - 2 cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {features.slice(0, 2).map((feature, index) => (
              <div
                key={index}
                className={`group relative bg-white rounded-2xl border-2 ${feature.borderColor} p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
              >
                <div className="flex items-start space-x-6">
                  <div className={`flex-shrink-0 w-14 h-14 ${feature.bgColor} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <div className={feature.color}>
                      {feature.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
                
                {/* Subtle hover effect */}
                <div className={`absolute inset-0 ${feature.bgColor} rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
              </div>
            ))}
          </div>

          {/* Second Row - 2 cards with offset */}
          <div className="grid md:grid-cols-2 gap-8 md:px-12">
            {features.slice(2, 4).map((feature, index) => (
              <div
                key={index + 2}
                className={`group relative bg-white rounded-2xl border-2 ${feature.borderColor} p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
              >
                <div className="flex items-start space-x-6">
                  <div className={`flex-shrink-0 w-14 h-14 ${feature.bgColor} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <div className={feature.color}>
                      {feature.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
                
                {/* Subtle hover effect */}
                <div className={`absolute inset-0 ${feature.bgColor} rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4 bg-white rounded-full px-8 py-4 shadow-lg border border-gray-100">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 bg-blue-100 rounded-full border-2 border-white flex items-center justify-center">
                <Search className="w-4 h-4 text-blue-600" />
              </div>
              <div className="w-8 h-8 bg-emerald-100 rounded-full border-2 border-white flex items-center justify-center">
                <Briefcase className="w-4 h-4 text-emerald-600" />
              </div>
              <div className="w-8 h-8 bg-amber-100 rounded-full border-2 border-white flex items-center justify-center">
                <Shield className="w-4 h-4 text-amber-600" />
              </div>
              <div className="w-8 h-8 bg-purple-100 rounded-full border-2 border-white flex items-center justify-center">
                <Bell className="w-4 h-4 text-purple-600" />
              </div>
            </div>
            <span className="text-gray-700 font-medium">Join thousands of satisfied job seekers</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;