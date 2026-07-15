import React, { useEffect, useState } from "react";

const Timer = ({ onTimeUp, resetKey }) => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    setSeconds(0);
  }, [resetKey]);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => {
        if (prev >= 59) {
          clearInterval(interval);
          onTimeUp();
          return 60;
        }
        return prev + 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [onTimeUp, resetKey]);

  const minutes = String(Math.floor(seconds / 60)).padStart(2, "0");
  const secs = String(seconds % 60).padStart(2, "0");

  return (
    <h1 className="font-bold text-3xl text-white">
      {minutes}:{secs}
    </h1>
  );
};

export default Timer;