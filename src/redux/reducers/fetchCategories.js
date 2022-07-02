import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getCategories } from '../../helpers/fetchAllApi'

export const fetchCategories = createAsyncThunk('fetchCategories', async () => {
  const categories = await getCategories()
  return categories
});

const initialState = {
  categories: [],
}

export const fetchByCategories = createSlice({
  name: 'fetchByCategories',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.categories = action.payload
    })
  }
})

export const selectCategories = (state) => state.fetchByCategories.categories

export default fetchByCategories.reducer
