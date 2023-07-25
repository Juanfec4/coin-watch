import { CoinPage } from "./routes/CoinPage";
import { Routes, Route } from "react-router-dom";
import { CoinList } from "./routes/CoinList";
import "./sass/App.scss";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/coins" element={<CoinList />} />
        <Route path="coin/:id" element={<CoinPage />} />
      </Routes>
    </div>
  );
}

export default App;
