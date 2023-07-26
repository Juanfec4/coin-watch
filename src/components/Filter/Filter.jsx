import { useEffect, useState } from "react";
import filterService from "../../services/filter";
import { useSelector, useDispatch } from "react-redux";
import { changeOrder } from "../../store/slices/filteredCoin";
import "./Filter.scss";
const Filter = () => {
  const [searchParam, setSearchParam] = useState("");
  const coin = useSelector((state) => state.coin);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!coin.coins) {
      return;
    }
    dispatch(changeOrder(coin.coins));
  }, [coin]);

  useEffect(() => {
    let filteredCoins = filterService.filterBySearch(coin.coins, searchParam);
    dispatch(changeOrder(filteredCoins));
  }, [searchParam]);

  const handleSearchChange = (e) => {
    setSearchParam(e.target.value);
  };

  const handleSortChange = (e) => {
    setSearchParam("");
    let filteredCoins = filterService.sortBy(coin.coins, e.target.value);
    dispatch(changeOrder(filteredCoins));
  };
  return (
    <div className="filter">
      <input
        className="filter__search"
        type="text"
        placeholder="Search"
        onChange={handleSearchChange}
        value={searchParam}
      />
      <div className="filter__container">
        <label htmlFor="sortBy" className="filter__label">
          Sort coins by
        </label>
        <select
          name="sortCoins"
          id="sortBy"
          onChange={handleSortChange}
          className="filter__select"
        >
          <option value="nameAZ">Name A-Z</option>
          <option value="nameZA">Name Z-A</option>
          <option value="priceAsc">Price Asc.</option>
          <option value="priceDesc">Price Desc.</option>
          <option value="marketCapAsc">Market Cap. Asc.</option>
          <option value="marketCapDesc" selected="selected">
            Market Cap. Desc.
          </option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
