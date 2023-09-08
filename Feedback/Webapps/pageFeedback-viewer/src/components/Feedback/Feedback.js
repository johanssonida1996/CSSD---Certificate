import * as React from "react";
import PropTypes from "prop-types";
import i18n from "@sitevision/api/common/i18n";


const check = restApp.get()

const Feedback = ({ name, feedback, pageName, pageURI }) => {
  return (
    <article className="env-card env-block env-shadow">
      <div className="env-card__body">
        <p className="env-card__text env-card__text--title">
          {i18n.get("feedbackFrom", name)}
          {pageURI && pageName && (
            <>
              {i18n.get("for")}
              <a className="env-link" href={pageURI}>
                {pageName}
              </a>
            </>
          )}
        </p>
        <br />
        <p className="env-card__text" aria-hidden>
          {feedback}
        </p>
        <p></p>
      </div>
    </article>
  );
};

Feedback.propTypes = {
  page: PropTypes.string,
  name: PropTypes.string,
  feedback: PropTypes.string,
};

export default Feedback;