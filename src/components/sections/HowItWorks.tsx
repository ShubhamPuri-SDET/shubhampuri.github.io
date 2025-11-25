import React from 'react';
import { MessageCircle, Clock, Eye, Package } from 'lucide-react';
import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp } from '../../lib/animations';

const processSteps = [
  {
    step: 1,
    icon: MessageCircle,
    title: "Consultation",
    description: "We discuss your needs, goals, and preferences to understand your vision."
  },
  {
    step: 2,
    icon: Clock,
    title: "Creation",
    description: "Our experts craft your resume, portfolio, or design with attention to detail."
  },
  {
    step: 3,
    icon: Eye,
    title: "Review",
    description: "You review the draft and provide feedback for any refinements needed."
  },
  {
    step: 4,
    icon: Package,
    title: "Delivery",
    description: "Receive your final product in all required formats, ready to use."
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">How It Works</h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Our simple 4-step process ensures you get exactly what you need, with clarity at every stage.
          </p>
        </div>
        
        <div className="relative max-w-xl mx-auto">
          {/* The connecting line */}
          <div className="absolute left-1/2 top-10 bottom-10 w-px bg-slate-300 dark:bg-slate-600 transform -translate-x-1/2" aria-hidden="true"></div>
          
          <motion.div
            className="space-y-16"
            variants={staggerContainer()}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            {processSteps.map((item) => (
              <motion.div key={item.step} variants={fadeInUp} className="relative text-center">
                <div className="flex items-center justify-center">
                  <div className="relative w-20 h-20 flex items-center justify-center bg-slate-50 dark:bg-slate-900 rounded-full z-10">
                    <div className="absolute inset-0 border-2 border-slate-300 dark:border-slate-600 rounded-full"></div>
                    <div className="w-16 h-16 flex items-center justify-center bg-primary-100 dark:bg-primary-900/30 rounded-full">
                      <item.icon className="h-8 w-8 text-primary-600 dark:text-primary-400" />
                    </div>
                  </div>
                </div>
                <h3 className="mt-4 text-2xl font-bold text-foreground">
                  {item.step}. {item.title}
                </h3>
                <p className="mt-2 text-slate-600 dark:text-slate-400">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
