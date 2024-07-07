import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'antd';
import { Bar } from 'react-chartjs-2';

const TopProducts = ({ products }) => {
  const data = {
    labels: products.map(product => product.name),
    datasets: [
      {
        label: 'Cantidad vendida',
        data: products.map(product => product.quantity),
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <Bar
        data={data}
        options={{
          responsive: true,
          scales: {
            x: { beginAtZero: true },
            y: { beginAtZero: true }
          }
        }}
      />
      <List
        itemLayout="horizontal"
        dataSource={products}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
              title={item.name}
              description={`Cantidad vendida: ${item.quantity}`}
            />
          </List.Item>
        )}
      />
    </div>
  );
};

TopProducts.propTypes = {
  products: PropTypes.array.isRequired,
};

export default TopProducts;
