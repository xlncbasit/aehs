import React from 'react';
import { Award, Star, TrendingUp, Users, Medal, Crown, BookOpen, Trophy } from 'lucide-react';

const Achievements = () => {
  const toppers = [
    {
      rank: "I",
      name: "Shaikh Aryaan Rizwan Ahmed",
      percentage: "91.80",
      contact: "8655827217"
    },
    {
      rank: "II",
      name: "Sayed Zubiya Tasusif",
      percentage: "87.20",
      contact: "8422907474"
    },
    {
      rank: "III",
      name: "Khan Shahid Ajmer Ali",
      percentage: "86.80",
      contact: "9769855303"
    },
    {
      rank: "IV",
      name: "Sayyed Hajra Muhammed Asif",
      percentage: "86.20",
      contact: "9322786333"
    },
    {
      rank: "V",
      name: "Khan Gulnar Mohammad Salim",
      percentage: "85.60",
      contact: "8286388012"
    },
    {
      rank: "V",
      name: "Khan Namira Riyaj",
      percentage: "85.60",
      contact: "9403039469"
    }
  ];

  const keyStats = [
    {
      icon: Award,
      value: "100%",
      label: "SSC Pass Rate",
      description: "Perfect pass percentage in 2023-24"
    },
    {
      icon: Star,
      value: "91.80%",
      label: "Highest Score",
      description: "Top score in SSC 2023-24"
    },
    {
      icon: Users,
      value: "6",
      label: "Top Performers",
      description: "Students scoring 85%+"
    },
    {
      icon: Trophy,
      value: "85%+",
      label: "Excellence Rate",
      description: "Students achieving distinction"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-600 to-red-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center p-2 bg-white/10 rounded-full mb-8">
            <Trophy className="h-8 w-8 text-yellow-400" />
          </div>
          <h1 className="text-4xl font-bold mb-6">Academic Excellence</h1>
          <p className="text-xl text-red-100 max-w-3xl mx-auto">
            Celebrating outstanding achievements of our students in SSC Board Examinations 2023-24
          </p>
        </div>
      </div>

      {/* Key Statistics */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {keyStats.map((stat, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all">
                <div className="flex justify-center mb-4">
                  <stat.icon className="h-12 w-12 text-red-600" />
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-lg font-semibold text-gray-900 mb-2">{stat.label}</div>
                  <p className="text-gray-600">{stat.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Top Performers Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center p-2 bg-red-100 rounded-full mb-4">
              <Crown className="h-6 w-6 text-red-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Our Top Performers</h2>
            <p className="mt-4 text-lg text-gray-600">
              Congratulating our outstanding achievers of SSC Batch 2023-24
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {toppers.map((topper, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="h-12 w-12 bg-red-100 rounded-full flex items-center justify-center">
                      {index < 3 ? (
                        <Medal className="h-6 w-6 text-red-600" />
                      ) : (
                        <Star className="h-6 w-6 text-red-600" />
                      )}
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-sm font-medium text-red-600">Rank {topper.rank}</span>
                      <span className="text-2xl font-bold text-gray-900">{topper.percentage}%</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{topper.name}</h3>
                    <p className="text-gray-600">Contact: {topper.contact}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Achievement Timeline */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center p-2 bg-red-100 rounded-full mb-4">
              <BookOpen className="h-6 w-6 text-red-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Academic Journey</h2>
            <p className="mt-4 text-lg text-gray-600">
              Our commitment to academic excellence since 1996
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="relative border-l-4 border-red-600 ml-6">
              <div className="mb-10 ml-6">
                <div className="flex absolute -left-8 items-center justify-center">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                    <TrendingUp className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="ml-12 bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="text-2xl font-bold text-gray-900">2023-24 Highlights</h3>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center gap-2 text-gray-600">
                      <div className="h-2 w-2 bg-red-600 rounded-full"></div>
                      100% Pass Rate in SSC Examinations
                    </li>
                    <li className="flex items-center gap-2 text-gray-600">
                      <div className="h-2 w-2 bg-red-600 rounded-full"></div>
                      6 Students Scored Above 85%
                    </li>
                    <li className="flex items-center gap-2 text-gray-600">
                      <div className="h-2 w-2 bg-red-600 rounded-full"></div>
                      Highest Score: 91.80%
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-red-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Join Our Legacy of Excellence</h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Be part of an institution that consistently delivers outstanding academic results
          </p>
          <a
            href="/admissions"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-red-600 bg-white hover:bg-red-50 transition-colors"
          >
            Apply Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Achievements;