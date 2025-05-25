import React from 'react';
import './App.css';
import Greeting from './Greeting';
import Counter from './Counter';

function App() {
  const user1 = "Clarenz";
  const user2 = "Ally"

  return (
    <div className="App">
      <header className="App-header">
        <h1>My First React App built by {user1}</h1>
        <p>This is built with components and JSX.</p>

        {/* app.js is passing name and message to Greeting.js */}
        <Greeting name={user1} message="Keep learning React!" /> 
        <Greeting name={user2} message="Keep learning Psych!" />
        <Greeting />

        <hr />  

        <Counter />

      </header>
    </div>
  );
}

export default App;
