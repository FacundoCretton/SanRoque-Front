import React, { useState, useEffect } from 'react';
import { Badge, Popover, List, Button } from 'antd';
import { BellFilled } from '@ant-design/icons';
import axios from 'axios';
import './NotificationStyles.css';

const NotificationComponent = () => {
  const [notifications, setNotifications] = useState([]);
  const [unreadCount, setUnreadCount] = useState(0);

  const fetchNotifications = async () => {
    try {
      const [ordersResponse, productsResponse] = await Promise.all([
        axios.get('http://localhost:8080/api/orders'),
        axios.get('http://localhost:8080/api/products')
      ]);

      const orders = ordersResponse.data;
      const products = productsResponse.data;

      const storedNotifications = JSON.parse(localStorage.getItem('notifications')) || [];

      const recentNotifications = storedNotifications.filter(n => {
        const ageInHours = (new Date() - new Date(n.timestamp)) / (1000 * 60 * 60);
        return ageInHours <= 24;
      });

      const orderNotification = {
        id: new Date().getTime(),
        message: `Tienes ${orders.length} nuevas órdenes!`,
        type: 'order',
        link: '/dashboard/orders',
        timestamp: new Date().toISOString()
      };

      const existingOrderNotification = recentNotifications.find(n => n.type === 'order' && n.message === orderNotification.message);
      if (!existingOrderNotification) {
        recentNotifications.push(orderNotification);
      }

      const lowOrNoStockProducts = products.filter(product => product.previousStock > 0 && (product.stock === 10 || product.stock === 0));
      lowOrNoStockProducts.forEach(product => {
        const stockMessage = product.stock === 0 ? `Producto ${product.name} está sin stock!` : `Producto ${product.name} está con stock bajo (10 unidades)!`;
        const stockNotification = {
          id: new Date().getTime() + product.id,
          message: stockMessage,
          type: 'stock',
          timestamp: new Date().toISOString()
        };
        recentNotifications.push(stockNotification);
      });

      const readNotifications = recentNotifications.filter(n => n.read).slice(-5);
      const unreadNotifications = recentNotifications.filter(n => !n.read);

      const combinedNotifications = [...unreadNotifications, ...readNotifications];

      setNotifications(combinedNotifications);
      setUnreadCount(unreadNotifications.length);

      localStorage.setItem('notifications', JSON.stringify(combinedNotifications));
    } catch (error) {
      console.error("Error al obtener las notificaciones:", error);
    }
  };

  useEffect(() => {
    fetchNotifications();

    const interval = setInterval(() => {
      fetchNotifications();
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const handleClearNotifications = () => {
    setNotifications([]);
    setUnreadCount(0);
    localStorage.removeItem('notifications');
  };

  const handlePopoverVisibleChange = (visible) => {
    if (visible) {
      const updatedNotifications = notifications.map(n => ({ ...n, read: true }));
      setNotifications(updatedNotifications);
      setUnreadCount(0);
      localStorage.setItem('notifications', JSON.stringify(updatedNotifications));
    }
  };

  const notificationContent = (
    <div className="notification-popover">
      <List
        size="small"
        dataSource={notifications}
        renderItem={item => (
          <List.Item key={item.id} className={`notification-item ${item.read ? '' : 'notification-unread'}`}>
            {item.type === 'order' ? (
              <a href={item.link} className="notification-link">
                {item.message}
              </a>
            ) : (
              <span>{item.message}</span>
            )}
          </List.Item>
        )}
        className="notification-list"
      />
      <Button type="link" onClick={handleClearNotifications} className="clear-button">
        Borrar todo
      </Button>
    </div>
  );

  return (
    <Popover
      placement="bottomRight"
      title="Notificaciones"
      content={notificationContent}
      trigger="click"
      onVisibleChange={handlePopoverVisibleChange}
    >
      <Badge count={unreadCount} dot={unreadCount > 0} style={{ fontSize: 10 }}>
        <BellFilled style={{ fontSize: 24 }} />
      </Badge>
    </Popover>
  );
};

export default NotificationComponent;
