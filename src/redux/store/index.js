import { configureStore } from '@reduxjs/toolkit'
import fetchAPI from '../reducers/fetchAPI'
import fetchCategories from '../reducers/fetchCategories'

export const store = configureStore({
  reducer: {fetchAPI, fetchCategories},
})