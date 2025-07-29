import React, { useState } from 'react';
import { Header } from './Header';
import { SkillFeed } from './SkillFeed';
import { CreateSkillPost } from './CreateSkillPost';
import { UserStats } from './UserStats';
import { TrendingSkills } from './TrendingSkills';
import { Leaderboard } from './Leaderboard';

export function Dashboard() {
  const [activeTab, setActiveTab] = useState<'feed' | 'create' | 'stats'>('feed');

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid lg:grid-cols-12 gap-6">
          {/* Left Sidebar */}
          <div className="lg:col-span-3 space-y-6">
            <UserStats />
            <TrendingSkills />
          </div>

          {/* Main Content */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-white rounded-2xl border border-gray-200 p-1">
              <div className="flex bg-gray-100 rounded-xl p-1">
                <button
                  onClick={() => setActiveTab('feed')}
                  className={`flex-1 py-2 px-4 rounded-lg font-medium transition-all duration-200 ${
                    activeTab === 'feed'
                      ? 'bg-white text-purple-600 shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Skill Feed
                </button>
                <button
                  onClick={() => setActiveTab('create')}
                  className={`flex-1 py-2 px-4 rounded-lg font-medium transition-all duration-200 ${
                    activeTab === 'create'
                      ? 'bg-white text-purple-600 shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Create Post
                </button>
                <button
                  onClick={() => setActiveTab('stats')}
                  className={`flex-1 py-2 px-4 rounded-lg font-medium transition-all duration-200 ${
                    activeTab === 'stats'
                      ? 'bg-white text-purple-600 shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  My Stats
                </button>
              </div>
            </div>

            {activeTab === 'feed' && <SkillFeed />}
            {activeTab === 'create' && <CreateSkillPost />}
            {activeTab === 'stats' && (
              <div className="bg-white rounded-2xl border border-gray-200 p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Detailed Statistics</h2>
                <p className="text-gray-600">Your detailed learning analytics will be displayed here.</p>
              </div>
            )}
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-3 space-y-6">
            <Leaderboard />
          </div>
        </div>
      </div>
    </div>
  );
}