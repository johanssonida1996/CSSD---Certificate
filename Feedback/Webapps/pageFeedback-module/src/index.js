import * as React from "react";
import { renderToString } from "react-dom/server";
import router from "@sitevision/api/common/router";
import App from "./components/App";
import appData from '@sitevision/api/server/appData';
import portletContextUtil from "@sitevision/api/server/PortletContextUtil";
import resourceLocatorUtil from "@sitevision/api/server/ResourceLocatorUtil";
import systemUserUtil from "@sitevision/api/server/SystemUserUtil";
import properties from "@sitevision/api/server/Properties";
import storage from "@sitevision/api/server/storage";
import i18n from "@sitevision/api/common/i18n";
import versionUtil from "@sitevision/api/server/VersionUtil";
const feedbackStore = storage.getCollectionDataStore("feedback");


import { sendEmail } from './api/api';

router.use((req, res, next) => {
  if(systemUserUtil.isAnonymous()) {
    if(req.xhr){
      return res.status(401);
    }
    return;
  }

  next();
});

router.get("/", (req, res) => {

  if(versionUtil.getCurrentVersion() != versionUtil.ONLINE_VERSION) {    
    return res.send(
      `<span class="env-text env-text--error">
    ${i18n.get("offlineMode")}
    </span>`
    );
  }

  const html = renderToString(<App />);
  res.agnosticRender(html, {});
  
});

router.post("/feedback", (req, res) => { 
  let { name, feedback,  } = req.params;
  const isOutdated = false;
  let page = portletContextUtil.getCurrentPage().getIdentifier();
  const pageNode = resourceLocatorUtil.getNodeByIdentifier(page);
  const pageName = properties.get(pageNode, 'displayName');
  const pageData = properties.get(pageNode, pageName, "URI");

  const post = feedbackStore.add({
    page: page,
    name,
    feedback,
    isOutdated
  });

  const mail = {
    email: appData.get('email'),
    name: name,
    feedback: feedback,
    pageName: pageName,
    pageURL: pageData.Url,
};

  if (post) {
    try {
      sendEmail(mail);
    } catch (error) {
      return res.status(400).send(`Failed to send mail, ${error}`);
    }
    return res.status(204).send("Feedback successfully stored.");
  } else {
    return res.status(400).send("Failed to store feedback.");
  }
});
