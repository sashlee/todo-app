import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  reset,
  incrementByAmount,
  decrementByAmount,
} from "./counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(0);
  return (
    <>
      <h2>Counter App</h2>
      <div style={{ display: "flex", paddingBottom: "40px" }}>
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
              <button
                className="increment-btn"
                onClick={() => dispatch(increment())}
              >
                +
              </button>

              <button
                className="decrement-btn"
                onClick={() => dispatch(decrement())}
              >
                -
              </button>
            </div>
          </div>
          <button className="reset-btn" onClick={() => dispatch(reset())}>
            Reset
          </button>
        </div>
        <hr />
        <div className="amount-container">
          {/* <h3>Increment By Amount</h3> */}
          <input
            className="amount-input"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <button
            className="increment-amount-btn"
            onClick={() => dispatch(incrementByAmount(Number(amount)))}
          >
            ↑
          </button>
          <button
            className="decrement-amount-btn"
            onClick={() => dispatch(decrementByAmount(Number(amount)))}
          >
            ↓
          </button>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Counter;
