import React, { useEffect, useReducer, useState } from "react";
import TodoList from "./TodoList";

const reducer = (todos, action) => {
  switch (action.type) {
    case "add_Todo":
      return [...todos, newTodo(action.payload.inputValue)];
    case "mark_Todo":
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      });
    case "delete_Todo":
      return todos.filter((todo) => todo.id !== action.payload.id);
    default:
      return todos;
  }
};

const newTodo = (value) => {
  return { id: Date.now(), inputValue: value, complete: false };
};
const Todo = () => {
  const initialState = JSON.parse(localStorage.getItem("todos")) || [];
  const [todos, dispatch] = useReducer(reducer, initialState);
  const [inputValue, setInputValue] = useState("");
  // const [storedTodo, setStoredTodo] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(inputValue);
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));

    // console.log(todos);
  }, [todos]);
  return (
    <div>
      <h2>Todo App</h2>
      <div className="todo-container">
        <form className="todo-form" onSubmit={handleSubmit}>
          <input
            className="todo-input"
            placeholder="Enter a Todo..."
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button
            className="todo-button"
            onClick={() =>
              dispatch({
                type: "add_Todo",
                payload: { inputValue: inputValue },
              })
            }
          >
            Add
          </button>
        </form>

        {todos.map((todo) => {
          return (
            <TodoList
              key={todo.id}
              // storedTodo={storedTodo}
              todo={todo}
              dispatch={dispatch}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Todo;
