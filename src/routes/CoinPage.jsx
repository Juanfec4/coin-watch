import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { CoinInfo } from "../components/CoinInfo/CoinInfo";
import { CoinCard } from "../components/CoinCard/CoinCard";
import { CoinDetails } from "../components/CoinDetails/CoinDetails";
import { Navigation } from "../layout/Navigation/Navigation";
import infoService from "../services/InfoService";
import "../sass/pages/CoinPage.scss";

export const CoinPage = () => {
  const { id } = useParams();
  const [description, setDescription] = useState({
    text: "",
    error: "",
  });
  const [coin, setCoin] = useState({
    details: undefined,
    error: "",
  });
  useEffect(() => {
    //Get description
    infoService
      .getInfo(id)
      .then((response) => {
        setDescription({
          ...description,
          text: response.data.description.en,
          error: "",
        });
      })
      .catch((error) => {
        setDescription({
          ...description,
          text: "",
          error: error.message,
        });
      });
    //Get details
    infoService
      .getCoin(id)
      .then((response) => {
        setCoin({
          ...coin,
          details: response.data[0],
          error: "",
        });
      })
      .catch((error) => {
        setCoin({
          ...coin,
          details: "",
          error: error.message,
        });
      });
  }, []);
  return (
    <div>
      <Navigation page={"coin"} />
      {coin.error ? (
        <h2 className="error">
          API Limit reached (Please upgrade to paid plan)
        </h2>
      ) : (
        <CoinCard coin={coin.details} />
      )}
      <CoinDetails coin={coin.details} />
      <CoinInfo description={description} />
    </div>
  );
};
