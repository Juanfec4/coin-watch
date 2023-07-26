import axios from "axios";

const NEWS_API = "https://gnews.io/api/v4/search";

const config = {
  params: {
    apikey: import.meta.env.VITE_NEWS_API_KEY,
    q: "crypto",
    lang: "en",
    max: 30,
  },
};
const getHeadlines = () => {
  return axios.get(NEWS_API, config);
};
export default { getHeadlines };
