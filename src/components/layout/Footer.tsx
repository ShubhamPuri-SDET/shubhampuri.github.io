import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, Twitter, Linkedin, Instagram } from 'lucide-react';
import { FOOTER_LINKS } from '../../constants';

import NewsletterSignUp from '../ui/NewsletterSignUp';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="md:col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-gray-900 dark:text-white mb-4">
              <Briefcase className="h-7 w-7 text-primary-600" />
              InnovateX
            </Link>
            <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">
              Your partner in digital excellence. We provide a suite of services to elevate your brand and career.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary-500"><Twitter size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-primary-500"><Linkedin size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-primary-500"><Instagram size={20} /></a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white tracking-wider uppercase">Company</h3>
            <ul className="mt-4 space-y-2">
              {FOOTER_LINKS.company.map(link => (
                <li key={link.label}>
                  <Link to={link.href} className="text-sm text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white tracking-wider uppercase">Support</h3>
            <ul className="mt-4 space-y-2">
              {FOOTER_LINKS.support.map(link => (
                <li key={link.label}>
                  <Link to={link.href} className="text-sm text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-2 lg:col-span-1">
            <NewsletterSignUp />
          </div>
        </div>

        <div className="mt-8 border-t border-gray-200 dark:border-gray-800 pt-8 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">&copy; {new Date().getFullYear()} InnovateX Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
