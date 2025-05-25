// src/App.js
import React, { useState } from 'react';
import './App.css';
import DataFetcherOnce from './DataFetcherOnce';
import DocumentTitleUpdater from './DocumentTitleUpdater';
import TimerComponent from './TimerComponent';

function App() {
  const [showTimer, setShowTimer] = useState(true);

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Hooks: useState & useEffect</h1>

        <section>
          <DataFetcherOnce />
        </section>
        <hr/>
        <section>
          <DocumentTitleUpdater />
        </section>
        <hr/>
        <section>
          <button onClick={() => setShowTimer(!showTimer)}>
            {showTimer ? 'Hide' : 'Show'} Timer
          </button>
          {showTimer && <TimerComponent />}
        </section>

      </header>
    </div>
  );
}

export default App;