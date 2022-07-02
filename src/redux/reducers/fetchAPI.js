import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getProductsFromQuery } from '../../helpers/fetchAllApi'

export const fetchAllProducts = createAsyncThunk('fetchProducts', async (query) => {
  const products = await getProductsFromQuery(query)
  return products
});

const initialState = {
  products: [],
  productsError: null,
}

export const fetchAPI = createSlice({
  name: 'fetcher',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllProducts.fulfilled, (state, action) => {
      state.products = action.payload
    })
    builder.addCase(fetchAllProducts.rejected, (state, action) => {
      state.productsError = action.payload
    })
  }
})

export const { setProducts } = fetchAPI.actions

export const selectProducts = (state) => state.fetcher.products
export const selectProductsError = (state) => state.fetcher.productsError

export default fetchAPI.reducer