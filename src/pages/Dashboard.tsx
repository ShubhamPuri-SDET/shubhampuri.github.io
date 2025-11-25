import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from '../components/dashboard/Sidebar';
import { Briefcase } from 'lucide-react';
import ThemeToggle from '../components/ui/ThemeToggle';
import { AnimatePresence, motion } from 'framer-motion';

const Dashboard: React.FC = () => {
  const location = useLocation();
  return (
    <div className="flex h-screen bg-slate-50 dark:bg-gray-900 text-foreground">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="flex justify-between items-center p-4 border-b border-slate-200 dark:border-gray-800 lg:hidden">
            <div className="flex items-center gap-2 text-xl font-bold">
                <Briefcase className="h-6 w-6 text-primary-600" />
                InnovateX
            </div>
            <ThemeToggle />
        </header>
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-slate-100 dark:bg-gray-950">
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
            >
              <div className="container mx-auto px-6 py-8">
                <Outlet />
              </div>
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
