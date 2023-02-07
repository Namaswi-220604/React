// Min angle is zero and Max angle is 245
import React, { useState, useEffect } from "react";
import "./style.css";

const Needle = () => {
  const [currentAngle, setCurrentAngle] = useState(0);
  const [angle, setAngle] = useState(122);

  useEffect(() => {
    const interval = setInterval(() => {
      const rotation = currentAngle + (angle - currentAngle) / 10;
      setCurrentAngle(rotation);
    }, 30);
    return () => clearInterval(interval);
  }, [currentAngle, angle]);

  const rotation = Math.round(currentAngle / 245 * 180);

  return (
    <>
      <rect id="needle" transform={`rotate(${currentAngle} 159 150)`} />
      <p id="velocity-reading">{`${rotation} m/s`}</p>
    </>
  );
};

export default Needle;
