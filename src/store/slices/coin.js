import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "https://api.coingecko.com/api/v3/coins/markets";

const initialState = {
  loading: false,
  coins: [],
  error: "",
};

const config = {
  params: {
    vs_currency: "usd",
    order: "market_cap_desc",
    per_page: 50,
    page: 1,
    sparkline: true,
    locale: "en",
  },
};
//Fetch the coins from the API
export const fetchCoins = createAsyncThunk("coin/fetchCoins", () => {
  return axios.get(API_URL, config).then((response) => {
    return response.data;
  });
});

const coinSlice = createSlice({
  name: "coin",
  initialState: initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchCoins.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchCoins.fulfilled, (state, action) => {
      state.loading = false;
      state.coins = action.payload;
      state.error = "";
    });

    builder.addCase(fetchCoins.rejected, (state, action) => {
      state.loading = false;
      state.coins = [];
      state.error = action.payload;
    });
  },
});

export default coinSlice.reducer;
