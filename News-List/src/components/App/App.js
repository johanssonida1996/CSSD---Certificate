import * as React from "react";
import Article from "../Article";
import PropTypes from "prop-types";


const ArchiveList = ({ articles }) => {

  return (
    articles ? (
      <div className="env-cardholder-grid">
        {articles.map((article) =>
          article ? <Article key={article.id} article={article} /> : null
        )}
      </div>
    ) : null
  );
};

ArchiveList.propTypes = {
  articles: PropTypes.array,
};

export default ArchiveList;
