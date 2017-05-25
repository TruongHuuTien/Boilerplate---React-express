import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route, Link, IndexLink } from 'react-router-dom';
import Header from './components/Header.jsx';
import HomePage from './components/HomePage.jsx';
import SignUpPage from './components/SignUpPage.jsx';
import LoginPage from './components/LoginPage.jsx';

ReactDom.render(
  <BrowserRouter>
    <div>
      <Route component={Header} />
      <Route exact path="/" component={HomePage}/>
      <Route path="/signup" component={SignUpPage}/>
      <Route path="/login" component={LoginPage}/>
    </div>
  </BrowserRouter>,
  document.getElementById('react-app')
);
