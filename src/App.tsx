import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import About from './pages/About';
import Academics from './pages/Academics';
import Achievements from './pages/Achievements';
import Admissions from './pages/Admissions';
import Contact from './pages/Contact';
import NewsEvents from './components/NewsEvents';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/news" element={<NewsEvents />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                <p className="text-gray-400">
                  Near Master Bunglow, Govindwadi<br />
                  Kalyan (W) - 421 301<br />
                  Mobile: 9224318144<br />
                  Email: aehs97@rediffmail.com
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="/admissions" className="hover:text-white transition-colors">Admissions</a></li>
                  <li><a href="/achievements" className="hover:text-white transition-colors">Achievements</a></li>
                  <li><a href="/academics" className="hover:text-white transition-colors">Academics</a></li>
                  <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Management</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>Dr. Mateen Patel - President</li>
                  <li>Dr. Sharique Moulvi - Vice-President</li>
                  <li>Dr. Khalique Shaikh - Secretary</li>
                  <li>Dr. Tahir Jahangir - Treasurer</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Latest Achievement</h3>
                <div className="bg-white/10 rounded-lg p-4">
                  <p className="text-xl font-bold text-white mb-2">100% Result</p>
                  <p className="text-gray-400">SSC Examination 2023-24</p>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
              <p>© {new Date().getFullYear()} Alfa English High School. All rights reserved.</p>
              <p className="mt-2">Managed by Alfa Social & Welfare Association, Kalyan</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;