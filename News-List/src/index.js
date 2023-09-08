import * as React from "react";
import { renderToString } from "react-dom/server";
import router from "@sitevision/api/common/router";
import appData from "@sitevision/api/server/appData";
import ArchiveList from './components/App';


import {
  getArticlesInArchive,
} from './utils/articleHelper';

router.get("/", (req, res) => {

  let archive = appData.getNode('archive'),
  articles = []
  let articleCount = appData.get('articleCount');

  articles = getArticlesInArchive(archive);

  res.agnosticRender(renderToString(<ArchiveList articles={articles} articleCount={articleCount} />), {
    articles,
    articleCount
  });
});



