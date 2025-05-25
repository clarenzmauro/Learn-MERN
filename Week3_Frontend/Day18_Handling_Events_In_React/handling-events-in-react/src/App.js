import React from 'react';
import './App.css';
import Button from './Button';
import InlineHandler from './InlineHandler';
import EventObject from './EventObject';
import ControlledForm from './ControlledForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Event Handling</h1>

        <section>
          <h2>Button Component</h2>
          <Button />
          <hr />
          <h2>Inline Handler</h2>
          <InlineHandler />
          <hr />
          <h2>Event Object</h2>
          <EventObject />
          <hr />
          <h2>Controlled Form</h2>
          <ControlledForm />
        </section>

      </header>
    </div>
  );
}

export default App;
