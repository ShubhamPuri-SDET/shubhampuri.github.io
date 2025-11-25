import React from 'react';
import { cn } from '../../lib/utils';

interface StatusBadgeProps {
  status: string;
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  const statusClasses = {
    'Pending': 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200',
    'In Progress': 'bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300',
    'Waiting for Your Approval': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300',
    'Revision Requested': 'bg-orange-100 text-orange-800 dark:bg-orange-900/50 dark:text-orange-300',
    'Completed': 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300',
  };

  return (
    <span
      className={cn(
        'px-2.5 py-0.5 text-xs font-medium rounded-full inline-flex items-center',
        statusClasses[status as keyof typeof statusClasses] || statusClasses['Pending']
      )}
    >
      {status}
    </span>
  );
};

export default StatusBadge;
