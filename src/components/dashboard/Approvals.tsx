import React from 'react';
import { Check, X } from 'lucide-react';

const approvalItems = [
    { id: 1, title: "Homepage Design - V2", project: "Business Website", date: "2025-07-12" },
    { id: 2, title: "Animated Wedding Invite - Draft", project: "Animated Invitation", date: "2025-07-11" },
];

const DashboardApprovals: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-foreground mb-6">Awaiting Your Approval</h1>
      <div className="space-y-4">
        {approvalItems.map(item => (
            <div key={item.id} className="bg-background rounded-lg shadow p-4 sm:p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <h3 className="font-bold text-lg text-foreground">{item.title}</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{item.project} - Submitted on {item.date}</p>
                </div>
                <div className="flex gap-3 mt-4 sm:mt-0">
                    <button className="px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-md hover:bg-green-700 flex items-center gap-2">
                        <Check size={16} /> Approve
                    </button>
                    <button className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700 flex items-center gap-2">
                        <X size={16} /> Reject
                    </button>
                     <a href="#" className="px-4 py-2 text-sm font-medium text-foreground bg-slate-200 dark:bg-slate-700 rounded-md hover:bg-slate-300 dark:hover:bg-slate-600">
                        View
                    </a>
                </div>
            </div>
        ))}
        {approvalItems.length === 0 && (
            <div className="text-center py-12 bg-background rounded-lg shadow">
                <h2 className="text-xl font-semibold">All caught up!</h2>
                <p className="text-slate-500 mt-2">You have no items pending approval.</p>
            </div>
        )}
      </div>
    </div>
  );
};

export default DashboardApprovals;
