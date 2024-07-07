import React from 'react';
import { Bar } from 'react-chartjs-2';
import styled from 'styled-components';

const ChartContainer = styled.div`
  width: 100%;
  height: 400px;
`;

const SalesChart = ({ data }) => (
  <ChartContainer>
    <Bar
      data={data}
      options={{
        maintainAspectRatio: false,
        scales: {
          y: { beginAtZero: true },
        },
      }}
    />
  </ChartContainer>
);

export default SalesChart;
