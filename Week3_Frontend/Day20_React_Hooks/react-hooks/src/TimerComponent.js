import React, { useState, useEffect } from 'react';

function TimerComponent() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    console.log('Timer effect setup');
    const intervalId = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1);
      console.log('Timer tick');
    }, 1000);

    return () => {
      console.log('Timer effect cleanup: Clearing interval');
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      <h2>Timer</h2>
      <p>Seconds elapsed: {seconds}</p>
    </div>
  );
}
export default TimerComponent;