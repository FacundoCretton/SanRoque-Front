// productSpecificationsSlice.js

import { createSlice } from '@reduxjs/toolkit';
import { productsSpecifications } from '../../components/Data/especificacionesProductos';

const INITIAL_STATE = {
  specifications: productsSpecifications,
};

export const productSpecificationsSlice = createSlice({
  name: 'productSpecifications',
  initialState: INITIAL_STATE,
  reducers: {
    getSpecifications: (state) => state,
  },
});

export const { getSpecifications } = productSpecificationsSlice.actions;
export default productSpecificationsSlice.reducer;
