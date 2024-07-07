import React from 'react';
import { Table, Select, Popover } from 'antd';
import './styles.css';

const { Option } = Select;

const RecentOrders = ({ orders, onStatusChange, expandedRowKeys, onExpand }) => {
  const columns = [
    {
      title: 'Nombre',
      dataIndex: 'name',
      key: 'name',
      className: 'table-cell-key',
      width: 150,
    },
    {
      title: 'Celular',
      dataIndex: 'cellphone',
      key: 'cellphone',
      className: 'table-cell-key',
      width: 150,
    },
    {
      title: 'Dirección',
      dataIndex: 'address',
      key: 'address',
      className: 'table-cell-key',
      width: 200,
    },
    {
      title: 'Localidad',
      dataIndex: 'location',
      key: 'location',
      className: 'table-cell-key',
      width: 150,
    },
    {
      title: 'Productos',
      dataIndex: 'cartItems',
      key: 'cartItems',
      className: 'table-cell-key',
      render: (cartItems, record) => (
        <div className="products-cell">
          <span
            className="ant-table-row-expand-icon"
            onClick={() => onExpand(record.id)}
          >
            {expandedRowKeys.includes(record.id) ? '▼' : '▶'}
          </span>
          <span>{cartItems.length} productos</span>
        </div>
      ),
      width: 150,
    },
    {
      title: 'Total',
      dataIndex: '',
      key: 'totalPrice',
      className: 'table-cell-key',
      render: (text, record) => {
        const content = (
          <div>
            <div>Subtotal: {record.price}</div>
            <div>Envío: {record.shippingCost}</div>
          </div>
        );
        return (
          <Popover content={content} title="Detalles del Total">
            <div className="table-cell-value">{record.totalPrice}</div>
          </Popover>
        );
      },
      width: 150,
    },
    {
      title: 'Estado',
      dataIndex: 'status',
      key: 'status',
      className: 'table-cell-key',
      render: (status, record) => (
        <Select
          defaultValue={status}
          className="status-select"
          onChange={(newStatus) => onStatusChange(record.id, newStatus)}
        >
          <Option value="Pendiente">Pendiente</Option>
          <Option value="Enviado">Enviado</Option>
          <Option value="Completado">Entregado</Option>
        </Select>
      ),
      width: 150,
    },
    {
      title: 'Fecha',
      dataIndex: 'date',
      key: 'date',
      className: 'table-cell-key',
      render: (date) => new Date(date).toLocaleString(),
      width: 200,
    },
    {
      title: 'ID de Pago',
      dataIndex: 'paymentId',
      key: 'paymentId',
      className: 'table-cell-key',
      width: 200,
    },
  ];

  const expandedRowRender = (record) => (
    <ul className="expanded-row-list">
      {record.cartItems.map((item, index) => (
        <li key={index}>
          <span className="item-name">{item.name}</span>
          <span className="item-quantity">Cantidad: {item.quantity}</span>
          <span className="item-price">Precio: {item.price}</span>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="table-container">
      <Table
        dataSource={orders}
        columns={columns}
        rowKey="id"
        className="table-card"
        expandable={{
          expandedRowRender,
          expandIconColumnIndex: -1, // Esto deshabilita el ícono de expansión predeterminado
          expandedRowKeys,
          onExpand: (expanded, record) => onExpand(record.id)
        }}
        rowClassName="table-row"
        scroll={{ x: 1500 }}
      />
    </div>
  );
};

export default RecentOrders;
