import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Space, Row, Col, Card } from 'antd';
import SalesStatistics from './SalesStatistics';
import SalesChart from './SalesChart';
import TopProductsChart from './TopProductsChart';
import OrdersLineChart from './OrdersLineChart';
import { DashboardContainer, ControlPanel, CustomCard } from './DashboardEstadisticasStyles';

const DashboardEstadisticas = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/orders');
        setOrders(response.data);
      } catch (error) {
        console.error('Error al obtener las órdenes:', error);
      }
    };
    fetchOrders();
  }, []);

  const calculateSales = orders => orders.reduce((total, order) => total + order.totalPrice, 0);
  const calculateAverageOrderValue = orders => (orders.length === 0 ? 0 : calculateSales(orders) / orders.length);
  const calculateMaxOrderValue = orders => Math.max(...orders.map(order => order.totalPrice));
  const calculateMinOrderValue = orders => Math.min(...orders.map(order => order.totalPrice));

  return (
    <DashboardContainer>
      <ControlPanel>
        <Space direction="vertical" size="large" style={{ width: '100%' }}>
          <Row gutter={10}>
            <Col span={6}>
              <CustomCard bgColor="#f9c74f">
                <SalesStatistics totalSales={calculateSales(orders)} />
              </CustomCard>
            </Col>
            <Col span={6}>
              <CustomCard bgColor="#90be6d">
                <SalesStatistics totalOrders={orders.length} />
              </CustomCard>
            </Col>
            <Col span={6}>
              <CustomCard bgColor="#f8961e">
                <SalesStatistics averageOrderValue={calculateAverageOrderValue(orders)} />
              </CustomCard>
            </Col>
            <Col span={6}>
              <CustomCard bgColor="#43aa8b">
                <SalesStatistics maxOrderValue={calculateMaxOrderValue(orders)} />
              </CustomCard>
            </Col>
          </Row>
          <Row gutter={10}>
            <Col span={6}>
              <CustomCard bgColor="#f94144">
                <SalesStatistics minOrderValue={calculateMinOrderValue(orders)} />
              </CustomCard>
            </Col>
          </Row>
          <Row gutter={10}>
            <Col span={12}>
              <CustomCard>
                <SalesChart orders={orders} />
              </CustomCard>
            </Col>
            <Col span={12}>
              <CustomCard>
                <OrdersLineChart orders={orders} />
              </CustomCard>
            </Col>
          </Row>
          <Row gutter={10}>
            <Col span={24}>
              <CustomCard>
                <TopProductsChart orders={orders} />
              </CustomCard>
            </Col>
          </Row>
        </Space>
      </ControlPanel>
    </DashboardContainer>
  );
};

export default DashboardEstadisticas;
