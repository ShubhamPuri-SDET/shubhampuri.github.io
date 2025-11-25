import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { LayoutDashboard, ShoppingCart, Upload, CheckSquare, MessageSquare, Bell, CreditCard, Settings, LogOut, Briefcase } from 'lucide-react';
import ThemeToggle from '../ui/ThemeToggle';

const sidebarNavItems = [
  { href: '/dashboard/overview', icon: LayoutDashboard, label: 'Overview' },
  { href: '/dashboard/orders', icon: ShoppingCart, label: 'My Orders' },
  { href: '/dashboard/upload', icon: Upload, label: 'Upload Files' },
  { href: '/dashboard/approvals', icon: CheckSquare, label: 'Approvals' },
  { href: '/dashboard/chat', icon: MessageSquare, label: 'Chat Support' },
  { href: '/dashboard/notifications', icon: Bell, label: 'Notifications' },
  { href: '/dashboard/payments', icon: CreditCard, label: 'Payments' },
];

const Sidebar: React.FC = () => {
  return (
    <aside className="hidden lg:flex flex-col w-64 bg-background border-r border-slate-200 dark:border-gray-800">
      <div className="flex items-center justify-between h-20 px-6 border-b border-slate-200 dark:border-gray-800">
        <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-gray-900 dark:text-white">
            <Briefcase className="h-7 w-7 text-primary-600" />
            InnovateX
        </Link>
        <ThemeToggle />
      </div>
      <nav className="flex-1 px-4 py-6 space-y-2">
        {sidebarNavItems.map(item => (
          <NavLink
            key={item.label}
            to={item.href}
            className={({ isActive }) =>
              `flex items-center px-4 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                isActive
                  ? 'bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300'
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
              }`
            }
          >
            <item.icon className="h-5 w-5 mr-3" />
            {item.label}
          </NavLink>
        ))}
      </nav>
      <div className="px-4 py-6 border-t border-slate-200 dark:border-gray-800 space-y-2">
         <NavLink
            to="/dashboard/settings"
            className={({ isActive }) =>
              `flex items-center px-4 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                isActive
                  ? 'bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300'
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
              }`
            }
          >
            <Settings className="h-5 w-5 mr-3" />
            Settings
          </NavLink>
          <Link
            to="/login"
            className="flex items-center px-4 py-2.5 text-sm font-medium rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <LogOut className="h-5 w-5 mr-3" />
            Logout
          </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
