import React from 'react';
import { Bar } from 'react-chartjs-2';
import PropTypes from 'prop-types';

const CategoryChart = ({ data }) => {
  return (
    <div>
      <h3>Ventas por Categoría</h3>
      <Bar
        data={data}
        options={{
          responsive: true,
          scales: {
            x: { beginAtZero: true },
            y: { beginAtZero: true }
          }
        }}
      />
    </div>
  );
};

CategoryChart.propTypes = {
  data: PropTypes.object.isRequired,
};

export default CategoryChart;
