import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';

type MonthlyMISChartProps = {
  range: string;
};

const MonthlyMISChart = ({ range }: MonthlyMISChartProps) => {
  const [chartData, setChartData] = useState<{ labels: string[]; data: number[] }>({
    labels: [],
    data: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`/api/mis?range=${range}`);
      const json = await res.json();
      setChartData(json);
    };

    fetchData();
  }, [range]);

  const data = {
    labels: chartData.labels,
    datasets: [
      {
        label: `MIS for ${range} days`,
        data: chartData.data,
        backgroundColor: 'rgba(99, 102, 241, 0.2)',
        borderColor: 'rgba(99, 102, 241, 1)',
        borderWidth: 2,
        fill: true,
        tension: 0.4,
      },
    ],
  };

  return (
    <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-md">
      <Line data={data} />
    </div>
  );
};

export default MonthlyMISChart;