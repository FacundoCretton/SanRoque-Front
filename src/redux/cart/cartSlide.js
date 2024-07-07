import { createSlice } from "@reduxjs/toolkit";
import { addItemToCart, removeItemFromCart } from "./cartUtils";
import { SHIPPING_PERCENTAGE, FREE_SHIPPING_THRESHOLD } from "../../utils/constants";

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
  shippingCost: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: INITIAL_STATE,
  reducers: {
    addToCart: (state, action) => {
      const { cartItems } = state;
      const itemToAdd = action.payload;
      const updatedCartItems = addItemToCart(cartItems, itemToAdd);

      const totalPrice = updatedCartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

      let shippingCost = totalPrice * SHIPPING_PERCENTAGE;
      if (totalPrice > FREE_SHIPPING_THRESHOLD) {
        shippingCost = 0;
      }

      return {
        ...state,
        shippingCost,
        cartItems: updatedCartItems,
      };
    },

    removeFromCart: (state, action) => {
      const updatedCartItems = removeItemFromCart(state.cartItems, action.payload);

      const totalPrice = updatedCartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

      let shippingCost = totalPrice * SHIPPING_PERCENTAGE;
      if (totalPrice > FREE_SHIPPING_THRESHOLD) {
        shippingCost = 0;
      }

      return {
        ...state,
        shippingCost,
        cartItems: updatedCartItems,
      };
    },

    clearCart: (state) => {
      return {
        ...state,
        shippingCost: 0,
        cartItems: [],
      };
    },

    toggleCartHidden: (state) => {
      return {
        ...state,
        hidden: !state.hidden,
      };
    },
  },
});

export const { addToCart, removeFromCart, clearCart, toggleCartHidden } = cartSlice.actions;
export default cartSlice.reducer;
