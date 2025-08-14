// components/ChartWrapper.tsx
import { Chart as ChartJS, registerables } from 'chart.js';
import { Line } from 'react-chartjs-2';
ChartJS.register(...registerables);

export default function ChartWrapper({ data, options }) {
  return <Line data={data} options={options} />;
}