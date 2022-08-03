import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };
  return (
    <div className="counter-container">
      <div className="counter-wrapper">
        <div
          style={{
            width: "120px",
            borderRadius: "8px",
          }}
        >
          <p>{count}</p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "0 14px",
          }}
        >
          <button className="increment-btn" onClick={increment}>
            +
          </button>

          <button className="decrement-btn" onClick={decrement}>
            -
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
