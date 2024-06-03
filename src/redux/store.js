import { rtkApi } from "@/api/rtkApi";
import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./counter/slice";
import { pizzasReducer } from "./pizzas/slice/pizzasSlice";
import { rollsReducer } from "./rolls/slice/rollsSlice";
import { othersReducer } from "./others/slice/othersSlice";
import { productReducer } from "./productItem/slice/productItemSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    pizzas: pizzasReducer,
    rolls: rollsReducer,
    others: othersReducer,
    product: productReducer,
    [rtkApi.reducerPath]: rtkApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(rtkApi.middleware),
});
