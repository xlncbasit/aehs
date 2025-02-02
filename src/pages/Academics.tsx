import React from 'react';
import { BookOpen, Clock, Users, Award } from 'lucide-react';

const departments = [
  {
    name: 'Mathematics',
    description: 'From algebra to calculus, our mathematics program develops strong analytical and problem-solving skills.',
    courses: ['Advanced Algebra', 'Calculus AB/BC', 'Statistics', 'Mathematical Modeling'],
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Sciences',
    description: 'Comprehensive science education with hands-on laboratory experiences and research opportunities.',
    courses: ['Biology', 'Chemistry', 'Physics', 'Environmental Science'],
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Humanities',
    description: 'Rich exploration of literature, history, and social studies to develop critical thinking and communication skills.',
    courses: ['World Literature', 'U.S. History', 'Global Studies', 'Philosophy'],
    image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Arts',
    description: 'Vibrant arts program including visual arts, music, theater, and digital media.',
    courses: ['Studio Art', 'Digital Design', 'Music Theory', 'Theater Arts'],
    image: 'https://images.unsplash.com/photo-1544213456-bc37a1b8b0ed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
];

const features = [
  {
    icon: Clock,
    title: 'Block Scheduling',
    description: 'Extended class periods allow for in-depth learning and hands-on activities',
  },
  {
    icon: Users,
    title: 'Small Class Sizes',
    description: 'Average of 15 students per class ensures personalized attention',
  },
  {
    icon: BookOpen,
    title: 'Advanced Placement',
    description: '20+ AP courses offered with high pass rates',
  },
  {
    icon: Award,
    title: 'Academic Support',
    description: 'Tutoring and mentoring programs available to all students',
  },
];

export default function Academics() {
  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Academic Excellence</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Our rigorous curriculum prepares students for success in college and beyond,
            fostering critical thinking, creativity, and intellectual curiosity.
          </p>
        </div>
      </div>

      {/* Academic Features */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <feature.icon className="h-8 w-8 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Departments */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Academic Departments</h2>
          <div className="space-y-16">
            {departments.map((dept, index) => (
              <div key={index} className={`flex flex-col md:flex-row gap-8 ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}>
                <div className="md:w-1/2">
                  <img
                    src={dept.image}
                    alt={dept.name}
                    className="w-full h-[300px] object-cover rounded-lg shadow-lg"
                  />
                </div>
                <div className="md:w-1/2 space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900">{dept.name}</h3>
                  <p className="text-gray-600">{dept.description}</p>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Featured Courses:</h4>
                    <ul className="grid grid-cols-2 gap-2">
                      {dept.courses.map((course, i) => (
                        <li key={i} className="text-gray-600">• {course}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}