import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import CounterPage from "./components/Counter";
import HomePage from "./components/Home";
import NotFound from "./components/NotFound";
import WeatherPage from "./components/Weather";
import BlogPage from "./components/Blog";
import PostPage from "./components/Post";

export default () => (
  <section>
    <Router>
      <Switch>
        <Route path="/post/:id" exact component={PostPage} />
        <Route path="/blog" exact component={BlogPage} />
        <Route path="/weather" exact component={WeatherPage} />
        <Route path="/counter" exact component={CounterPage} />
        <Route path="/" exact component={HomePage} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  </section>
);
