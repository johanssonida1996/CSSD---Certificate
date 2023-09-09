import router from "@sitevision/api/common/router";
import * as React from "react";
import { renderToString } from "react-dom/server";
import App from "./components/App";
import { getFeedback } from "./utils/feedbackHelper";
import logUtil from "@sitevision/api/server/LogUtil";
import i18n from "@sitevision/api/common/i18n";
import roleUtil from '@sitevision/api/server/RoleUtil';
import portletContextUtil from "@sitevision/api/server/PortletContextUtil";

router.use((req, res, next) => {

  const currentUser = portletContextUtil.getCurrentUser();
  const currentPage = portletContextUtil.getCurrentPage();
  const roleMatcherBuilder = roleUtil.getRoleMatcherBuilder();

  roleMatcherBuilder.setUser(currentUser);
  roleMatcherBuilder.addRole(roleUtil.getRoleByName('Administrator'));

  const roleMatcher = roleMatcherBuilder.build();
  const currentUserHasRequiredRole = roleMatcher.matchesAny(currentPage);

  logUtil.info(JSON.stringify(currentUserHasRequiredRole));

  if(!currentUserHasRequiredRole) {
    if(req.xhr){
      return res.status(401);
    }
    return;
  }

  next();
});

router.get("/", (req, res) => {

  const feedbacks = getFeedback();

  if(!feedbacks){
    return res.send(
      `<span class="env-badge env-badge--danger">
    ${i18n.get("configureModule")}
    </span>`
    );
  }

  res.agnosticRender(renderToString(<App feedbacks={feedbacks} />), {
    feedbacks,
  });
});

router.get("/feedbacks", (req, res) => {
  res.json({ feedbacks: getFeedback() });
});

