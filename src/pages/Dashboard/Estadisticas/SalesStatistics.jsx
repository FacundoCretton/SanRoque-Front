import React from 'react';
import { Card, Statistic } from 'antd';
import { ShoppingOutlined, DollarCircleOutlined, RiseOutlined } from '@ant-design/icons';
import { CustomCardStats } from './DashboardEstadisticasStyles';

const SalesStatistics = ({ totalSales, totalOrders, averageOrderValue, maxOrderValue, minOrderValue }) => (
  <>
    {totalSales !== undefined && (
      <CustomCardStats bgColor="#f9c74f">
        <Statistic
          title="Ventas Totales"
          value={totalSales}
          prefix={<DollarCircleOutlined />}
          precision={2}
        />
      </CustomCardStats>
    )}
    {totalOrders !== undefined && (
      <CustomCardStats bgColor="#90be6d">
        <Statistic
          title="Órdenes Totales"
          value={totalOrders}
          prefix={<ShoppingOutlined />}
        />
      </CustomCardStats>
    )}
    {averageOrderValue !== undefined && (
      <CustomCardStats bgColor="#f8961e">
        <Statistic
          title="Promedio de Valor de Orden"
          value={averageOrderValue}
          prefix={<DollarCircleOutlined />}
          precision={2}
        />
      </CustomCardStats>
    )}
    {maxOrderValue !== undefined && (
      <CustomCardStats bgColor="#43aa8b">
        <Statistic
          title="Valor Máximo de Orden"
          value={maxOrderValue}
          prefix={<RiseOutlined />}
          precision={2}
        />
      </CustomCardStats>
    )}
    {minOrderValue !== undefined && (
      <CustomCardStats bgColor="#f94144">
        <Statistic
          title="Valor Mínimo de Orden"
          value={minOrderValue}
          prefix={<RiseOutlined />}
          precision={2}
        />
      </CustomCardStats>
    )}
  </>
);

export default SalesStatistics;
