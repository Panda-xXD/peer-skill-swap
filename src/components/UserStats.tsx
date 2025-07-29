import React from 'react';
import { Trophy, Target, Flame, Star, TrendingUp } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

export function UserStats() {
  const { user } = useAuth();

  if (!user) return null;

  const progressToNextLevel = ((user.points % 500) / 500) * 100;

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6">
      <div className="flex items-center space-x-3 mb-6">
        <img
          src={user.avatar}
          alt={user.username}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h3 className="font-semibold text-gray-900">{user.username}</h3>
          <p className="text-sm text-gray-600">Level {user.level} Learner</p>
        </div>
      </div>

      {/* Level Progress */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-700">Level Progress</span>
          <span className="text-sm text-gray-600">{user.points % 500}/500 XP</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-gradient-to-r from-purple-600 to-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${progressToNextLevel}%` }}
          ></div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-purple-50 p-4 rounded-xl">
          <div className="flex items-center space-x-2 mb-1">
            <Trophy className="w-4 h-4 text-purple-600" />
            <span className="text-sm font-medium text-purple-700">Points</span>
          </div>
          <p className="text-lg font-bold text-purple-900">{user.points.toLocaleString()}</p>
        </div>

        <div className="bg-orange-50 p-4 rounded-xl">
          <div className="flex items-center space-x-2 mb-1">
            <Flame className="w-4 h-4 text-orange-600" />
            <span className="text-sm font-medium text-orange-700">Streak</span>
          </div>
          <p className="text-lg font-bold text-orange-900">{user.streak} days</p>
        </div>

        <div className="bg-blue-50 p-4 rounded-xl">
          <div className="flex items-center space-x-2 mb-1">
            <Target className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-700">Lessons</span>
          </div>
          <p className="text-lg font-bold text-blue-900">{user.completedLessons}</p>
        </div>

        <div className="bg-green-50 p-4 rounded-xl">
          <div className="flex items-center space-x-2 mb-1">
            <Star className="w-4 h-4 text-green-600" />
            <span className="text-sm font-medium text-green-700">Rating</span>
          </div>
          <p className="text-lg font-bold text-green-900">{user.rating}</p>
        </div>
      </div>

      {/* Recent Achievement */}
      <div className="mt-6 p-4 bg-gradient-to-r from-purple-100 to-blue-100 rounded-xl">
        <div className="flex items-center space-x-2 mb-2">
          <TrendingUp className="w-5 h-5 text-purple-600" />
          <span className="font-medium text-purple-900">Recent Achievement</span>
        </div>
        <p className="text-sm text-purple-700">Completed 5 skill exchanges this week! 🎉</p>
      </div>
    </div>
  );
}