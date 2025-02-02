import React from 'react';
import { Program } from '../types';
import { ArrowRight, Beaker, BookOpen, Palette, Trophy } from 'lucide-react';

const programs: Program[] = [
  {
    id: '1',
    name: 'STEM Excellence',
    description: 'Advanced programs in Science, Technology, Engineering, and Mathematics with hands-on research opportunities.',
    imageUrl: '/api/placeholder/800/600',
    icon: Beaker,
    features: ['Advanced Labs', 'Robotics', 'Science Olympiad'],
  },
  {
    id: '2',
    name: 'Arts & Humanities',
    description: 'Comprehensive programs fostering creativity, critical thinking, and cultural understanding.',
    imageUrl: '/api/placeholder/800/600',
    icon: Palette,
    features: ['Studio Arts', 'Creative Writing', 'Theater'],
  },
  {
    id: '3',
    name: 'Athletics',
    description: 'Championship-caliber sports programs developing leadership, teamwork, and athletic excellence.',
    imageUrl: '/api/placeholder/800/600',
    icon: Trophy,
    features: ['Multiple Sports', 'Pro Coaching', 'Modern Facilities'],
  },
];

export default function Programs() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Discover Excellence in
            <span className="text-red-600"> Education</span>
          </h2>
          <p className="text-xl text-gray-600">
            Comprehensive programs designed to nurture talent and inspire future leaders
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program) => (
            <div
              key={program.id}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/90" />
                <program.icon className="absolute top-6 right-6 h-8 w-8 text-white" />
                <img
                  src={program.imageUrl}
                  alt={program.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute bottom-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{program.name}</h3>
                  <p className="text-gray-200 text-sm line-clamp-2">{program.description}</p>
                </div>
              </div>
              
              <div className="p-6">
                <div className="space-y-4 mb-6">
                  {program.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="h-2 w-2 bg-red-600 rounded-full" />
                      <span className="text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
                <a
                  href={`/programs/${program.id}`}
                  className="inline-flex items-center text-red-600 font-medium group/link"
                >
                  Explore Program
                  <ArrowRight className="h-4 w-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}