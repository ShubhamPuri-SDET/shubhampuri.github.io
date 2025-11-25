import React from 'react';
import { CheckCircle } from 'lucide-react';
import { WHY_CHOOSE_US_POINTS } from '../../constants';
import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp } from '../../lib/animations';

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Why Choose Us?</h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            We help individuals and businesses look professional, credible, and future-ready. Our services are designed to increase your visibility, improve your branding, and help you stand out in the digital world.
          </p>
        </div>
        <motion.div 
          className="max-w-4xl mx-auto"
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {WHY_CHOOSE_US_POINTS.map((point, index) => (
              <motion.div key={index} variants={fadeInUp} className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-primary-500 flex-shrink-0 mt-1" />
                <span className="text-slate-700 dark:text-slate-200 font-medium">{point}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
