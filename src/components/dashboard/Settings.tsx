import React from 'react';

const DashboardSettings: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-foreground mb-6">Settings</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <h2 className="text-xl font-semibold">Personal Information</h2>
          <p className="text-sm text-slate-500 mt-1">Update your personal details and contact information.</p>
        </div>
        <div className="md:col-span-2 bg-background p-8 rounded-lg shadow">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground">Full Name</label>
              <input type="text" id="name" defaultValue="John Doe" className="mt-1 block w-full rounded-md border-slate-300 dark:border-slate-600 bg-slate-100 dark:bg-slate-800 shadow-sm focus:border-primary-500 focus:ring-primary-500" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground">Email Address</label>
              <input type="email" id="email" defaultValue="client@example.com" className="mt-1 block w-full rounded-md border-slate-300 dark:border-slate-600 bg-slate-100 dark:bg-slate-800 shadow-sm focus:border-primary-500 focus:ring-primary-500" />
            </div>
            <div className="text-right">
              <button type="submit" className="px-6 py-2 text-sm font-medium text-white bg-primary-600 rounded-md hover:bg-primary-700">Save Changes</button>
            </div>
          </form>
        </div>
      </div>

      <div className="border-t border-slate-200 dark:border-slate-700 my-8"></div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <h2 className="text-xl font-semibold">Change Password</h2>
          <p className="text-sm text-slate-500 mt-1">Choose a strong password to keep your account secure.</p>
        </div>
        <div className="md:col-span-2 bg-background p-8 rounded-lg shadow">
          <form className="space-y-6">
            <div>
              <label htmlFor="current_password" className="block text-sm font-medium text-foreground">Current Password</label>
              <input type="password" id="current_password" className="mt-1 block w-full rounded-md border-slate-300 dark:border-slate-600 bg-slate-100 dark:bg-slate-800 shadow-sm focus:border-primary-500 focus:ring-primary-500" />
            </div>
            <div>
              <label htmlFor="new_password" className="block text-sm font-medium text-foreground">New Password</label>
              <input type="password" id="new_password" className="mt-1 block w-full rounded-md border-slate-300 dark:border-slate-600 bg-slate-100 dark:bg-slate-800 shadow-sm focus:border-primary-500 focus:ring-primary-500" />
            </div>
            <div className="text-right">
              <button type="submit" className="px-6 py-2 text-sm font-medium text-white bg-primary-600 rounded-md hover:bg-primary-700">Update Password</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DashboardSettings;
