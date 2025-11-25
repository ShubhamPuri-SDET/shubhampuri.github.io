import React from 'react';
import { Link } from 'react-router-dom';
import { MoveRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { buttonTap } from '../../lib/animations';

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-background text-foreground overflow-hidden">
        <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-grid-slate-900/[0.04] dark:bg-grid-white/[0.05] [mask-image:linear-gradient(to_bottom,white_10%,transparent_90%)]"></div>
            <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
                <div className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}></div>
            </div>
        </div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 z-10">
            <div className="flex flex-col items-center justify-center min-h-screen text-center py-20">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-4xl"
                >
                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                        <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                            Build Your Online Identity
                        </span>
                        <span className="block mt-2 sm:mt-4">with Stunning Websites, Resumes & Digital Designs</span>
                    </h1>
                    <p className="mt-6 text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                        Professional website creation, digital invitation cards, printing services, resume writing, portfolio building, profile optimization, and everything your personal or business brand needs — all in one place.
                    </p>
                    <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                        <motion.div whileTap={buttonTap}>
                            <Link
                                to="/services"
                                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-primary-600 border border-transparent rounded-full hover:bg-primary-700 transition-all duration-300 transform hover:scale-105"
                            >
                                Get Started
                                <MoveRight className="ml-2 h-5 w-5" />
                            </Link>
                        </motion.div>
                        <motion.div whileTap={buttonTap}>
                            <Link
                                to="/quote"
                                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 text-base font-medium text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800/80 transition-all duration-300 group"
                            >
                                Get a Free Quote
                            </Link>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </div>
    </section>
  );
};

export default HeroSection;
