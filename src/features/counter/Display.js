import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Display = () => {
  const count = useSelector((state) => state.counter.count);
  return (
    <div className="display-container">
      <hr />
      <h3>Display Board</h3>
      <div className="display-board">
        <h1>{count}</h1>
      </div>
    </div>
  );
};

export default Display;
