// Min x is -65 and Max angle is 464
import React, { useState, useEffect } from "react";
import "./style.css";

const Marker = () => {
  const [currentPosition, setCurrentPosition] = useState(0);
  const [position, setPosition] = useState(200);

  useEffect(() => {
    const interval = setInterval(() => {
      const translation = currentPosition + (position - currentPosition) / 5;
      setCurrentPosition(translation);
    }, 30);
    return () => clearInterval(interval);
  }, [currentPosition, position]);

  const translation = Math.round(currentPosition * 90 / 464);

  return (
    <>
      <rect id="marker" transform={`translate(${translation})`} />
      <p id="position-reading">{`${translation} m`}</p>
    </>
  );
};

export default Marker;
