import React from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare, Users, Shield } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['9224318144'],
      action: 'tel:9224318144'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['aehs97@rediffmail.com'],
      action: 'mailto:aehs97@rediffmail.com'
    },
    {
      icon: MapPin,
      title: 'Address',
      details: [
        'Near Master Bunglow,',
        'Govindwadi, Kalyan (W) - 421 301'
      ]
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: [
        'Monday - Friday: 8:00 AM - 4:00 PM',
        'Saturday: 8:00 AM - 12:00 PM'
      ]
    }
  ];

  const departments = [
    {
      name: 'Administration Office',
      description: 'For general inquiries and administrative matters',
      icon: Users
    },
    {
      name: 'Admissions Department',
      description: 'For new admissions and enrollment information',
      icon: Shield
    },
    {
      name: 'Student Services',
      description: 'For current student support and assistance',
      icon: MessageSquare
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-600 to-red-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-red-100 max-w-3xl mx-auto">
              We're here to help! Reach out to us with any questions about admissions,
              academics, or general inquiries.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Information Grid */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center mb-4">
                  <info.icon className="h-8 w-8 text-red-600" />
                  <h3 className="text-xl font-semibold text-gray-900 ml-3">{info.title}</h3>
                </div>
                <div className="space-y-2">
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-gray-600">
                      {info.action ? (
                        <a href={info.action} className="hover:text-red-600 transition-colors">
                          {detail}
                        </a>
                      ) : (
                        detail
                      )}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Department Contacts */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Department Contacts</h2>
            <p className="mt-4 text-lg text-gray-600">
              Get in touch with the right department for your needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {departments.map((dept, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-center mb-4">
                  <dept.icon className="h-12 w-12 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 text-center mb-2">
                  {dept.name}
                </h3>
                <p className="text-gray-600 text-center">{dept.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6 bg-red-600">
              <h3 className="text-2xl font-bold text-white">Send us a Message</h3>
              <p className="text-red-100">We'll get back to you as soon as possible</p>
            </div>
            
            <form className="p-8 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <select
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-red-500"
                >
                  <option>General Inquiry</option>
                  <option>Admissions</option>
                  <option>Academics</option>
                  <option>Student Services</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  rows={6}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-red-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-red-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;