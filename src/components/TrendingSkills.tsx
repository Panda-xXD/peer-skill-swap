import React from 'react';
import { TrendingUp, Code, Palette, BarChart, Globe } from 'lucide-react';

const trendingSkills = [
  { name: 'React Development', category: 'Programming', icon: Code, growth: '+25%', color: 'text-blue-600' },
  { name: 'UI/UX Design', category: 'Design', icon: Palette, growth: '+18%', color: 'text-purple-600' },
  { name: 'Data Analysis', category: 'Analytics', icon: BarChart, growth: '+22%', color: 'text-green-600' },
  { name: 'Digital Marketing', category: 'Marketing', icon: Globe, growth: '+15%', color: 'text-orange-600' }
];

export function TrendingSkills() {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6">
      <div className="flex items-center space-x-2 mb-6">
        <TrendingUp className="w-5 h-5 text-purple-600" />
        <h3 className="font-semibold text-gray-900">Trending Skills</h3>
      </div>

      <div className="space-y-4">
        {trendingSkills.map((skill, index) => {
          const IconComponent = skill.icon;
          return (
            <div key={skill.name} className="flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                  <IconComponent className={`w-5 h-5 ${skill.color}`} />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-gray-900 truncate">{skill.name}</p>
                <p className="text-sm text-gray-600">{skill.category}</p>
              </div>
              <div className="flex-shrink-0">
                <span className="text-sm font-medium text-green-600">{skill.growth}</span>
              </div>
            </div>
          );
        })}
      </div>

      <button className="w-full mt-4 py-2 text-purple-600 font-medium hover:bg-purple-50 rounded-lg transition-colors">
        View All Trends
      </button>
    </div>
  );
}