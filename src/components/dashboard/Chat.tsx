import React from 'react';
import { Send } from 'lucide-react';

const DashboardChat: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-foreground mb-6">Chat with Support</h1>
      <div className="bg-background rounded-lg shadow flex flex-col" style={{ height: '70vh' }}>
        <div className="p-4 border-b border-slate-200 dark:border-slate-700">
          <h2 className="font-semibold text-foreground">Project: Business Website (#1024)</h2>
          <p className="text-sm text-slate-500">Your Project Manager: Alex</p>
        </div>
        <div className="flex-1 p-6 overflow-y-auto space-y-4">
          {/* Messages */}
          <div className="flex justify-start">
            <div className="bg-slate-200 dark:bg-slate-700 rounded-lg p-3 max-w-xs">
              <p className="text-sm">Hi there! Just wanted to let you know we've started working on the wireframes for your homepage.</p>
            </div>
          </div>
          <div className="flex justify-end">
            <div className="bg-primary-600 text-white rounded-lg p-3 max-w-xs">
              <p className="text-sm">That's great news! Looking forward to seeing them.</p>
            </div>
          </div>
           <div className="flex justify-start">
            <div className="bg-slate-200 dark:bg-slate-700 rounded-lg p-3 max-w-xs">
              <p className="text-sm">You can expect the first draft by tomorrow EOD.</p>
            </div>
          </div>
        </div>
        <div className="p-4 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-200 dark:border-slate-700">
          <div className="relative">
            <input
              type="text"
              placeholder="Ask anything! Your project manager will reply here."
              className="w-full p-3 pr-12 rounded-full border-slate-300 dark:border-slate-600 bg-background shadow-sm focus:border-primary-500 focus:ring-primary-500"
            />
            <button className="absolute inset-y-0 right-0 flex items-center justify-center w-12 h-full text-white bg-primary-600 rounded-r-full hover:bg-primary-700">
              <Send size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardChat;
