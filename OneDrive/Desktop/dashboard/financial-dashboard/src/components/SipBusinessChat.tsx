'use client';

import { useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  BarElement,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';

ChartJS.register(
  BarElement,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

type SipData = {
  labels: string[];
  barData: number[];
  lineData: number[];
};

export default function SipBusinessChart() {
  const [data, setData] = useState<SipData | null>(null);

  useEffect(() => {
    fetch('/api/sipBusiness')
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.error('Failed to fetch SIP business data:', err));
  }, []);

  if (!data) {
    return <div className="text-center text-gray-500 dark:text-gray-400">Loading chart...</div>;
  }

  const chartData = {
    labels: data.labels,
    datasets: [
      {
        type: 'bar' as const,
        label: 'SIP Volume (Cx)',
        data: data.barData,
        backgroundColor: 'rgba(59, 130, 246, 0.6)',
      },
      {
        type: 'line' as const,
        label: 'SIP Value (Cr)',
        data: data.lineData,
        borderColor: 'rgba(34, 197, 94, 1)',
        backgroundColor: 'rgba(34, 197, 94, 0.2)',
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' as const },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: { display: true, text: 'Volume / Value' },
      },
    },
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
          SIP Business Chart
        </h2>
        <button className="text-sm px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
          View Report
        </button>
      </div>
      <Chart type="bar" data={chartData} options={options} />
    </div>
  );
}