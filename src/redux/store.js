import { rtkApi } from "@/api/rtkApi";
import { configureStore } from "@reduxjs/toolkit";
import { basketReducer } from "./basket/slice/basketSlice";
import { othersReducer } from "./others/slice/othersSlice";
import { pizzasReducer } from "./pizzas/slice/pizzasSlice";
import { productReducer } from "./productItem/slice/productItemSlice";
import { rollsReducer } from "./rolls/slice/rollsSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, basketReducer);

export const store = configureStore({
  reducer: {
    pizzas: pizzasReducer,
    rolls: rollsReducer,
    others: othersReducer,
    product: productReducer,
    basket: persistedReducer,
    [rtkApi.reducerPath]: rtkApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(rtkApi.middleware),
});

export const persistor = persistStore(store);
