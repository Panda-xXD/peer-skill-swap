import React, { useState, useEffect } from 'react';
import { Zap, MapPin, Star, Clock, Users, Shuffle, ArrowRight, Heart, X } from 'lucide-react';
import { mockIndianUsers } from '../data/mockUsers';
import { User } from '../types';

interface UserMatchingPageProps {
  onSelectUser: (user: User) => void;
  onBack: () => void;
}

export function UserMatchingPage({ onSelectUser, onBack }: UserMatchingPageProps) {
  const [selectedUsers, setSelectedUsers] = useState<User[]>([]);
  const [currentBatch, setCurrentBatch] = useState(0);
  const [isShuffling, setIsShuffling] = useState(false);

  const batchSize = 3;
  const totalBatches = Math.ceil(mockIndianUsers.length / batchSize);
  const currentUsers = mockIndianUsers.slice(
    currentBatch * batchSize,
    (currentBatch + 1) * batchSize
  );

  const shuffleUsers = () => {
    setIsShuffling(true);
    setTimeout(() => {
      setCurrentBatch((prev) => (prev + 1) % totalBatches);
      setIsShuffling(false);
    }, 500);
  };

  const toggleUserSelection = (user: User) => {
    setSelectedUsers(prev => {
      const isSelected = prev.find(u => u.id === user.id);
      if (isSelected) {
        return prev.filter(u => u.id !== user.id);
      } else if (prev.length < 2) {
        return [...prev, user];
      }
      return prev;
    });
  };

  const getMatchingSkills = (user: User) => {
    // Mock matching logic - in real app, this would compare with current user's profile
    return user.skillsOffered.slice(0, 2);
  };

  const getCompatibilityColor = (compatibility: number) => {
    if (compatibility >= 90) return 'text-green-600 bg-green-100';
    if (compatibility >= 75) return 'text-blue-600 bg-blue-100';
    if (compatibility >= 60) return 'text-orange-600 bg-orange-100';
    return 'text-red-600 bg-red-100';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <button
                onClick={onBack}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <ArrowRight className="w-5 h-5 rotate-180" />
              </button>
              <div className="flex items-center space-x-3">
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-2 rounded-xl">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900">Find Your Learning Partners</h1>
                  <p className="text-sm text-gray-600">Choose up to 2 users to start skill exchanges</p>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={shuffleUsers}
                disabled={isShuffling}
                className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-medium hover:from-purple-700 hover:to-blue-700 disabled:opacity-50 transition-all duration-200"
              >
                <Shuffle className={`w-4 h-4 ${isShuffling ? 'animate-spin' : ''}`} />
                <span>Shuffle</span>
              </button>

              {selectedUsers.length > 0 && (
                <button
                  onClick={() => onSelectUser(selectedUsers[0])}
                  className="flex items-center space-x-2 px-6 py-2 bg-green-600 text-white rounded-xl font-medium hover:bg-green-700 transition-colors"
                >
                  <span>Continue with {selectedUsers.length} user{selectedUsers.length > 1 ? 's' : ''}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* User Cards */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-6">
          {currentUsers.map((user, index) => {
            const isSelected = selectedUsers.find(u => u.id === user.id);
            const matchingSkills = getMatchingSkills(user);
            
            return (
              <div
                key={user.id}
                className={`bg-white rounded-3xl border-2 overflow-hidden transition-all duration-300 hover:scale-105 cursor-pointer ${
                  isSelected 
                    ? 'border-purple-500 shadow-2xl ring-4 ring-purple-200' 
                    : 'border-gray-200 hover:border-purple-300 shadow-lg hover:shadow-xl'
                } ${isShuffling ? 'animate-pulse' : ''}`}
                onClick={() => toggleUserSelection(user)}
              >
                {/* Selection Indicator */}
                {isSelected && (
                  <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-2 text-center">
                    <span className="text-white font-medium text-sm">✓ Selected</span>
                  </div>
                )}

                {/* User Header */}
                <div className="p-6 pb-4">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="relative">
                      <img
                        src={user.avatar}
                        alt={user.username}
                        className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg"
                      />
                      {user.isOnline && (
                        <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 border-2 border-white rounded-full"></div>
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 text-lg">{user.username}</h3>
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <MapPin className="w-4 h-4" />
                        <span>{user.location}</span>
                      </div>
                      <div className="flex items-center space-x-2 mt-1">
                        <div className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs font-medium">
                          Level {user.level}
                        </div>
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-yellow-500 fill-current" />
                          <span className="text-sm font-medium">{user.rating}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Compatibility Score */}
                  <div className={`inline-flex items-center space-x-2 px-3 py-2 rounded-full text-sm font-bold ${getCompatibilityColor(user.matchCompatibility || 0)}`}>
                    <Heart className="w-4 h-4" />
                    <span>{user.matchCompatibility}% Match</span>
                  </div>
                </div>

                {/* Bio */}
                <div className="px-6 pb-4">
                  <p className="text-gray-700 text-sm leading-relaxed">{user.bio}</p>
                </div>

                {/* Skills Offered */}
                <div className="px-6 pb-4">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    Can Teach
                  </h4>
                  <div className="space-y-2">
                    {user.skillsOffered.slice(0, 2).map((skill) => (
                      <div key={skill.id} className="bg-green-50 p-3 rounded-xl border border-green-200">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-medium text-green-900 text-sm">{skill.name}</span>
                          <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                            {skill.level}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2 text-xs text-green-700">
                          <Clock className="w-3 h-3" />
                          <span>{skill.duration}</span>
                        </div>
                        <div className="flex flex-wrap gap-1 mt-2">
                          {skill.tags.slice(0, 3).map((tag) => (
                            <span key={tag} className="text-xs bg-white text-green-600 px-2 py-1 rounded-md">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Skills Wanted */}
                <div className="px-6 pb-6">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                    Wants to Learn
                  </h4>
                  <div className="space-y-2">
                    {user.skillsWanted.slice(0, 1).map((skill) => (
                      <div key={skill.id} className="bg-blue-50 p-3 rounded-xl border border-blue-200">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-medium text-blue-900 text-sm">{skill.name}</span>
                          <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                            {skill.level}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2 text-xs text-blue-700">
                          <Clock className="w-3 h-3" />
                          <span>{skill.duration}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Stats Footer */}
                <div className="bg-gray-50 px-6 py-4 grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="font-bold text-gray-900">{user.points.toLocaleString()}</div>
                    <div className="text-xs text-gray-600">Points</div>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">{user.completedLessons}</div>
                    <div className="text-xs text-gray-600">Lessons</div>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">{user.streak}</div>
                    <div className="text-xs text-gray-600">Day Streak</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center mt-8 space-x-2">
          {Array.from({ length: totalBatches }, (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentBatch(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentBatch ? 'bg-purple-600' : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}