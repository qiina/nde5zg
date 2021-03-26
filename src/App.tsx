import React, { Component } from 'react';
import './App.css';
import Index from './components/pages/Index';
import Second from './components/pages/Second';
import Third from './components/pages/Third';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Navbar from './components/pages/parts/Navbar';

const App = () => (
  <div className="App">
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Index} />
        <Route path="/second" component={Second} />
        <Route path="/third" component={Third} />
      </Switch>
    </BrowserRouter>
  </div>
);

export default App;
