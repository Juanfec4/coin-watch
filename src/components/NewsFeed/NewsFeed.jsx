import { NewsCard } from "../NewsCard/NewsCard";
import "./NewsFeed.scss";
export const NewsFeed = ({ articles }) => {
  if (!articles.length) {
    return;
  }
  return (
    <div className="feed-container">
      {articles.map((article) => {
        return <NewsCard key={article.title} article={article} />;
      })}
    </div>
  );
};
