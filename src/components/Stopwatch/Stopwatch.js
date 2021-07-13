import React, { useState, useEffect, useRef } from "react";

import updateStopwatch from "../../utils/updateStopwatch";
import Button from "../Button/Button";

const styles = {
  stopwatchface: {
    fontSize: 64,
    fontWeight: 500,
  },
};

export default function Stopwatch() {
  const [time, setTime] = useState(0);

  const intervalId = useRef();

  useEffect(() => {
    return () => {
      stop();
    };
  }, []);

  const start = () => {
    intervalId.current = setInterval(() => {
      setTime(Date.now());
    }, 1000);
  };

  const stop = () => {
    clearInterval(intervalId.current);
    setTime(0);
  };

  const wait = () => {
    setTimeout(() => {
      clearTimeout(intervalId.current);
    }, 300);
  };

  const reset = () => {
    stop();
    start();
  };

  return (
    <>
      <h1 style={styles.stopwatchface}>Stopwatch: {updateStopwatch(time)}</h1>

      <Button name="Start" type="button" onClick={start} />
      <Button name="Stop" type="button" onClick={stop} />
      <Button name="Wait" type="button" onClick={wait} />
      <Button name="Reset" type="button" onClick={reset} />
    </>
  );
}
