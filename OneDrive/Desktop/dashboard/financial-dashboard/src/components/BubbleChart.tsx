'use client';

import { useEffect, useState } from 'react';
import { Bubble } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  Tooltip,
  Legend,
  PointElement,
  LinearScale,
} from 'chart.js';

ChartJS.register(Tooltip, Legend, PointElement, LinearScale);

type BubbleData = { x: number; y: number; r: number };

export default function BubbleChart() {
  const [bubbles, setBubbles] = useState<BubbleData[]>([]);

  useEffect(() => {
    fetch('/api/clients')
      .then((res) => res.json())
      .then((data) => setBubbles(data.bubbles))
      .catch((err) => console.error('Failed to fetch bubble data:', err));
  }, []);

  const data = {
    datasets: [
      {
        label: 'Client Segments',
        data: bubbles,
        backgroundColor: 'rgba(59, 130, 246, 0.5)',
        borderColor: 'rgba(59, 130, 246, 1)',
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      x: { title: { display: true, text: 'Risk Level' } },
      y: { title: { display: true, text: 'Investment Size' } },
    },
    plugins: {
      legend: { display: false },
    },
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-4 shadow rounded">
      <h2 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">
        Client Segmentation
      </h2>
      <Bubble data={data} options={options} />
    </div>
  );
}