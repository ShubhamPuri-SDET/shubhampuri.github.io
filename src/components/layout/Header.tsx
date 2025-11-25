import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Briefcase } from 'lucide-react';
import { NAV_LINKS } from '../../constants';
import ThemeToggle from '../ui/ThemeToggle';
import { cn } from '../../lib/utils';
import { motion, useScroll, useSpring, useMotionValueEvent } from 'framer-motion';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);

  const { scrollY, scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
      if (isOpen) setIsOpen(false); // Close mobile menu on scroll down
    } else {
      setHidden(false);
    }
    setIsScrolled(latest > 10);
  });

  return (
    <motion.header 
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" }
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={cn(
        "sticky top-0 z-50 w-full transition-colors duration-300",
        isScrolled ? "bg-white/80 dark:bg-gray-950/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800" : "bg-transparent"
      )}
    >
      {/* Scroll Progress Bar */}
      <motion.div 
        className="absolute top-0 left-0 right-0 h-1 bg-primary-600 origin-left" 
        style={{ scaleX }} 
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-gray-900 dark:text-white">
            <Briefcase className="h-7 w-7 text-primary-600" />
            InnovateX
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.key}
                to={link.href}
                className={({ isActive }) =>
                  cn(
                    "text-sm font-medium transition-colors hover:text-primary-600 dark:hover:text-primary-400",
                    isActive ? "text-primary-600 dark:text-primary-400" : "text-gray-600 dark:text-gray-300"
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <div className="hidden lg:flex items-center gap-2">
              <ThemeToggle />
              <Link to="/login" className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400">
                Login
              </Link>
              <Link
                to="/quote"
                className="px-5 py-2 text-sm font-medium text-white bg-primary-600 rounded-full hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-all"
              >
                Get a Quote
              </Link>
            </div>
            <div className="lg:hidden">
              <ThemeToggle />
            </div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800">
          <div className="px-4 pt-2 pb-3 space-y-1 sm:px-6">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.key}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  cn(
                    "block px-3 py-2 rounded-md text-base font-medium transition-colors",
                    isActive
                      ? "bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-300"
                      : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
          <div className="px-4 py-4 border-t border-gray-200 dark:border-gray-800 space-y-3">
             <Link to="/login" onClick={() => setIsOpen(false)} className="block text-center w-full px-5 py-2.5 text-base font-medium text-gray-700 dark:text-gray-200 rounded-full border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800">
                Login
              </Link>
            <Link
              to="/quote"
              onClick={() => setIsOpen(false)}
              className="block text-center w-full px-5 py-2.5 text-base font-medium text-white bg-primary-600 rounded-full hover:bg-primary-700"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </motion.header>
  );
};

export default Header;
