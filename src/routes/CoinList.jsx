import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCoins } from "../store/slices/coin";
import { CoinTable } from "../components/CoinTable/CoinTable";
import { Navigation } from "../layout/Navigation/Navigation";
import "../sass/pages/CoinList.scss";
export const CoinList = () => {
  const coin = useSelector((state) => state.coin);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCoins());
  }, []);
  return (
    <div>
      <Navigation page={"coins"} />
      <CoinTable coins={coin.coins} />
    </div>
  );
};
