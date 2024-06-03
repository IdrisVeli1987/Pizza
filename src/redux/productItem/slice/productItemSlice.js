import { createSlice } from "@reduxjs/toolkit";
import { fetchProductItem } from "../servieces/fetchProductItem";

const initialState = {
  product: [],
  isLoading: false,
  errors: null,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchProductItem.pending, (state) => {
      state.errors = null;
      state.isLoading = true;
    });
    builder.addCase(fetchProductItem.fulfilled, (state, action) => {
      state.isLoading = false;
      state.product = action.payload;
    });
    builder.addCase(fetchProductItem.rejected, (state, action) => {
      state.isLoading = false;
      state.errors = action.payload;
    });
  },
});
export const { actions: productActions } = productSlice;
export const { reducer: productReducer } = productSlice;
