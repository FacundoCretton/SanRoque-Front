import { createSlice } from '@reduxjs/toolkit';
import { Products, TotalProducts } from '../../components/Data/ProductsData';

const INITIAL_STATE = {
  products: Products,
  totalProducts: TotalProducts,
};

export const productsSlice = createSlice({
  name: 'products',
  initialState: INITIAL_STATE,
  reducers: {
    getProducts: (state) => state,
    addProduct: (state, action) => {
      state.products.push(action.payload);
      state.totalProducts += 1;
    },
  },
});

export const { getProducts, addProduct } = productsSlice.actions;
export default productsSlice.reducer;
