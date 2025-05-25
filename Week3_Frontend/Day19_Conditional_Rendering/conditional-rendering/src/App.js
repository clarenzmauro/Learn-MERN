import React, { useState } from 'react';
import './App.css';
import LoginStatus from './LoginStatus';
import TernaryLoginStatus from './TernaryLoginStatus';
import NotificationBadge from './NotificationBadge';
import SecretContent from './SecretContent';

function App() {
  const [showSecret, setShowSecret] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Conditional Rendering</h1>

        <section>
          <LoginStatus />
        </section>
        <hr />

        <section>
          <TernaryLoginStatus />
        </section>
        <hr />

        <section>
          <NotificationBadge />
        </section>
        <hr />

        <section>
          <h2>Conditional Rendering with null</h2>
          <button onClick={() => setShowSecret(!showSecret)}>
            {showSecret ? 'Hide Secret' : 'Show Secret'} Secret Content
          </button>
          <SecretContent show={showSecret} />
        </section>
        <hr />

      </header>
    </div>
  );
}

export default App;
