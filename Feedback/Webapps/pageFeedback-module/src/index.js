import * as React from "react";
import { renderToString } from "react-dom/server";
import router from "@sitevision/api/common/router";
import App from "./components/App";
import portletContextUtil from "@sitevision/api/server/PortletContextUtil";
import storage from "@sitevision/api/server/storage";
const feedbackStore = storage.getCollectionDataStore("feedback");
import restAppInvokerFactory from "@sitevision/api/server/RestAppInvokerFactory";
const restApp = restAppInvokerFactory.fromPath("rest-api/Task2-RestApp");

router.get("/", (req, res) => {

  const html = renderToString(<App />);
  res.agnosticRender(html, {});
  
});

router.post("/feedback", (req, res) => { 
  const { name, feedback,  } = req.params;

  const post = feedbackStore.add({
    page: portletContextUtil.getCurrentPage().getIdentifier(),
    name,
    feedback,

  });

  restApp.get("/test")

  if (post) {
    return res.status(204).send("Feedback successfully stored.");
  } else {
    return res.status(400).send("Failed to store feedback.");
  }
});
