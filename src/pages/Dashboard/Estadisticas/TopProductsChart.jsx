import React, { useState, useEffect } from 'react';
import { Table } from 'antd';
import TimeButtons from './TimeButtons';

const TopProductsChart = ({ orders }) => {
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

  const getTopProducts = (orders) => {
    const productCounts = orders.reduce((acc, order) => {
      if (order.cartItems && order.cartItems.length) {
        order.cartItems.forEach(product => {
          if (!acc[product.name]) {
            acc[product.name] = 0;
          }
          acc[product.name] += product.quantity;
        });
      }
      return acc;
    }, {});

    const sortedProducts = Object.entries(productCounts).sort((a, b) => b[1] - a[1]);

    return sortedProducts.slice(0, 5).map(([name, quantity], index) => ({
      key: index + 1,
      rank: index + 1,
      name,
      quantity,
    }));
  };

  return (
    <div>
      <TimeButtons timeRange={timeRange} onTimeChange={setTimeRange} />
      <Table
        dataSource={getTopProducts(filteredOrders)}
        columns={[
          { title: 'Rank', dataIndex: 'rank', key: 'rank' },
          { title: 'Producto', dataIndex: 'name', key: 'name' },
          { title: 'Cantidad', dataIndex: 'quantity', key: 'quantity' },
        ]}
        pagination={false}
        rowClassName={(record, index) => (index % 2 === 0 ? 'even-row' : 'odd-row')}
      />
    </div>
  );
};

export default TopProductsChart;
