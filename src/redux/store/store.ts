import { configureStore } from "@reduxjs/toolkit";
import favoriteReducer from "@/redux/features/favoriteSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import persistStore from "redux-persist/es/persistStore";

// Persist configuration
const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, favoriteReducer);

// Create the store instance
const store = configureStore({
  reducer: {
    favorites: persistedReducer,
  },
});

// Create a persistor object using the store instance
export const persistor = persistStore(store);

// Export the store itself
export const makeStore = () => store;

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

// Create a persistor object
// export const persistor = persistStore(makeStore());
