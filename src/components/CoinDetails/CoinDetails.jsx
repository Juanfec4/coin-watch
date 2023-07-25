import "./CoinDetails.scss";
export const CoinDetails = ({ coin }) => {
  if (!coin) {
    return;
  }
  return (
    <table className="table">
      <tbody className="table__body">
        <tr className="table__row">
          <td className="table__row-category">Market Cap Rank</td>
          <td className="table__row-content">#{coin.market_cap_rank}</td>
        </tr>
        <tr>
          <td className="table__row-category">Market Cap</td>
          <td className="table__row-content">
            ${coin.market_cap.toLocaleString()}
          </td>
        </tr>
        <tr>
          <td className="table__row-category">Total Supply</td>
          <td className="table__row-content">
            {coin.circulating_supply.toLocaleString()}
          </td>
        </tr>
        <tr>
          <td className="table__row-category">Total Volume</td>
          <td className="table__row-content">
            {coin.total_volume.toLocaleString()}
          </td>
        </tr>
      </tbody>
    </table>
  );
};
