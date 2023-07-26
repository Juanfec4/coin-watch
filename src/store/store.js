import { configureStore } from "@reduxjs/toolkit";
import coinReducer from "./slices/coin";
import filteredCoinReducer from "./slices/filteredCoin";

const store = configureStore({
  reducer: {
    coin: coinReducer,
    filteredCoin: filteredCoinReducer,
  },
});

export default store;
