import { configureStore } from '@reduxjs/toolkit'
import fetchAPI from '../reducers/fetchAPI'

export const store = configureStore({
  reducer: {fetchAPI},
})