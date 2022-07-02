import { configureStore } from '@reduxjs/toolkit'
import fetchProducts from '../reducers/fetchProducts'
import fetchCategories from '../reducers/fetchCategories'

export const store = configureStore({
  reducer: {fetchProducts, fetchCategories},
})