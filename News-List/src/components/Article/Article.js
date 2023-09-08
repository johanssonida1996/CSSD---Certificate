import * as React from "react";
import PropTypes from "prop-types";
import style from './Article.scss';

const Article = ({ article }) => {
  return (
    <article className="env-card env-block env-shadow">
          <header className="env-card__header">
           {article.image ? (
            <div
            className={style.image}
               dangerouslySetInnerHTML={{ __html: article.image }}
            ></div>
         ) : null}
          </header>
      <div className="env-card__body">
        <h2 className="env-card__text--title">
          <a className={style.title} href={article.URI}>
            {article.title}
          </a>
        </h2>
        <p className={`env-card__text ${style.description}`}>
            {article.description && article.description.length > 100
              ? `${article.description}`
              : article.description}
        </p>
        <p className="env-card__text">
            {article.content && article.content.length > 300
              ? `${article.content}`
              : article.content}
        </p>
      </div>
    </article>
  );
};

Article.propTypes = {
 article: PropTypes.object
};

export default Article;