import "./CoinInfo.scss";

export const CoinInfo = ({ description }) => {
  return (
    <div>
      {description.text ? (
        <h2 className="info-heading">About this coin</h2>
      ) : null}
      {description.error ? (
        <div className="info-container">
          {description.error}: API Limit reached (Please upgrade to paid plan)
        </div>
      ) : (
        <div
          className="info-container"
          dangerouslySetInnerHTML={{ __html: description.text }}
        ></div>
      )}
    </div>
  );
};
