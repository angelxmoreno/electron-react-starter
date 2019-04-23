import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

import CounterPage from './components/Counter'
import HomePage from './components/Home'
import NotFound from './components/NotFound'

export default () => (
  <section>
    <Router>
      <Route path="/counter" exact component={CounterPage} />
      <Route path="/" exact component={HomePage} />
      <Route component={NotFound} />
    </Router>
  </section>
)