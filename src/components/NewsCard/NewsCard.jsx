import "./NewsCard.scss";
export const NewsCard = ({ article }) => {
  const { title, description, url, image, source } = article;
  return (
    <div className="card">
      <h3 className="card__title">{title}</h3>
      <img src={image} alt={title} className="card__image" />
      <p className="card__content">{description}</p>
      <a href={url} className="card__link">
        Read more
      </a>
      <div className="card__source-container">
        <h3 className="card__source-heading">Published by:</h3>
        <a href={source.url} className="card__source-link">
          {source.name}
        </a>
      </div>
    </div>
  );
};
