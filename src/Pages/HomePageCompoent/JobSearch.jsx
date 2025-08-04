import React from 'react';
import { Link } from 'react-router-dom';
import { 
  BadgeCheck, 
  GraduationCap, 
  Calendar, 
  ArrowRight, 
  Briefcase, 
  Star, 
  Clock,
  Zap
} from 'lucide-react';

const JobSearch = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Content Section */}
          <div className="lg:w-1/2 space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                <Zap className="h-4 w-4" />
                <span>Trusted by 10,000+ professionals</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Find Your <span className="text-blue-600">Dream</span> Remote Job
              </h1>

              <p className="text-xl text-gray-600 max-w-lg">
                Join thousands who've discovered their ideal remote or hybrid roles with our curated job platform.
              </p>
            </div>

            <div className="space-y-5">
              <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex-shrink-0 mt-1">
                  <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                    <BadgeCheck className="h-5 w-5" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Premium Job Listings</h3>
                  <p className="text-gray-600 mt-1">Exclusive remote positions from top-tier companies</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex-shrink-0 mt-1">
                  <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                    <GraduationCap className="h-5 w-5" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Career Growth</h3>
                  <p className="text-gray-600 mt-1">Skills assessments and personalized coaching</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex-shrink-0 mt-1">
                  <div className="h-10 w-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                    <Calendar className="h-5 w-5" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Flexibility First</h3>
                  <p className="text-gray-600 mt-1">Work arrangements tailored to your lifestyle</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link
                to="/job"
                className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <span>Browse Jobs</span>
                <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Image Section */}
          <div className="lg:w-1/2 relative mt-10 lg:mt-0">
            <div className="relative w-full h-96 lg:h-[500px]">
              {/* Main image with floating effect */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full max-w-md mx-auto">
                  <img
                    src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
                    alt="Happy remote worker"
                    className="absolute w-full h-full object-cover rounded-3xl shadow-2xl border-8 border-white transform rotate-2 hover:rotate-0 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Floating card element */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl w-64 border border-gray-100 transform -rotate-3 z-10 hover:rotate-0 transition-transform duration-300">
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Briefcase className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">12,548+</div>
                    <div className="text-sm text-gray-500">Jobs Posted</div>
                  </div>
                </div>
              </div>
              
              {/* Second floating element */}
              <div className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-lg w-48 border border-gray-100 transform rotate-3 z-10 hover:rotate-0 transition-transform duration-300">
                <div className="flex items-center gap-2">
                  <div className="bg-yellow-100 p-1.5 rounded-md">
                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-400" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">4.9/5</div>
                    <div className="text-xs text-gray-500">User Rating</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust indicators */}
            <div className="mt-16 grid grid-cols-3 gap-4 bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="text-center">
                <div className="flex items-center justify-center gap-1 text-3xl font-bold text-blue-600">
                  <span>98%</span>
                </div>
                <div className="text-gray-600">Success Rate</div>
              </div>
              <div className="text-center border-x border-gray-200">
                <div className="flex items-center justify-center gap-1 text-3xl font-bold text-blue-600">
                  <Clock className="h-6 w-6" />
                  <span>24h</span>
                </div>
                <div className="text-gray-600">Avg. Response</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">5K+</div>
                <div className="text-gray-600">Companies</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobSearch;