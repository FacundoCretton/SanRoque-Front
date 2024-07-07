import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'antd';

const RecentOrders = ({ orders }) => {
  const columns = [
    {
      title: 'productos',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Fecha',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Total',
      dataIndex: 'totalPrice',
      key: 'totalPrice',
    },
  ];

  return (
    <div>
      <h3>Órdenes Recientes</h3>
      <Table dataSource={orders} columns={columns} rowKey="id" />
    </div>
  );
};

RecentOrders.propTypes = {
  orders: PropTypes.array.isRequired,
};

export default RecentOrders;
