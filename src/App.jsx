import { CoinPage } from "./routes/CoinPage";
import { Routes, Route } from "react-router-dom";
import { CoinList } from "./routes/CoinList";
import { NewsPage } from "./routes/NewsPage";
import "./sass/App.scss";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<CoinList />} />
        <Route path="coin/:id" element={<CoinPage />} />
        <Route path="news" element={<NewsPage />} />
      </Routes>
    </div>
  );
}

export default App;
