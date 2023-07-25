import axios from "axios";

const API_URL = "https://api.coingecko.com/api/v3/coins/";
const getInfo = (ID) => {
  return axios.get(API_URL + ID);
};

const getCoin = (ID) => {
  const URL = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${ID}&order=market_cap_desc&per_page=1&page=1&sparkline=true&locale=en`;
  return axios.get(URL);
};

export default { getInfo, getCoin };
