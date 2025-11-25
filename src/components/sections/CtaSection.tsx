import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { buttonTap } from '../../lib/animations';

const CtaSection: React.FC = () => {
  return (
    <section className="bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-slate-100 dark:bg-slate-900/50 rounded-2xl p-8 md:p-12 text-center shadow-lg">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Ready to upgrade your digital presence?
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Let’s build something amazing together. Get in touch for a free consultation and quote.
          </p>
          <motion.div className="mt-8" whileTap={buttonTap}>
            <Link
              to="/quote"
              className="inline-block px-8 py-3 text-base font-medium text-white bg-primary-600 rounded-full hover:bg-primary-700 transition-transform transform hover:scale-105"
            >
              Get Your Free Quote
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
