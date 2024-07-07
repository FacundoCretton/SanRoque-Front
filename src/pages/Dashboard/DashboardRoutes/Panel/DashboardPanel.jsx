import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Space, notification } from 'antd';
import { ShoppingCartOutlined, DollarCircleOutlined, ShoppingOutlined, UserOutlined } from '@ant-design/icons';
import DashboardCard from './DashboardPanelCard';
import RecentOrders from './RecentOrders';
import { calculateMonthlySales, countUniqueClients, calculateInventory } from './calculations';
import './styles.css';
import { BASE_URL } from '../../../../utils/constants';

const DashboardPanel = () => {
  const [orders, setOrders] = useState([]);
  const [expandedRowKeys, setExpandedRowKeys] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/orders`);
        setOrders(response.data);
      } catch (error) {
        console.error('Error al obtener las órdenes:', error);
      }
    };

    fetchOrders();
  }, []);

  const handleStatusChange = async (orderId, newStatus) => {
    try {
      await axios.put(`${BASE_URL}/api/orders/${orderId}`, { status: newStatus });
      setOrders(prevOrders =>
        prevOrders.map(order => (order.id === orderId ? { ...order, status: newStatus } : order))
      );

      notification.success({
        message: 'Éxito',
        description: 'Estado de la orden actualizado y correo electrónico enviado correctamente.'
      });
    } catch (error) {
      console.error('Error al actualizar el estado de la orden o enviar el correo electrónico:', error);
      notification.error({
        message: 'Error',
        description: 'No se pudo actualizar el estado de la orden o enviar el correo electrónico.'
      });
    }
  };

  const handleExpand = (id) => {
    setExpandedRowKeys((prevExpandedRowKeys) =>
      prevExpandedRowKeys.includes(id)
        ? prevExpandedRowKeys.filter((key) => key !== id)
        : [id]
    );
  };

  return (
    <div>
      <h2>Dashboard Panel</h2>
      <Space direction="horizontal">
        <DashboardCard
          icon={<ShoppingCartOutlined style={{ color: 'orange', backgroundColor: 'rgba(255, 255,0,0.25)', borderRadius: '15px', padding: '4px', fontSize: '20px' }}/>}
          title="Órdenes"
          value={orders.length}
        />
        <DashboardCard
          icon={<DollarCircleOutlined style={{ color: 'green', backgroundColor: 'rgba(0, 255,0,0.25)', borderRadius: '15px', padding: '4px', fontSize: '20px' }}/>}
          title="Ventas"
          value={`$${calculateMonthlySales(orders)}`}
        />
        <DashboardCard
          icon={<UserOutlined style={{ color: 'red', backgroundColor: 'rgba(255, 0,0,0.25)', borderRadius: '15px', padding: '4px', fontSize: '20px' }}/>}
          title="Clientes"
          value={countUniqueClients(orders)}
        />
        <DashboardCard
          icon={<ShoppingOutlined style={{ color: 'purple', backgroundColor: 'rgba(255, 0,255,0.25)', borderRadius: '15px', padding: '4px', fontSize: '20px' }}/>}
          title="Inventario"
          value={calculateInventory(orders)}
        />
      </Space>
      <RecentOrders
        orders={orders}
        onStatusChange={handleStatusChange}
        expandedRowKeys={expandedRowKeys}
        onExpand={handleExpand}
      />
    </div>
  );
};

export default DashboardPanel;
