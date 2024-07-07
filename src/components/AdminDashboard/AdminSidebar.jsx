import React, { useState } from 'react';
import { Layout, Menu, Space } from 'antd';
import { AppstoreOutlined, ShopOutlined, UserOutlined, OrderedListOutlined, MailOutlined, LogoutOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { LogoStyles, RouteSection } from './DashboardStyles';
import NotificationComponent from '../../pages/Dashboard/Notificaciones/NotificationComponent';

const { Sider } = Layout;

const AdminSidebar = ({ collapsed, onCollapse }) => {
  const navigate = useNavigate();

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={onCollapse}
      theme="dark"
      collapsedWidth={100} // Ancho cuando está colapsado
      width={200} // Ancho normal cuando no está colapsado
      style={{ height: '100vh', position: 'fixed', zIndex: 100 }}
    >
      <Space direction="horizontal" style={{ display: 'flex', padding: '10px', justifyContent: 'center', alignItems: 'center', marginBottom: '20px' }}>
        <NotificationComponent />
        <MailOutlined style={{ fontSize: collapsed ? '18px' : '24px', color: '#ffffff' }} />
        <LogoutOutlined style={{ fontSize: collapsed ? '18px' : '24px', color: '#ffffff' }} />
      </Space>
      <LogoStyles>
        <img src="/Logo_7.png" alt="Animales" style={{ width: '100px', height: '80px' }} />
      </LogoStyles>
      <RouteSection>
        <Menu
          mode="inline"
          theme="dark"
          onClick={(item) => navigate(item.key)}
          style={{ ddisplay: 'flex', padding: '10px', justifyContent: 'center', alignItems: 'center'}}
          items={[

            {
              key: "panel",
              label: "Dashboard",
              icon: <AppstoreOutlined />
            },
            {
              key: "products",
              label: "Productos",
              icon: <ShopOutlined />
            },
            {
              key: "orders",
              label: "Órdenes",
              icon: <OrderedListOutlined />
            },
            {
              key: "estadisticas",
              label: "Estadisticas",
              icon: <UserOutlined />,
            }
          ]}
        />
      </RouteSection>
    </Sider>
  );
};

export default AdminSidebar;
