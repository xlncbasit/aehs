import React from 'react';
import { ArrowRight, Award, BookOpen, Users, Star } from 'lucide-react';

const Hero = () => {
  const stats = [
    {
      icon: Award,
      value: '100%',
      label: 'SSC Result 2023-24',
    },
    {
      icon: Star,
      value: '91.80%',
      label: 'Highest Score',
    },
    {
      icon: BookOpen,
      value: '1996',
      label: 'Established',
    },
    {
      icon: Users,
      value: '1000+',
      label: 'Students',
    },
  ];

  return (
    <div className="relative">
      <div className="relative min-h-[80vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 opacity-90" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-6xl md:text-7xl font-bold text-white leading-tight animate-fade-in">
                  Shape Your
                  <span className="text-red-500"> Future</span>
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed max-w-xl">
                  Join Alfa English High School, where academic excellence meets character development. 
                  Empowering students since 1996.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <a
                  href="/admissions"
                  className="group bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-medium flex items-center gap-2 transition-all duration-300 transform hover:translate-y-1"
                >
                  Begin Your Journey
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="/about"
                  className="group bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full font-medium flex items-center gap-2 transition-all duration-300 backdrop-blur-sm transform hover:translate-y-1"
                >
                  Discover More
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            <div className="hidden md:block">
              <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-lg border border-white/20">
                <div className="flex items-center gap-3 mb-6">
                  <Award className="h-8 w-8 text-red-500" />
                  <h2 className="text-2xl font-bold text-white">SSC Excellence</h2>
                </div>
                <div className="space-y-6">
                  <div className="bg-white/5 rounded-xl p-4 transform hover:scale-105 transition-transform">
                    <div className="flex items-center gap-4 text-white">
                      <Star className="h-6 w-6 text-yellow-400 flex-shrink-0" />
                      <div>
                        <p className="font-semibold">Shaikh Aryaan Rizwan Ahmed</p>
                        <p className="text-red-400 font-medium">91.80%</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 transform hover:scale-105 transition-transform">
                    <div className="flex items-center gap-4 text-white">
                      <Star className="h-6 w-6 text-yellow-400 flex-shrink-0" />
                      <div>
                        <p className="font-semibold">Sayed Zubiya Tasusif</p>
                        <p className="text-red-400 font-medium">87.20%</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 transform hover:scale-105 transition-transform">
                    <div className="flex items-center gap-4 text-white">
                      <Star className="h-6 w-6 text-yellow-400 flex-shrink-0" />
                      <div>
                        <p className="font-semibold">Khan Shahid Ajmer Ali</p>
                        <p className="text-red-400 font-medium">86.80%</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative -mt-16 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-6 shadow-xl text-center transform hover:-translate-y-2 transition-all duration-300 border border-gray-100"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-red-50 rounded-xl">
                    <stat.icon className="h-8 w-8 text-red-600" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;