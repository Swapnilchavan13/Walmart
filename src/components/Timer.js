import React, { useRef, useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [seconds, setSeconds] = useState(10); // Initial number of seconds
  const intervalRef = useRef(null); // Ref to hold the interval reference

  useEffect(() => {
    // Start the countdown timer
    intervalRef.current = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);

    // Clean up the interval on component unmount
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []); // Empty dependency array ensures the effect runs only once on mount

  // Stop the timer when seconds reach zero
  useEffect(() => {
    if (seconds === 0) {
      clearInterval(intervalRef.current);
    }
  }, [seconds]);

  return (
    <div>
      <h2>Countdown Timer: {seconds} seconds</h2>
    </div>
  );
};

export default CountdownTimer;
