import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SERVICES } from '../../constants';
import { buttonTap } from '../../lib/animations';

const QuickEstimate: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: 'Spuri4867@gmail.com', // Pre-filled from image
    service: 'LinkedIn Profile Optimization', // Pre-filled from image
    brief: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSendWhatsApp = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const phoneNumber = '910000000000'; // IMPORTANT: Replace with your WhatsApp number including country code
    const message = `
      Quick Estimate Request:
      Name: ${formData.name}
      Email: ${formData.email}
      Service: ${formData.service}
      Brief: ${formData.brief}
    `;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message.trim())}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <motion.div 
            className="bg-white dark:bg-slate-900/50 p-8 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-2xl font-bold text-foreground">Quick estimate</h2>
                <p className="text-slate-500 dark:text-slate-400 mt-1">Tell us what you need — we’ll reply with options, timelines, and a tailored quote.</p>
              </div>
              <span className="text-sm text-slate-400 hidden sm:block">Ballpark in hours</span>
            </div>
            
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground">Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your name"
                    className="mt-1 block w-full rounded-md border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-800 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-800 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-foreground">Service</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-800 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                >
                  {SERVICES.map(s => <option key={s.title}>{s.title}</option>)}
                </select>
              </div>

              <div>
                <label htmlFor="brief" className="block text-sm font-medium text-foreground">Brief</label>
                <textarea
                  id="brief"
                  name="brief"
                  rows={4}
                  value={formData.brief}
                  onChange={handleInputChange}
                  placeholder="Example: Optimize LinkedIn for product roles in Bangalore. Deadline next Friday."
                  className="mt-1 block w-full rounded-md border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-800 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                ></textarea>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileTap={buttonTap}
                  onClick={handleSendWhatsApp}
                  className="w-full sm:w-auto flex-1 inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-whatsapp-500 border border-transparent rounded-md hover:bg-whatsapp-600 transition-all duration-300"
                >
                  Send via WhatsApp
                </motion.button>
                <motion.div whileTap={buttonTap} className="w-full sm:w-auto">
                  <Link
                    to="/contact"
                    className="w-full inline-flex items-center justify-center px-6 py-3 text-base font-medium text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-md hover:bg-slate-200 dark:hover:bg-slate-800/80 transition-all"
                  >
                    More contact options
                  </Link>
                </motion.div>
              </div>
              <p className="text-center text-sm text-slate-500">
                Or email: <a href="mailto:Spuri4867@gmail.com" className="font-medium text-primary-600 hover:underline">Spuri4867@gmail.com</a>
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default QuickEstimate;
