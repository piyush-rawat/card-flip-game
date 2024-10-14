import React from "react";
import { useState } from "react";
import ReactCountdown from "react-countdown";

const renderer = ({
  minutes,
  seconds,
  showMinute,
}: {
  minutes: number;
  seconds: number;
  showMinute: boolean;
}) => {
  return (
    <span>
      {showMinute && <>{minutes} minutes</>} {seconds} seconds
    </span>
  );
};

type CountdownType = {
  ref: any;
  time: number;
  onComplete: () => void;
  autoStart: boolean;
  showMinute: boolean;
};

const Countdown = (
  { time, onComplete, autoStart, showMinute }: CountdownType,
  ref: any
) => {
  const [t, setT] = useState(Date.now() + time);

  return (
    <ReactCountdown
      ref={ref}
      date={t}
      renderer={({ minutes, seconds }) =>
        renderer({ minutes, seconds, showMinute })
      }
      onComplete={onComplete}
      autoStart={autoStart}
    />
  );
};

export default React.forwardRef(Countdown);
