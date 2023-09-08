import * as React from "react";
import Article from "../Article";
import PropTypes from "prop-types";


const ArchiveList = ({ articles, articleCount }) => {
  const [newsArticles, setArticles] = React.useState(articles);

  return (
    newsArticles && newsArticles.length ?
    <div className="env-cardholder-grid">
      {
       newsArticles.slice(0, articleCount).map((article) => 
       article ?
       <Article key={article.id} article={article} />
       : null
       )
      }
    </div>
    : null
  );
};

ArchiveList.propTypes = {
  articles: PropTypes.array,
  articleCount: PropTypes.string,
};

export default ArchiveList;
