"use client";
// import { add } from '@/lib/store/features/cart/cartSlice';
import { AppStore, makeStore, persistor } from "@/redux/store/store";
import React, { ReactNode, useRef } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

const StoreProvider = ({ children }: { children: ReactNode }) => {
  const storeRef = useRef<AppStore>(makeStore());

  return (
    <Provider store={storeRef.current}>
      {" "}
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
};

export default StoreProvider;
