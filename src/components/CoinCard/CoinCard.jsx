import { CoinChart } from "../CoinChart/CoinChart";
import "./CoinCard.scss";
export const CoinCard = ({ coin }) => {
  if (!coin) {
    return;
  }
  const coinPrice = coin.current_price.toLocaleString(undefined, {
    maximumFractionDigits: 8,
  });

  const coinChartData = coin.sparkline_in_7d.price.map((value, index) => ({
    x: index,
    y: value.toFixed(2),
  }));

  const getCoinStyle = () => {
    let coinNameStyle = {};
    if (coin.name.length > 10) {
      coinNameStyle.fontSize = "1rem";
      return coinNameStyle;
    }
    return;
  };
  return (
    <div className="coin">
      <div className="coin__chart-container">
        <h1 className="coin__chart-title"> {coin.name} - 7 day trend</h1>
        <div className="coin__chart-frame">
          <CoinChart
            coinData={coinChartData}
            coinTrend={coin.price_change_percentage_24h}
          />
        </div>
      </div>
      <div className="coin__details">
        <div className="coin__information-container">
          <div className="coin__image-container">
            <img
              src={coin.image}
              alt={`${coin.name} symbol`}
              className="coin__image"
            />
          </div>
          <div className="coin__information">
            <h3 className="coin__information-heading" style={getCoinStyle()}>
              {coin.name}
            </h3>
            <h4 className="coin__information-subheading">
              {coin.symbol.toUpperCase()}
            </h4>
          </div>
        </div>
        <div className="coin__price-container">
          <h3 className="coin__information-heading">${coinPrice}</h3>
          {coin.price_change_percentage_24h > 0 ? (
            <h4 className="coin__information-subheading--positive">
              +{coin.price_change_percentage_24h.toFixed(3)}%
            </h4>
          ) : coin.price_change_percentage_24h < 0 ? (
            <h4 className="coin__information-subheading--negative">
              {coin.price_change_percentage_24h.toFixed(3)}%
            </h4>
          ) : (
            <h4 className="coin__information-subheading--neutral">
              {coin.price_change_percentage_24h.toFixed(0)}%
            </h4>
          )}
        </div>
      </div>
    </div>
  );
};
