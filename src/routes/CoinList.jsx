import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCoins } from "../store/slices/coin";
import { CoinTable } from "../components/CoinTable/CoinTable";
import { Navigation } from "../layout/Navigation/Navigation";
import "../sass/pages/CoinList.scss";
import Filter from "../components/Filter/Filter";
export const CoinList = () => {
  const [coinList, setCoinLst] = useState([]);
  const coin = useSelector((state) => state.coin);
  const filteredCoin = useSelector((state) => state.filteredCoin);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCoins());
  }, []);

  useEffect(() => {
    setCoinLst(filteredCoin.coins);
  }, [filteredCoin]);

  useEffect(() => {
    setCoinLst(coin.coins);
  }, [coin]);

  return (
    <div>
      <Navigation page={"coins"} />
      <Filter />
      <CoinTable coins={coinList} />
    </div>
  );
};
