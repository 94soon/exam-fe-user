import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import App from "../pages/Home";
import Job from "../components/Jobs";
import NotFound404 from "../pages/NotFound404";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/jobs/:id" component={Job} />
        <Route exact path="/not-found-404" component={NotFound404} />
        <Redirect to="/not-found-404" />
      </Switch>
    </Router>
  );
}
