import { Layout } from 'antd';
import AdminSidebar from '../../components/AdminDashboard/AdminSidebar';
import AdminDashboard from '../../components/AdminDashboard/AdminDashboard';
import { SidebarAndDashboard } from '../../components/AdminDashboard/DashboardStyles';
import { useState } from 'react';

const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);

  const handleCollapse = (collapsed) => {
    setCollapsed(collapsed);
  };

  return (
    <SidebarAndDashboard>
      <AdminSidebar collapsed={collapsed} onCollapse={handleCollapse} />
      <div style={{ marginLeft: collapsed ? 100 : 200, transition: 'margin-left 0.2s' }}>
        <AdminDashboard />
      </div>
    </SidebarAndDashboard>
  );
};

export default Dashboard;
