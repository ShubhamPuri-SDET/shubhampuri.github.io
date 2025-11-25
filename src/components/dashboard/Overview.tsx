import React from 'react';
import { ShoppingCart, Clock, CheckCircle, MessageSquare, Upload } from 'lucide-react';

const StatCard = ({ title, value, icon: Icon, color }: { title: string, value: string, icon: React.ElementType, color: string }) => (
  <div className="bg-background rounded-lg shadow p-6 flex items-center">
    <div className={`p-3 rounded-full mr-4 ${color}`}>
      <Icon className="h-6 w-6 text-white" />
    </div>
    <div>
      <p className="text-sm text-slate-500 dark:text-slate-400">{title}</p>
      <p className="text-2xl font-bold text-foreground">{value}</p>
    </div>
  </div>
);

const DashboardOverview: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-foreground mb-6">Overview</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Active Orders" value="3" icon={ShoppingCart} color="bg-blue-500" />
        <StatCard title="Pending Approval" value="1" icon={Clock} color="bg-yellow-500" />
        <StatCard title="Completed Orders" value="12" icon={CheckCircle} color="bg-green-500" />
        <StatCard title="Unread Messages" value="2" icon={MessageSquare} color="bg-purple-500" />
      </div>
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-background rounded-lg shadow p-6">
          <h2 className="font-semibold text-foreground mb-4">Recent Activity</h2>
          <ul className="space-y-4">
            <li className="flex items-center">
              <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
              <div>
                <p className="text-foreground">"Modern Business Website" project completed.</p>
                <p className="text-sm text-slate-500">2 days ago</p>
              </div>
            </li>
            <li className="flex items-center">
              <Upload className="h-5 w-5 text-blue-500 mr-3" />
              <div>
                <p className="text-foreground">You uploaded 3 new documents for "Wedding Invite".</p>
                <p className="text-sm text-slate-500">3 days ago</p>
              </div>
            </li>
            <li className="flex items-center">
              <MessageSquare className="h-5 w-5 text-purple-500 mr-3" />
              <div>
                <p className="text-foreground">New message from your project manager.</p>
                <p className="text-sm text-slate-500">4 days ago</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="bg-background rounded-lg shadow p-6">
          <h2 className="font-semibold text-foreground mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li><a href="/dashboard/orders" className="text-primary-600 hover:underline">View All Orders</a></li>
            <li><a href="/dashboard/upload" className="text-primary-600 hover:underline">Upload a File</a></li>
            <li><a href="/dashboard/chat" className="text-primary-600 hover:underline">Contact Support</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;
