import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    name: '',
  },
  reducers: {
    setFilter: (state, action) => {
      state.name = action.payload;
    }
  }
});

export const { setFilter } = filtersSlice.actions;

export const selectFilter = (state) => state.filters.name;

export default filtersSlice.reducer;



