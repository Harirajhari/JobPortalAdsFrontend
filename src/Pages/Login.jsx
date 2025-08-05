import React, { useState } from 'react';
import { Mail, Lock, CheckCircle2, XCircle, Eye, EyeOff } from 'lucide-react';

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });
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
    
    // Simulate API call delay for demonstration
    setTimeout(() => {
      // Replace this with your actual API call
      try {
        // const res = await axios.post('https://jobportaladsbackend-production.up.railway.app/api/admins/login', form);
        setMessage('Login successful!');
        setStatus('success');
        
        // Simulate redirect delay
        setTimeout(() => {
          // navigate('/dashboard');
          console.log('Redirecting to dashboard...');
        }, 1500);
      } catch (err) {
        setMessage('Invalid credentials. Please try again.');
        setStatus('error');
      }
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 px-4 py-8 relative overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>
      
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 border border-purple-400/30 rounded-full animate-spin" style={{animationDuration: '20s'}}></div>
        <div className="absolute top-40 right-32 w-24 h-24 border border-blue-400/30 rotate-45 animate-bounce" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-32 left-32 w-40 h-40 border border-pink-400/30 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 border border-cyan-400/30 rotate-12 animate-spin" style={{animationDuration: '15s', animationDelay: '3s'}}></div>
        
        {/* Glowing orbs */}
        <div className="absolute top-1/4 left-1/3 w-4 h-4 bg-purple-400/60 rounded-full blur-sm animate-ping"></div>
        <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-blue-400/60 rounded-full blur-sm animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-2/3 left-1/4 w-2 h-2 bg-pink-400/60 rounded-full blur-sm animate-bounce" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="relative w-full max-w-md">
        {/* Main form container with glass morphism effect */}
        <div className="bg-white/80 backdrop-blur-lg shadow-2xl rounded-2xl p-8 space-y-6 border border-white/20 transform transition-all duration-500 hover:scale-105 animate-fade-in">
          {/* Header with animated gradient text */}
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Login Portal
            </h2>
            <p className="text-gray-600 text-sm opacity-0 animate-fade-in-delay">
              Sign in to access your dashboard
            </p>
          </div>

          <div onSubmit={handleSubmit} className="space-y-5">
            {/* Email Input */}
            <div className="group">
              <label className="block text-sm font-medium text-gray-700 mb-2 transition-colors group-focus-within:text-indigo-600">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 transition-all duration-300 group-focus-within:text-indigo-500 group-focus-within:scale-110" size={20} />
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent focus:bg-white transition-all duration-300 placeholder-gray-400 hover:shadow-md focus:shadow-lg"
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="group">
              <label className="block text-sm font-medium text-gray-700 mb-2 transition-colors group-focus-within:text-indigo-600">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 transition-all duration-300 group-focus-within:text-indigo-500 group-focus-within:scale-110" size={20} />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter your password"
                  value={form.password}
                  onChange={handleChange}
                  required
                  className="w-full pl-11 pr-12 py-3 rounded-xl border border-gray-200 bg-gray-50/50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent focus:bg-white transition-all duration-300 placeholder-gray-400 hover:shadow-md focus:shadow-lg"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-all duration-200 hover:scale-110"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="button"
              onClick={handleSubmit}
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none relative overflow-hidden group"
            >
              {isLoading ? (
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Signing in...</span>
                </div>
              ) : (
                <span className="relative z-10">Sign In</span>
              )}
              
              {/* Button shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </button>

            {/* Message Display */}
            {message && (
              <div className={`flex items-center justify-center gap-2 p-3 rounded-xl transition-all duration-500 transform ${
                status === 'success' 
                  ? 'bg-green-50 text-green-700 border border-green-200 animate-bounce scale-100' 
                  : 'bg-red-50 text-red-700 border border-red-200 animate-pulse scale-100'
              }`}>
                {status === 'success' ? 
                  <CheckCircle2 size={20} className="animate-spin" style={{animationDuration: '0.6s', animationIterationCount: '1'}} /> : 
                  <XCircle size={20} className="animate-pulse" />
                }
                <span className="font-medium">{message}</span>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="text-center pt-4 border-t border-gray-100">
            <p className="text-xs text-gray-500 opacity-0 animate-fade-in-delay-2">
              🔒 Secure admin access • Protected by encryption
            </p>
          </div>
        </div>

        {/* Floating particles */}
        <div className="absolute -z-10 inset-0">
          <div className="absolute top-10 left-10 w-2 h-2 bg-indigo-400 rounded-full animate-ping"></div>
          <div className="absolute bottom-16 right-12 w-1 h-1 bg-purple-400 rounded-full animate-pulse"></div>
          <div className="absolute top-1/3 right-8 w-1.5 h-1.5 bg-pink-400 rounded-full animate-bounce"></div>
          <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-indigo-300 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-1/3 left-12 w-1.5 h-1.5 bg-purple-300 rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { 
            opacity: 0; 
            transform: translateY(20px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
        
        .animate-fade-in-delay {
          animation: fade-in 0.8s ease-out 0.3s forwards;
        }
        
        .animate-fade-in-delay-2 {
          animation: fade-in 0.8s ease-out 0.6s forwards;
        }
        
        /* Loading spinner enhancement */
        @keyframes enhanced-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        /* Gradient animation for background blobs */
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-20px) rotate(120deg); }
          66% { transform: translateY(10px) rotate(240deg); }
        }
        
        .bg-gradient-to-br {
          background-image: linear-gradient(to bottom right, var(--tw-gradient-stops));
        }
      `}</style>
    </div>
  );
};

export default Login;