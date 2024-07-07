// DashboardStyles.js

import styled from 'styled-components';
import { Layout } from 'antd';

const { Sider } = Layout;

export const SidebarAndDashboard = styled(Layout)`
  display: flex;
  height: 100%;
`;

export const SidebarAdminStyles = styled(Sider)`
  .ant-menu {
    background-color: #001529;
    color: #ffffff;
  }

  .ant-menu-item {
    color: #ffffff;
  }

  .ant-menu-item-selected {
    background-color: #1890ff;
  }

  .ant-menu-item:hover {
    background-color: #40a9ff;
  }
`;

export const IconSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
`;

export const LogoStyles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 10px;
  font-weight: bold;
`;

export const RouteSection = styled.div`
  flex: 1;
`;

export const PageContentStyles = styled(Layout.Content)`
  padding: 20px;
  background: #f0f2f5;
`;

export const HeaderAdminStyles = styled(Layout.Header)`
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  background: #fff;
  border-bottom: 1px solid rgba(0,0,0,0.1);
`;
