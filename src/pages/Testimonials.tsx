import React from 'react';
import PageHeader from '../components/ui/PageHeader';
import { TESTIMONIALS } from '../constants';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp, cardHover } from '../lib/animations';

const Testimonials: React.FC = () => {
  return (
    <div className="bg-background relative">
       <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-grid-slate-900/[0.04] dark:bg-grid-white/[0.05] [mask-image:linear-gradient(to_bottom,white_10%,transparent_90%)]"></div>
      </div>
      <div className="relative z-10">
        <PageHeader 
          title="What Our Clients Say"
          subtitle="We're proud to have helped so many individuals and businesses. Here's some of their feedback."
        />
        <div className="py-20">
          <motion.div 
            className="container mx-auto px-4 sm:px-6 lg:px-8"
            variants={staggerContainer()}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {TESTIMONIALS.map((testimonial, index) => (
                <motion.div 
                  key={index}
                  variants={fadeInUp}
                  whileHover={cardHover} 
                  className="bg-white/50 dark:bg-slate-900/50 backdrop-blur-lg p-8 rounded-lg shadow-lg flex flex-col"
                >
                  <div className="flex text-yellow-400 mb-4">
                    {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" className="h-5 w-5" />)}
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 mb-6 flex-grow">"{testimonial.quote}"</p>
                  <div className="flex items-center">
                    <img className="h-12 w-12 rounded-full" src={testimonial.avatar} alt={testimonial.name} />
                    <div className="ml-4">
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-slate-500 dark:text-slate-400">{testimonial.title}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
