
import React, { useState, useEffect } from 'react';

function DocumentTitleUpdater() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('Clarenz');

  useEffect(() => {
    console.log(`Effect for count ran. Updating title to: Page Clicks: ${count}`);
    document.title = `Page Clicks: ${count}`;
  }, [count]);

  useEffect(() => {
    console.log(`Effect for name ran. Hello ${name}`);
  }, [name]);

  return (
    <div>
      <h2>Document Title Updater</h2>
      <p>You clicked {count} times.</p>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>
        Increment Count (Updates Title)
      </button>
      <br />
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Change name"
      />
      <p>Current Name: {name}</p>
    </div>
  );
}
export default DocumentTitleUpdater;