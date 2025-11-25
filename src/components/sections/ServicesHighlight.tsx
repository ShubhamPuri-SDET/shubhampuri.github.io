import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../../constants';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp, cardHover } from '../../lib/animations';

const ServicesHighlight: React.FC = () => {
  const highlightedServices = SERVICES.slice(0, 4);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Our Core Services</h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            A glimpse into how we can elevate your brand and career.
          </p>
        </div>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={staggerContainer()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {highlightedServices.map((service) => (
            <motion.div
              key={service.title}
              variants={fadeInUp}
              whileHover={cardHover}
              className="bg-slate-50 dark:bg-slate-900/50 p-8 rounded-lg shadow-sm flex flex-col"
            >
              <div className="flex-shrink-0">
                <service.icon className="h-10 w-10 text-primary-500 mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">{service.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm flex-grow">{service.description}</p>
              </div>
              <Link to="/services" className="mt-6 text-sm font-semibold text-primary-600 dark:text-primary-400 hover:underline flex items-center">
                Learn More <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
        <div className="text-center mt-12">
            <Link to="/services" className="px-6 py-3 text-base font-medium text-white bg-primary-600 rounded-full hover:bg-primary-700">
                View All Services
            </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesHighlight;
