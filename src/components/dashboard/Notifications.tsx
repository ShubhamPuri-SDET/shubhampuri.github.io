import React from 'react';
import { Bell } from 'lucide-react';

const notifications = [
    { id: 1, text: "Your project 'Business Website' has been updated to 'In Progress'.", time: "2 hours ago", read: false },
    { id: 2, text: "A new file 'logo_final.png' was uploaded to your project.", time: "1 day ago", read: false },
    { id: 3, text: "Payment of ₹12,500 for order #1024 has been confirmed.", time: "2 days ago", read: true },
    { id: 4, text: "Your design 'Homepage V1' is awaiting your approval.", time: "3 days ago", read: true },
];

const DashboardNotifications: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-foreground mb-6">Notifications</h1>
      <div className="bg-background rounded-lg shadow">
        <ul className="divide-y divide-slate-200 dark:divide-slate-700">
            {notifications.map(notif => (
                <li key={notif.id} className={`p-4 flex items-start hover:bg-slate-50 dark:hover:bg-slate-800/50 ${!notif.read ? 'bg-primary-50/50 dark:bg-primary-900/10' : ''}`}>
                    <div className={`mt-1 h-2.5 w-2.5 rounded-full ${!notif.read ? 'bg-primary-500' : 'bg-transparent'}`}></div>
                    <div className="ml-3 w-0 flex-1">
                        <p className="text-sm text-foreground">{notif.text}</p>
                        <p className="mt-1 text-xs text-slate-500">{notif.time}</p>
                    </div>
                </li>
            ))}
        </ul>
        {notifications.length === 0 && (
             <div className="text-center py-12">
                <Bell className="mx-auto h-12 w-12 text-slate-400" />
                <h2 className="text-xl font-semibold mt-2">No new notifications</h2>
                <p className="text-slate-500 mt-1">We'll let you know when there's something new.</p>
            </div>
        )}
      </div>
    </div>
  );
};

export default DashboardNotifications;
