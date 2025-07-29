import React from 'react';
import { Heart, MessageCircle, Share, Clock, Star, Zap } from 'lucide-react';
import { SkillPost } from '../types';

const mockPosts: SkillPost[] = [
  {
    id: '1',
    userId: '2',
    user: {
      id: '2',
      username: 'designpro',
      email: 'design@example.com',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      level: 8,
      points: 3200,
      streak: 25,
      skillsOffered: [],
      skillsWanted: [],
      badges: [],
      completedLessons: 45,
      rating: 4.9,
      joinedAt: new Date()
    },
    skillOffered: {
      id: '1',
      name: 'UI/UX Design Principles',
      category: 'Design',
      level: 'Intermediate',
      description: 'Learn modern design principles and user experience best practices',
      duration: '45 minutes',
      tags: ['Figma', 'Design Systems', 'Prototyping']
    },
    skillWanted: {
      id: '2',
      name: 'React Hooks',
      category: 'Programming',
      level: 'Intermediate',
      description: 'Advanced React hooks patterns and custom hooks',
      duration: '30 minutes',
      tags: ['React', 'JavaScript', 'Frontend']
    },
    description: "I'll teach you how to create beautiful, user-friendly interfaces and design systems. Looking to learn advanced React patterns in return!",
    status: 'open',
    createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000),
    likes: 24,
    comments: []
  },
  {
    id: '2',
    userId: '3',
    user: {
      id: '3',
      username: 'pythonista',
      email: 'python@example.com',
      avatar: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      level: 6,
      points: 2100,
      streak: 18,
      skillsOffered: [],
      skillsWanted: [],
      badges: [],
      completedLessons: 32,
      rating: 4.7,
      joinedAt: new Date()
    },
    skillOffered: {
      id: '3',
      name: 'Python Data Analysis',
      category: 'Data Science',
      level: 'Advanced',
      description: 'Master pandas, numpy, and data visualization techniques',
      duration: '60 minutes',
      tags: ['Python', 'Pandas', 'NumPy', 'Matplotlib']
    },
    skillWanted: {
      id: '4',
      name: 'Docker Fundamentals',
      category: 'DevOps',
      level: 'Beginner',
      description: 'Container basics and Docker compose',
      duration: '45 minutes',
      tags: ['Docker', 'Containers', 'DevOps']
    },
    description: "Data analysis expert here! I can teach you everything from data cleaning to beautiful visualizations. Need help understanding containerization.",
    status: 'open',
    createdAt: new Date(Date.now() - 5 * 60 * 60 * 1000),
    likes: 18,
    comments: []
  }
];

export function SkillFeed() {
  return (
    <div className="space-y-6">
      {mockPosts.map((post) => (
        <div key={post.id} className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-200">
          {/* Post Header */}
          <div className="p-6 pb-4">
            <div className="flex items-center space-x-3 mb-4">
              <img
                src={post.user.avatar}
                alt={post.user.username}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="flex-1">
                <div className="flex items-center space-x-2">
                  <h4 className="font-semibold text-gray-900">{post.user.username}</h4>
                  <span className="bg-purple-100 text-purple-700 text-xs px-2 py-1 rounded-full">
                    Level {post.user.level}
                  </span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <Clock className="w-4 h-4" />
                  <span>{new Date(post.createdAt).toLocaleTimeString()}</span>
                </div>
              </div>
              <div className="flex items-center space-x-1 text-sm text-orange-600">
                <Star className="w-4 h-4 fill-current" />
                <span>{post.user.rating}</span>
              </div>
            </div>

            <p className="text-gray-700 mb-4">{post.description}</p>
          </div>

          {/* Skills Exchange */}
          <div className="px-6 pb-4">
            <div className="grid md:grid-cols-2 gap-4">
              {/* Offering */}
              <div className="bg-green-50 p-4 rounded-xl border border-green-200">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium text-green-700">Offering</span>
                </div>
                <h5 className="font-semibold text-gray-900 mb-1">{post.skillOffered.name}</h5>
                <p className="text-sm text-gray-600 mb-2">{post.skillOffered.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                    {post.skillOffered.level}
                  </span>
                  <div className="flex items-center space-x-1 text-sm text-gray-500">
                    <Clock className="w-3 h-3" />
                    <span>{post.skillOffered.duration}</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1 mt-2">
                  {post.skillOffered.tags.map((tag) => (
                    <span key={tag} className="text-xs bg-white text-green-600 px-2 py-1 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Wanting */}
              <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm font-medium text-blue-700">Looking for</span>
                </div>
                <h5 className="font-semibold text-gray-900 mb-1">{post.skillWanted.name}</h5>
                <p className="text-sm text-gray-600 mb-2">{post.skillWanted.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                    {post.skillWanted.level}
                  </span>
                  <div className="flex items-center space-x-1 text-sm text-gray-500">
                    <Clock className="w-3 h-3" />
                    <span>{post.skillWanted.duration}</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1 mt-2">
                  {post.skillWanted.tags.map((tag) => (
                    <span key={tag} className="text-xs bg-white text-blue-600 px-2 py-1 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Post Actions */}
          <div className="px-6 py-4 border-t border-gray-100">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <button className="flex items-center space-x-2 text-gray-600 hover:text-red-500 transition-colors">
                  <Heart className="w-5 h-5" />
                  <span className="text-sm">{post.likes}</span>
                </button>
                <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-500 transition-colors">
                  <MessageCircle className="w-5 h-5" />
                  <span className="text-sm">Comment</span>
                </button>
                <button className="flex items-center space-x-2 text-gray-600 hover:text-green-500 transition-colors">
                  <Share className="w-5 h-5" />
                  <span className="text-sm">Share</span>
                </button>
              </div>
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-xl font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-200 flex items-center space-x-2">
                <Zap className="w-4 h-4" />
                <span>Connect</span>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}