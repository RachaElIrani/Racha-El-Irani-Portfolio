import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Bex from "./Bex/Bex";
import zaky from "./zaky/zaky";
import Myportfolio from "./Myportfolio/Myportfolio";
import ContactUs from "./App#ContactUs";
import services from "./App#services";
import work from "./App#work";
// import work from "./App#work";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/bex" component={Bex} />
        <Route exact path="/zaky" component={zaky} />
        <Route exact path="/mywebsite" component={Myportfolio} />
        <Route exact path="/ContactUs" component={ContactUs} />
        <Route exact path="/services" component={services} />
        <Route exact path="/work" component={work} />
      </Switch>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
