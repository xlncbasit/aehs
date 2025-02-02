import React from 'react';
import { Award, Users, Star } from 'lucide-react';

const Leadership = () => {
  const management = [
    { name: "Dr. Mateen Patel", position: "President" },
    { name: "Dr. Sharique Moulvi", position: "Vice-President" },
    { name: "Dr. Khalique Shaikh", position: "Secretary" },
    { name: "Dr. Tahir Jahangir", position: "Treasurer" },
    { name: "Dr. N.M Shaikh", position: "Board of Directors" },
    { name: "Dr. B.M Shaikh", position: "Board of Directors" },
    { name: "Dr. Shabana Shaikh", position: "Board of Directors" },
  ];

  const toppers = [
    { rank: "I", name: "Shaikh Aryaan Rizwan Ahmed", percentage: "91.80%" },
    { rank: "II", name: "Sayed Zubiya Tasusif", percentage: "87.20%" },
    { rank: "III", name: "Khan Shahid Ajmer Ali", percentage: "86.80%" },
    { rank: "IV", name: "Sayyed Hajra Muhammed Asif", percentage: "86.20%" },
    { rank: "V", name: "Khan Gulnar Mohammad Salim", percentage: "85.60%" },
    { rank: "V", name: "Khan Namira Riyaj", percentage: "85.60%" },
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* School Logo and Established Date */}
        <div className="text-center mb-16">
          {/* Logo would be imported as an SVG or image */}
          <div className="flex justify-center mb-4">
            <div className="h-32 w-32 bg-white rounded-full shadow-lg flex items-center justify-center">
              <span className="text-xl font-bold text-red-600">ALFA</span>
            </div>
          </div>
          <p className="text-gray-600">Established 1996</p>
        </div>

        {/* Management Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Our Leadership</h2>
            <div className="flex items-center justify-center mt-4">
              <Users className="h-6 w-6 text-red-600 mr-2" />
              <p className="text-lg text-gray-600">Alfa Social & Welfare Association Kalyan</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {management.map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-lg text-gray-900">{member.name}</h3>
                <p className="text-red-600">{member.position}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Academic Excellence Section */}
        <div>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Academic Excellence</h2>
            <div className="flex items-center justify-center mt-4">
              <Award className="h-6 w-6 text-red-600 mr-2" />
              <p className="text-lg text-gray-600">SSC Toppers 2023-2024</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {toppers.map((student, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 bg-red-100 rounded-full flex items-center justify-center">
                      <Star className="h-6 w-6 text-red-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900">{student.name}</h3>
                    <p className="text-red-600">Rank {student.rank} - {student.percentage}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leadership;