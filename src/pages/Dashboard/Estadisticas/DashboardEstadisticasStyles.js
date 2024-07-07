import { Card } from 'antd';
import styled from 'styled-components';

export const DashboardContainer = styled.div`
  padding: 20px;
  background: #f0f2f5;
  min-height: 100vh;
  transition: width 0.2s;

  &.ant-layout-has-sider {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const ControlPanel = styled.div`
  margin-bottom: 20px;
`;

export const CustomCard = styled(Card)`
  margin-bottom: 10px;
  background-color: ${(props) => props.bgColor || '#ffffff'};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  .ant-card-body {
    padding: 16px;
  }
`;

// Estilos específicos para las tarjetas más largas que altas
export const CustomCardStats = styled(CustomCard)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100px; // Altura fija para hacer las tarjetas más largas que altas
  text-align: center;
  .ant-statistic {
    margin-bottom: 0;
  }
`;

// Estilos para hacer los gráficos más grandes y con menos espaciado
export const ChartContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .ant-card {
    width: 100%;
    height: 400px;
  }
`;
