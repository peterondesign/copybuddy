import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import CopybuddyHome from "./copybuddy_home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AllCopies from "./copybuddy_allcopies";

import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/" component={CopybuddyHome} />
        <Route path="/all" component={AllCopies} />
        {/* <CopybuddyHome /> */}
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
