import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const TWITTER_SECRET_KEY='aaaaa12321321321asdasdasd231231232sdasaaa';
  const aws='qwewqewewqeqweqweqweqwewqeqweqw';
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
