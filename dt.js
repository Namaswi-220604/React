import React, { useState, useEffect } from 'react';
import "./style.css";
const monthList = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formattedTime = `${('0' + time.getHours()).slice(-2)}:${('0' + time.getMinutes()).slice(-2)}:${('0' + time.getSeconds()).slice(-2)}`;
  const formattedDate = `${('0' + time.getDate()).slice(-2)} ${monthList[time.getMonth()]} '${(time.getFullYear() % 100).toString().padStart(2, '0')}`;

  return (
    <>
      <div id="time">{formattedTime}</div>
      <div id="date">{formattedDate}</div>
    </>
  );
};

export default Clock;
