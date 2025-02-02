import React from 'react';
import { Music, Palette, Trophy, Users, Heart, Coffee, BookOpen, Map } from 'lucide-react';

const activities = [
  {
    icon: Music,
    title: 'Performing Arts',
    description: 'Band, choir, theater productions, and dance ensembles.',
    image: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    icon: Palette,
    title: 'Visual Arts',
    description: 'Drawing, painting, sculpture, and digital arts programs.',
    image: 'https://images.unsplash.com/photo-1452860606245-08befc0ff44b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    icon: Trophy,
    title: 'Athletics',
    description: 'Competitive sports teams and intramural programs.',
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    icon: Users,
    title: 'Clubs',
    description: 'Academic, social, and special interest clubs.',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
];

const facilities = [
  {
    icon: BookOpen,
    title: 'Modern Library',
    description: 'State-of-the-art library with digital and print resources',
  },
  {
    icon: Coffee,
    title: 'Student Center',
    description: 'Comfortable spaces for studying and socializing',
  },
  {
    icon: Heart,
    title: 'Health Center',
    description: '24/7 health services and counseling support',
  },
  {
    icon: Map,
    title: 'Athletic Complex',
    description: 'Indoor and outdoor facilities for sports and recreation',
  },
];

const testimonials = [
  {
    quote: "The diverse range of activities has helped me discover new passions and make lifelong friends.",
    author: "Sarah Chen, Class of 2024",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
  },
  {
    quote: "Being part of the drama club has boosted my confidence and public speaking skills tremendously.",
    author: "Marcus Johnson, Class of 2023",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
  },
];

export default function CampusLife() {
  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Hero Section */}
      <div className="relative h-[400px] flex items-center">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-4xl font-bold mb-4">Campus Life</h1>
          <p className="text-xl max-w-2xl">
            Experience a vibrant community where learning extends beyond the classroom
            through diverse activities, clubs, and events.
          </p>
        </div>
      </div>

      {/* Student Activities */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Student Activities</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {activities.map((activity, index) => (
              <div key={index} className="group">
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20" />
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <activity.icon className="h-5 w-5 text-blue-600" />
                  <h3 className="font-semibold text-gray-900">{activity.title}</h3>
                </div>
                <p className="text-gray-600">{activity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Campus Facilities */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Campus Facilities</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {facilities.map((facility, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <facility.icon className="h-8 w-8 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold mb-2">{facility.title}</h3>
                <p className="text-gray-600">{facility.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Student Testimonials */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Student Voices</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-medium text-gray-900">{testimonial.author}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}