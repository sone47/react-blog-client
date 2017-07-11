import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, Redirect, IndexRoute, browserHistory } from 'react-router';
import createMemoryHistory from 'history/createMemoryHistory';

import Frame from './components/Frame';
import Home from './containers/Home';
import Topic from './containers/Topic';
import About from './containers/About';
import Message from './containers/Message';
import Admin from './containers/Admin';

import 'normalize.css';
import './containers/global/reset.css';
import './containers/global/base.css';

const Blog = (history) => {
  return (
    <Router history={browserHistory}>
      <Route path="/admin" component={Admin}/>
      <Route path="/" component={Frame}>
        <IndexRoute component={Home}/>
        <Route path="/topic" component={Topic}/>
        <Route path="/about" component={About}/>
        <Route path="/message" component={Message}/>
      </Route>
    </Router>
  );
};

export default Blog;