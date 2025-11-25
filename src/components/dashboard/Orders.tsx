import React from 'react';
import StatusBadge from './StatusBadge';

const orders = [
  { id: '#1024', service: 'Business Website', date: '2025-07-10', price: '₹12,500', status: 'In Progress' },
  { id: '#1023', service: 'Animated Invitation', date: '2025-07-08', price: '₹2,999', status: 'Waiting for Approval' },
  { id: '#1022', service: 'ATS Resume', date: '2025-07-05', price: '₹2,499', status: 'Revision Requested' },
  { id: '#1021', service: 'Basic Portfolio Website', date: '2025-06-28', price: '₹6,999', status: 'Completed' },
  { id: '#1020', service: 'Business Cards (x500)', date: '2025-06-25', price: '₹1,500', status: 'Completed' },
];

const DashboardOrders: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-foreground mb-6">My Orders</h1>
      <div className="bg-background rounded-lg shadow overflow-x-auto">
        <table className="w-full text-sm text-left text-slate-500 dark:text-slate-400">
          <thead className="text-xs text-slate-700 uppercase bg-slate-100 dark:bg-slate-800 dark:text-slate-300">
            <tr>
              <th scope="col" className="px-6 py-3">Order ID</th>
              <th scope="col" className="px-6 py-3">Service</th>
              <th scope="col" className="px-6 py-3">Date</th>
              <th scope="col" className="px-6 py-3">Price</th>
              <th scope="col" className="px-6 py-3">Status</th>
              <th scope="col" className="px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <tr key={order.id} className="bg-background border-b dark:bg-slate-900 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800/50">
                <td className="px-6 py-4 font-medium text-foreground whitespace-nowrap">{order.id}</td>
                <td className="px-6 py-4">{order.service}</td>
                <td className="px-6 py-4">{order.date}</td>
                <td className="px-6 py-4">{order.price}</td>
                <td className="px-6 py-4">
                  <StatusBadge status={order.status} />
                </td>
                <td className="px-6 py-4">
                  <a href="#" className="font-medium text-primary-600 dark:text-primary-500 hover:underline">View</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardOrders;
