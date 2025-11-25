import React from 'react';
import StatusBadge from './StatusBadge';

const payments = [
  { id: 'INV-0712', orderId: '#1024', date: '2025-07-10', amount: '₹6,250', status: 'Paid' },
  { id: 'INV-0628', orderId: '#1021', date: '2025-06-28', amount: '₹6,999', status: 'Paid' },
  { id: 'INV-0625', orderId: '#1020', date: '2025-06-25', amount: '₹1,500', status: 'Paid' },
];

const DashboardPayments: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-foreground mb-6">Payment History</h1>
      <div className="bg-background rounded-lg shadow overflow-x-auto">
        <table className="w-full text-sm text-left text-slate-500 dark:text-slate-400">
          <thead className="text-xs text-slate-700 uppercase bg-slate-100 dark:bg-slate-800 dark:text-slate-300">
            <tr>
              <th scope="col" className="px-6 py-3">Invoice ID</th>
              <th scope="col" className="px-6 py-3">Order ID</th>
              <th scope="col" className="px-6 py-3">Date</th>
              <th scope="col" className="px-6 py-3">Amount</th>
              <th scope="col" className="px-6 py-3">Status</th>
              <th scope="col" className="px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {payments.map(payment => (
              <tr key={payment.id} className="bg-background border-b dark:bg-slate-900 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800/50">
                <td className="px-6 py-4 font-medium text-foreground whitespace-nowrap">{payment.id}</td>
                <td className="px-6 py-4">{payment.orderId}</td>
                <td className="px-6 py-4">{payment.date}</td>
                <td className="px-6 py-4">{payment.amount}</td>
                <td className="px-6 py-4">
                  <StatusBadge status={payment.status === 'Paid' ? 'Completed' : 'Pending'} />
                </td>
                <td className="px-6 py-4">
                  <a href="#" className="font-medium text-primary-600 dark:text-primary-500 hover:underline">Download</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardPayments;
