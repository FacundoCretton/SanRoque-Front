import React from 'react';
import { Button } from 'antd';

const TimeButtons = ({ timeRange, onTimeChange }) => (
  <div style={{ marginBottom: 10 }}>
    <Button type={timeRange === 'daily' ? 'primary' : 'default'} onClick={() => onTimeChange('daily')}>Día</Button>
    <Button type={timeRange === 'weekly' ? 'primary' : 'default'} onClick={() => onTimeChange('weekly')}>Semana</Button>
    <Button type={timeRange === 'monthly' ? 'primary' : 'default'} onClick={() => onTimeChange('monthly')}>Mes</Button>
    <Button type={timeRange === 'yearly' ? 'primary' : 'default'} onClick={() => onTimeChange('yearly')}>Año</Button>
  </div>
);

export default TimeButtons;
