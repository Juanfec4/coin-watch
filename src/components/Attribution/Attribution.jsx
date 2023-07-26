import "./Attribution.scss";
export const Attribution = ({ source }) => {
  const { name, url, img } = source;
  return (
    <div className="attribution">
      <p className="attribution__text">API Powered by:</p>
      <img src={img} alt={name} className="attribution__image" />
      <a href={url} className="attribution__link">
        {name}
      </a>
    </div>
  );
};
