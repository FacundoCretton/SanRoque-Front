// categoriesSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { Categories } from "../../components/Data/Categories";

const INITIAL_STATE = {
  categories: Categories,
  selectedCategory: "Todos",
  selectedSubcategory: null,
  precioSortOrder: "asc", // Agregamos el estado para el orden de precios
};

export const categoriesSlice = createSlice({
  name: "categories",
  initialState: INITIAL_STATE,
  reducers: {
    getCategories: (state) => {
      return state;
    },
    selectCategory: (state, action) => {
      return {
        ...state,
        selectedCategory:
          action.payload !== state.selectedCategory ? action.payload : null,
      };
    },
    selectSubcategory: (state, action) => {
      return {
        ...state,
        selectedSubcategory: action.payload,
      };
    },
    togglePrecioSortOrder: (state) => {
      return {
        ...state,
        precioSortOrder: state.precioSortOrder === "asc" ? "desc" : "asc",
      };
    },
  },
});

export const { getCategories, selectCategory, selectSubcategory, togglePrecioSortOrder } = categoriesSlice.actions;

export default categoriesSlice.reducer;
