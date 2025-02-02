import React from 'react';
import { Building2, Shield, BookOpen, Users, Award, Activity } from 'lucide-react';

const Facilities = () => {
  const facilities = [
    {
      title: "Modern Infrastructure",
      icon: Building2,
      description: "State-of-the-art multi-story building with modern amenities and spacious classrooms",
      features: [
        "Well-ventilated classrooms",
        "Modern architecture",
        "Dedicated academic floors",
        "Secure campus environment"
      ]
    },
    {
      title: "Safety & Security",
      icon: Shield,
      description: "Comprehensive security measures and safety awareness programs",
      features: [
        "Police safety awareness sessions",
        "Security personnel",
        "CCTV surveillance",
        "Emergency protocols"
      ]
    },
    {
      title: "Academic Facilities",
      icon: BookOpen,
      description: "Well-equipped learning spaces for comprehensive education",
      features: [
        "Computer laboratory",
        "Science laboratories",
        "Library resources",
        "Smart classrooms"
      ]
    }
  ];

  const programs = [
    {
      title: "Safety Awareness",
      description: "Regular sessions by Maharashtra Police on student safety and security awareness",
      icon: Shield
    },
    {
      title: "Cultural Activities",
      description: "Regular cultural and social events celebrating student achievements",
      icon: Activity
    },
    {
      title: "Student Development",
      description: "Comprehensive programs focusing on academic and personal growth",
      icon: Users
    }
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Our Campus</h2>
          <p className="mt-4 text-lg text-gray-600">
            Located in Govindwadi, Kalyan (W), our campus provides a modern and secure learning environment
          </p>
        </div>

        {/* Building Showcase */}
        <div className="mb-16">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="aspect-w-16 aspect-h-9 bg-gray-200">
              {/* Placeholder for building image */}
              <div className="w-full h-96 bg-gradient-to-r from-gray-100 to-gray-200 flex items-center justify-center">
                <Building2 className="h-16 w-16 text-gray-400" />
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">New School Building</h3>
              <p className="text-gray-600">
                Our new purpose-built facility provides students with a modern learning environment,
                featuring state-of-the-art classrooms and facilities designed to enhance the educational experience.
              </p>
            </div>
          </div>
        </div>

        {/* Facilities Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {facilities.map((facility, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <facility.icon className="h-8 w-8 text-red-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">{facility.title}</h3>
              </div>
              <p className="text-gray-600 mb-4">{facility.description}</p>
              <ul className="space-y-2">
                {facility.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-gray-600">
                    <div className="h-2 w-2 bg-red-600 rounded-full mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Programs and Activities */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Programs & Activities</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-center mb-4">
                  <program.icon className="h-12 w-12 text-red-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 text-center mb-2">
                  {program.title}
                </h4>
                <p className="text-gray-600 text-center">{program.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facilities;