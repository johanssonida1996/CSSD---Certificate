import * as React from "react";
import PropTypes from "prop-types";
import FeedbackfromFile from "../Feedback";
import requester from "@sitevision/api/client/requester";
import router from "@sitevision/api/common/router";
import events from "@sitevision/api/common/events";

const App = ({ feedbacks }) => {
  const [pageFeedback, setFeedback] = React.useState(feedbacks);

  React.useEffect(() => {
    events.on("pageFeedback:reload", () => {
      requester
        .doGet({ url: router.getStandaloneUrl("/feedbacks") })
        .then((response) => setFeedback(response.feedbacks));
    });
  });

  return (
    <div className="env-cardholder-grid">
      {pageFeedback.map((feedback) => (
        <FeedbackfromFile key={feedback.id} {...feedback} isOutDated={feedback.isOutdated} />
      ))}
    </div>
  );
};

App.propTypes = {
  feedbacks: PropTypes.array,
};

export default App;
