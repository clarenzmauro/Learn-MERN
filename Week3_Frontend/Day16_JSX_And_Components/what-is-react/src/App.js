import logo from './logo.svg';
import React from 'react';
import './App.css';
import Greeting from './Greeting';

function App() {
  const username = "Clarenz";
  return (
    <div className="App">
      <header className="App-header">
        <h1>My First React App built by {username}</h1>
        <p>This is built with components and JSX.</p>
        <Greeting />
      </header>
    </div>
  );
}

export default App;
