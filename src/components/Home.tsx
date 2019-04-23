import React from 'react';
import logo from '../logo.svg';
import Navigation from './Navigation';

const Home = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Welcome to Electron+React Starter
      </p>

      <Navigation />
    </header>
  </div>
);


export default Home