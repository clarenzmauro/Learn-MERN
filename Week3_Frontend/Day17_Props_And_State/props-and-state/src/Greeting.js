// src/Greeting.js
import React from 'react';

function Greeting(data) {
  // we can also do Greeting({name="", message=""})

  const displayName = data.name ? data.name : "Guest";
  const displayMessage = data.message ? data.message : "What's up?";

  return (
    <div>
      <p>Hello, {displayName}!</p>
      <p>{displayMessage}</p>
    </div>
  );
}

export default Greeting;