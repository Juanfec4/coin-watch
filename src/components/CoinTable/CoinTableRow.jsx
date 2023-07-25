export const CoinTableRow = ({ coin, handleNavigate }) => {
  return (
    <tr className="table__row" onClick={() => handleNavigate(coin.id)}>
      <td className="table__row-data">
        <img src={coin.image} className="table__row-image" />
        <h4 className="table__row-text--title">{coin.name}</h4>
      </td>
      <td className="table__row-text">
        <p className="price">
          $
          {coin.current_price.toLocaleString(undefined, {
            maximumFractionDigits: 8,
          })}
        </p>
        {coin.price_change_percentage_24h > 0 ? (
          <p className="positive">
            +{coin.price_change_percentage_24h.toFixed(3)}%
          </p>
        ) : coin.price_change_percentage_24h < 0 ? (
          <p className="negative">
            {coin.price_change_percentage_24h.toFixed(3)}%
          </p>
        ) : (
          <p className="neutral">
            {coin.price_change_percentage_24h.toFixed(3)}%
          </p>
        )}
      </td>
      <td className="table__row-text">
        <p>${coin.market_cap.toLocaleString()}</p>
      </td>
    </tr>
  );
};
