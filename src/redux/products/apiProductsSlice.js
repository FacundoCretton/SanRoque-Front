import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../../utils/constants';

export const fetchApiProducts = createAsyncThunk('apiProducts/fetchApiProducts', async () => {
    const response = await axios.get(`${BASE_URL}/api/products`);
    return response.data;
});

export const addApiProduct = createAsyncThunk('apiProducts/addApiProduct', async (newProduct) => {
    const response = await axios.post(`${BASE_URL}/api/products`, newProduct);
    return response.data;
});

export const updateApiProduct = createAsyncThunk('apiProducts/updateApiProduct', async ({ id, updatedProduct }) => {
    const response = await axios.put(`${BASE_URL}/api/products/${id}`, updatedProduct);
    return response.data;
});

export const deleteApiProduct = createAsyncThunk('apiProducts/deleteApiProduct', async (id) => {
    await axios.delete(`${BASE_URL}/api/products/${id}`);
    return id;
});

const apiProductsSlice = createSlice({
    name: 'apiProducts',
    initialState: {
        items: [],
        status: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchApiProducts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchApiProducts.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.items = action.payload;
            })
            .addCase(fetchApiProducts.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(addApiProduct.fulfilled, (state, action) => {
                state.items.push(action.payload);
            })
            .addCase(updateApiProduct.fulfilled, (state, action) => {
                const index = state.items.findIndex(product => product._id === action.payload._id);
                if (index !== -1) {
                    state.items[index] = action.payload;
                }
            })
            .addCase(deleteApiProduct.fulfilled, (state, action) => {
                state.items = state.items.filter(product => product._id !== action.payload);
            });
    }
});

export default apiProductsSlice.reducer;
