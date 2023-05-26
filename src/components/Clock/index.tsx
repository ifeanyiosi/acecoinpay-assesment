import React, { useState, useEffect } from "react";

interface ClockProps {
  format?: "12" | "24";
}

const Clock: React.FC<ClockProps> = ({ format = "12" }) => {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentTime = new Date();
      let hours = currentTime.getHours();
      let minutes = currentTime.getMinutes();
      let seconds = currentTime.getSeconds();

      if (format === "12") {
        const period = hours >= 12 ? "PM" : "AM";
        hours = hours % 12 || 12;
        setTime(`${hours}:${padZero(minutes)}:${padZero(seconds)} ${period}`);
      } else {
        setTime(`${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`);
      }
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [format]);

  const padZero = (value: number): string => {
    return value < 10 ? `0${value}` : `${value}`;
  };

  return <div>{time}</div>;
};

export default Clock;
