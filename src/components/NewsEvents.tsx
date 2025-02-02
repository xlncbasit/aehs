import React from 'react';
import { Calendar, Bell, ArrowRight } from 'lucide-react';
import { Event, Announcement } from '../types';

const events: Event[] = [
  {
    id: '1',
    title: 'Spring Admissions 2024',
    date: 'March 15, 2024',
    description: 'Join our campus tour and learn about our programs, facilities, and admission process.',
    time: '9:00 AM - 2:00 PM',
    location: 'Main Campus',
  },
  {
    id: '2',
    title: 'Annual Science Exhibition',
    date: 'April 5, 2024',
    description: 'Witness innovative projects and experiments by our talented students.',
    time: '10:00 AM - 4:00 PM',
    location: 'Science Center',
  },
];

const announcements: Announcement[] = [
  {
    id: '1',
    title: 'SSC Results Declared',
    date: 'March 1, 2024',
    content: 'Congratulations to our students for achieving 100% pass rate in SSC examinations.',
    category: 'Academic',
  },
  {
    id: '2',
    title: 'Sports Championship',
    date: 'March 10, 2024',
    content: 'Our school teams qualify for state-level championships in multiple sports.',
    category: 'Sports',
  },
];

export default function NewsEvents() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest Updates</h2>
          <p className="text-xl text-gray-600">Stay informed about happenings at Alfa English High School</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-red-100 rounded-lg">
                <Calendar className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Upcoming Events</h3>
            </div>
            
            <div className="space-y-6">
              {events.map((event) => (
                <div
                  key={event.id}
                  className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 group-hover:text-red-600 transition-colors">
                        {event.title}
                      </h4>
                      <p className="text-red-600 font-medium">{event.date}</p>
                    </div>
                    <span className="px-4 py-1 bg-red-50 text-red-600 rounded-full text-sm font-medium">
                      {event.time}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 flex items-center gap-2">
                      <div className="h-1.5 w-1.5 bg-red-600 rounded-full" />
                      {event.location}
                    </span>
                    <a
                      href={`/events/${event.id}`}
                      className="inline-flex items-center text-red-600 font-medium group/link"
                    >
                      View Details
                      <ArrowRight className="h-4 w-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-red-100 rounded-lg">
                <Bell className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Announcements</h3>
            </div>
            
            <div className="space-y-6">
              {announcements.map((announcement) => (
                <div
                  key={announcement.id}
                  className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 group-hover:text-red-600 transition-colors">
                        {announcement.title}
                      </h4>
                      <p className="text-red-600 font-medium">{announcement.date}</p>
                    </div>
                    <span className="px-4 py-1 bg-red-50 text-red-600 rounded-full text-sm font-medium">
                      {announcement.category}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{announcement.content}</p>
                  <a
                    href={`/news/${announcement.id}`}
                    className="inline-flex items-center text-red-600 font-medium group/link"
                  >
                    Read More
                    <ArrowRight className="h-4 w-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}