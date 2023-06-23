import React from "react";
import { useDispatch } from "react-redux";
import { toggleTodo } from "../redux/ducks/todos";

function TodoItem({ todo }) {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTodo(todo.id));
  };

  return (
    <div>
      <h3>{todo.title}</h3>
      <p>{todo.content}</p>
      <button onClick={handleToggle}>{todo.completed ? "취소" : "완료"}</button>
    </div>
  );
}

export default TodoItem;
