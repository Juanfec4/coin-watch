import "./CoinTable.scss";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CoinTableRow } from "./CoinTableRow";
export const CoinTable = ({ coins }) => {
  const navigateTo = useNavigate();
  const [selectedCoin, setSelectedCoin] = useState(undefined);
  useEffect(() => {
    if (!selectedCoin) {
      return;
    }
    navigateTo(`/coin/${selectedCoin}`);
  }, [selectedCoin]);

  const handleNavigate = (id) => {
    return setSelectedCoin(id);
  };
  if (!coins.length) {
    return;
  }

  return (
    <table className="table">
      <thead className="table__headings">
        <tr className="table__headings-row">
          <td className="table__headings-row-data">
            <h3 className="table__heading">Coin</h3>
          </td>
          <td className="table__headings-row-data">
            <h3 className="table__heading">Price</h3>
          </td>
          <td className="table__headings-row-data">
            <h3 className="table__heading">Market Cap</h3>
          </td>
        </tr>
      </thead>
      <tbody className="table__body">
        {coins.map((coin) => {
          return (
            <CoinTableRow
              key={coin.id}
              coin={coin}
              handleNavigate={handleNavigate}
            />
          );
        })}
      </tbody>
    </table>
  );
};
