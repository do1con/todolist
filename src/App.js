import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainMenu from './components/MainMenu';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          update <code>src/App.js</code> and save to reload.\
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
      <MainMenu />
    </div>
  );
}

export default App;
