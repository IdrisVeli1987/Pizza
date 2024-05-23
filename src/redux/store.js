import { rtkApi } from "@/api/rtkApi";
import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./counter/slice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [rtkApi.reducerPath]: rtkApi.reducer,
  },
  
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(rtkApi.middleware),
});
