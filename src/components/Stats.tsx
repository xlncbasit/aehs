import React from 'react';
import { Users, Award, BookOpen, Trophy } from 'lucide-react';

const stats = [
  {
    icon: Users,
    value: '12:1',
    label: 'Student-Teacher Ratio',
    description: 'Individual attention for every student',
  },
  {
    icon: Award,
    value: '98%',
    label: 'Success Rate',
    description: 'Academic excellence achieved',
  },
  {
    icon: BookOpen,
    value: '45+',
    label: 'Advanced Courses',
    description: 'Comprehensive curriculum',
  },
  {
    icon: Trophy,
    value: '100+',
    label: 'Awards Won',
    description: 'Recognition of excellence',
  },
];

export default function Stats() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-800 opacity-95" />
        <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] mix-blend-overlay" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative group"
            >
              <div className="absolute inset-0 bg-white/10 rounded-2xl transform -rotate-6 group-hover:rotate-0 transition-transform duration-300" />
              <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center transform group-hover:scale-105 transition-all duration-300">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-white/20 rounded-xl group-hover:bg-white/30 transition-colors">
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-lg font-semibold text-white mb-1">{stat.label}</div>
                <div className="text-sm text-white/80">{stat.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}