const filterBySearch = (coins, targetString) => {
  return coins.filter((coin) =>
    coin.name.toLowerCase().startsWith(targetString.toLowerCase())
  );
};

const sortBy = (coins, parameter) => {
  switch (parameter) {
    case "nameAZ":
      return coins.slice().sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      });
    case "nameZA":
      return coins.slice().sort((a, b) => {
        if (a.name > b.name) {
          return -1;
        }
        if (a.name < b.name) {
          return 1;
        }
        return 0;
      });
    case "priceAsc":
      return coins.slice().sort((a, b) => {
        if (a.current_price < b.current_price) {
          return -1;
        }
        if (a.current_price > b.current_price) {
          return 1;
        }
        return 0;
      });
    case "priceDesc":
      return coins.slice().sort((a, b) => {
        if (a.current_price > b.current_price) {
          return -1;
        }
        if (a.current_price < b.current_price) {
          return 1;
        }
        return 0;
      });
    case "marketCapAsc":
      return coins.slice().sort((a, b) => {
        if (a.market_cap < b.market_cap) {
          return -1;
        }
        if (a.market_cap > b.market_cap) {
          return 1;
        }
        return 0;
      });
    case "marketCapDesc":
      return coins.slice().sort((a, b) => {
        if (a.market_cap > b.market_cap) {
          return -1;
        }
        if (a.market_cap < b.market_cap) {
          return 1;
        }
        return 0;
      });
  }
  return [];
};

export default { filterBySearch, sortBy };
