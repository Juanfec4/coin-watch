export const formatHours = (hours) => {
  const newDate = new Date(subtractHours(new Date(), hours))
    .toDateString()
    .split(" ");
  return `${newDate[1]} - ${newDate[2]}`;
};

const subtractHours = (date, hours) => {
  return date.setHours(date.getHours() - hours);
};

export const formatPrice = (price) => {
  price = price.toLocaleString(undefined, {
    maximumFractionDigits: 8,
  });
  return `$${price}`;
};

export const getColor = (trend) => {
  if (trend < 0) {
    return { line: "#E82727", background: "rgba(232, 39, 39, 0.05)" };
  }
  if (trend > 0) {
    return { line: "#01B636", background: "rgba(59, 209, 111, 0.05)" };
  }
  return { line: "#FFD700", background: "rgba(255, 215, 0, 0.05)" };
};
