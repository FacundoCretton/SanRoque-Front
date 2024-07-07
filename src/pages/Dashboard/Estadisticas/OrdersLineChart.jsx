import React, { useState } from 'react';
import { Chart, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';
import TimeButtons from './TimeButtons'; // Asegúrate de importar correctamente el componente TimeButtons

Chart.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);

const OrdersLineChart = ({ orders }) => {
  const [timeRange, setTimeRange] = useState('daily'); // Estado para controlar el rango de tiempo seleccionado

  const generateLineChartData = (orders, range) => {
    const data = [];
    const now = new Date();

    switch (range) {
      case 'daily':
        for (let i = 0; i < 24; i++) {
          data.push({ label: `${i}:00`, value: 0 });
        }
        orders.forEach(order => {
          const orderHour = new Date(order.date).getHours();
          data[orderHour].value += 1;
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
          data[orderDay].value += 1;
        });
        break;
      case 'monthly':
        const daysInMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
        for (let i = 1; i <= daysInMonth; i++) {
          data.push({ label: i, value: 0 });
        }
        orders.forEach(order => {
          const orderDate = new Date(order.date).getDate();
          data[orderDate - 1].value += 1;
        });
        break;
      case 'yearly':
        for (let i = 0; i < 12; i++) {
          data.push({ label: new Date(now.getFullYear(), i).toLocaleString('es-ES', { month: 'short' }), value: 0 });
        }
        orders.forEach(order => {
          const orderMonth = new Date(order.date).getMonth();
          data[orderMonth].value += 1;
        });
        break;
      default:
        break;
    }

    return {
      labels: data.map(d => d.label),
      datasets: [
        {
          label: 'Órdenes',
          data: data.map(d => d.value),
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1,
        },
      ],
    };
  };

  return (
    <div>
      <TimeButtons timeRange={timeRange} onTimeChange={setTimeRange} /> {/* Botones para seleccionar el rango de tiempo */}
      <Line
        data={generateLineChartData(orders, timeRange)}
        options={{
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
            },
            title: {
              display: true,
              text: 'Órdenes por Periodo',
            },
          },
          scales: {
            x: {
              type: 'category',
              title: {
                display: true,
                text: 'Periodo',
              },
            },
            y: {
              type: 'linear',
              title: {
                display: true,
                text: 'Cantidad',
              },
            },
          },
        }}
      />
    </div>
  );
};

export default OrdersLineChart;
