import React, { useState } from 'react';
import { User, Mail, Lock, CheckCircle2, XCircle, Eye, EyeOff, UserPlus } from 'lucide-react';

const Signup = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage('');
    setStatus(null);
    
    // Simulate API call delay
    setTimeout(() => {
      // Randomly determine success or failure for demonstration
      const isSuccess = Math.random() > 0.3;
      
      if (isSuccess) {
        setMessage('Signup successful! Welcome aboard!');
        setStatus('success');
        
        // Reset form on success
        setTimeout(() => {
          setForm({ name: '', email: '', password: '' });
        }, 1500);
      } else {
        setMessage('Signup failed. Please try again.');
        setStatus('error');
      }
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50 flex items-center justify-center p-4">
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-200 to-indigo-200 rounded-full opacity-20 blur-3xl animate-float" style={{animationDelay: '0s'}}></div>
        <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full opacity-20 blur-3xl animate-float" style={{animationDelay: '3s'}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-56 h-56 bg-gradient-to-r from-cyan-200 to-teal-200 rounded-full opacity-20 blur-3xl animate-float" style={{animationDelay: '6s'}}></div>
      </div>
      
      {/* Main form container */}
      <div className="relative w-full max-w-md">
        <div className="bg-white backdrop-blur-sm bg-opacity-90 shadow-2xl rounded-2xl p-8 space-y-6 border border-white/30 transform transition-all duration-500 animate-float-in">
          {/* Header with icon animation */}
          <div className="text-center space-y-3">
            <div className="mx-auto w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center animate-pulse-slow">
              <UserPlus className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Create Account
            </h2>
            <p className="text-gray-600 text-sm">
              Join our platform to access exclusive features
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name Input */}
            <div className="group">
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 transition-all duration-300 group-focus-within:text-indigo-500" size={20} />
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent focus:bg-white transition-all duration-300 placeholder-gray-400 hover:shadow-md focus:shadow-lg animate-fade-in"
                  style={{animationDelay: '0.1s'}}
                />
              </div>
            </div>

            {/* Email Input */}
            <div className="group">
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 transition-all duration-300 group-focus-within:text-indigo-500" size={20} />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent focus:bg-white transition-all duration-300 placeholder-gray-400 hover:shadow-md focus:shadow-lg animate-fade-in"
                  style={{animationDelay: '0.2s'}}
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="group">
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 transition-all duration-300 group-focus-within:text-indigo-500" size={20} />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Create Password"
                  value={form.password}
                  onChange={handleChange}
                  required
                  className="w-full pl-11 pr-12 py-3 rounded-xl border border-gray-200 bg-gray-50/50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent focus:bg-white transition-all duration-300 placeholder-gray-400 hover:shadow-md focus:shadow-lg animate-fade-in"
                  style={{animationDelay: '0.3s'}}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-all duration-200"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Password Strength Indicator */}
            <div className="space-y-2 animate-fade-in" style={{animationDelay: '0.4s'}}>
              <div className="flex space-x-1">
                <div className={`h-1 w-1/4 rounded-full transition-all duration-300 ${
                  form.password.length >= 6 ? 'bg-green-400' : 'bg-gray-200'
                }`}></div>
                <div className={`h-1 w-1/4 rounded-full transition-all duration-300 ${
                  form.password.length >= 8 ? 'bg-green-400' : 'bg-gray-200'
                }`}></div>
                <div className={`h-1 w-1/4 rounded-full transition-all duration-300 ${
                  /[A-Z]/.test(form.password) ? 'bg-green-400' : 'bg-gray-200'
                }`}></div>
                <div className={`h-1 w-1/4 rounded-full transition-all duration-300 ${
                  /[0-9]/.test(form.password) ? 'bg-green-400' : 'bg-gray-200'
                }`}></div>
              </div>
              <p className="text-xs text-gray-500">
                Password should be 8+ characters with uppercase and numbers
              </p>
            </div>

            {/* Terms Agreement */}
            <div className="flex items-center space-x-2 animate-fade-in" style={{animationDelay: '0.5s'}}>
              <input 
                type="checkbox" 
                id="terms" 
                className="w-4 h-4 text-indigo-600 rounded focus:ring-indigo-500" 
                required
              />
              <label htmlFor="terms" className="text-sm text-gray-600">
                I agree to the <a href="#" className="text-indigo-600 hover:underline">Terms & Conditions</a>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none relative overflow-hidden group animate-fade-in"
              style={{animationDelay: '0.6s'}}
            >
              {isLoading ? (
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Creating Account...</span>
                </div>
              ) : (
                <span className="relative z-10 flex items-center justify-center space-x-2">
                  <UserPlus size={20} />
                  <span>Create Account</span>
                </span>
              )}
              
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </button>

            {/* Message Display */}
            {message && (
              <div className={`flex items-center justify-center gap-2 p-4 rounded-xl transition-all duration-500 transform ${
                status === 'success' 
                  ? 'bg-green-50 text-green-700 border border-green-200 animate-pulse' 
                  : 'bg-red-50 text-red-700 border border-red-200 animate-pulse'
              }`}>
                {status === 'success' ? 
                  <CheckCircle2 size={20} className="text-green-500" /> : 
                  <XCircle size={20} className="text-red-500" />
                }
                <span className="font-medium">{message}</span>
              </div>
            )}
          </form>

          {/* Divider */}
          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative px-4 bg-white text-sm text-gray-500">Or continue with</div>
          </div>

          {/* Social Login */}
          <div className="grid grid-cols-3 gap-3 animate-fade-in" style={{animationDelay: '0.7s'}}>
            <button className="flex items-center justify-center py-2.5 px-4 rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors">
              <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </button>
            <button className="flex items-center justify-center py-2.5 px-4 rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
              </svg>
            </button>
            <button className="flex items-center justify-center py-2.5 px-4 rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors">
              <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </button>
          </div>

          {/* Footer */}
          <div className="text-center pt-4">
            <p className="text-sm text-gray-600">
              Already have an account? 
              <a href="#" className="text-indigo-600 hover:text-indigo-700 font-medium ml-1 hover:underline transition-colors">
                Sign In
              </a>
            </p>
          </div>
        </div>
        
        {/* Floating decoration */}
        <div className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full animate-ping-slow opacity-20"></div>
        <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-ping-slow opacity-20" style={{animationDelay: '1s'}}></div>
      </div>

      <style jsx global>{`
        @keyframes float {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0.2;
          }
          50% {
            transform: translateY(-20px) rotate(10deg);
            opacity: 0.3;
          }
          100% {
            transform: translateY(0) rotate(0deg);
            opacity: 0.2;
          }
        }
        
        @keyframes float-in {
          0% {
            transform: translateY(20px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        @keyframes fade-in {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes pulse-slow {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(99, 102, 241, 0.4);
          }
          50% {
            transform: scale(1.05);
            box-shadow: 0 0 0 10px rgba(99, 102, 241, 0);
          }
        }
        
        @keyframes ping-slow {
          0% {
            transform: scale(0.8);
            opacity: 0.2;
          }
          75%, 100% {
            transform: scale(1.4);
            opacity: 0;
          }
        }
        
        .animate-float {
          animation: float 15s ease-in-out infinite;
        }
        
        .animate-float-in {
          animation: float-in 0.8s cubic-bezier(0.22, 0.61, 0.36, 1) forwards;
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
          opacity: 0;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
        
        .animate-ping-slow {
          animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </div>
  );
};

export default Signup;