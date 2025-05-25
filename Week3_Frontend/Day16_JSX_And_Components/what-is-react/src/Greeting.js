// src/Greeting.js
import React from 'react';

function Greeting() {
  const timeOfDay = new Date().getHours() < 12 ? "morning" : "afternoon/evening";
  return (
    <p>Good {timeOfDay}! Hope you're having a great day learning React.</p>
  );
}

export default Greeting;