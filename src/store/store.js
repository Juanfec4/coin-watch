import { configureStore } from "@reduxjs/toolkit";
import coinReducer from "./slices/coin";

const store = configureStore({
  reducer: {
    coin: coinReducer,
  },
});

export default store;
