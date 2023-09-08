import * as React from "react";
import ReactDOM from "react-dom";
import ArticleList from "./components/App";

export default (initialState, el) => {
  ReactDOM.hydrate(
    <ArticleList {...initialState} />,
    el
  );
};
