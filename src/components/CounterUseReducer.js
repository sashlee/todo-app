import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action) {
    case "increment": {
      return { count: state.count + 1 };
    }
    case "decrement": {
      return { count: state.count - 1 };
    }
    case "reset": {
      return { count: 0 };
    }
    default:
      return state;
  }
};

const CounterUseReducer = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <div>
      <h2>Using Reducer</h2>
      <div className="counter-container">
        <div className="counter-wrapper">
          <div
            style={{
              width: "120px",
              borderRadius: "8px",
            }}
          >
            <p>{state.count}</p>
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
              onClick={() => dispatch("increment")}
            >
              +
            </button>

            <button
              className="decrement-btn"
              onClick={() => dispatch("decrement")}
            >
              -
            </button>
          </div>
        </div>
        <button className="reset-btn" onClick={() => dispatch("reset")}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default CounterUseReducer;
