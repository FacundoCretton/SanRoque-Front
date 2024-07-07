import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import 'chartjs-adapter-date-fns';
import { es } from 'date-fns/locale';
import TimeButtons from './TimeButtons';

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const SalesChart = ({ orders }) => {
  const [timeRange, setTimeRange] = useState('daily');
  const [filteredOrders, setFilteredOrders] = useState([]);

  useEffect(() => {
    filterOrders(orders, timeRange);
  }, [orders, timeRange]);

  const filterOrders = (orders, range) => {
    const now = new Date();
    let filtered = [];

    switch (range) {
      case 'daily':
        filtered = orders.filter(order => new Date(order.date).toDateString() === now.toDateString());
        break;
      case 'weekly':
        const weekStart = new Date(now);
        weekStart.setDate(now.getDate() - now.getDay());
        filtered = orders.filter(order => {
          const orderDate = new Date(order.date);
          return orderDate >= weekStart && orderDate <= now;
        });
        break;
      case 'monthly':
        const monthStart = new Date(now.getFullYear(), now.getMonth(), 1);
        filtered = orders.filter(order => {
          const orderDate = new Date(order.date);
          return orderDate >= monthStart && orderDate <= now;
        });
        break;
      case 'yearly':
        const yearStart = new Date(now.getFullYear(), 0, 1);
        filtered = orders.filter(order => {
          const orderDate = new Date(order.date);
          return orderDate >= yearStart && orderDate <= now;
        });
        break;
      default:
        filtered = orders;
    }

    setFilteredOrders(filtered);
  };

  const generateChartData = (orders, range) => {
    const data = [];
    const now = new Date();
  
    switch (range) {
      case 'daily':
        for (let i = 0; i < 24; i++) {
          data.push({ label: `${i}:00`, value: 0 });
        }
        orders.forEach(order => {
          const orderHour = new Date(order.date).getHours();
          data[orderHour].value += order.totalPrice;
        });
        break;
      case 'weekly':
        for (let i = 0; i < 7; i++) {
          const date = new Date(now);
          date.setDate(now.getDate() - now.getDay() + i);
          data.push({ label: date.toLocaleDateString('es-ES', { weekday: 'short' }), value: 0 });
        }
        orders.forEach(order => {
          const orderDay = new Date(order.date).getDay();
          data[orderDay].value += order.totalPrice;
        });
        break;
      case 'monthly':
        const daysInMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
        for (let i = 1; i <= daysInMonth; i++) {
          data.push({ label: i, value: 0 });
        }
        orders.forEach(order => {
          const orderDate = new Date(order.date).getDate();
          data[orderDate - 1].value += order.totalPrice;
        });
        break;
      case 'yearly':
        for (let i = 0; i < 12; i++) {
          data.push({ label: new Date(now.getFullYear(), i).toLocaleString('es-ES', { month: 'short' }), value: 0 });
        }
        orders.forEach(order => {
          const orderMonth = new Date(order.date).getMonth();
          data[orderMonth].value += order.totalPrice;
        });
        break;
      default:
        break;
    }
  
    return {
      labels: data.map(d => d.label),
      datasets: [
        {
          label: 'Ventas',
          data: data.map(d => d.value),
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1,
        },
      ],
    };
  };

  return (
    <div>
      <TimeButtons timeRange={timeRange} onTimeChange={setTimeRange} />
      <Bar 
        data={generateChartData(filteredOrders, timeRange)} 
        options={{
          responsive: true,
          plugins: {
            legend: { position: 'top' },
            title: { display: true, text: 'Ventas' },
          },
          scales: {
            x: { title: { display: true, text: 'Periodo' } },
            y: { title: { display: true, text: 'Cantidad' } },
          },
        }} 
      />
    </div>
  );
};

export default SalesChart;
