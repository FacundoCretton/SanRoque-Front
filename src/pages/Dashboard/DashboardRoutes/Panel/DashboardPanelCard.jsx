import React from 'react';
import { Card, Space, Statistic } from 'antd';

const DashboardPanelCard = ({ title, value, icon }) => {
  return (
    <Card>
      <Space direction="horizontal">
        {icon}
        <Statistic title={title} value={value} />
      </Space>
    </Card>
  );
};

export default DashboardPanelCard;
