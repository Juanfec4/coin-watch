import { Navigation } from "../layout/Navigation/Navigation";
import { NewsFeed } from "../components/NewsFeed/NewsFeed";
import { Attribution } from "../components/Attribution/Attribution";
import { useEffect, useState } from "react";
import newsService from "../services/news";
import "../sass/pages/NewsPage.scss";
export const NewsPage = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    newsService.getHeadlines().then((response) => {
      setArticles(response.data.articles);
    });
  }, []);
  return (
    <div>
      <Navigation page={"news"} />
      <h1 className="page-title">Latest Crypto News</h1>
      <NewsFeed articles={articles} />
      <Attribution
        source={{
          name: "GNews",
          url: "https://gnews.io/",
          img: "https://gnews.io/favicon.ico",
        }}
      />
    </div>
  );
};
