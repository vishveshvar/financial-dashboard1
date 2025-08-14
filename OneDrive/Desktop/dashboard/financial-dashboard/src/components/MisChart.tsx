'use client';

import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Legend,
  Tooltip,
} from 'chart.js';

ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Legend, Tooltip);

interface MisData {
  month: string;
  equity: number;
  debt: number;
  hybrid: number;
}

const assetOptions = ['Equity', 'Debt', 'Hybrid'] as const;
type AssetType = typeof assetOptions[number];

export default function MisChart() {
  const [data, setData] = useState<MisData[]>([]);
  const [selectedAsset, setSelectedAsset] = useState<AssetType>('Equity');

  useEffect(() => {
    fetch('/api/mis')
      .then(res => res.json())
      .then(setData);
  }, []);

  const getColor = (asset: AssetType) => {
    switch (asset) {
      case 'Equity': return '#3b82f6';
      case 'Debt': return '#10b981';
      case 'Hybrid': return '#f59e0b';
    }
  };

  const chartData = {
    labels: data.map(d => d.month),
    datasets: [
      {
        label: selectedAsset,
        data: data.map(d => d[selectedAsset.toLowerCase() as keyof MisData]),
        borderColor: getColor(selectedAsset),
        backgroundColor: `${getColor(selectedAsset)}33`, // 20% opacity
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' as const },
      tooltip: { mode: 'index' as const, intersect: false },
    },
    interaction: {
      mode: 'nearest' as const,
      axis: 'x' as const,
      intersect: false,
    },
  };

  return (
    <div className="bg-white p-4 rounded shadow space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">Monthly MIS Overview</h2>
        <select
          value={selectedAsset}
          onChange={e => setSelectedAsset(e.target.value as AssetType)}
          className="border rounded px-2 py-1 text-sm"
        >
          {assetOptions.map(opt => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      </div>
      <Line data={chartData} options={options} />
    </div>
  );
}