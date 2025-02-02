import React, { useState, useEffect } from 'react';
import { Menu, X, GraduationCap } from 'lucide-react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { title: 'Home', href: '/' },
  { title: 'About', href: '/about' },
  { title: 'Academics', href: '/academics' },
  { title: 'News & Events', href: '/news' },
  { title: 'Achievements', href: '/achievements' },
  { title: 'Admissions', href: '/admissions' },
  { title: 'Contact', href: '/contact' }
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-`white`/95 backdrop-blur-md shadow-lg' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-20">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-red-600 rounded-xl">
              <GraduationCap className="h-8 w-8 text-white" />
            </div>
            <div>
              <span className="text-xl font-bold text-gray-900">Alfa English</span>
              <span className="block text-sm text-gray-600">High School</span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="px-4 py-2 rounded-lg text-gray-600 hover:text-red-600 hover:bg-red-50 font-medium transition-all duration-300"
              >
                {item.title}
              </a>
            ))}
            <a
              href="/admissions"
              className="ml-4 bg-red-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-red-700 transition-colors"
            >
              Apply Now
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-gray-600 hover:bg-gray-100"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-lg">
          <div className="p-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="block px-4 py-3 rounded-lg text-gray-600 hover:text-red-600 hover:bg-red-50 font-medium transition-all"
                onClick={() => setIsOpen(false)}
              >
                {item.title}
              </a>
            ))}
            <a
              href="/admissions"
              className="block mt-4 bg-red-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-700 text-center transition-colors"
            >
              Apply Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;