'use client';

import { useEffect, useState } from 'react';

type StatData = {
  purchases: string;
  redemptions: string;
  rejectedTransactions: string;
  sipRejections: string;
  newSIP: string;
};

export default function StatGrid() {
  const [stats, setStats] = useState<StatData | null>(null);

  useEffect(() => {
    fetch('/api/stats')
      .then((res) => res.json())
      .then((data) => setStats(data))
      .catch((err) => console.error('Failed to fetch stats:', err));
  }, []);

  const statItems = [
    { label: 'Purchases', value: stats?.purchases },
    { label: 'Redemptions', value: stats?.redemptions },
    { label: 'Rejected Transactions', value: stats?.rejectedTransactions },
    { label: 'SIP Rejections', value: stats?.sipRejections },
    { label: 'New SIP', value: stats?.newSIP },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
      {statItems.map((item) => (
        <div
          key={item.label}
          className="bg-white dark:bg-gray-800 shadow rounded p-4 text-center"
        >
          <h3 className="text-sm font-medium text-gray-600 dark:text-gray-300">{item.label}</h3>
          <p className="text-lg font-semibold text-gray-900 dark:text-white">
            {item.value ?? 'Loading...'}
          </p>
        </div>
      ))}
    </div>
  );
}