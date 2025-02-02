import React from 'react';
import { GraduationCap, Users, Shield, Target, Heart, Clock } from 'lucide-react';

const About = () => {
  const management = [
    { name: "Dr. Mateen Patel", position: "President" },
    { name: "Dr. Sharique Moulvi", position: "Vice-President" },
    { name: "Dr. Khalique Shaikh", position: "Secretary" },
    { name: "Dr. Tahir Jahangir", position: "Treasurer" }
  ];

  const values = [
    {
      icon: GraduationCap,
      title: "Academic Excellence",
      description: "Commitment to highest standards of education"
    },
    {
      icon: Heart,
      title: "Character Building",
      description: "Focus on moral values and ethics"
    },
    {
      icon: Shield,
      title: "Safe Environment",
      description: "Secure and nurturing atmosphere"
    },
    {
      icon: Target,
      title: "Holistic Growth",
      description: "Balance of academics and activities"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="relative min-h-[60vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-800">
          <div className="absolute inset-0 opacity-20 bg-[url('/api/placeholder/1920/1080')] bg-center bg-cover mix-blend-overlay" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">About Our Institution</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Since 1996, we've been shaping futures through quality education and values
          </p>
        </div>
      </div>

      {/* School Info */}
      <div className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-red-600 to-red-800 rounded-2xl opacity-75 group-hover:opacity-100 blur transition duration-1000 group-hover:duration-200" />
              <div className="relative bg-white rounded-xl overflow-hidden">
                <img
                  src="/api/placeholder/600/400"
                  alt="School Building"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Our Legacy</h2>
              <div className="prose prose-lg text-gray-600">
                <p>
                  Alfa English High School, managed by Alfa Social & Welfare Association,
                  has been a cornerstone of education in Kalyan since 1996. Our institution
                  has grown from humble beginnings to become a leading educational
                  institution in the region.
                </p>
                <p>
                  Located in Govindwadi, Kalyan (W), our school provides comprehensive
                  education focusing on academic excellence and character development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Our Core Values</h2>
            <p className="mt-4 text-xl text-gray-600">
              The principles that guide our educational approach
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2">
                  <div className="flex justify-center mb-6">
                    <div className="p-4 bg-red-50 rounded-xl group-hover:bg-red-100 transition-colors">
                      <value.icon className="h-8 w-8 text-red-600" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 text-center mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-center">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Management Team */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center p-3 bg-red-100 rounded-xl mb-4">
              <Users className="h-8 w-8 text-red-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Our Management</h2>
            <p className="mt-4 text-xl text-gray-600">
              Leadership that drives excellence
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {management.map((member, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="mb-6">
                    <div className="w-24 h-24 bg-gray-100 rounded-2xl mx-auto flex items-center justify-center group-hover:bg-red-50 transition-colors">
                      <Users className="h-12 w-12 text-gray-400 group-hover:text-red-600 transition-colors" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 text-center">{member.name}</h3>
                  <p className="text-red-600 text-center mt-1">{member.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;