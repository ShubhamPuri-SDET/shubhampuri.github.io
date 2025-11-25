import React from 'react';
import PageHeader from '../components/ui/PageHeader';
import { Copy, Gift, Users, TrendingUp } from 'lucide-react';

const referralData = {
  link: 'https://innovatex.dev/ref/john-doe-123',
  referredUsers: [
    { name: 'Priya Sharma', date: '2025-07-01', status: 'Completed Order', reward: '₹500' },
    { name: 'Rohit Malhotra', date: '2025-06-20', status: 'Signed Up', reward: 'Pending' },
  ],
  totalEarnings: '₹500',
};

const Referral: React.FC = () => {
  return (
    <div className="bg-background">
      <PageHeader
        title="Earn While You Share"
        subtitle="Refer friends and earn rewards! Get up to ₹500 for every successful referral. It's our way of saying thank you for spreading the word."
      />
      <div className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          {/* How it works */}
          <div className="text-center mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-4">How It Works in 3 Simple Steps</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-4">
                <div className="text-4xl font-bold text-primary-300 dark:text-primary-700">1</div>
                <h3 className="font-semibold mt-2">Share Your Link</h3>
                <p className="text-sm text-slate-500">Share your unique referral link with friends or colleagues.</p>
              </div>
              <div className="p-4">
                <div className="text-4xl font-bold text-primary-300 dark:text-primary-700">2</div>
                <h3 className="font-semibold mt-2">Friend Places Order</h3>
                <p className="text-sm text-slate-500">Your friend signs up and places their first order using your link.</p>
              </div>
              <div className="p-4">
                <div className="text-4xl font-bold text-primary-300 dark:text-primary-700">3</div>
                <h3 className="font-semibold mt-2">Earn Rewards</h3>
                <p className="text-sm text-slate-500">You earn discounts on future services or cashback. It's that easy!</p>
              </div>
            </div>
          </div>

          {/* Referral Dashboard */}
          <div className="bg-slate-50 dark:bg-slate-900/50 rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-foreground mb-6">Your Referral Dashboard</h2>

            {/* Referral Link */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-foreground mb-2">Your Unique Referral Link</label>
              <div className="flex">
                <input type="text" readOnly value={referralData.link} className="flex-grow p-3 rounded-l-md border-slate-300 dark:border-slate-600 bg-slate-100 dark:bg-slate-800 shadow-sm" />
                <button
                  onClick={() => navigator.clipboard.writeText(referralData.link)}
                  className="px-4 py-2 text-sm font-medium text-white bg-primary-600 rounded-r-md hover:bg-primary-700 flex items-center gap-2"
                >
                  <Copy size={16} /> Copy
                </button>
              </div>
            </div>

            {/* Stats */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-background p-6 rounded-lg shadow flex items-center">
                <div className="p-3 rounded-full mr-4 bg-blue-100 dark:bg-blue-900/50"><Users className="h-6 w-6 text-blue-500" /></div>
                <div>
                  <p className="text-sm text-slate-500">Referred Users</p>
                  <p className="text-2xl font-bold">{referralData.referredUsers.length}</p>
                </div>
              </div>
              <div className="bg-background p-6 rounded-lg shadow flex items-center">
                <div className="p-3 rounded-full mr-4 bg-green-100 dark:bg-green-900/50"><Gift className="h-6 w-6 text-green-500" /></div>
                <div>
                  <p className="text-sm text-slate-500">Total Earnings</p>
                  <p className="text-2xl font-bold">{referralData.totalEarnings}</p>
                </div>
              </div>
            </div>

            {/* Referred Users Table */}
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Referred Users History</h3>
              <div className="bg-background rounded-lg shadow overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="text-xs text-slate-700 uppercase bg-slate-100 dark:bg-slate-800 dark:text-slate-300">
                    <tr>
                      <th className="px-6 py-3">User</th>
                      <th className="px-6 py-3">Date</th>
                      <th className="px-6 py-3">Status</th>
                      <th className="px-6 py-3">Your Reward</th>
                    </tr>
                  </thead>
                  <tbody>
                    {referralData.referredUsers.map((user, index) => (
                      <tr key={index} className="border-b dark:border-slate-700">
                        <td className="px-6 py-4 font-medium text-foreground">{user.name}</td>
                        <td className="px-6 py-4 text-slate-500">{user.date}</td>
                        <td className="px-6 py-4 text-slate-500">{user.status}</td>
                        <td className="px-6 py-4 font-semibold text-green-600">{user.reward}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Referral;
