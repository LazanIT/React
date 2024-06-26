import { createSlice } from "@reduxjs/toolkit";

const SearchParamsSlice = createSlice({
  name: "SearchParams",
  initialState: {
    value: {
      location: "",
      breed: "",
      animal: "",
    },
  },
  reducers: {
    all: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { all } = SearchParamsSlice.actions;
export default SearchParamsSlice.reducer;
