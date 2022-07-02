import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getProductsFromQuery } from '../../helpers/fetchAllApi'

export const fetchAllProducts = createAsyncThunk('fetchProducts', async (query) => {
  const products = await getProductsFromQuery(query)
  return products
});

const initialState = {
  products: [],
  searchProducts: '',
  productsError: null,
}

export const fetchProducts = createSlice({
  name: 'fetcher',
  initialState,
  reducers: {
    setSearchProducts: (state, action) => {
      state.searchProducts = action.payload
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

export const { setSearchProducts } = fetchProducts.actions

export const selectProducts = (state) => state.fetcher.products
export const selectSearchProducts = (state) => state.fetcher.searchProducts

export default fetchProducts.reducer