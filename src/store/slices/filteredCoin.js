import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  coins: [],
};

const filteredCoinSlice = createSlice({
  name: "filteredCoin",
  initialState: initialState,
  reducers: {
    changeOrder: (state, action) => {
      state.coins = action.payload;
    },
  },
});

export default filteredCoinSlice.reducer;
export const { changeOrder } = filteredCoinSlice.actions;
