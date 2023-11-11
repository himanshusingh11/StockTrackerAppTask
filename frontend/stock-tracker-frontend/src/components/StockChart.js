// StockChart.js
import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js/auto';

Chart.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const StockChart = ({ chartData }) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Stock Prices Chart',
      },
    },
    scales: {
      x: {
        type: 'category',
        labels: chartData?.labels || [],
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  if (!chartData || !chartData.datasets || !chartData.datasets[0] || !chartData.datasets[0].data) {
    return <p>No stock data available.</p>;
  }

  return (
    <div>
      <h2 className="text-center">Stock Prices Chart</h2>
      <Bar options={options} data={chartData} />
    </div>
  );
};

export default StockChart;
