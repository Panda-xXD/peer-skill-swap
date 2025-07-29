import React from 'react';
import { Crown, Medal, Trophy, Zap } from 'lucide-react';

const leaderboardData = [
  {
    rank: 1,
    username: 'skillmaster',
    avatar: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    points: 5420,
    level: 12,
    completedLessons: 78
  },
  {
    rank: 2,
    username: 'codegenius',
    avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    points: 4890,
    level: 11,
    completedLessons: 65
  },
  {
    rank: 3,
    username: 'designwiz',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    points: 4320,
    level: 10,
    completedLessons: 59
  },
  {
    rank: 4,
    username: 'datapro',
    avatar: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    points: 3950,
    level: 9,
    completedLessons: 52
  },
  {
    rank: 5,
    username: 'codewiz',
    avatar: 'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    points: 2450,
    level: 5,
    completedLessons: 23
  }
];

export function Leaderboard() {
  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Crown className="w-5 h-5 text-yellow-500" />;
      case 2:
        return <Medal className="w-5 h-5 text-gray-400" />;
      case 3:
        return <Trophy className="w-5 h-5 text-orange-500" />;
      default:
        return <span className="text-sm font-bold text-gray-600">#{rank}</span>;
    }
  };

  const getRankBg = (rank: number) => {
    switch (rank) {
      case 1:
        return 'bg-gradient-to-r from-yellow-100 to-orange-100 border-yellow-200';
      case 2:
        return 'bg-gradient-to-r from-gray-100 to-slate-100 border-gray-200';
      case 3:
        return 'bg-gradient-to-r from-orange-100 to-red-100 border-orange-200';
      default:
        return 'bg-white border-gray-200';
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6">
      <div className="flex items-center space-x-2 mb-6">
        <Trophy className="w-5 h-5 text-orange-600" />
        <h3 className="font-semibold text-gray-900">Weekly Leaderboard</h3>
      </div>

      <div className="space-y-3">
        {leaderboardData.map((user) => (
          <div
            key={user.username}
            className={`p-4 rounded-xl border transition-all duration-200 hover:scale-105 ${getRankBg(user.rank)}`}
          >
            <div className="flex items-center space-x-3">
              <div className="flex-shrink-0 flex items-center justify-center w-8 h-8">
                {getRankIcon(user.rank)}
              </div>
              
              <img
                src={user.avatar}
                alt={user.username}
                className="w-10 h-10 rounded-full object-cover"
              />
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-2">
                  <p className="font-medium text-gray-900 truncate">{user.username}</p>
                  {user.rank <= 3 && (
                    <span className="bg-purple-100 text-purple-700 text-xs px-2 py-1 rounded-full">
                      Level {user.level}
                    </span>
                  )}
                </div>
                <div className="flex items-center space-x-3 text-sm text-gray-600">
                  <div className="flex items-center space-x-1">
                    <Zap className="w-3 h-3 text-orange-500" />
                    <span>{user.points.toLocaleString()}</span>
                  </div>
                  <span>•</span>
                  <span>{user.completedLessons} lessons</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="w-full mt-4 py-2 text-purple-600 font-medium hover:bg-purple-50 rounded-lg transition-colors">
        View Full Leaderboard
      </button>
    </div>
  );
}