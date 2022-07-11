import { configureStore } from '@reduxjs/toolkit'
import fetchProducts from '../reducers/fetchProducts'
import fetchCategories from '../reducers/fetchCategories'
import addToCart from '../reducers/addToCart'

export const store = configureStore({
  reducer: {fetchProducts, fetchCategories, addToCart },
})