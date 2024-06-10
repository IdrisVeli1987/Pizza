import { rtkApi } from "@/api/rtkApi";
import { configureStore } from "@reduxjs/toolkit";
import { basketReducer } from "./basket/slice/basketSlice";
import { othersReducer } from "./others/slice/othersSlice";
import { pizzasReducer } from "./pizzas/slice/pizzasSlice";
import { productReducer } from "./productItem/slice/productItemSlice";
import { rollsReducer } from "./rolls/slice/rollsSlice";

export const store = configureStore({
  reducer: {
    pizzas: pizzasReducer,
    rolls: rollsReducer,
    others: othersReducer,
    product: productReducer,
    basket: basketReducer,
    [rtkApi.reducerPath]: rtkApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(rtkApi.middleware),
});
