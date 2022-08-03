import React, { useState } from "react";
import { IoIosCheckboxOutline } from "react-icons/io";
import { AiOutlineCloseSquare } from "react-icons/ai";
import { MdDeleteOutline } from "react-icons/md";
import { RiEditBoxLine } from "react-icons/ri";
const TodoList = ({ todo, dispatch }) => {
  const [editMode, setEditMode] = useState(false);
  const [editContent, setEditContent] = useState(todo.inputValue);

  return (
    <div className="todo-list">
      {/* <div className="todo-list-container">
        {" "}
        <span>{todo.inputValue}</span>
      </div> */}
      {editMode ? (
        <form
          className="todo-list-container"
          onSubmit={() => setEditMode(false)}
        >
          <input
            type="text"
            className="edit-input"
            value={editContent}
            onChange={(e) => setEditContent(e.target.value)}
          ></input>
        </form>
      ) : (
        <div className="todo-list-container">
          {" "}
          <span>{editContent}</span>{" "}
        </div>
      )}

      <div className="icons-container">
        {todo.complete ? (
          <button
            className="todo-list-container-btn"
            value="complete"
            onClick={() =>
              dispatch({ type: "mark_Todo", payload: { id: todo.id } })
            }
          >
            <IoIosCheckboxOutline color="green" size={25} />
            {/* {todo.complete ? "Completed" : "Not Completed"} */}
          </button>
        ) : (
          <button
            value="complete"
            className="todo-list-container-btn"
            onClick={() =>
              dispatch({ type: "mark_Todo", payload: { id: todo.id } })
            }
          >
            <AiOutlineCloseSquare color="red" size={25} />
          </button>
        )}

        <button
          className="todo-list-container-btn"
          onClick={() => setEditMode(true)}
        >
          <RiEditBoxLine size={25} color="white" />
        </button>

        <button
          className="todo-list-container-btn"
          onClick={() =>
            dispatch({ type: "delete_Todo", payload: { id: todo.id } })
          }
        >
          <MdDeleteOutline size={25} color="white" />
        </button>
      </div>
    </div>
  );
};

export default TodoList;
