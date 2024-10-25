import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register the components with Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface FinancialChartProps {
  income: number[];
  expenses: number[];
}

const FinancialChart: React.FC<FinancialChartProps> = ({
  income,
  expenses,
}) => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Income',
        data: income,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
      {
        label: 'Expenses',
        data: expenses,
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
      },
    ],
  };

  return (
    <div>
      <Bar data={data} />
    </div>
  );
};

export default FinancialChart;
