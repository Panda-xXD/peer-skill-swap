import React, { useState } from 'react';
import { Eye, EyeOff, Zap, Users, Award, TrendingUp } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

export function LoginPage() {
  const { login, signup, isLoading } = useAuth();
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      let success = false;
      if (isSignUp) {
        success = await signup(formData.username, formData.email, formData.password);
      } else {
        success = await login(formData.email, formData.password);
      }

      if (!success) {
        setError('Invalid credentials. Try demo@skillsync.com / demo123');
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-8 items-center">
        {/* Left side - Branding */}
        <div className="hidden lg:block space-y-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-4 rounded-2xl">
                <Zap className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
              SkillSync
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Trade skills, earn points, level up together
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl border border-white/20 shadow-lg">
              <Users className="w-8 h-8 text-purple-600 mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Connect & Learn</h3>
              <p className="text-sm text-gray-600">Find study partners and exchange knowledge</p>
            </div>
            <div className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl border border-white/20 shadow-lg">
              <Award className="w-8 h-8 text-blue-600 mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Earn Rewards</h3>
              <p className="text-sm text-gray-600">Get points, badges, and level up</p>
            </div>
            <div className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl border border-white/20 shadow-lg">
              <TrendingUp className="w-8 h-8 text-indigo-600 mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Track Progress</h3>
              <p className="text-sm text-gray-600">Monitor your learning journey</p>
            </div>
            <div className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl border border-white/20 shadow-lg">
              <Zap className="w-8 h-8 text-orange-600 mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Quick Lessons</h3>
              <p className="text-sm text-gray-600">Learn and teach micro-lessons</p>
            </div>
          </div>
        </div>

        {/* Right side - Login Form */}
        <div className="w-full max-w-md mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
            <div className="p-8">
              <div className="text-center mb-8">
                <div className="flex items-center justify-center mb-4 lg:hidden">
                  <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-3 rounded-xl">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  {isSignUp ? 'Join SkillSync' : 'Welcome back'}
                </h2>
                <p className="text-gray-600">
                  {isSignUp ? 'Start your learning journey' : 'Sign in to your account'}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {isSignUp && (
                  <div>
                    <input
                      type="text"
                      name="username"
                      placeholder="Username"
                      value={formData.username}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                      required
                    />
                  </div>
                )}
                
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                    required
                  />
                </div>

                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 pr-12"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>

                {error && (
                  <div className="text-red-500 text-sm text-center bg-red-50 py-2 px-4 rounded-lg">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? 'Loading...' : (isSignUp ? 'Sign Up' : 'Sign In')}
                </button>
              </form>

              <div className="mt-6 text-center">
                <button
                  onClick={() => {
                    setIsSignUp(!isSignUp);
                    setError('');
                    setFormData({ username: '', email: '', password: '' });
                  }}
                  className="text-purple-600 hover:text-purple-700 font-medium transition-colors"
                >
                  {isSignUp ? 'Already have an account? Sign in' : "Don't have an account? Sign up"}
                </button>
              </div>

              {!isSignUp && (
                <div className="mt-4 p-4 bg-purple-50 rounded-xl">
                  <p className="text-sm text-purple-700 text-center">
                    <strong>Demo:</strong> demo@skillsync.com / demo123
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}