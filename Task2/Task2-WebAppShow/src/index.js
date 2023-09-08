import router from "@sitevision/api/common/router";
import * as React from "react";
import { renderToString } from "react-dom/server";
import App from "./components/App";
import { getFeedback } from "./utils/feedbackHelper";
import logUtil from "@sitevision/api/server/LogUtil";

router.get("/", (req, res) => {
  const feedbacks = getFeedback();
  res.agnosticRender(renderToString(<App feedbacks={feedbacks} />), {
    feedbacks,
  });
});

router.get("/feedbacks", (req, res) => {
  res.json({ feedbacks: getFeedback() });
});

