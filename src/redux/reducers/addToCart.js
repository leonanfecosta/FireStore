import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products: [],
}

export const ShoppingCart = createSlice({
  name: 'ShoppingCart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.products = [...state.products, action.payload]
    }
  },
})

// Action creators are generated for each case reducer function
export const { addToCart } = ShoppingCart.actions

export default ShoppingCart.reducer