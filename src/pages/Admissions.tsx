import React from 'react';
import { FileText, Calendar, Users, CheckCircle, Phone, Mail, MapPin } from 'lucide-react';

const Admissions = () => {
  const admissionSteps = [
    {
      icon: FileText,
      title: "Application",
      description: "Submit admission form with documents",
    },
    {
      icon: Calendar,
      title: "Verification",
      description: "Documents verified by administration",
    },
    {
      icon: Users,
      title: "Interview",
      description: "Student and parent interview",
    },
    {
      icon: CheckCircle,
      title: "Confirmation",
      description: "Fee payment and final admission",
    }
  ];

  const documents = [
    "Birth Certificate",
    "Previous School Leaving Certificate",
    "Previous Year's Report Card",
    "Transfer Certificate (if applicable)",
    "Address Proof",
    "Aadhar Card Copy",
    "Passport Size Photographs",
    "Medical Fitness Certificate"
  ];

  return (
    <div className="pt-16">
      <div className="relative min-h-[60vh] flex items-center bg-gradient-to-r from-red-600 to-red-800">
        <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] mix-blend-overlay opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <div className="animate-fade-in">
            <h1 className="text-6xl font-bold text-white mb-6">Join Our Family</h1>
            <p className="text-xl text-red-100 max-w-3xl mx-auto">
              Begin your journey towards excellence with Alfa English High School
            </p>
          </div>
        </div>
      </div>

      <div className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Admission Process</h2>
            <p className="mt-4 text-xl text-gray-600">
              Simple steps to join our institution
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute top-1/2 left-4 right-4 h-0.5 bg-red-100 -translate-y-1/2 hidden md:block" />
            <div className="grid md:grid-cols-4 gap-8 relative">
              {admissionSteps.map((step, index) => (
                <div key={index} className="group">
                  <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2">
                    <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity" />
                    <div className="relative">
                      <div className="flex justify-center mb-6">
                        <div className="p-4 bg-red-50 rounded-xl group-hover:bg-red-100 transition-colors">
                          <step.icon className="h-8 w-8 text-red-600" />
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 text-center mb-3">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 text-center">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Required Documents</h2>
                <p className="text-xl text-gray-600">
                  Please ensure you have the following documents ready for admission
                </p>
              </div>
              
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="grid md:grid-cols-2 gap-4">
                  {documents.map((doc, index) => (
                    <div key={index} className="flex items-center gap-3 group">
                      <div className="h-2 w-2 bg-red-600 rounded-full group-hover:scale-150 transition-transform" />
                      <span className="text-gray-600 group-hover:text-gray-900 transition-colors">{doc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-red-600 to-red-800 rounded-2xl p-1">
              <div className="bg-white rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Admission Inquiry</h3>
                <form className="space-y-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">Student's Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all"
                    />
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700">Parent's Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700">Contact Number</label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">Grade Applying For</label>
                    <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all">
                      <option>Select Grade</option>
                      <option>Pre-Primary</option>
                      <option>Primary (1-5)</option>
                      <option>Secondary (6-10)</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">Message</label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-red-600 text-white px-8 py-4 rounded-xl font-medium hover:bg-red-700 transform hover:-translate-y-1 transition-all duration-300"
                  >
                    Submit Inquiry
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admissions;