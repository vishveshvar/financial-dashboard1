'use client';

import { useEffect, useState } from 'react';
import MainCard from '@/components/MainCard';
import FilterBar from '@/components/FilterBar';
import StatGrid from '@/components/StatGrid';
import BubbleChart from '@/components/BubbleChart';
import SipBusinessChart from '@/components/SipBusinessChat';
import MisChart from '@/components/MisChart';
import '@/styles/globals.css';

type SummaryData = {
  aum: string;
  sip: string;
  changeAUM: string;
  changeSIP: string;
};

export default function HomePage() {
  const [summary, setSummary] = useState<SummaryData | null>(null);

  useEffect(() => {
    fetch('/api/summary')
      .then((res) => res.json())
      .then((data) => setSummary(data))
      .catch((err) => console.error('Failed to fetch summary:', err));
  }, []);

  return (
    <div className="min-h-screen px-4 py-6 max-w-[1200px] mx-auto bg-white dark:bg-gray-900 text-gray-900 dark:text-white space-y-6">
      {!summary ? (
        <div className="text-center text-gray-500 dark:text-gray-400 animate-pulse">
          Loading summary data...
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <MainCard
            title="AUM"
            value={summary.aum}
            momChange={summary.changeAUM}
            positive={parseFloat(summary.changeAUM) >= 0}
          />
          <MainCard
            title="SIP"
            value={summary.sip}
            momChange={summary.changeSIP}
            positive={parseFloat(summary.changeSIP) >= 0}
          />
        </div>
      )}

      <FilterBar />
      <StatGrid />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <BubbleChart />
        <SipBusinessChart />
      </div>

      <div className="overflow-x-auto">
        <MisChart />
      </div>
    </div>
  );
}