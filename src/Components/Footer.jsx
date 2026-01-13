// components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-400">
      <div className="max-w-7xl mx-auto px-6 py-12 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-2xl font-bold text-white">Augustan</h3>
            <p className="mt-3 text-sm text-gray-500">
              Creating meaningful digital experiences • Kumasi, Ghana
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-200 mb-4">
              Explore
            </h4>
            <ul className="space-y-3 text-sm">
              <li><a href="/about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="/portfolio" className="hover:text-white transition-colors">Portfolio</a></li>
              <li><a href="/services" className="hover:text-white transition-colors">Services</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-200 mb-4">
              Support
            </h4>
            <ul className="space-y-3 text-sm">
              <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="/faq" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="mailto:hello@augustan.art" className="hover:text-white transition-colors">Email Us</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-200 mb-4">
              Legal
            </h4>
            <ul className="space-y-3 text-sm">
              <li><a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-white transition-colors">Terms of Use</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm">
          <p>© {new Date().getFullYear()} Augustan. All rights reserved.</p>
          <p className="mt-2 text-gray-600">Crafted with passion in Kumasi, Ghana</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;